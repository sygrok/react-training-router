import { Link, useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
          navigate("/products");
        }}
      >
        Navigating Programmaticaly
      </button>
    </>
  );
};

export default Home;
