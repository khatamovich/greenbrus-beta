import StyledOrderForm, {
  Label,
  Field,
  Message,
  Submit,
} from "./OrderForm.styled.js";

import { useState } from "react";

import emailjs from "@emailjs/browser";

const OrderForm = () => {
  const [sucess, setSuccess] = useState(false);
  const [order, setOrder] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_t3kynhp",
        "template_dzebfjg",
        { ...order },
        "GVL0H9Lo_0Y6Nb39B",
      )
      .then(
        (result) => {
          if (result.text.includes("OK")) {
            setSuccess(true);
            alert("Ваш заказ успешно оформлен.");
            setOrder({
              name: "",
              email: "",
              phone: "",
              message: "",
            });
          }
        },
        (error) => {
          setSuccess(false);
          alert(
            "Произошла неизвестная ошибка при оформлении заказа. Обратитесь к технической поддержке.",
          );
        },
      )
      .finally(() => {
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      });
  };

  return (
    <StyledOrderForm onSubmit={sendEmail}>
      <Label>
        Ваше имя
        <Field
          value={order.name}
          onChange={(event) =>
            setOrder((prevOrder) => ({
              ...prevOrder,
              name: event.target.value,
            }))
          }
          type="text"
        />
      </Label>

      <Label>
        Ваш - E-mail
        <Field
          value={order.email}
          onChange={(event) =>
            setOrder((prevOrder) => ({
              ...prevOrder,
              email: event.target.value,
            }))
          }
          type="email"
          required
          max="50"
        />
      </Label>

      <Label>
        Ваш номер телефона
        <Field
          value={order.phone}
          onChange={(event) =>
            setOrder((prevOrder) => ({
              ...prevOrder,
              phone: event.target.value,
            }))
          }
          type="text"
          required
        />
      </Label>

      <Label>
        Ваше сообщение / подробности
        <Message
          value={order.message}
          onChange={(event) =>
            setOrder((prevOrder) => ({
              ...prevOrder,
              message: event.target.value,
            }))
          }
          placeholder="50 х 70 x 3м  Первый сорт  ГОСТ  Хвоя  95 шт."
        />
      </Label>

      <Submit type="submit">Оформить заказ</Submit>
    </StyledOrderForm>
  );
};

export default OrderForm;
