import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

const Products = () => {
  return (
    <>
      <h1>Products Page</h1>
      {PRODUCTS.map((x) => (
        <li key={x.id}>
          <Link to={x.id}>{x.title}</Link>
          {/* <Link to={`/products/${x.id}`}>{x.title}</Link> returns same result  */}
        </li>
      ))}
    </>
  );
};

export default Products;
