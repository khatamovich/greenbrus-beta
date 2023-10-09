import styled from "styled-components";

const StyledProductPhotos = styled.section`
   img {
      display: block;
      max-width: 100%;
      object-fit: cover;
      transition: 300ms;
      cursor: pointer;

      &:hover {
         opacity: 0.75;
      }
   }
`;

export const Title = styled.h2`
   font-size: 3.2rem;
   color: var(--color-accent-primary);
   margin-bottom: 0.5em;
`;

export default StyledProductPhotos;
