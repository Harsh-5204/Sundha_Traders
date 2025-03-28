import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileSearchVisible, setMobileSearchVisible] = useState(false);
  const [mediumSearchVisible, setMediumSearchVisible] = useState(false);

  return (
    <div className="link-remover">
      <header className="header-3">
        <div className="top-nav sticky-header sticky-header-2">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-12">
                <div className="navbar-top">
                  <button
                    className="navbar-toggler d-xl-none  d-block p-0 me-3"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#primaryMenu"
                  >
                    <span className="navbar-toggler-icon ">
                      <i className="iconly-Category icli" />
                    </span>
                  </button>
                  <Link to="/" className="web-logo nav-logo">
                    <img
                      src="../assets/images/logo/without_bg.png"
                      style={{ height: "100px" }}
                      className="img-fluid blur-up lazyload"
                      alt
                    />
                  </Link>
                  <div className="search-full">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i data-feather="search" className="font-light" />
                      </span>
                      <input
                        type="text"
                        className="form-control search-type"
                        placeholder="Search here.."
                      />
                      <span className="input-group-text close-search">
                        <i data-feather="x" className="font-light" />
                      </span>
                    </div>
                  </div>
                  <div className="middle-box">
                    <div className="center-box">
                      <div className="location-box-2">
                        <Link to="/contact">
                          <button className="btn location-button">
                            <i className="iconly-Location icli" />
                            <span>Location</span>
                          </button>
                        </Link>

                        {/* Search Icon (Hidden when input is visible) */}
                        {!mobileSearchVisible && (
                          <button
                            className="btn search-icon-mobile d-md-none d-flex align-items-center ms-2"
                            onClick={() => setMobileSearchVisible(true)}
                          >
                            <i className="iconly-Search icli" />
                          </button>
                        )}
                      </div>

                      {/* Mobile Search Box (Appears when search is clicked) */}
                      {mobileSearchVisible && (
                        <div className="mobile-search-container d-md-none d-flex align-items-center mt-2">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search here..."
                            />
                            <span
                              className="input-group-text"
                              style={{
                                background: "none",
                                // border: 'none',
                                color: "black",
                              }}
                            >
                              <i className="iconly-Search icli" />
                            </span>
                          </div>
                          <button
                            className="btn btn-danger ms-2"
                            onClick={() => setMobileSearchVisible(false)}
                          
                          >
                            <i className="fa fa-close" />
                          </button>
                        </div>
                      )}
                      
                      {/* Medium Search Icon (Hidden when input is visible) */}
                      {/* {!mediumSearchVisible && (
                        <button
                          className="btn search-icon-medium d-md-flex d-xl-none align-items-center ms-2"
                          onClick={() => setMediumSearchVisible(true)}
                        >
                          <i className="iconly-Search icli" style={{color:'white'}} />
                        </button>
                      )}
                      
                     

                      {mediumSearchVisible && (
                        <div className="medium-search-container d-md-flex d-xl-none align-items-center mt-2">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search here..."
                            />
                            <span className="input-group-text">
                              <i className="iconly-Search icli" />
                            </span>
                          </div>
                          <button
                            className="btn btn-danger ms-2"
                            onClick={() => setMediumSearchVisible(false)}
                          >
                            <i className="fa fa-close" />
                          </button>
                        </div>
                      )} */}
                      {/* desktop search bar */}
                      <div className="searchbar-box-2 input-group d-xl-flex d-none">
                        <button className="btn search-icon" type="button">
                          <i className="iconly-Search icli" />
                        </button>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search for products, styles,brands..."
                        />
                        <button className="btn search-button" type="button">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="rightside-menu support-sidemenu">
                    <div className="support-box">
                      <div className="support-image">
                        <img
                          src="../assets/images/icon/support.png"
                          className="img-fluid blur-up lazyload"
                          alt
                        />
                      </div>
                      <div className="support-number">
                        <h2>+91 8320675758</h2>
                        {/* <h4>24/7 Support Center</h4> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12 position-relative">
              <div className="main-nav nav-left-align">
                <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky p-0">
                  <div
                    className="offcanvas offcanvas-collapse order-xl-2"
                    id="primaryMenu"
                  >
                    <div className="offcanvas-header navbar-shadow">
                      <h5>Menu</h5>
                    </div>
                    <div className="offcanvas-body">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link className="nav-link ps-0" to="/">
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/shop">
                            Shop
                          </Link>
                        </li>
                        {/* <li className="nav-item">
                    <Link className="nav-link" href="product-list.html">Products</Link>
                  </li> */}
                        <li className="nav-item">
                          <Link className="nav-link" to="/about">
                            About Us
                          </Link>
                        </li>
                        {/* <li className="nav-item">
                    <a className="nav-link" href="about-us.html">About Us</a>
                  </li> */}
                        <li className="nav-item">
                          <Link className="nav-link" to="/contact">
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="rightside-menu">
                  <ul className="option-list-2">
                    {/* <li>
              <a
                href="javascript:void(0)"
                className="header-icon search-box search-icon"
              >
                <i className="iconly-Search icli" />
              </a>
            </li> */}
                    {/* <li>
              <a href="compare.html" className="header-icon">
                <small className="badge-number badge-light">2</small>
                <i className="iconly-Swap icli" />
              </a>
            </li> */}
                    <li>
                      {/* <Link to="/cart" className="header-icon swap-icon">
                <i className="iconly-Heart icli" />
              </Link> */}
                    </li>
                    <li>
                      <Link to="/cart" className="header-icon bag-icon">
                        <small className="badge-number badge-light">2</small>
                        <i className="iconly-Bag-2 icli" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* mobile fix menu start */}
      <div className="mobile-menu d-md-none d-block mobile-cart link-remover">
        <ul>
          <li className="active">
            <Link to="/">
              <i className="iconly-Home icli" />
              <span>Home</span>
            </Link>
          </li>
          <li className="mobile-category">
            <Link to="/shop">
              <i className="iconly-Category icli js-link" />
              <span>Shop</span>
            </Link>
          </li>

          <li>
            <Link to="/contact" className="notifi-wishlist">
              <i className="iconly-Heart icli" />
              <span>Contact </span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="search-box">
              <i className="iconly-Search icli" />
              <span>About us</span>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="iconly-Bag-2 icli fly-cate" />
              <span>Cart</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* mobile fix menu end */}
    </div>
  );
}
