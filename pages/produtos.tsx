import { GetServerSideProps } from "next";
import { api } from "../config/api.config";
import { Product } from "../interfaces/Products.types";

interface ProductProps {
  success: Boolean;
  products: Product[];
}

const Products: React.FC<ProductProps> = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.id}</h1>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.location}</p>
            <p>{product.prictureId}</p>
            <p>{product.statusRent}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

export const getServerSideProps: GetServerSideProps<ProductProps> = async () => {
  const res = await api.get(`/products`);

  return { props: { products: res.data.data, success: res.data.success } };
};
