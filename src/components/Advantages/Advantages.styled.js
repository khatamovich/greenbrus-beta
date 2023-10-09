import styled from "styled-components";

const StyledAdvantages = styled.section`
   margin: 2em 0 0;

   h2 {
      margin-bottom: 1em;
   }
`;

export const Row = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
`;

export const Card = styled.div`
   width: 30%;
   gap: 3em;
   align-items: center;
   background-color: white;
   padding: 2em 1.5em;
   margin-bottom: 1em;
   box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
   border-radius: 12px;

   svg {
      color: var(--color-accent-primary);
      font-size: 5rem;
      margin-bottom: 2rem;
   }

   h3 {
      color: var(--color-accent-primary);
      margin-bottom: 0.5em;
      font-size: 1.8rem;
   }

   article {
      flex: 1;

      p {
         font-size: 1.6rem;
      }
   }
`;

export default StyledAdvantages;
