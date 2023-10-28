import styled from "styled-components";

const StyledProductDetails = styled.section`
  h3 {
    font-size: 2.4rem;
    margin-bottom: 0.25em;
    color: var(--color-accent-primary);
  }
`;

export const Description = styled.p`
  max-width: 90%;
  margin-bottom: 2em;
`;

export const Classification = styled.div`
  margin-top: 2em;

  ul {
    list-style: none;
    margin-bottom: 2em;

    li {
      padding: 1em 0;
      border-bottom: 1px solid #eee;
    }
  }
`;

export const Body = styled.article`
  margin-top: 2em;

  h3 {
    margin-top: 1.5em;
    margin-bottom: 0.9em;
  }

  p {
    max-width: initial;
    margin-bottom: 0.75em;
  }
`;

export default StyledProductDetails;
