import styled from "styled-components";

const StyledTabs = styled.div`
  margin-bottom: 3em;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  padding: 1.25em 2em;
  display: flex;
  align-items: center;
  gap: 3em;
  width: 90%;
  position: sticky;
  z-index: 999;
  top: 0;
  background-color: white;

  button {
    background-color: transparent;
    border: none;
    color: var(--color-paragraph);
    cursor: pointer;

    &:hover {
      color: var(--color-accent-primary);
    }

    &.active {
      font-weight: 700;
      color: var(--color-accent-primary);
    }
  }
`;

export const Buy = styled.button`
  margin-left: auto;
  background-color: transparent;
  border: none;
  color: var(--color-accent-primary);
  font-weight: 700;
  cursor: pointer;

  svg {
    vertical-align: middle;
    font-size: 2.4rem;
    margin-left: 0.25em;
  }
`;

export default StyledTabs;
