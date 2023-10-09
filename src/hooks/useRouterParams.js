import { useSearchParams } from "react-router-dom";

export const useRouterParams = (query) => {
   const [searchParams] = useSearchParams();

   return searchParams.get(query)?.toLowerCase();
};
