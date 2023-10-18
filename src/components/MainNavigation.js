import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <button>
              <Link to="/products">Products Page</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/">Home Page</Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;