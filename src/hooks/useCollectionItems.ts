import { useEffect, useState } from "react";
import axios from "axios";

export function useCollectionItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.instabuy.com.br/apiv3/layout?subdomain=supermercado")
      .then((response) => {
        setItems(response.data.data.collection_items);
      });
  }, []);

  return { items };
}
