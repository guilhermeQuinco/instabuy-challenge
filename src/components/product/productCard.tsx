import { Link } from "react-router-dom";
import { IProduct } from "../../types/Product";
import "./index.css";

export function ProductCard({ name, prices, images, slug }: IProduct) {
  return (
    <Link to={`/p/${slug}`}>
      <div className="productCardContainer">
        <img
          src={`https://assets.instabuy.com.br/ib.item.image.small/s-${images[0]}`}
          alt=""
        />
        <p className="price">R${prices[0].price}</p>
        <span className="productTitle">{name}</span>
      </div>
    </Link>
  );
}
