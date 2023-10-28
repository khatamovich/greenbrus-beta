import { useState } from "react";

export const useSearch = () => {
  const [result, setResult] = useState([]);

  const handleSearch = (callback) => {
    setResult(callback());
    console.log("Everything is fine");
  };

  return { result, handleSearch };
};
