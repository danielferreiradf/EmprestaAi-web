import { GetServerSideProps } from "next";
import { api } from "../../config/api.config";
import { Product } from "../../interfaces/Products.types";

interface ProductProps {
  success: Boolean;
  product: Product;
}

const Products: React.FC<ProductProps> = ({ product }) => {
  return (
    <div>
      <h1>{product.id}</h1>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.location}</p>
      <p>{product.prictureId}</p>
      <p>{product.statusRent}</p>

      <h2>Owner</h2>
      <p>{product.owner.firstName}</p>
      <p>{product.owner.lastName}</p>
      <p>{product.owner.email}</p>
      <p>{product.owner.phone}</p>
      <p>{product.owner.address}</p>
      <p>{product.owner.city}</p>
      <p>{product.owner.state}</p>
      <p>{product.owner.cep}</p>

      <h2>Picture</h2>
      <p>{product.picture.name}</p>
    </div>
  );
};

export default Products;

export const getServerSideProps: GetServerSideProps<ProductProps> = async (
  context
) => {
  const res = await api.get(`/products/${context.params.id}`);

  return { props: { product: res.data.data, success: res.data.success } };
};
