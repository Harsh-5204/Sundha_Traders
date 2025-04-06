import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useParams } from "react-router-dom";
import "../App.css"
export default function Pro_detail() {
  const [details, setDetails] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`https://supermarket-e9sk.onrender.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data.product);
        console.log(data.product);
      });
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
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
  return (
    <div className="link-remover">
      {/* Breadcrumb Section Start */}
      <section className="breadcrumb-section pt-0">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-contain">
                <h2>{details.name}</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <i className="fa-solid fa-house" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">{details.name}</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}

      {/* Product Left Sidebar Start */}
      <section className="product-section">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-xxl-9 col-xl-8 col-lg-7 wow fadeInUp">
              <div className="row g-4">
                <div className="col-xl-6 wow fadeInUp">
                  <div className="product-left-box">
                    <div className="row g-sm-4 g-2">
                      <div className="col-12">
                        <Slider {...settings} className="product-main no-arrow">
                          <div>
                            <div className="slider-image">
                              <img
                                src={details.image}
                                className="img-fluid image_zoom_cls-0 blur-up lazyload"
                                alt="Product"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="slider-image">
                              <img
                                src={details.image}
                                className="img-fluid image_zoom_cls-1 blur-up lazyload"
                                alt="Product"
                              />
                            </div>
                          </div>
                          {/* <div>
          <div className="slider-image">
            <img
              src="../assets/images/veg-2/product/23.png"
              className="img-fluid image_zoom_cls-2 blur-up lazyload"
              alt="Product"
            />
          </div>
        </div>
        <div>
          <div className="slider-image">
            <img
              src="https://www.wildstone.in/cdn/shop/files/HE-talc-pack-of-3_1.jpg?v=1701346489"
              className="img-fluid image_zoom_cls-3 blur-up lazyload"
              alt="Product"
            />
          </div>
        </div>
        <div>
          <div className="slider-image">
            <img
              src="https://www.wildstone.in/cdn/shop/products/001-300-ml.jpg?v=1663390718"
              className="img-fluid image_zoom_cls-4 blur-up lazyload"
              alt="Product"
            />
          </div>
        </div>
        <div>
          <div className="slider-image">
            <img
              src="https://cdn.pixabay.com/photo/2016/02/10/15/48/spices-1191945_640.jpg"
              className="img-fluid image_zoom_cls-5 blur-up lazyload"
              alt="Product"
            />
          </div>
        </div> */}
                        </Slider>
                      </div>
                      {/* <div className="col-12">
                        <div className="left-slider-image left-slider no-arrow slick-top">
                          <div>
                            <div className="sidebar-image">
                              <img
                                src="../assets/images/veg-2/product/21.png"
                                className="img-fluid blur-up lazyload"
                                alt
                              />
                            </div>
                          </div>
                          <div>
                            <div className="sidebar-image">
                              <img
                                src="../assets/images/veg-2/product/22.png"
                                className="img-fluid blur-up lazyload"
                                alt
                              />
                            </div>
                          </div>
                          <div>
                            <div className="sidebar-image">
                              <img
                                src="../assets/images/veg-2/product/23.png"
                                className="img-fluid blur-up lazyload"
                                alt
                              />
                            </div>
                          </div>
                          <div>
                            <div className="sidebar-image">
                              <img
                                src="../assets/images/veg-2/product/24.png"
                                className="img-fluid blur-up lazyload"
                                alt
                              />
                            </div>
                          </div>
                          <div>
                            <div className="sidebar-image">
                              <img
                                src="../assets/images/veg-2/product/21.png"
                                className="img-fluid blur-up lazyload"
                                alt
                              />
                            </div>
                          </div>
                          <div>
                            <div className="sidebar-image">
                              <img
                                src="../assets/images/veg-2/product/22.png"
                                className="img-fluid blur-up lazyload"
                                alt
                              />
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 wow fadeInUp">
                  <div className="right-box-contain">
                    <h6 className="offer-top">30% Off</h6>
                    <h2 className="name">{details.name}</h2>
                    <div className="price-rating">
                      <h3 className="theme-color price">
                        {details.price}₹
                        <del className="text-content">58.46₹</del>
                        <span className="offer theme-color">(8% off)</span>
                      </h3>
                      <div className="product-rating custom-rate">
                        {/* <ul className="rating">
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
                        </ul> */}
                        <span className="review">
                          {details.reviews_count} Customers review
                        </span>
                      </div>
                    </div>
                    <div className="product-contain">
                      <p className="w-100">{details.description}</p>
                    </div>
                    {/* <div className="product-package">
                      <div className="product-title">
                        <h4>Weight </h4>
                      </div>
                      <div className="select-package">
                        <select className="form-control form-select">
                          <option selected>Choose Liter</option>
                          <option value={0}>5 Liter</option>
                          <option value={1}>10 Liter</option>
                          <option value={1}>15 Liter</option>
                          <option value={1}>25 Liter</option>
                        </select>
                      </div>
                    </div> */}
                    {/* <div
                      className="time deal-timer product-deal-timer mx-md-0 mx-auto"
                      id="clockdiv-1"
                      data-hours={1}
                      data-minutes={2}
                      data-seconds={3}
                    >
                      <div className="product-title">
                        <h4>Hurry up! Sales Ends In</h4>
                      </div>
                      <ul>
                        <li>
                          <div className="counter d-block">
                            <div className="days d-block">
                              <h5 />
                            </div>
                            <h6>Days</h6>
                          </div>
                        </li>
                        <li>
                          <div className="counter d-block">
                            <div className="hours d-block">
                              <h5 />
                            </div>
                            <h6>Hours</h6>
                          </div>
                        </li>
                        <li>
                          <div className="counter d-block">
                            <div className="minutes d-block">
                              <h5 />
                            </div>
                            <h6>Min</h6>
                          </div>
                        </li>
                        <li>
                          <div className="counter d-block">
                            <div className="seconds d-block">
                              <h5 />
                            </div>
                            <h6>Sec</h6>
                          </div>
                        </li>
                      </ul>
                    </div> */}
                    <div className="note-box product-package">
                      <div className="cart_qty qty-box product-qty">
                        {/* <div className="input-group">
                          <button
                            type="button"
                            className="qty-left-minus"
                            data-type="minus"
                            data-field
                          >
                            <i className="fa fa-minus" />
                          </button>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={1}
                          />
                          <button
                            type="button"
                            className="qty-right-plus"
                            data-type="plus"
                            data-field
                          >
                            <i className="fa fa-plus" />
                          </button>
                        </div> */}
                      </div>
                      {/* <Link to="/contact"> */}
                        {/* <Link to='/contact' className="btn btn-md bg-dark cart-button text-white w-100 ">
                          Inquiry Now
                        </Link> */}
                      {/* </Link> */}
                    </div>
                    {/* <div className="buy-box">
                      <a href="wishlist.html">
                        <i data-feather="heart" />
                        <span>Add To Wishlist</span>
                      </a>
                      <a href="compare.html">
                        <i data-feather="shuffle" />
                        <span>Add To Compare</span>
                      </a>
                    </div> */}
                    <div className="pickup-box">
                      <div className="product-title">
                        <h4>Store Information</h4>
                      </div>
                      <div className="pickup-detail">
                        <h4 className="text-content w-100">
                          I would like the people that buy my clothes to
                          understand that for me it's one small piece of art. I
                          love the 2000s because everyone started to love haute
                          couture. The only way to do something in depth is to
                          work hard.
                        </h4>
                      </div>
                      <div className="product-info">
                        <ul className="product-info-list product-info-list-2">
                          <li>
                            SKU : <a href="#">GROC5LTR11</a>
                          </li>
                          <li>
                            Unit : <a href="#">{details.unit}</a>
                          </li>
                          <li>
                            Weight : <a href="#">4000 Gms</a>
                          </li>
                          <li>
                            Stock Status :<a href="#"></a>
                          </li>
                          <li>
                            Quantity :
                            <a href="#">
                              {details.quantity_available} available
                            </a>
                          </li>
                        </ul>
                        <Link to='/contact' className="btn btn-md bg-dark cart-button text-white w-100 ">
                          Inquiry Now
                        </Link>
                      </div>
                    </div>
                    {/* <div className="payment-option">
                      <div className="product-title">
                        <h4>Guaranteed Safe Checkout</h4>
                      </div>
                      <ul>
                        <li>
                          <a href="javascript:void(0)">
                            <img
                              src="../assets/images/product/payment/1.svg"
                              className="blur-up lazyload"
                              alt
                            />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <img
                              src="../assets/images/product/payment/2.svg"
                              className="blur-up lazyload"
                              alt
                            />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <img
                              src="../assets/images/product/payment/3.svg"
                              className="blur-up lazyload"
                              alt
                            />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <img
                              src="../assets/images/product/payment/4.svg"
                              className="blur-up lazyload"
                              alt
                            />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <img
                              src="../assets/images/product/payment/5.svg"
                              className="blur-up lazyload"
                              alt
                            />
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-5 d-none d-lg-block wow fadeInUp">
              <div className="right-sidebar-box">
                <div className="vendor-box">
                  <div className="vendor-contain">
                    <div className="vendor-image">
                      <img
                        src="../assets/images/product/vendor.png"
                        className="blur-up lazyload"
                        alt
                      />
                    </div>
                    <div className="vendor-name">
                      <h5 className="fw-500">Noodles Co.</h5>
                      <div className="product-rating mt-1">
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
                        <span>(36 Reviews)</span>
                      </div>
                    </div>
                  </div>
                  <p className="vendor-detail">
                    Noodles &amp; Company is an American fast-casual restaurant
                    that offers international and American noodle dishes and
                    pasta.
                  </p>
                  <div className="vendor-list">
                    <ul>
                      <li>
                        <div className="address-contact">
                          <i data-feather="map-pin" />
                          <h5>
                            Address:{" "}
                            <span className="text-content">
                              1288 Franklin Avenue
                            </span>
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="address-contact">
                          <i data-feather="headphones" />
                          <h5>
                            Contact Seller:{" "}
                            <span className="text-content">
                              (+1)-123-456-789
                            </span>
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pt-25">
                  <div className="hot-line-number">
                    <h5>Hotline Order:</h5>
                    <h6>Mon - Fri: 07:00 am - 08:30PM</h6>
                    <h3>(+1) 123 456 789</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Left Sidebar End */}

      {/* Nav Tab Section Start */}
      <section>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="product-section-box m-0">
                <ul
                  className="nav nav-tabs custom-nav"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="description-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#description"
                      type="button"
                      role="tab"
                    >
                      Description
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="info-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#info"
                      type="button"
                      role="tab"
                    >
                      Additional info
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="care-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#care"
                      type="button"
                      role="tab"
                    >
                      Care Instructions
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="review-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#review"
                      type="button"
                      role="tab"
                    >
                      Review
                    </button>
                  </li>
                </ul>
                <div className="tab-content custom-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="description"
                    role="tabpanel"
                  >
                    <div className="product-description">
                      <div className="nav-desh">
                        <p>
                          Discover the epitome of freshness and health with our
                          premium quality oil. Sourced from the finest
                          ingredients, our oil is carefully crafted to bring you
                          an exceptional culinary experience that will tantalize
                          your taste buds and nourish your body.
                        </p>
                        <p>
                          With a professional touch, our oil stands out in the
                          market for its unparalleled purity and nutritional
                          benefits. Immerse yourself in a world of culinary
                          excellence as you explore the rich flavors and
                          delicate aromas that our oil offers.
                        </p>
                        <p>
                          Indulge in the goodness of our oil, which is carefully
                          extracted using state-of-the-art techniques to
                          preserve its natural nutrients, vitamins, and
                          minerals. Every drop is a testament to our commitment
                          to quality and your well-being.
                        </p>
                        <p>
                          Whether you're a seasoned chef or a passionate home
                          cook, our oil is the perfect companion to elevate your
                          dishes to new heights. Its versatility knows no
                          bounds, making it an ideal choice for sautéing,
                          frying, baking, or simply drizzling over your favorite
                          salads.
                        </p>
                        <p>
                          Rest assured that our oil undergoes rigorous testing
                          to ensure it meets the highest industry standards. It
                          is free from any additives, preservatives, or
                          artificial flavors, allowing you to savor the true
                          essence of nature in every bite.
                        </p>
                        <p>
                          Experience the difference that our fresh and healthy
                          oil can bring to your kitchen. Elevate your culinary
                          creations, embrace a healthier lifestyle, and embark
                          on a flavorful journey with our premium oil. Order now
                          and join the countless satisfied customers who have
                          made it a staple in their kitchens.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="info" role="tabpanel">
                    <div className="table-responsive">
                      <table className="table info-table">
                        <tbody>
                          <tr>
                            <td>Specialty</td>
                            <td>Vegetarian</td>
                          </tr>
                          <tr>
                            <td>Ingredient Type</td>
                            <td>Vegetarian</td>
                          </tr>
                          <tr>
                            <td>Brand</td>
                            <td>Lavian Exotique</td>
                          </tr>
                          <tr>
                            <td>Form</td>
                            <td>Bar Brownie</td>
                          </tr>
                          <tr>
                            <td>Package Information</td>
                            <td>Box</td>
                          </tr>
                          <tr>
                            <td>Manufacturer</td>
                            <td>Prayagh Nutri Product Pvt Ltd</td>
                          </tr>
                          <tr>
                            <td>Item part number</td>
                            <td>LE 014 - 20pcs Crème Bakes (Pack of 2)</td>
                          </tr>
                          <tr>
                            <td>Net Quantity</td>
                            <td>40.00 count</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="care" role="tabpanel">
                    <div className="information-box">
                      <ul>
                        <li>
                          Store cream cakes in a refrigerator. Fondant cakes
                          should be stored in an air conditioned environment.
                        </li>
                        <li>
                          Slice and serve the cake at room temperature and make
                          sure it is not exposed to heat.
                        </li>
                        <li>Use a serrated knife to cut a fondant cake.</li>
                        <li>
                          Sculptural elements and figurines may contain wire
                          supports or toothpicks or wooden skewers for support.
                        </li>
                        <li>
                          Please check the placement of these items before
                          serving to small children.
                        </li>
                        <li>The cake should be consumed within 24 hours.</li>
                        <li>Enjoy your cake!</li>
                      </ul>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="review" role="tabpanel">
                    <div className="review-box">
                      <div className="row">
                        <div className="col-xl-5">
                          <div className="product-rating-box">
                            <div className="row">
                              <div className="col-xl-12">
                                <div className="product-main-rating">
                                  <h2>
                                    3.40
                                    <i data-feather="star" />
                                  </h2>
                                  <h5>5 Overall Rating</h5>
                                </div>
                              </div>
                              <div className="col-xl-12">
                                <ul className="product-rating-list">
                                  <li>
                                    <div className="rating-product">
                                      <h5>
                                        5<i data-feather="star" />
                                      </h5>
                                      <div className="progress">
                                        <div
                                          className="progress-bar"
                                          style={{ width: "40%" }}
                                        ></div>
                                      </div>
                                      <h5 className="total">2</h5>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="rating-product">
                                      <h5>
                                        4<i data-feather="star" />
                                      </h5>
                                      <div className="progress">
                                        <div
                                          className="progress-bar"
                                          style={{ width: "20%" }}
                                        ></div>
                                      </div>
                                      <h5 className="total">1</h5>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="rating-product">
                                      <h5>
                                        3<i data-feather="star" />
                                      </h5>
                                      <div className="progress">
                                        <div
                                          className="progress-bar"
                                          style={{ width: "0%" }}
                                        ></div>
                                      </div>
                                      <h5 className="total">0</h5>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="rating-product">
                                      <h5>
                                        2<i data-feather="star" />
                                      </h5>
                                      <div className="progress">
                                        <div
                                          className="progress-bar"
                                          style={{ width: "20%" }}
                                        ></div>
                                      </div>
                                      <h5 className="total">1</h5>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="rating-product">
                                      <h5>
                                        1<i data-feather="star" />
                                      </h5>
                                      <div className="progress">
                                        <div
                                          className="progress-bar"
                                          style={{ width: "20%" }}
                                        ></div>
                                      </div>
                                      <h5 className="total">1</h5>
                                    </div>
                                  </li>
                                </ul>
                                <div className="review-title-2">
                                  <h4 className="fw-bold">
                                    Review this product
                                  </h4>
                                  <p>Let other customers know what you think</p>
                                  <button
                                    className="btn"
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#writereview"
                                  >
                                    Write a review
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-7">
                          <div className="review-people">
                            <ul className="review-list">
                              <li>
                                <div className="people-box">
                                  <div>
                                    <div className="people-image people-text">
                                      <img
                                        alt="user"
                                        className="img-fluid "
                                        src="../assets/images/review/1.jpg"
                                      />
                                    </div>
                                  </div>
                                  <div className="people-comment">
                                    <div className="people-name">
                                      <a
                                        href="javascript:void(0)"
                                        className="name"
                                      >
                                        Jack Doe
                                      </a>
                                      <div className="date-time">
                                        <h6 className="text-content">
                                          {" "}
                                          29 Sep 2023 06:40:PM
                                        </h6>
                                        <div className="product-rating">
                                          <ul className="rating">
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              />
                                            </li>
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              />
                                            </li>
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              />
                                            </li>
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              />
                                            </li>
                                            <li>
                                              <i data-feather="star" />
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="reply">
                                      <p>
                                        Avoid this product. The quality is
                                        terrible, and it started falling apart
                                        almost immediately. I wish I had read
                                        more reviews before buying. Lesson
                                        learned.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="people-box">
                                  <div>
                                    <div className="people-image people-text">
                                      <img
                                        alt="user"
                                        className="img-fluid "
                                        src="../assets/images/review/2.jpg"
                                      />
                                    </div>
                                  </div>
                                  <div className="people-comment">
                                    <div className="people-name">
                                      <a
                                        href="javascript:void(0)"
                                        className="name"
                                      >
                                        Jessica Miller
                                      </a>
                                      <div className="date-time">
                                        <h6 className="text-content">
                                          {" "}
                                          29 Sep 2023 06:34:PM
                                        </h6>
                                        <div className="product-rating">
                                          <div className="product-rating">
                                            <ul className="rating">
                                              <li>
                                                <i
                                                  data-feather="star"
                                                  className="fill"
                                                />
                                              </li>
                                              <li>
                                                <i
                                                  data-feather="star"
                                                  className="fill"
                                                />
                                              </li>
                                              <li>
                                                <i
                                                  data-feather="star"
                                                  className="fill"
                                                />
                                              </li>
                                              <li>
                                                <i
                                                  data-feather="star"
                                                  className="fill"
                                                />
                                              </li>
                                              <li>
                                                <i data-feather="star" />
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="reply">
                                      <p>
                                        Honestly, I regret buying this item. The
                                        quality is subpar, and it feels like a
                                        waste of money. I wouldn't recommend it
                                        to anyone.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="people-box">
                                  <div>
                                    <div className="people-image people-text">
                                      <img
                                        alt="user"
                                        className="img-fluid "
                                        src="../assets/images/review/3.jpg"
                                      />
                                    </div>
                                  </div>
                                  <div className="people-comment">
                                    <div className="people-name">
                                      <a
                                        href="javascript:void(0)"
                                        className="name"
                                      >
                                        Rome Doe
                                      </a>
                                      <div className="date-time">
                                        <h6 className="text-content">
                                          {" "}
                                          29 Sep 2023 06:18:PM
                                        </h6>
                                        <div className="product-rating">
                                          <ul className="rating">
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              />
                                            </li>
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              />
                                            </li>
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              />
                                            </li>
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              />
                                            </li>
                                            <li>
                                              <i data-feather="star" />
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="reply">
                                      <p>
                                        I am extremely satisfied with this
                                        purchase. The item arrived promptly, and
                                        the quality is exceptional. It's evident
                                        that the makers paid attention to
                                        detail. Overall, a fantastic buy!
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="people-box">
                                  <div>
                                    <div className="people-image people-text">
                                      <img
                                        alt="user"
                                        className="img-fluid "
                                        src="../assets/images/review/4.jpg"
                                      />
                                    </div>
                                  </div>
                                  <div className="people-comment">
                                    <div className="people-name">
                                      <a
                                        href="javascript:void(0)"
                                        className="name"
                                      >
                                        Sarah Davis
                                      </a>
                                      <div className="date-time">
                                        <h6 className="text-content">
                                          {" "}
                                          29 Sep 2023 05:58:PM
                                        </h6>
                                        <div className="product-rating">
                                          <ul className="rating">
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              />
                                            </li>
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              />
                                            </li>
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              />
                                            </li>
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              />
                                            </li>
                                            <li>
                                              <i data-feather="star" />
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="reply">
                                      <p>
                                        I am genuinely delighted with this item.
                                        It's a total winner! The quality is
                                        superb, and it has added so much
                                        convenience to my daily routine. Highly
                                        satisfied customer!
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="people-box">
                                  <div>
                                    <div className="people-image people-text">
                                      <img
                                        alt="user"
                                        className="img-fluid "
                                        src="../assets/images/review/5.jpg"
                                      />
                                    </div>
                                  </div>
                                  <div className="people-comment">
                                    <div className="people-name">
                                      <a
                                        href="javascript:void(0)"
                                        className="name"
                                      >
                                        John Doe
                                      </a>
                                      <div className="date-time">
                                        <h6 className="text-content">
                                          {" "}
                                          29 Sep 2023 05:22:PM
                                        </h6>
                                        <div className="product-rating">
                                          <ul className="rating">
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              />
                                            </li>
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              />
                                            </li>
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              />
                                            </li>
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              />
                                            </li>
                                            <li>
                                              <i data-feather="star" />
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="reply">
                                      <p>
                                        Very impressed with this purchase. The
                                        item is of excellent quality, and it has
                                        exceeded my expectations.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Nav Tab Section End */}

      {/* Related Product Section Start */}
      <section className="product-list-section section-b-space">
        <div className="container-fluid-lg">
          <div className="title">
            <h2>Related Products</h2>
            <span className="title-leaf">
              <svg className="icon-width">
                <use xlinkHref="../assets/svg/leaf.svg#leaf" />
              </svg>
            </span>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="slider-7_1 arrow-slider img-slider">
                <Slider
                  {...settings3}
                  className="slider-7_1 arrow-slider img-slider"
                >
                  <div>
                    <div className="product-box-4 wow fadeInUp">
                      <div className="product-image product-image-2">
                        <a href="product-left-thumbnail.html">
                          <img
                            src="../assets/images/grocery/product/fruits-vegetables/1.png"
                            className="img-fluid blur-up lazyload"
                            alt="Bell Pepper"
                          />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" title="Quick View">
                            <a
                              href="javascript:void(0)"
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                            >
                              <i className="iconly-Show icli" />
                            </a>
                          </li>
                          <li data-bs-toggle="tooltip" title="Wishlist">
                            <a
                              href="javascript:void(0)"
                              className="notifi-wishlist"
                            >
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
                        <a href="product-left-thumbnail.html">
                          <h5 className="name text-title">Bell Pepper</h5>
                        </a>
                        <h5 className="price theme-color">
                          $65.21<del>$71.25</del>
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="product-box-4 wow fadeInUp">
                      <div className="product-image product-image-2">
                        <a href="product-left-thumbnail.html">
                          <img
                            src="../assets/images/grocery/product/fruits-vegetables/2.png"
                            className="img-fluid blur-up lazyload"
                            alt="Eggplant"
                          />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" title="Quick View">
                            <a
                              href="javascript:void(0)"
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                            >
                              <i className="iconly-Show icli" />
                            </a>
                          </li>
                          <li data-bs-toggle="tooltip" title="Wishlist">
                            <a
                              href="javascript:void(0)"
                              className="notifi-wishlist"
                            >
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
                        <a href="product-left-thumbnail.html">
                          <h5 className="name text-title">Eggplant</h5>
                        </a>
                        <h5 className="price theme-color">
                          $65.21<del>$71.25</del>
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="product-box-4 wow fadeInUp">
                      <div className="product-image product-image-2">
                        <a href="product-left-thumbnail.html">
                          <img
                            src="../assets/images/grocery/product/fruits-vegetables/2.png"
                            className="img-fluid blur-up lazyload"
                            alt="Eggplant"
                          />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" title="Quick View">
                            <a
                              href="javascript:void(0)"
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                            >
                              <i className="iconly-Show icli" />
                            </a>
                          </li>
                          <li data-bs-toggle="tooltip" title="Wishlist">
                            <a
                              href="javascript:void(0)"
                              className="notifi-wishlist"
                            >
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
                        <a href="product-left-thumbnail.html">
                          <h5 className="name text-title">Eggplant</h5>
                        </a>
                        <h5 className="price theme-color">
                          $65.21<del>$71.25</del>
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="product-box-4 wow fadeInUp">
                      <div className="product-image product-image-2">
                        <a href="product-left-thumbnail.html">
                          <img
                            src="../assets/images/grocery/product/fruits-vegetables/2.png"
                            className="img-fluid blur-up lazyload"
                            alt="Eggplant"
                          />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" title="Quick View">
                            <a
                              href="javascript:void(0)"
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                            >
                              <i className="iconly-Show icli" />
                            </a>
                          </li>
                          <li data-bs-toggle="tooltip" title="Wishlist">
                            <a
                              href="javascript:void(0)"
                              className="notifi-wishlist"
                            >
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
                        <a href="product-left-thumbnail.html">
                          <h5 className="name text-title">Eggplant</h5>
                        </a>
                        <h5 className="price theme-color">
                          $65.21<del>$71.25</del>
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="product-box-4 wow fadeInUp">
                      <div className="product-image product-image-2">
                        <a href="product-left-thumbnail.html">
                          <img
                            src="../assets/images/grocery/product/fruits-vegetables/2.png"
                            className="img-fluid blur-up lazyload"
                            alt="Eggplant"
                          />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" title="Quick View">
                            <a
                              href="javascript:void(0)"
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                            >
                              <i className="iconly-Show icli" />
                            </a>
                          </li>
                          <li data-bs-toggle="tooltip" title="Wishlist">
                            <a
                              href="javascript:void(0)"
                              className="notifi-wishlist"
                            >
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
                        <a href="product-left-thumbnail.html">
                          <h5 className="name text-title">Eggplant</h5>
                        </a>
                        <h5 className="price theme-color">
                          $65.21<del>$71.25</del>
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="product-box-4 wow fadeInUp">
                      <div className="product-image product-image-2">
                        <a href="product-left-thumbnail.html">
                          <img
                            src="../assets/images/grocery/product/fruits-vegetables/2.png"
                            className="img-fluid blur-up lazyload"
                            alt="Eggplant"
                          />
                        </a>
                        <ul className="option">
                          <li data-bs-toggle="tooltip" title="Quick View">
                            <a
                              href="javascript:void(0)"
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                            >
                              <i className="iconly-Show icli" />
                            </a>
                          </li>
                          <li data-bs-toggle="tooltip" title="Wishlist">
                            <a
                              href="javascript:void(0)"
                              className="notifi-wishlist"
                            >
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
                        <a href="product-left-thumbnail.html">
                          <h5 className="name text-title">Eggplant</h5>
                        </a>
                        <h5 className="price theme-color">
                          $65.21<del>$71.25</del>
                        </h5>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Related Product Section End */}
    </div>
  );
}
