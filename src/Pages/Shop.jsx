import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Categoryname, ShopData } from "../Apis";
import "../App.css"

export default function Shop() {
  const [sortOption, setSortOption] = useState("Most Popular");

  const {
    isLoading,
    error,
    data: groceryItems,
  } = useQuery({
    queryKey: ["Shop"],
    queryFn: ShopData,
    enabled: !!Categoryname,
  });

  const {
    isLoading: Coming,
    error: error2,
    data: categoryname,
  } = useQuery({
    queryKey: [Categoryname],
    queryFn: Categoryname,
  });

 

  const handleSortChange = (option) => {
    setSortOption(option);
    console.log("Sorting by:", option);
  };
  return (
    <div className="link-remover">
      {/* Breadcrumb Section Start */}
      <section className="breadcrumb-section pt-0">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-contain">
                <h2>Shop Category</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <i className="fa-solid fa-house" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">Shop Category</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}

      {/* Shop Section Start */}

      <section className="section-b-space shop-section">
        <div className="container-fluid-lg">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="left-box wow fadeInUp">
                <div className="shop-left-sidebar d-lg-block d-none">
                  <ul
                    className="nav nav-pills mb-3 custom-nav-tab"
                    id="pills-tab"
                    role="tablist"
                  >
                    {Coming ? (
                      <span>Loading...</span>
                    ) : (
                      categoryname.map((gname) => (
                        <li className="nav-item" role="presentation" >
                          <Link
                            to={`/categorywiseproduct/${gname.category_id}`}
                            className="nav-link"
                            
                          >
                            {gname.name} 
                            <img
                              src={gname.image}
                              className="blur-up lazyload"
                              alt
                            />
                          </Link>
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-lg-9">
              <div className="show-button">
                <div className="filter-button d-inline-block d-lg-none">
                  <a
                    data-bs-toggle="offcanvas"
                    data-bs-target="#mobileFilterSidebar"
                  >
                    <i className="fa-solid fa-filter" /> Filter Menu
                  </a>
                </div>
              </div>
              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="mobileFilterSidebar"
                aria-labelledby="offcanvasLabel"
                style={{
                  backgroundColor: "#f8f9fa", // Light background for contrast
                  width: "280px", // Adjust width for better appearance
                }}
              >
                <div
                  className="offcanvas-header"
                  style={{
                    borderBottom: "1px solid #ddd",
                    padding: "12px 16px",
                  }}
                >
                  <h5
                    className="offcanvas-title"
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#333",
                    }}
                  >
                    Categories
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    style={{
                      fontSize: "18px",
                      color: "#000",
                    }}
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <div className="category-menu">
                    <ul>
                      {Coming ? (
                        <li>Loading...</li>
                      ) : (
                        categoryname.map((cat, index) => (
                          <li key={index} >
                            <Link
                              to={`/categorywiseproduct/${cat.category_id}`}
                                data-bs-dismiss="offcanvas"
                            >
                              <img
                                src={cat.image}
                                alt={cat.name}
                               
                                style={{ borderRadius: "4px" }}
                              />
                              {cat.name}
                            </Link>
                          </li>
                        ))
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Product List */}
              <div className="row g-sm-4 g-3  row-cols-lg-3 row-cols-md-2 row-cols-1 product-list-section">
                {/* Product 1 */}
                {isLoading ? (
                  <span>Loading...</span>
                ) : (
                  groceryItems.map((item) => {
                    return (
                      <div className="col" key={item._id}>
                        <div className="product-box-3 h-100 wow fadeInUp">
                          <div className="product-header">
                            <div className="product-image">
                              <Link to={`/productdetail/${item._id}`}>
                                <img
                                  src={item.image[0]}
                                  className="img-fluid blur-up lazyload w-100"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="product-footer">
                            <h5 className="name">{item.name}</h5>
                            {/* <h6 className="unit">{item.size}</h6> */}
                            <h5 className="price">
                              <span className="theme-color">{item.price}₹</span>{" "}
                              <del>{item.price}₹</del>
                            </h5>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section End */}
    </div>
  );
}
