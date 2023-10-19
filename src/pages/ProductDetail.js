import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1>Product Details</h1>
      <h4>{params.productId}</h4>
      <p>
        {/* relative path reads url end goes on level up but if we use route it will go one level up according to child parent situation */}
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default ProductDetailPage;
