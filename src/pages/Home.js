import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <h1>Home</h1>
      <button>
        <Link to="/products">Products Page</Link>
      </button>
    </>
  );
};

export default Home;
