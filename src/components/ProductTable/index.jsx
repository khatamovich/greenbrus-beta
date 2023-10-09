import StyledProductTable, { TableWrapper } from "./ProductTable.styled";
import { MdCurrencyRuble } from "react-icons/md";

const ProductTable = ({ type, positions }) => {
  if (!positions || positions.length < 1) return null;

  return (
    <TableWrapper>
      <StyledProductTable>
        <caption>Характеристики</caption>

        <thead>
          <tr>
            <th>№</th>
            <th>Размер</th>
            {positions[0].sort && (
              <th>
                {type == "eurolining" || type == "block-house"
                  ? "Категория"
                  : "Сорт"}
              </th>
            )}
            {positions[0].standart && <th>Стандарт</th>}
            {positions[0].type && <th>Тип</th>}
            {positions[0].wetness && <th>Влажность</th>}
            {positions[0].count && <th>Кол-во штук в кубе</th>}
            {positions[0].cost && <th>Цена</th>}
          </tr>
        </thead>

        <tbody>
          {positions?.map((position, i) => (
            <tr key={`row-${i}`}>
              <td>{i + 1}</td>
              {position.size && <td>{position.size}</td>}
              {position.sort && <td>{position.sort}</td>}
              {position.standart && <td>{position.standart}</td>}
              {position.type && <td>{position.type}</td>}
              {position.wetness && <td>{position.wetness}</td>}
              {position.count && <td>{position.count}</td>}
              {position.cost && (
                <td>
                  {position.cost.toLocaleString("ru-RU")}
                  <MdCurrencyRuble />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </StyledProductTable>
    </TableWrapper>
  );
};

export default ProductTable;
