import { useEffect, useState } from "react";
import { IProduct } from "../types/Product";
import axios from "axios";

interface SearchProps {
  queryParam: string | null;
  pageParam: number;
}

export const useSearch = (queryParam: string, pageParam: number) => {
  const [query, setQuery] = useState();
  const [queryProducts, setQueryProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    try {
      setIsLoading(true);
      axios
        .get(
          `https://api.instabuy.com.br/apiv3/search?subdomain=supermercado&search=${queryParam}&page=${pageParam}&N=${30}`
        )
        .then((response) => {
          setQueryProducts(response.data.data);
          setIsLoading(false);
          setQuery(response.data.count);
        });
    } catch (error) {
      console.error(error);
    }
  }, [queryParam, currentPage]);

  return { queryProducts, isLoading, setCurrentPage, currentPage, query };
};
