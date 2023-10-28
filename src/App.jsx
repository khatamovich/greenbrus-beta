import { Routes, Route } from "react-router-dom";

// Hooks
import { useRouterParams } from "./hooks/useRouterParams";
import { useProduct } from "./hooks/useProduct";

// Pages
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import OrderPage from "./pages/OrderPage";
import Layout from "./components/Layout";

// Data
import catalogNavData from "./db/catalogNav.json";

const App = () => {
  const productType = useRouterParams("type");
  const product = useProduct(productType);

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

        {/*Product Page*/}
        <Route
          path="/product"
          element={
            <ProductPage
              productType={productType}
              product={product && product}
            />
          }
        />

        {/*Product Page*/}
        <Route path="/product-order" element={<OrderPage />} />

        {/*Not found*/}
        <Route path="*" element={<h1>Page not found - 404</h1>} />
      </Routes>
    </Layout>
  );
};

export default App;
