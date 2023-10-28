import styled from "styled-components";

const StyledOrderForm = styled.form`
  margin-top: 2em;
  padding-top: 2em;
  border-top: 1px solid #eee;
`;

export const Label = styled.label`
  margin-bottom: 2em;
  display: block;
`;
export const Field = styled.input`
  display: block;
  margin-top: 0.5em;
  font-size: 1.8rem;
  padding: 0.5em;
  border: 1px solid #eee;
`;
export const Message = styled.textarea`
  display: block;
  margin-top: 0.5em;
  width: 75%;
  min-height: 300px;
  padding: 1em;
  font-size: 1.8rem;
  border: 1px solid #eee;

  @media (width <= 1070px) {
    width: 100%;
  }
`;
export const Submit = styled.button`
  padding: 0.75em 1em;
  display: inline-block;
  font-weight: 700;
  background: var(--color-accent-primary);
  color: white;
  border-radius: 7px;
  border: none;
  transition: 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`;

export default StyledOrderForm;
