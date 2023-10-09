import styled from "styled-components";

const StyledProductTable = styled.table`
   width: 100%;
   font-size: 2rem;
   border-collapse: collapse;
   text-align: left;

   caption {
      visibility: hidden;
      position: absolute;
   }

   th,
   td {
      padding: 1em;
   }

   th {
      font-size: 1.7rem;
      color: var(--color-accent-primary);
   }

   td {
      font-size: 1.6rem;

      svg {
         vertical-align: middle;
         transform: translateY(-1.5px);
         margin-left: 0.5em;
      }
   }

   tbody {
      tr {
         transition: 300ms;

         &:hover {
            opacity: 0.5;
            transform: scale(1.01);
         }
      }
   }

   tr {
      background-color: transparent;
      transition: 300ms;

      &:nth-child(even) {
         background-color: #fafafa;
      }
   }
`;

export const TableWrapper = styled.div`
   width: 90%;
   padding: 1.75em;
   border-radius: 12px;
   border: 1px solid #eee;
   box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
   overflow: hidden;
`;

export default StyledProductTable;
