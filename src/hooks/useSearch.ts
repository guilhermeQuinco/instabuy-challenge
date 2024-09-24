import { useEffect, useState } from "react";
import { IProduct } from "../types/Product";
import axios from "axios";

interface SearchProps {
  queryParam: string | null;
  pageParam: number | null;
}

export const useSearch = ({ queryParam, pageParam }: SearchProps) => {
  const [queryProducts, setQueryProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setCurrentPages] = useState();

  useEffect(() => {
    try {
      setIsLoading(true);
      axios
        .get(
          `https://api.instabuy.com.br/apiv3/search?search=${queryParam}&page=${pageParam}&N=${30}`
        )
        .then((response) => {
          setQueryProducts(response.data.data);
          setIsLoading(false);
          console.log(response.data);
        });
    } catch (error) {
      console.error(error);
    }
  }, [queryParam, currentPage]);

  return { queryProducts, isLoading, setCurrentPage, currentPage };
};
