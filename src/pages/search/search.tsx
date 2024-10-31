import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";
import { ProductCard } from "../../components/product/productCard";
import Pagination from "@mui/material/Pagination";

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("q");
  const pageParam = searchParams.get("page");

  const { queryProducts, isLoading, setCurrentPage, query } = useSearch(
    `${queryParam}`,
    +`${pageParam}`
  );

  const navigate = useNavigate();

  return (
    <div className="section">
      <h2>Resultados para "{queryParam}"</h2>
      <span>{query} resultados encontrados</span>
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

      <Pagination
        count={Math.ceil(query! / queryProducts.length)}
        page={+pageParam!}
        variant="outlined"
        shape="rounded"
        size="large"
        onChange={(e, value) => {
          setCurrentPage(value);
          navigate(`/search?q=${queryParam}&page=${value}`);
        }}
      />
    </div>
  );
}
