import styled from "styled-components";

const StyledContacts = styled.div`
  margin-top: 3em;
  box-shadow: 0 3px 3px -3px rgba(0, 0, 0, 0.152);
  padding: 1em;
  border: 1px solid #eee;
  border-radius: 15px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 2.4rem;
`;

export const PhoneNumber = styled.a`
  display: block;
  margin-bottom: 1em;
`;

export const Email = styled.a`
  display: block;
  margin-bottom: 1em;
`;

export const Address = styled.address`
  color: #777;
`;

export default StyledContacts;
