import { useState, useEffect } from "react";
import products from "../db/products.js";

export const useProduct = (query) => {
   const [product, setProduct] = useState({});

   useEffect(() => {
      const result = products.find(
         (product) => product.type.toLowerCase() === query
      );

      setProduct(result);

      return () => setProduct(null);
   }, [query]);

   return product;
};
