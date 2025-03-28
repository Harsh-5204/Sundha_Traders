import React, { useState } from 'react'
import { Link } from 'react-router-dom'



export default function Shop() {
  const [sortOption, setSortOption] = useState("Most Popular");

  const handleSortChange = (option) => {
    setSortOption(option);
    console.log("Sorting by:", option);
    // Implement sorting logic here
  };
  return (
    <div className='link-remover'>
      
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
{/* <section className="section-b-space shop-section">
  <div className="container-fluid-lg">
    <div className="row">
      <div className="col-custom-3">
        <div className="left-box wow fadeInUp">
          <div className="shop-left-sidebar">
            <ul className="nav nav-pills mb-3 custom-nav-tab" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-vegetables" data-bs-toggle="pill" data-bs-target="#pills-vegetable" type="button" role="tab">Vegetables &amp; Fruit
                  <img src="../assets/svg/1/vegetable.svg" className="blur-up lazyload" alt /></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-beverages" data-bs-toggle="pill" data-bs-target="#pills-beverages" type="button" role="tab">Beverages <img src="../assets/svg/1/cup.svg" className="blur-up lazyload" alt /></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-meat" data-bs-toggle="pill" data-bs-target="#pills-meat" type="button" role="tab">Meats &amp; Seafood <img src="../assets/svg/1/meats.svg" alt className="blur-up lazyload" /></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-dairy" data-bs-toggle="pill" data-bs-target="#pills-dairy" type="button" role="tab">Breakfast &amp; Dairy <img src="../assets/svg/1/breakfast.svg" className="blur-up lazyload" alt /></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-frozen" data-bs-toggle="pill" data-bs-target="#pills-frozen" type="button" role="tab">Frozen Foods <img src="../assets/svg/1/frozen.svg" className="blur-up lazyload" alt /></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-snack" data-bs-toggle="pill" data-bs-target="#pills-snack" type="button" role="tab">Biscuits &amp; Snacks <img src="../assets/svg/1/biscuit.svg" className="blur-up lazyload" alt /></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-grocery" data-bs-toggle="pill" data-bs-target="#pills-grocery" type="button" role="tab">Grocery &amp; Staples <img src="../assets/svg/1/grocery.svg" className="blur-up lazyload" alt /></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-wines" data-bs-toggle="pill" data-bs-target="#pills-wines" type="button" role="tab">Wines &amp; Alcohol Drinks
                  <img src="../assets/svg/1/drink.svg" className="blur-up lazyload" alt /></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-milk" data-bs-toggle="pill" data-bs-target="#pills-milk" type="button" role="tab">Milk &amp; Dairies <img src="../assets/svg/1/milk.svg" alt className="blur-up lazyload" /></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-pet" data-bs-toggle="pill" data-bs-target="#pills-pet" type="button" role="tab">Pet Foods <img className="blur-up lazyload" src="../assets/svg/1/pet.svg" alt /></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-custom-">
        <div className="show-button">
          <div className="filter-button d-inline-block d-lg-none">
            <a><i className="fa-solid fa-filter" /> Filter Menu</a>
          </div>
          <div className="top-filter-menu">
            <div className="category-dropdown">
              <h5 className="text-content">Sort By :</h5>
              <div className="dropdown">
                <button className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                  <span>Most Popular</span> <i className="fa-solid fa-angle-down" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" id="pop" href="javascript:void(0)">Popularity</a>
                  </li>
                  <li>
                    <a className="dropdown-item" id="low" href="javascript:void(0)">Low - High
                      Price</a>
                  </li>
                  <li>
                    <a className="dropdown-item" id="high" href="javascript:void(0)">High - Low
                      Price</a>
                  </li>
                  <li>
                    <a className="dropdown-item" id="rating" href="javascript:void(0)">Average
                      Rating</a>
                  </li>
                  <li>
                    <a className="dropdown-item" id="aToz" href="javascript:void(0)">A - Z Order</a>
                  </li>
                  <li>
                    <a className="dropdown-item" id="zToa" href="javascript:void(0)">Z - A Order</a>
                  </li>
                  <li>
                    <a className="dropdown-item" id="off" href="javascript:void(0)">% Off - Hight To
                      Low</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid-option d-none d-md-block">
              <ul>
                <li className="three-grid">
                  <a href="javascript:void(0)">
                    <img src="../assets/svg/grid-3.svg" className="blur-up lazyload" alt />
                  </a>
                </li>
                <li className="grid-btn d-xxl-inline-block d-none active">
                  <a href="javascript:void(0)">
                    <img src="../assets/svg/grid-4.svg" className="blur-up lazyload d-lg-inline-block d-none" alt />
                    <img src="../assets/svg/grid.svg" className="blur-up lazyload img-fluid d-lg-none d-inline-block" alt />
                  </a>
                </li>
                <li className="list-btn">
                  <a href="javascript:void(0)">
                    <img src="../assets/svg/list.svg" className="blur-up lazyload" alt />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="filter-category">
            <ul>
              <li>
                <a href="javascript:void(0)">Vegetable</a>
              </li>
              <li>
                <a href="javascript:void(0)">Fruit</a>
              </li>
              <li>
                <a href="javascript:void(0)">Fresh</a>
              </li>
              <li>
                <a href="javascript:void(0)">Milk</a>
              </li>
              <li>
                <a href="javascript:void(0)">Meat</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">
          <div>
            <div className="product-box-3 h-100 wow fadeInUp">
              <div className="product-header">
                <div className="product-image">
                  <a href="product-left-thumbnail.html">
                    <img src="../assets/images/cake/product/2.png" className="img-fluid blur-up lazyload" alt />
                  </a>
                  <ul className="product-option">
                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                      <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                        <i data-feather="eye" />
                      </a>
                    </li>
                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                      <a href="compare.html">
                        <i data-feather="refresh-cw" />
                      </a>
                    </li>
                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                      <a href="wishlist.html" className="notifi-wishlist">
                        <i data-feather="heart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product-footer">
                <div className="product-detail">
                  <span className="span-name">Vegetable</span>
                  <a href="product-left-thumbnail.html">
                    <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                  </a>
                  <p className="text-content mt-1 mb-2 product-content">Cheesy feet cheesy grin brie.
                    Mascarpone cheese and wine hard cheese the big cheese everyone loves smelly
                    cheese macaroni cheese croque monsieur.</p>
                  <div className="product-rating mt-2">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <span>(4.0)</span>
                  </div>
                  <h6 className="unit">250 ml</h6>
                  <h5 className="price"><span className="theme-color">$08.02</span> <del>$15.15</del>
                  </h5>
                  <div className="add-to-cart-box bg-white">
                    <button className="btn btn-add-cart addcart-button">Add
                      <span className="add-icon bg-light-gray">
                        <i className="fa-solid fa-plus" />
                      </span>
                    </button>
                    <div className="cart_qty qty-box">
                      <div className="input-group bg-white">
                        <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                          <i className="fa fa-minus" />
                        </button>
                        <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                        <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                          <i className="fa fa-plus" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.05s">
              <div className="product-header">
                <div className="product-image">
                  <a href="product-left-thumbnail.html">
                    <img src="../assets/images/cake/product/3.png" className="img-fluid blur-up lazyload" alt />
                  </a>
                  <ul className="product-option">
                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                      <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                        <i data-feather="eye" />
                      </a>
                    </li>
                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                      <a href="compare.html">
                        <i data-feather="refresh-cw" />
                      </a>
                    </li>
                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                      <a href="wishlist.html" className="notifi-wishlist">
                        <i data-feather="heart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product-footer">
                <div className="product-detail">
                  <span className="span-name">Vegetable</span>
                  <a href="product-left-thumbnail.html">
                    <h5 className="name">Peanut Butter Bite Premium Butter Cookies 600 g</h5>
                  </a>
                  <p className="text-content mt-1 mb-2 product-content">Feta taleggio croque monsieur
                    swiss manchego cheesecake dolcelatte jarlsberg. Hard cheese danish fontina
                    boursin melted cheese fondue.</p>
                  <div className="product-rating mt-2">
                    <ul className="rating">
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" className="fill" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                      <li>
                        <i data-feather="star" />
                      </li>
                    </ul>
                    <span>(2.4)</span>
                  </div>
                  <h6 className="unit">350 G</h6>
                  <h5 className="price"><span className="theme-color">$04.33</span> <del>$10.36</del>
                  </h5>
                  <div className="add-to-cart-box bg-white">
                    <button className="btn btn-add-cart addcart-button">Add
                      <span className="add-icon bg-light-gray">
                        <i className="fa-solid fa-plus" />
                      </span>
                    </button>
                    <div className="cart_qty qty-box">
                      <div className="input-group bg-white">
                        <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                          <i className="fa fa-minus" />
                        </button>
                        <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                        <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                          <i className="fa fa-plus" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="custom-pagination">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="javascript:void(0)" tabIndex={-1}>
                <i className="fa-solid fa-angles-left" />
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="javascript:void(0)">1</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="javascript:void(0)">2</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="javascript:void(0)">3</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="javascript:void(0)">
                <i className="fa-solid fa-angles-right" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</section> */}
{/* <section className="section-b-space shop-section">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-3 col-md-4 col-sm-12">
        <div className="left-box wow fadeInUp">
          <div className="shop-left-sidebar">
            <ul className="nav nav-pills mb-3 custom-nav-tab" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-vegetables" data-bs-toggle="pill" data-bs-target="#pills-vegetable" type="button" role="tab">Vegetables &amp; Fruit
                  <img src="../assets/svg/1/vegetable.svg" className="blur-up lazyload" alt /></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-beverages" data-bs-toggle="pill" data-bs-target="#pills-beverages" type="button" role="tab">Beverages <img src="../assets/svg/1/cup.svg" className="blur-up lazyload" alt /></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-meat" data-bs-toggle="pill" data-bs-target="#pills-meat" type="button" role="tab">Meats &amp; Seafood <img src="../assets/svg/1/meats.svg" alt className="blur-up lazyload" /></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-dairy" data-bs-toggle="pill" data-bs-target="#pills-dairy" type="button" role="tab">Breakfast &amp; Dairy <img src="../assets/svg/1/breakfast.svg" className="blur-up lazyload" alt /></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-frozen" data-bs-toggle="pill" data-bs-target="#pills-frozen" type="button" role="tab">Frozen Foods <img src="../assets/svg/1/frozen.svg" className="blur-up lazyload" alt /></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-9 col-md-8 col-sm-12">
        <div className="show-button d-flex justify-content-between align-items-center flex-wrap">
          <div className="filter-button d-inline-block d-lg-none">
            <a><i className="fa-solid fa-filter" /> Filter Menu</a>
          </div>
          <div className="top-filter-menu d-flex align-items-center">
            <h5 className="text-content me-2">Sort By :</h5>
            <div className="dropdown">
              <button className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                <span>Most Popular</span> <i className="fa-solid fa-angle-down" />
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Popularity</a></li>
                <li><a className="dropdown-item" href="#">Low - High Price</a></li>
                <li><a className="dropdown-item" href="#">High - Low Price</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          <div className="col">
            <div className="product-box-3 h-100 wow fadeInUp">
              <div className="product-header">
                <div className="product-image">
                  <a href="product-left-thumbnail.html">
                    <img src="../assets/images/cake/product/2.png" className="img-fluid blur-up lazyload" alt />
                  </a>
                </div>
              </div>
              <div className="product-footer">
                <div className="product-detail">
                  <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                  <h6 className="unit">250 ml</h6>
                  <h5 className="price"><span className="theme-color">$08.02</span> <del>$15.15</del></h5>
                  <button className="btn btn-add-cart">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="product-box-3 h-100 wow fadeInUp">
              <div className="product-header">
                <div className="product-image">
                  <a href="product-left-thumbnail.html">
                    <img src="../assets/images/cake/product/3.png" className="img-fluid blur-up lazyload" alt />
                  </a>
                </div>
              </div>
              <div className="product-footer">
                <div className="product-detail">
                  <h5 className="name">Peanut Butter Bite Premium Butter Cookies 600 g</h5>
                  <h6 className="unit">350 G</h6>
                  <h5 className="price"><span className="theme-color">$04.33</span> <del>$10.36</del></h5>
                  <button className="btn btn-add-cart">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="custom-pagination mt-4">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#">
                <i className="fa-solid fa-angles-left" />
              </a>
            </li>
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#">
                <i className="fa-solid fa-angles-right" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</section> */}
<section className="section-b-space shop-section">
  <div className="container-fluid-lg">
    <div className="row">
      {/* Sidebar */}
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="left-box wow fadeInUp">
          <div className="shop-left-sidebar d-lg-block d-none">
            <ul className="nav nav-pills mb-3 custom-nav-tab" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-vegetables" data-bs-toggle="pill" data-bs-target="#pills-vegetable" type="button" role="tab">Vegetables &amp; Fruit
                  <img src="../assets/svg/1/vegetable.svg" className="blur-up lazyload" alt /></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-beverages" data-bs-toggle="pill" data-bs-target="#pills-beverages" type="button" role="tab">Beverages <img src="../assets/svg/1/cup.svg" className="blur-up lazyload" alt /></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-meat" data-bs-toggle="pill" data-bs-target="#pills-meat" type="button" role="tab">Meats &amp; Seafood <img src="../assets/svg/1/meats.svg" alt className="blur-up lazyload" /></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-dairy" data-bs-toggle="pill" data-bs-target="#pills-dairy" type="button" role="tab">Breakfast &amp; Dairy <img src="../assets/svg/1/breakfast.svg" className="blur-up lazyload" alt /></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-frozen" data-bs-toggle="pill" data-bs-target="#pills-frozen" type="button" role="tab">Frozen Foods <img src="../assets/svg/1/frozen.svg" className="blur-up lazyload" alt /></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-snack" data-bs-toggle="pill" data-bs-target="#pills-snack" type="button" role="tab">Biscuits &amp; Snacks <img src="../assets/svg/1/biscuit.svg" className="blur-up lazyload" alt /></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-grocery" data-bs-toggle="pill" data-bs-target="#pills-grocery" type="button" role="tab">Grocery &amp; Staples <img src="../assets/svg/1/grocery.svg" className="blur-up lazyload" alt /></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-wines" data-bs-toggle="pill" data-bs-target="#pills-wines" type="button" role="tab">Wines &amp; Alcohol Drinks
                  <img src="../assets/svg/1/drink.svg" className="blur-up lazyload" alt /></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-milk" data-bs-toggle="pill" data-bs-target="#pills-milk" type="button" role="tab">Milk &amp; Dairies <img src="../assets/svg/1/milk.svg" alt className="blur-up lazyload" /></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-pet" data-bs-toggle="pill" data-bs-target="#pills-pet" type="button" role="tab">Pet Foods <img className="blur-up lazyload" src="../assets/svg/1/pet.svg" alt /></button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="col-lg-9">
        <div className="show-button">
          <div className="filter-button d-inline-block d-lg-none">
          <a data-bs-toggle="offcanvas" data-bs-target="#mobileFilterSidebar">
          <i className="fa-solid fa-filter" /> Filter Menu</a>
          </div>

          {/* Sort & Grid Options */}
          <div className="top-filter-menu d-flex flex-wrap align-items-center justify-content-between">
          <div className="category-dropdown">
          <h5 className="text-content">Sort By:</h5>
          <div className="dropdown">
            <button
              className="dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
            >
              <span>{sortOption}</span> <i className="fa-solid fa-angle-down" />
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" onClick={() => handleSortChange("Popularity")}>
                  Popularity
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={() => handleSortChange("Low - High Price")}>
                  Low - High Price
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={() => handleSortChange("High - Low Price")}>
                  High - Low Price
                </a>
              </li>
            </ul>
          </div>
        </div>

            {/* <div className="grid-option d-none d-md-block">
              <ul className="d-flex gap-2">
                <li className="three-grid">
                  <a href="#"><img src="../assets/svg/grid-3.svg" className="img-fluid blur-up lazyload" alt="" /></a>
                </li>
                <li className="grid-btn d-xxl-inline-block d-none active">
                  <a href="#"><img src="../assets/svg/grid-4.svg" className="img-fluid blur-up lazyload d-lg-inline-block d-none" alt="" /></a>
                </li>
                <li className="list-btn">
                  <a href="#"><img src="../assets/svg/list.svg" className="img-fluid blur-up lazyload" alt="" /></a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="mobileFilterSidebar"
         style={{
          backgroundColor: "#f8f9fa",  // Light background for contrast
          width: "280px" // Adjust width for better appearance
        }}
        >
    <div className="offcanvas-header"  style={{
      borderBottom: "1px solid #ddd",  
      padding: "12px 16px"
    }}>
      <h5 className="offcanvas-title"  style={{
        fontSize: "18px", 
        fontWeight: "bold", 
        color: "#333"
      }}>Categories</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas"  style={{
        fontSize: "18px", 
        color: "#000"
      }}></button>
    </div>
    <div className="offcanvas-body">
      <div className="category-menu ">
        <ul>
          <li><Link to="#" style={{color:'black' , fontWeight:'normal',fontSize:'17px'}}>Vegetables & Fruits</Link></li>
          <li><Link to="#" style={{color:'black' , fontWeight:'normal',fontSize:'17px'}}>Vegetables & Fruits</Link></li>
          <li><Link to="#" style={{color:'black' , fontWeight:'normal',fontSize:'17px'}}>Vegetables & Fruits</Link></li>
          <li><Link to="#" style={{color:'black' , fontWeight:'normal',fontSize:'17px'}}>Vegetables & Fruits</Link></li>
          <li><Link to="#" style={{color:'black' , fontWeight:'normal',fontSize:'17px'}}>Vegetables & Fruits</Link></li>
          <li><Link to="#" style={{color:'black' , fontWeight:'normal',fontSize:'17px'}}>Vegetables & Fruits</Link></li>
          <li><Link to="#" style={{color:'black' , fontWeight:'normal',fontSize:'17px'}}>Vegetables & Fruits</Link></li>

         

         
        </ul>
      </div>
    </div>
  </div>

        {/* Product List */}
        <div className="row g-sm-4 g-3  row-cols-lg-3 row-cols-md-2 row-cols-sm-1 product-list-section">
          {/* Product 1 */}
          <div className="col">
            <div className="product-box-3 h-100 wow fadeInUp">
              <div className="product-header">
                <div className="product-image">
                  <Link to="/productdetail">
                    <img src="../assets/images/cake/product/2.png" className="img-fluid blur-up lazyload w-100" alt="" />
                  </Link>
                </div>
              </div>
              <div className="product-footer">
                <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                <h6 className="unit">250 ml</h6>
                <h5 className="price"><span className="theme-color">$08.02</span> <del>$15.15</del></h5>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="col">
            <div className="product-box-3 h-100 wow fadeInUp">
              <div className="product-header">
                <div className="product-image">
                  <a href="product-left-thumbnail.html">
                    <img src="../assets/images/cake/product/3.png" className="img-fluid blur-up lazyload w-100" alt="" />
                  </a>
                </div>
              </div>
              <div className="product-footer">
                <h5 className="name">Peanut Butter Bite Premium Butter Cookies 600 g</h5>
                <h6 className="unit">350 G</h6>
                <h5 className="price"><span className="theme-color">$04.33</span> <del>$10.36</del></h5>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        {/* <nav className="custom-pagination">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled"><a className="page-link" href="#"><i className="fa-solid fa-angles-left" /></a></li>
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#"><i className="fa-solid fa-angles-right" /></a></li>
          </ul>
        </nav> */}
      </div>
    </div>
  </div>
</section>


{/* Shop Section End */}
    </div>



  )
}
