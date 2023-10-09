import Tabs from "../../components/shared/Tabs";
import ProductDetails from "../../components/ProductDetails";
import ProductPhotos from "../../components/ProductPhotos";
import { useState } from "react";

const ProductPage = ({ product }) => {
   const [activeTab, setActiveTab] = useState("product-details");

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
