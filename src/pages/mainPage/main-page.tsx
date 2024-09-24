import { Products } from "./products/products";
import { useCollectionItems } from "../../hooks/useCollectionItems";

export function MainPage() {
  const { items } = useCollectionItems();

  return (
    <div>
      <Products products={items} />
    </div>
  );
}
