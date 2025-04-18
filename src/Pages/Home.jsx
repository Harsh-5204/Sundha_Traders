import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const settings4 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="link-remover">

{/* <div className="fullpage-loader">
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
</div> */}

{/* Home Section Start */}
<section className="home-section-2 home-section-bg pt-0 overflow-hidden link-remover">
  <div className="container-fluid p-0">
    <div className="row">
      <div className="col-12">
        <div className="slider-animate">
        <Slider {...settings4} className="">
          <Link to='/shop'>
          <div className="home-contain rounded-0 p-0 position-relative ">
            <img 
              src="../assets/images/grocery/banner/33.jpg" 
              className="img-fluid bg-img blur-up lazyload w-100" 
              
              alt="Banner 1" 
            />
            
          </div>
          </Link>
          
          <div className="home-contain rounded-0 p-0 position-relative">
            <img 
              src="../assets/images/grocery/banner/22.jpg" 
              className="img-fluid bg-img blur-up lazyload w-100" 
              alt="Banner 1" 
            />
            
          </div>
          
          <div className="home-contain rounded-0 p-0 position-relative">
            <img 
              src="../assets/images/grocery/banner/11.jpg" 
              className="img-fluid bg-img blur-up lazyload w-100" 
              alt="Banner 1" 
            />
            
          </div>
        </Slider> 
        </div>
      </div>
    </div>
  </div>
</section>
{/* Home Section End */}

{/* Banner Section Start */}
<section className="banner-section banner-small ratio_65 ">
  <div className="container-fluid-lg">
    <div className="slider-4-banner no-arrow slick-height">
    <Slider {...settings} className="slider-4-banner">
      <div>
        <div className="banner-contain-3 hover-effect">
          <Link to='/shop'>
            <img
              src="https://img.freepik.com/free-photo/skin-care-cosmetology-products_658428-374.jpg" style={{height:'243px ' , width:'375px'}}
              className="bg-img blur-up lazyload"
              alt="Personal Care"
            />
          </Link>
          <div className="banner-detail p-center-left w-75 banner-p-sm mend-auto">
            <div>
              <h5 className="fw-light mb-2">10% Discount</h5>
              <h4 className="fw-bold mb-0">Personal Care</h4>
              <Link to='/shop'

              
                className="btn shop-now-button mt-3 ps-0 mend-auto theme-color fw-bold"
              >
                Shop Now <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="banner-contain-3 hover-effect">
          <Link to='/shop'>
            <img
              src="https://st2.depositphotos.com/1006458/6242/i/450/depositphotos_62425173-stock-photo-study-and-educted-related-items.jpg" style={{height:'243px ' , width:'375px'}}
              className="bg-img blur-up lazyload"
              alt="Study material"
            />
          </Link>
          <div className="banner-detail p-center-left w-75 banner-p-sm mend-auto">
            <div>
              <h5 className="fw-light mb-2">15% Discount</h5>
              <h4 className="fw-bold mb-0">Study Material</h4>
              <Link to='/shop'

              
                className="btn shop-now-button mt-3 ps-0 mend-auto theme-color fw-bold"
              >
                Shop Now <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="banner-contain-3 hover-effect">
          <Link to='/shop'>
            <img
              src="https://img.freepik.com/premium-photo/stationery-items-shopping-trolley-left-side_93675-33603.jpg" style={{height:'243px ' , width:'375px'}}
              className="bg-img blur-up lazyload"
              alt="Personal Care"
            />
          </Link>
          <div className="banner-detail p-center-left w-75 banner-p-sm mend-auto">
            <div>
              <h5 className="fw-light mb-2">10% Discount</h5>
              <h4 className="fw-bold mb-0">Stationary Items</h4>
              <Link to='/shop'

              
                className="btn shop-now-button mt-3 ps-0 mend-auto theme-color fw-bold"
              >
                Shop Now <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="banner-contain-3 hover-effect">
          <Link to='/shop'>
            <img
              src="https://plus.unsplash.com/premium_photo-1714573122708-d1b42332e0a5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNwb3J0cyUyMGVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D" style={{height:'243px ' , width:'375px'}}
              className="bg-img blur-up lazyload"
              alt="Personal Care"
            />
          </Link>
          <div className="banner-detail p-center-left w-75 banner-p-sm mend-auto">
            <div>
              <h5 className="fw-light mb-2">10% Discount</h5>
              <h4 className="fw-bold mb-0">Sports Items</h4>
              <Link to='/shop'

              
                className="btn shop-now-button mt-3 ps-0 mend-auto theme-color fw-bold"
              >
                Shop Now <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
     
    </Slider>
    </div>
  </div>
</section>


{/* Banner Section End */}

{/* Category Section Start */}
<section className="category-section-3 ">
  <div className="container-fluid-lg">
    <div className="title">
      <h2>Shop By Categories</h2>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="category-slider-1 arrow-slider wow fadeInUp">
        <Slider {...settings2} className="category-slider-1 arrow-slider wow fadeInUp">
          <div>
            <div className="category-box-list">
              <a href="shop-left-sidebar.html" className="category-name">
                <h4>Fashion</h4>
                <h6>25 items</h6>
              </a>
              <div className="category-box-view">
                <a href="shop-left-sidebar.html">
                  <img src="../assets/images/grocery/category/1.png" className="img-fluid blur-up lazyload" alt="Fashion" />
                </a>
                <button onClick={() => (window.location.href = "shop-left-sidebar.html")} className="btn shop-button">
                  <span>Shop Now</span>
                  <i className="fas fa-angle-right" />
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="category-box-list">
              <a href="shop-left-sidebar.html" className="category-name">
                <h4>Beauty</h4>
                <h6>20 items</h6>
              </a>
              <div className="category-box-view">
                <a href="shop-left-sidebar.html">
                  <img src="../assets/images/grocery/category/2.png" className="img-fluid blur-up lazyload" alt="Beauty" />
                </a>
                <button onClick={() => (window.location.href = "shop-left-sidebar.html")} className="btn shop-button">
                  <span>Shop Now</span>
                  <i className="fas fa-angle-right" />
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="category-box-list">
              <a href="shop-left-sidebar.html" className="category-name">
                <h4>Accessories</h4>
                <h6>14 items</h6>
              </a>
              <div className="category-box-view">
                <a href="shop-left-sidebar.html">
                  <img src="../assets/images/grocery/category/3.png" className="img-fluid blur-up lazyload" alt="Accessories" />
                </a>
                <button onClick={() => (window.location.href = "shop-left-sidebar.html")} className="btn shop-button">
                  <span>Shop Now</span>
                  <i className="fas fa-angle-right" />
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="category-box-list">
              <a href="shop-left-sidebar.html" className="category-name">
                <h4>Health</h4>
                <h6>43 items</h6>
              </a>
              <div className="category-box-view">
                <a href="shop-left-sidebar.html">
                  <img src="../assets/images/grocery/category/4.png" className="img-fluid blur-up lazyload" alt="Health" />
                </a>
                <button onClick={() => (window.location.href = "shop-left-sidebar.html")} className="btn shop-button">
                  <span>Shop Now</span>
                  <i className="fas fa-angle-right" />
                </button>
              </div>
            </div>
          </div>
        </Slider>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Category Section End */}

{/* Product Fruit & Vegetables Section Start */}
<section className="product-section-3">
  <div className="container-fluid-lg">
    <div className="title">
      <h2>Fruits &amp; Vegetables</h2>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="slider-7_1 arrow-slider img-slider">
        <Slider {...settings3} className="slider-7_1 arrow-slider img-slider">
          <div>
            <div className="product-box-4 wow fadeInUp">
              <div className="product-image product-image-2">
                <a href="product-left-thumbnail.html">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvBP6Lcqm9FrBaF8quRIyM-rSivcke0FcsLb1zymX2OFP1rQPBWieQN2CEai-rbEX_774&usqp=CAU" className="img-fluid blur-up lazyload" alt="Bell Pepper" />
                </a>
                {/* <ul className="option">
                  <li data-bs-toggle="tooltip" title="Quick View">
                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                      <i className="iconly-Show icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Wishlist">
                    <a href="javascript:void(0)" className="notifi-wishlist">
                      <i className="iconly-Heart icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Compare">
                    <a href="compare.html">
                      <i className="iconly-Swap icli" />
                    </a>
                  </li>
                </ul> */}
              </div>
              <div className="product-detail">
                <ul className="rating">
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" /></li>
                </ul>
                <a href="product-left-thumbnail.html">
                  <h5 className="name text-title">Bell Pepper</h5>
                </a>
                <h5 className="price theme-color">$65.21<del>$71.25</del></h5>
              </div>
            </div>
          </div>

          <div>
            <div className="product-box-4 wow fadeInUp">
              <div className="product-image product-image-2">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/grocery/product/fruits-vegetables/2.png" className="img-fluid blur-up lazyload" alt="Eggplant" />
                </a>
                <ul className="option">
                  <li data-bs-toggle="tooltip" title="Quick View">
                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                      <i className="iconly-Show icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Wishlist">
                    <a href="javascript:void(0)" className="notifi-wishlist">
                      <i className="iconly-Heart icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Compare">
                    <a href="compare.html">
                      <i className="iconly-Swap icli" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-detail">
                <ul className="rating">
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" /></li>
                </ul>
                <a href="product-left-thumbnail.html">
                  <h5 className="name text-title">Eggplant</h5>
                </a>
                <h5 className="price theme-color">$65.21<del>$71.25</del></h5>
              </div>
            </div>
          </div>

          <div>
            <div className="product-box-4 wow fadeInUp">
              <div className="product-image product-image-2">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/grocery/product/fruits-vegetables/2.png" className="img-fluid blur-up lazyload" alt="Eggplant" />
                </a>
                <ul className="option">
                  <li data-bs-toggle="tooltip" title="Quick View">
                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                      <i className="iconly-Show icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Wishlist">
                    <a href="javascript:void(0)" className="notifi-wishlist">
                      <i className="iconly-Heart icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Compare">
                    <a href="compare.html">
                      <i className="iconly-Swap icli" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-detail">
                <ul className="rating">
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" /></li>
                </ul>
                <a href="product-left-thumbnail.html">
                  <h5 className="name text-title">Eggplant</h5>
                </a>
                <h5 className="price theme-color">$65.21<del>$71.25</del></h5>
              </div>
            </div>
          </div>

          <div>
            <div className="product-box-4 wow fadeInUp">
              <div className="product-image product-image-2">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/grocery/product/fruits-vegetables/2.png" className="img-fluid blur-up lazyload" alt="Eggplant" />
                </a>
                <ul className="option">
                  <li data-bs-toggle="tooltip" title="Quick View">
                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                      <i className="iconly-Show icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Wishlist">
                    <a href="javascript:void(0)" className="notifi-wishlist">
                      <i className="iconly-Heart icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Compare">
                    <a href="compare.html">
                      <i className="iconly-Swap icli" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-detail">
                <ul className="rating">
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" /></li>
                </ul>
                <a href="product-left-thumbnail.html">
                  <h5 className="name text-title">Eggplant</h5>
                </a>
                <h5 className="price theme-color">$65.21<del>$71.25</del></h5>
              </div>
            </div>
          </div>

          <div>
            <div className="product-box-4 wow fadeInUp">
              <div className="product-image product-image-2">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/grocery/product/fruits-vegetables/2.png" className="img-fluid blur-up lazyload" alt="Eggplant" />
                </a>
                <ul className="option">
                  <li data-bs-toggle="tooltip" title="Quick View">
                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                      <i className="iconly-Show icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Wishlist">
                    <a href="javascript:void(0)" className="notifi-wishlist">
                      <i className="iconly-Heart icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Compare">
                    <a href="compare.html">
                      <i className="iconly-Swap icli" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-detail">
                <ul className="rating">
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" /></li>
                </ul>
                <a href="product-left-thumbnail.html">
                  <h5 className="name text-title">Eggplant</h5>
                </a>
                <h5 className="price theme-color">$65.21<del>$71.25</del></h5>
              </div>
            </div>
          </div>

          <div>
            <div className="product-box-4 wow fadeInUp">
              <div className="product-image product-image-2">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/grocery/product/fruits-vegetables/2.png" className="img-fluid blur-up lazyload" alt="Eggplant" />
                </a>
                <ul className="option">
                  <li data-bs-toggle="tooltip" title="Quick View">
                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                      <i className="iconly-Show icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Wishlist">
                    <a href="javascript:void(0)" className="notifi-wishlist">
                      <i className="iconly-Heart icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Compare">
                    <a href="compare.html">
                      <i className="iconly-Swap icli" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-detail">
                <ul className="rating">
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" /></li>
                </ul>
                <a href="product-left-thumbnail.html">
                  <h5 className="name text-title">Eggplant</h5>
                </a>
                <h5 className="price theme-color">$65.21<del>$71.25</del></h5>
              </div>
            </div>
          </div>
        </Slider>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Product Fruit & Vegetables Section End */}

{/* breakfast and dairy Start */}
<section className="product-section-3">
  <div className="container-fluid-lg">
    <div className="title">
      <h2>Breakfast &amp; Dairy</h2>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="slider-7_1 arrow-slider img-slider">
        <Slider {...settings3} className="slider-7_1 arrow-slider img-slider">
          <div>
            <div className="product-box-4 wow fadeInUp">
              <div className="product-image product-image-2">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/grocery/product/fruits-vegetables/1.png" className="img-fluid blur-up lazyload" alt="Bell Pepper" />
                </a>
                <ul className="option">
                  <li data-bs-toggle="tooltip" title="Quick View">
                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                      <i className="iconly-Show icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Wishlist">
                    <a href="javascript:void(0)" className="notifi-wishlist">
                      <i className="iconly-Heart icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Compare">
                    <a href="compare.html">
                      <i className="iconly-Swap icli" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-detail">
                <ul className="rating">
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" /></li>
                </ul>
                <a href="product-left-thumbnail.html">
                  <h5 className="name text-title">Bell Pepper</h5>
                </a>
                <h5 className="price theme-color">$65.21<del>$71.25</del></h5>
              </div>
            </div>
          </div>

          <div>
            <div className="product-box-4 wow fadeInUp">
              <div className="product-image product-image-2">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/grocery/product/fruits-vegetables/2.png" className="img-fluid blur-up lazyload" alt="Eggplant" />
                </a>
                <ul className="option">
                  <li data-bs-toggle="tooltip" title="Quick View">
                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                      <i className="iconly-Show icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Wishlist">
                    <a href="javascript:void(0)" className="notifi-wishlist">
                      <i className="iconly-Heart icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Compare">
                    <a href="compare.html">
                      <i className="iconly-Swap icli" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-detail">
                <ul className="rating">
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" /></li>
                </ul>
                <a href="product-left-thumbnail.html">
                  <h5 className="name text-title">Eggplant</h5>
                </a>
                <h5 className="price theme-color">$65.21<del>$71.25</del></h5>
              </div>
            </div>
          </div>

          <div>
            <div className="product-box-4 wow fadeInUp">
              <div className="product-image product-image-2">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/grocery/product/fruits-vegetables/2.png" className="img-fluid blur-up lazyload" alt="Eggplant" />
                </a>
                <ul className="option">
                  <li data-bs-toggle="tooltip" title="Quick View">
                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                      <i className="iconly-Show icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Wishlist">
                    <a href="javascript:void(0)" className="notifi-wishlist">
                      <i className="iconly-Heart icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Compare">
                    <a href="compare.html">
                      <i className="iconly-Swap icli" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-detail">
                <ul className="rating">
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" /></li>
                </ul>
                <a href="product-left-thumbnail.html">
                  <h5 className="name text-title">Eggplant</h5>
                </a>
                <h5 className="price theme-color">$65.21<del>$71.25</del></h5>
              </div>
            </div>
          </div>

          <div>
            <div className="product-box-4 wow fadeInUp">
              <div className="product-image product-image-2">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/grocery/product/fruits-vegetables/2.png" className="img-fluid blur-up lazyload" alt="Eggplant" />
                </a>
                <ul className="option">
                  <li data-bs-toggle="tooltip" title="Quick View">
                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                      <i className="iconly-Show icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Wishlist">
                    <a href="javascript:void(0)" className="notifi-wishlist">
                      <i className="iconly-Heart icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Compare">
                    <a href="compare.html">
                      <i className="iconly-Swap icli" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-detail">
                <ul className="rating">
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" /></li>
                </ul>
                <a href="product-left-thumbnail.html">
                  <h5 className="name text-title">Eggplant</h5>
                </a>
                <h5 className="price theme-color">$65.21<del>$71.25</del></h5>
              </div>
            </div>
          </div>

          <div>
            <div className="product-box-4 wow fadeInUp">
              <div className="product-image product-image-2">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/grocery/product/fruits-vegetables/2.png" className="img-fluid blur-up lazyload" alt="Eggplant" />
                </a>
                <ul className="option">
                  <li data-bs-toggle="tooltip" title="Quick View">
                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                      <i className="iconly-Show icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Wishlist">
                    <a href="javascript:void(0)" className="notifi-wishlist">
                      <i className="iconly-Heart icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Compare">
                    <a href="compare.html">
                      <i className="iconly-Swap icli" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-detail">
                <ul className="rating">
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" /></li>
                </ul>
                <a href="product-left-thumbnail.html">
                  <h5 className="name text-title">Eggplant</h5>
                </a>
                <h5 className="price theme-color">$65.21<del>$71.25</del></h5>
              </div>
            </div>
          </div>

          <div>
            <div className="product-box-4 wow fadeInUp">
              <div className="product-image product-image-2">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/grocery/product/fruits-vegetables/2.png" className="img-fluid blur-up lazyload" alt="Eggplant" />
                </a>
                <ul className="option">
                  <li data-bs-toggle="tooltip" title="Quick View">
                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                      <i className="iconly-Show icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Wishlist">
                    <a href="javascript:void(0)" className="notifi-wishlist">
                      <i className="iconly-Heart icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Compare">
                    <a href="compare.html">
                      <i className="iconly-Swap icli" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-detail">
                <ul className="rating">
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" /></li>
                </ul>
                <a href="product-left-thumbnail.html">
                  <h5 className="name text-title">Eggplant</h5>
                </a>
                <h5 className="price theme-color">$65.21<del>$71.25</del></h5>
              </div>
            </div>
          </div>
        </Slider>
        </div>
      </div>
    </div>
  </div>
</section>
{/* breakfast and dairy End */}

{/*Top Selling Start */}
<section className="product-section-3 mb-5">
  <div className="container-fluid-lg">
    <div className="title">
      <h2>Top &amp; Selling</h2>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="slider-7_1 arrow-slider img-slider">
        <Slider {...settings3} className="slider-7_1 arrow-slider img-slider">
          <div>
            <div className="product-box-4 wow fadeInUp">
              <div className="product-image product-image-2">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/grocery/product/fruits-vegetables/1.png" className="img-fluid blur-up lazyload" alt="Bell Pepper" />
                </a>
                <ul className="option">
                  <li data-bs-toggle="tooltip" title="Quick View">
                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                      <i className="iconly-Show icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Wishlist">
                    <a href="javascript:void(0)" className="notifi-wishlist">
                      <i className="iconly-Heart icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Compare">
                    <a href="compare.html">
                      <i className="iconly-Swap icli" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-detail">
                <ul className="rating">
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" /></li>
                </ul>
                <a href="product-left-thumbnail.html">
                  <h5 className="name text-title">Bell Pepper</h5>
                </a>
                <h5 className="price theme-color">$65.21<del>$71.25</del></h5>
              </div>
            </div>
          </div>

          <div>
            <div className="product-box-4 wow fadeInUp">
              <div className="product-image product-image-2">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/grocery/product/fruits-vegetables/2.png" className="img-fluid blur-up lazyload" alt="Eggplant" />
                </a>
                <ul className="option">
                  <li data-bs-toggle="tooltip" title="Quick View">
                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                      <i className="iconly-Show icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Wishlist">
                    <a href="javascript:void(0)" className="notifi-wishlist">
                      <i className="iconly-Heart icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Compare">
                    <a href="compare.html">
                      <i className="iconly-Swap icli" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-detail">
                <ul className="rating">
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" /></li>
                </ul>
                <a href="product-left-thumbnail.html">
                  <h5 className="name text-title">Eggplant</h5>
                </a>
                <h5 className="price theme-color">$65.21<del>$71.25</del></h5>
              </div>
            </div>
          </div>

          <div>
            <div className="product-box-4 wow fadeInUp">
              <div className="product-image product-image-2">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/grocery/product/fruits-vegetables/2.png" className="img-fluid blur-up lazyload" alt="Eggplant" />
                </a>
                <ul className="option">
                  <li data-bs-toggle="tooltip" title="Quick View">
                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                      <i className="iconly-Show icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Wishlist">
                    <a href="javascript:void(0)" className="notifi-wishlist">
                      <i className="iconly-Heart icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Compare">
                    <a href="compare.html">
                      <i className="iconly-Swap icli" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-detail">
                <ul className="rating">
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" /></li>
                </ul>
                <a href="product-left-thumbnail.html">
                  <h5 className="name text-title">Eggplant</h5>
                </a>
                <h5 className="price theme-color">$65.21<del>$71.25</del></h5>
              </div>
            </div>
          </div>

          <div>
            <div className="product-box-4 wow fadeInUp">
              <div className="product-image product-image-2">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/grocery/product/fruits-vegetables/2.png" className="img-fluid blur-up lazyload" alt="Eggplant" />
                </a>
                <ul className="option">
                  <li data-bs-toggle="tooltip" title="Quick View">
                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                      <i className="iconly-Show icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Wishlist">
                    <a href="javascript:void(0)" className="notifi-wishlist">
                      <i className="iconly-Heart icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Compare">
                    <a href="compare.html">
                      <i className="iconly-Swap icli" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-detail">
                <ul className="rating">
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" /></li>
                </ul>
                <a href="product-left-thumbnail.html">
                  <h5 className="name text-title">Eggplant</h5>
                </a>
                <h5 className="price theme-color">$65.21<del>$71.25</del></h5>
              </div>
            </div>
          </div>

          <div>
            <div className="product-box-4 wow fadeInUp">
              <div className="product-image product-image-2">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/grocery/product/fruits-vegetables/2.png" className="img-fluid blur-up lazyload" alt="Eggplant" />
                </a>
                <ul className="option">
                  <li data-bs-toggle="tooltip" title="Quick View">
                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                      <i className="iconly-Show icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Wishlist">
                    <a href="javascript:void(0)" className="notifi-wishlist">
                      <i className="iconly-Heart icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Compare">
                    <a href="compare.html">
                      <i className="iconly-Swap icli" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-detail">
                <ul className="rating">
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" /></li>
                </ul>
                <a href="product-left-thumbnail.html">
                  <h5 className="name text-title">Eggplant</h5>
                </a>
                <h5 className="price theme-color">$65.21<del>$71.25</del></h5>
              </div>
            </div>
          </div>

          <div>
            <div className="product-box-4 wow fadeInUp">
              <div className="product-image product-image-2">
                <a href="product-left-thumbnail.html">
                  <img src="../assets/images/grocery/product/fruits-vegetables/2.png" className="img-fluid blur-up lazyload" alt="Eggplant" />
                </a>
                <ul className="option">
                  <li data-bs-toggle="tooltip" title="Quick View">
                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                      <i className="iconly-Show icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Wishlist">
                    <a href="javascript:void(0)" className="notifi-wishlist">
                      <i className="iconly-Heart icli" />
                    </a>
                  </li>
                  <li data-bs-toggle="tooltip" title="Compare">
                    <a href="compare.html">
                      <i className="iconly-Swap icli" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-detail">
                <ul className="rating">
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" className="fill" /></li>
                  <li><i data-feather="star" /></li>
                </ul>
                <a href="product-left-thumbnail.html">
                  <h5 className="name text-title">Eggplant</h5>
                </a>
                <h5 className="price theme-color">$65.21<del>$71.25</del></h5>
              </div>
            </div>
          </div>
        </Slider>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Top sellinng End */}


    </div>
  )
}
