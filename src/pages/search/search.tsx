import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";
import { ProductCard } from "../../components/product/productCard";
import PaginationRounded from "../../components/pagination/pagination";

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("q");
  const pageParam = searchParams.get("page");

  const { queryProducts, isLoading, setCurrentPage, currentPage } = useSearch({
    queryParam,
    pageParam,
  });

  const navigate = useNavigate();

  return (
    <div className="section">
      <div className="white-container" style={{ marginTop: "50px" }}>
        {" "}
        <div
          style={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {isLoading ? (
            <div className="loader"></div>
          ) : (
            queryProducts.map((item) => <ProductCard {...item} key={item.id} />)
          )}
        </div>
      </div>

      <span style={{ marginTop: "2rem" }}>página {pageParam}</span>
      <PaginationRounded />
      <div>
        <button
          onClick={() => {
            setCurrentPage((prev) => prev - 1);
            navigate(
              `/search?q=${queryParam}&page=${parseInt(pageParam!) - 1}`
            );
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
            navigate(
              `/search?q=${queryParam}&page=${parseInt(pageParam!) + 1}`
            );
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}
