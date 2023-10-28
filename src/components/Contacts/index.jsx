import StyledContacts, {
  Title,
  PhoneNumber,
  Email,
  Address,
} from "./Contacts.styled.js";

const Contacts = () => {
  return (
    <StyledContacts>
      <Title>Контакты</Title>

      <PhoneNumber>+7 (925) 043-04-09</PhoneNumber>

      <Email>info@greenbrus.ru</Email>

      <Address>
        Центральный федеральный округ, Москва, Новомосковский административный
        округ, поселение Мосрентген, улица Адмирала Корнилова, 66, стр. 21,
        Павильон ТВ 14-15-16
      </Address>
    </StyledContacts>
  );
};

export default Contacts;
