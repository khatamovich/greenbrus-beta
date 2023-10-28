import styled from "styled-components";

const StyledAbout = styled.section`
  h1 {
    font-size: 5rem;
    color: var(--color-accent-primary);
    margin-bottom: 0.5em;

    @media (width <= 1070px) {
      font-size: clamp(3.2rem, 3vw, 5rem);
    }
  }

  p {
    margin-bottom: 1em;
  }
`;

export default StyledAbout;
