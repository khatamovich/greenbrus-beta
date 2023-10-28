import styled from "styled-components";

const StyledLayout = styled.div`
  height: inherit;
  display: flex;
  margin: 0 auto;

  main {
    width: 75%;

    @media (width <= 1070px) {
      width: 100%;
      padding-top: 75px;
    }
  }
`;

export const Header = styled.header`
  background: #fff;
  height: 75px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  padding: 0.75em 5%;

  .logo > div {
    border: none;

    h3 {
      font-size: 2.6rem;
    }

    p {
      font-size: 1.4rem;
    }
  }

  .hamburger {
    color: var(--color-accent-primary);
  }

  @media (width >= 1070px) {
    display: none;
  }
`;

export const Sidebar = styled.aside`
  width: 25%;
  max-width: 32rem;
  border-right: 1px solid #eee;
  padding: 1.75em;
  background: #fff;
  height: 100vh;
  position: sticky;
  top: 0;

  @media (width <= 1070px) {
    position: absolute;
    left: -100%;
    max-width: 32rem;
    width: 70%;
    transition: 300ms;

    &.active {
      position: fixed;
      left: 0;
      z-index: 999999;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 3em;
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;

  @media (width <= 1070px) {
    padding: 2em 0;
  }
`;

export const Navigation = styled.nav`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  margin-top: 2.75em;

  h3 {
    font-size: 2.4rem;
    color: var(--color-accent-primary);
  }

  .dropdown-link {
    position: relative;

    svg {
      margin-left: 0.3em;
      margin-right: 0;
      color: var(--color-accent-primary);
    }

    &:hover > div {
      visibility: visible;
      opacity: 1;
      transform: none;
    }
  }

  a,
  a:visited,
  a:active,
  .dropdown-link {
    border-bottom: 1px solid #eee;
    padding-bottom: 0.75em;
    transition: 300ms;
    font-weight: 500;
    color: #555;
    cursor: pointer;

    &:hover {
      color: var(--color-accent-primary);
    }

    &:last-child {
      border-bottom: 0;
      padding-bottom: 0;
    }

    svg {
      font-size: 2rem;
      vertical-align: middle;
      transform: translateY(-2px);
      margin-right: 0.5em;
    }
  }
`;

export const Dropdown = styled.div`
  padding: 2em;
  width: 100%;
  position: absolute;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  left: 25%;
  top: 95%;
  border: 1px solid #eee;
  opacity: 0;
  visibility: hidden;
  transition: 300ms 300ms;
  transform: translateY(-3%);
  border-radius: 12px;
  z-index: 999;
`;

export default StyledLayout;
