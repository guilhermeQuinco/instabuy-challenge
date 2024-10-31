import axios from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../types/Product";

export function useProduct(slug: string) {
  const [product, setProduct] = useState<IProduct>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      axios
        .get(
          `https://api.instabuy.com.br/apiv3/item?subdomain=supermercado&slug=${slug}`
        )
        .then((response) => {
          setProduct(response.data.data[0]);
          setIsLoading(false);
        });
    } catch (error) {}
  }, [slug]);

  return {
    product,
    isLoading,
  };
}
