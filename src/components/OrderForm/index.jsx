import StyledOrderForm, {
  Label,
  Field,
  Message,
  Submit,
} from "./OrderForm.styled.js";

const OrderForm = () => {
  return (
    <StyledOrderForm>
      <Label>
        Ваше имя
        <Field type="text" />
      </Label>

      <Label>
        Ваш - E-mail
        <Field type="email" required max="50" />
      </Label>

      <Label>
        Ваш номер телефона
        <Field type="text" required />
      </Label>

      <Label>
        Ваше сообщение / подробности
        <Message placeholder="50 х 70 x 3м  Первый сорт  ГОСТ  Хвоя  95 шт." />
      </Label>

      <Submit type="submit">Оформить заказ</Submit>
    </StyledOrderForm>
  );
};

export default OrderForm;
