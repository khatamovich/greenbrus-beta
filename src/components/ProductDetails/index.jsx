import StyledProductDetails, {
  Description,
  Body,
  Classification,
} from "./ProductDetails.styled";
import ProductTable from "../ProductTable";

const ProductDetails = ({ product }) => {
  if (!product) return null;

  return (
    <StyledProductDetails>
      <h2>{product.name}</h2>

      <Description>{product.description}</Description>

      <ProductTable type={product.type} positions={product.positions} />

      {product.classification && (
        <Classification>
          <h3>{product.classification.title}</h3>

          <ul>
            {product.classification.items.map((item, i) => (
              <li key={`classification-${i}`}>{item}</li>
            ))}
          </ul>
        </Classification>
      )}

      {product.body && (
        <Body dangerouslySetInnerHTML={{ __html: product.body }} />
      )}
    </StyledProductDetails>
  );
};

export default ProductDetails;
