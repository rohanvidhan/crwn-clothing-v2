import "./navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
const Navigation = ()=>{
  return (
   <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
            <CrwnLogo></CrwnLogo>
        </Link>        
        <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
                SHOP
            </Link>
            <Link className="nav-link" to="/sign-in">
               SIGN IN
            </Link>
        </div>
      </div>
      <Outlet></Outlet>
    </Fragment>
   
  );
};
export default Navigation;