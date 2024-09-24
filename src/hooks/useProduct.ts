import axios from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../types/Product";

export function useProduct(slug: string) {
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    axios
      .get(
        `https://api.instabuy.com.br/apiv3/item?subdomain=supermercado&slug=${slug}`
      )
      .then((response) => setProduct(response.data.data[0]));
  }, [slug]);

  return {
    product,
  };
}
