import Navbar from "../components/category/Navbar";
import { Fragment } from "react";
import "../components/category/menu-demo.styles.css";
import { Outlet, Link } from "react-router-dom";
const Navigation = () => {
  return (
    <Fragment>
      <Link to="/">Back to Home</Link> |<Link to="shop">To Shop</Link>
      <header>
        <div className="nav-area">
          <Navbar />
        </div>
      </header>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
