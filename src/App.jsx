import { Routes, Route } from "react-router-dom";

// Hooks
import { useRouterParams } from "./hooks/useRouterParams";
import { useProduct } from "./hooks/useProduct";

// Pages
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Layout from "./components/Layout";

// Data
import catalogNavData from "./db/catalogNav.json";

const App = () => {
   const producType = useRouterParams("type");
   const product = useProduct(producType);

   return (
      <Layout
         catalogNav={{
            data: catalogNavData,
            title: "Каталог",
         }}
      >
         <Routes>
            {/* Home Page */}
            <Route path="/" element={<HomePage />} />
            <Route
               path="/product"
               element={<ProductPage product={product && product} />}
            />
         </Routes>
      </Layout>
   );
};

export default App;
