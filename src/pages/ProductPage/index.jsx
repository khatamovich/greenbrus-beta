import Tabs from "../../components/shared/Tabs";
import ProductDetails from "../../components/ProductDetails";
import ProductPhotos from "../../components/ProductPhotos";
import { useState, useEffect } from "react";

const ProductPage = ({ productType, product }) => {
  const [activeTab, setActiveTab] = useState("product-details");

  useEffect(() => {
    setActiveTab("product-details");
  }, [productType]);

  if (!product) return null;

  return (
    <>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab?.includes("product-details") && (
        <ProductDetails product={product} />
      )}

      {activeTab?.includes("product-photos") && (
        <ProductPhotos product={product} />
      )}
    </>
  );
};

export default ProductPage;
