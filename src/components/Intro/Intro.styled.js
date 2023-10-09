import styled from "styled-components";

const StyledIntro = styled.section`
   padding: 0 1em;
`;

export const Row = styled.div`
   display: flex;
   align-items: center;
   gap: 3em;
   margin-bottom: 3em;

   &:last-of-type {
      margin-bottom: 0;
   }

   p {
      margin-bottom: 1em;

      &:last-child {
         margin-bottom: 0;
      }
   }

   &.lumbers {
      margin-bottom: 1em;

      img {
         order: -1;
         width: 40%;
      }
   }

   &.classification {
      background-color: white;
      padding: 2em;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

      img {
         width: 45%;
      }

      ul {
         margin: 1em 0;
         list-style: none;
         padding-left: 1em;
         display: flex;
         flex-direction: column;
         gap: 1em;
         color: var(--color-paragraph);

         li {
            display: flex;
            gap: 1em;
            line-height: 1.4;

            svg {
               font-size: 5rem;
               color: var(--color-accent-primary);
            }
         }
      }
   }

   &.production {
      margin-top: 3.5em;
      img {
         width: 50%;
      }
   }
`;

export default StyledIntro;
