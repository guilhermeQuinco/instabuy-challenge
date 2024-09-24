import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import "./index.css";

export function ProductPage() {
  const params = useParams();

  const { product } = useProduct(`${params.slug}`);

  return (
    <div className="containerProduct">
      <img
        src={`https://ibassets.com.br/ib.item.image.large/l-${product?.images[0]}`}
        alt=""
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <h1>{product?.name}</h1>
          <h2 style={{ color: "gray" }}>{product?.brand}</h2>
          <h2 style={{ fontWeight: "normal" }}>
            <span style={{ fontWeight: "bold", fontSize: "2rem" }}>
              R${product?.prices[0].price}{" "}
            </span>
            /uni
          </h2>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            background: "#f9f9f9",
            padding: "5px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <button style={{ background: "#e9e9e9" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-trash-2"
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                <line x1="10" x2="10" y1="11" y2="17" />
                <line x1="14" x2="14" y1="11" y2="17" />
              </svg>
            </button>
            <button style={{ background: "#e9e9e9" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-plus"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
          </div>

          <button style={{ width: "100%", padding: "15px" }}>
            <span style={{ color: "#fff", fontSize: "1.2rem" }}>Adicionar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
