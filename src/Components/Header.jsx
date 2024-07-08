import { useRef } from "react";
import logo from "../assets/images/logo.jpeg";
import { NavLink } from "react-router-dom";

let Header = function ({ onChangeHandler }) {
  let searchText = useRef(null);
  
  return (
    <>
      {/* // Navbar */}
      <nav className="navbar navbar-expand bg-body-tertiary ">
        <div className="container-fluid">
          <div className="logo">
            <img className="rounded mx-3" src={logo}></img>
          </div>

          <a className="navbar-brand" href="/">
            Food Fast
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <NavLink to="/Home" className={({isActive})=>(isActive?"nav-link active":"nav-link")} >Home</NavLink>
              </li>

              <li className="nav-item mx-3">
              <NavLink to="/About" className={({isActive})=>(isActive?"nav-link active":"nav-link")} >About</NavLink>
              </li>
              <li className="nav-item mx-3">
              <NavLink to="/Service" className={({isActive})=>(isActive?"nav-link active":"nav-link")} >Service</NavLink>

              </li>
              <li className="nav-item mx-3">
              <NavLink to="/Help" className={({isActive})=>(isActive?"nav-link active":"nav-link")} >Help</NavLink>
              
              </li>
            </ul>
            {/* Search Box */}
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={onChangeHandler}
                ref={searchText}
              />
            </form>
            {/* Search Box end */}
            {/* inbox */}
            <button
              type="button"
              className="btn btn-primary position-relative mx-3"
            >
              Inbox
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
      </nav>
      {/* navbar end */}
    </>
  );
};
export default Header;
