import { ProductCard } from "../../../components/product/productCard";
import { ICollectionItem, IProduct } from "../../../types/Product";
import "./index.css";

interface ProductProps {
  products: ICollectionItem[];
}

export function Products({ products }: ProductProps) {
  return (
    <div className="sectionProducts">
      {products.map((item) => (
        <div className="container">
          <h1>{item.title}</h1>
          <div className="containerProductsSection">
            {item.items.map((product) => (
              <ProductCard {...product} key={product.id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
