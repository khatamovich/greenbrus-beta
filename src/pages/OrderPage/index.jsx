import { useEffect } from "react";
import OrderForm from "../../components/OrderForm";

const OrderPage = () => {
  useEffect(() => {
    document.title = "GreenBrus | Оформление заказа";
  }, []);

  return (
    <section>
      <h2>Оформление заказа</h2>

      <OrderForm />
    </section>
  );
};

export default OrderPage;
