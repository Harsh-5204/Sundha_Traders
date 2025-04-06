import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 3 slides per row
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
        },
      },
    ],
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides per row
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div>
      <div>
        {/* Breadcrumb Section Start */}
        <section className="breadcrumb-section pt-0">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-contain">
                  <h2>About Us</h2>
                  <nav>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <Link to="/">
                          <i className="fa-solid fa-house" />
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">About Us</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Breadcrumb Section End */}
        {/* Fresh Vegetable Section Start */}
        <section className="fresh-vegetable-section section-lg-space">
          <div className="container-fluid-lg">
            <div className="row gx-xl-5 gy-xl-0 g-3 ratio_148_1">
              <div className="col-xl-6 col-12">
                <div className="row g-sm-4 g-2">
                  <div className="col-6">
                    <div className="fresh-image-2">
                      <div>
                        <img
                          src="../assets/images/inner-page/about-us/11.jpg"
                          className="bg-img blur-up lazyload" style={{height:'500px'}}
                          alt
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="fresh-image">
                      <div>
                        <img
                          src="../assets/images/inner-page/about-us/22.jpg"
                          className="bg-img blur-up lazyload" style={{height:'600px'}}
                          alt
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-12">
                <div className="fresh-contain p-center-left">
                  <div>
                    <div className="review-title">
                      <h4>About Us</h4>
                      <h2>We Give Best Deal Compare To Market</h2>
                    </div>
                    <div className="delivery-list">
                      <h5>
                      
                        Sundha Traders – The Ultimate Destination for Savings &
                        Quality! 🛒
                      </h5>
                      <p className="text-content">
                        Your One-Stop Supermarket! Sundha Traders is a leading
                        supermarket owned by Nikhil Kumavat, dedicated to
                        providing high-quality grocery, personal care, and
                        household products at the best discounts. Whether you're
                        shopping for daily essentials, skincare, health
                        products, or home supplies, we ensure that you get the
                        lowest prices without compromising on quality.
                        <br /><br/>
                        Why Shop With Us? <br />
                        ✅ Best Discounts on all products 💰 <br />
                        ✅ Wide Range of grocery, personal care, and household
                        items 🏠 <br />
                        ✅ Convenient Shopping Experience with easy navigation
                        and secure checkout 🛍️
                        <br />✅ Premium Quality products from trusted brands
                        🌟.
                      </p>
                      {/* <ul className="delivery-box">
                        <li>
                          <div className="delivery-box">
                            <div className="delivery-icon">
                              <img
                                src="../assets/svg/3/delivery.svg"
                                className="blur-up lazyload"
                                alt
                              />
                            </div>
                            <div className="delivery-detail">
                              <h5 className="text">
                                Free delivery for all orders
                              </h5>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="delivery-box">
                            <div className="delivery-icon">
                              <img
                                src="../assets/svg/3/leaf.svg"
                                className="blur-up lazyload"
                                alt
                              />
                            </div>
                            <div className="delivery-detail">
                              <h5 className="text">Only fresh foods</h5>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="delivery-box">
                            <div className="delivery-icon">
                              <img
                                src="../assets/svg/3/delivery.svg"
                                className="blur-up lazyload"
                                alt
                              />
                            </div>
                            <div className="delivery-detail">
                              <h5 className="text">
                                Free delivery for all orders
                              </h5>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="delivery-box">
                            <div className="delivery-icon">
                              <img
                                src="../assets/svg/3/leaf.svg"
                                className="blur-up lazyload"
                                alt
                              />
                            </div>
                            <div className="delivery-detail">
                              <h5 className="text">Only fresh foods</h5>
                            </div>
                          </div>
                        </li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Fresh Vegetable Section End */}
        {/* Client Section Start */}
        <section className="client-section section-lg-space">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-12">
                <div className="about-us-title text-center">
                  <h4>What We Do</h4>
                  <h2 className="center">We are Trusted by Clients</h2>
                </div>
                <div className="slider-3_1 product-wrapper">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 mb-2">
                      <div className="clint-contain">
                        <div className="client-icon">
                          <img
                            src="../assets/svg/3/work.svg"
                            className="blur-up lazyload"
                            alt
                          />
                        </div>
                        <h2>10</h2>
                        <h4>Business Years</h4>
                        <p>
                          A coffee shop is a small business that sells coffee,
                          pastries, and other morning goods. There are many
                          different types of coffee shops around the world.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 mb-2">
                      <div className="clint-contain">
                        <div className="client-icon">
                          <img
                            src="../assets/svg/3/buy.svg"
                            className="blur-up lazyload"
                            alt
                          />
                        </div>
                        <h2>80 K+</h2>
                        <h4>Products Sales</h4>
                        <p>
                          Some coffee shops have a seating area, while some just
                          have a spot to order and then go somewhere else to sit
                          down. The coffee shop that I am going to.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 mb-2">
                      <div className="clint-contain">
                        <div className="client-icon">
                          <img
                            src="../assets/svg/3/user.svg"
                            className="blur-up lazyload"
                            alt
                          />
                        </div>
                        <h2>90%</h2>
                        <h4>Happy Customers</h4>
                        <p>
                          My goal for this coffee shop is to be able to get a
                          coffee and get on with my day. It's a Thursday morning
                          and I am rushing between meetings.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Client Section End */}
        {/* Team Section Start */}
        <section className="team-section section-lg-space">
          <div className="container-fluid-lg">
            <div className="about-us-title text-center">
              <h4 className="text-content">Our Creative Team</h4>
              <h2 className="center">fastkart team member</h2>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="slider-user product-wrapper">
                  <div className="container">
                    <Slider {...settings}>
                      {/* Team Member 1 */}
                      <div className="team-box">
                        <div className="team-image">
                          <img
                            src="../assets/images/inner-page/user/1.jpg"
                            className="img-fluid blur-up lazyload"
                            alt="Anna Baranov"
                          />
                        </div>
                        <div className="team-name">
                          <h3>Anna Baranov</h3>
                          <h5>Marketing</h5>
                          <p>
                            cheeseburger airedale mozzarella the big cheese
                            fondue.
                          </p>
                          <ul className="team-media">
                            <li>
                              <a
                                href="https://www.facebook.com/"
                                className="fb-bg"
                              >
                                <i className="fa-brands fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://in.pinterest.com/"
                                className="pint-bg"
                              >
                                <i className="fa-brands fa-pinterest-p" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://twitter.com/"
                                className="twitter-bg"
                              >
                                <i className="fa-brands fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.instagram.com/"
                                className="insta-bg"
                              >
                                <i className="fa-brands fa-instagram" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Team Member 2 */}
                      <div className="team-box">
                        <div className="team-image">
                          <img
                            src="../assets/images/inner-page/user/2.jpg"
                            className="img-fluid blur-up lazyload"
                            alt="Anna Baranov"
                          />
                        </div>
                        <div className="team-name">
                          <h3>Anna Baranov</h3>
                          <h5>Marketing</h5>
                          <p>
                            cheese on toast mozzarella bavarian bergkase smelly
                            cheese cheesy feet.
                          </p>
                          <ul className="team-media">
                            <li>
                              <a
                                href="https://www.facebook.com/"
                                className="fb-bg"
                              >
                                <i className="fa-brands fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://in.pinterest.com/"
                                className="pint-bg"
                              >
                                <i className="fa-brands fa-pinterest-p" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://twitter.com/"
                                className="twitter-bg"
                              >
                                <i className="fa-brands fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.instagram.com/"
                                className="insta-bg"
                              >
                                <i className="fa-brands fa-instagram" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Team Member 3 */}
                      <div className="team-box">
                        <div className="team-image">
                          <img
                            src="../assets/images/inner-page/user/3.jpg"
                            className="img-fluid blur-up lazyload"
                            alt="Anna Baranov"
                          />
                        </div>
                        <div className="team-name">
                          <h3>Anna Baranov</h3>
                          <h5>Marketing</h5>
                          <p>
                            camembert de normandie. Bocconcini rubber cheese
                            fromage frais port-salut.
                          </p>
                          <ul className="team-media">
                            <li>
                              <a
                                href="https://www.facebook.com/"
                                className="fb-bg"
                              >
                                <i className="fa-brands fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://in.pinterest.com/"
                                className="pint-bg"
                              >
                                <i className="fa-brands fa-pinterest-p" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://twitter.com/"
                                className="twitter-bg"
                              >
                                <i className="fa-brands fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.instagram.com/"
                                className="insta-bg"
                              >
                                <i className="fa-brands fa-instagram" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Team Member 4 */}
                      <div className="team-box">
                        <div className="team-image">
                          <img
                            src="../assets/images/inner-page/user/4.jpg"
                            className="img-fluid blur-up lazyload"
                            alt="Anna Baranov"
                          />
                        </div>
                        <div className="team-name">
                          <h3>Anna Baranov</h3>
                          <h5>Marketing</h5>
                          <p>
                            Fondue stinking bishop goat. Macaroni cheese croque
                            monsieur cottage cheese.
                          </p>
                          <ul className="team-media">
                            <li>
                              <a
                                href="https://www.facebook.com/"
                                className="fb-bg"
                              >
                                <i className="fa-brands fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://in.pinterest.com/"
                                className="pint-bg"
                              >
                                <i className="fa-brands fa-pinterest-p" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://twitter.com/"
                                className="twitter-bg"
                              >
                                <i className="fa-brands fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.instagram.com/"
                                className="insta-bg"
                              >
                                <i className="fa-brands fa-instagram" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Team Section End */}
        {/* Review Section Start */}
        <section className="review-section section-lg-space">
          <div className="container-fluid">
            <div className="about-us-title text-center">
              <h4 className="text-content">Latest Testimonials</h4>
              <h2 className="center">What people say</h2>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="slider-4-half product-wrapper ">
                  <Slider {...settings}>
                    <div className="reviewer-box">
                      <i className="fa-solid fa-quote-right" />
                      <div className="product-rating">
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
                      </div>
                      <h3>Top Quality, Beautiful Location</h3>
                      <p>
                        "I usually try to keep my sadness pent up inside where
                        it can fester quietly as a mental illness."
                      </p>
                      <div className="reviewer-profile">
                        <div className="reviewer-image">
                          <img
                            src="../assets/images/inner-page/user/1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="reviewer-name">
                          <h4>Betty J. Turner</h4>
                          <h6>CTO, Company</h6>
                        </div>
                      </div>
                    </div>

                    <div className="reviewer-box">
                      <i className="fa-solid fa-quote-right" />
                      <div className="product-rating">
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
                      </div>
                      <h3>Top Quality, Beautiful Location</h3>
                      <p>
                        "My busy schedule leaves little, if any, time for
                        blogging and social media."
                      </p>
                      <div className="reviewer-profile">
                        <div className="reviewer-image">
                          <img
                            src="../assets/images/inner-page/user/2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="reviewer-name">
                          <h4>Alfredo S. Rocha</h4>
                          <h6>Project Manager</h6>
                        </div>
                      </div>
                    </div>

                    <div className="reviewer-box">
                      <i className="fa-solid fa-quote-right" />
                      <div className="product-rating">
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
                      </div>
                      <h3>Top Quality, Beautiful Location</h3>
                      <p>
                        "Professional, responsive, and able to keep up with
                        ever-changing demand and tight deadlines."
                      </p>
                      <div className="reviewer-profile">
                        <div className="reviewer-image">
                          <img
                            src="../assets/images/inner-page/user/3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="reviewer-name">
                          <h4>Donald C. Spurr</h4>
                          <h6>Sale Agent</h6>
                        </div>
                      </div>
                    </div>

                    <div className="reviewer-box">
                      <i className="fa-solid fa-quote-right" />
                      <div className="product-rating">
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
                      </div>
                      <h3>Top Quality, Beautiful Location</h3>
                      <p>
                        "After being forced to move twice within five years, our
                        customers had a hard time finding us."
                      </p>
                      <div className="reviewer-profile">
                        <div className="reviewer-image">
                          <img
                            src="../assets/images/inner-page/user/4.jpg"
                            alt=""
                          />
                        </div>
                        <div className="reviewer-name">
                          <h4>Terry G. Fain</h4>
                          <h6>Photographer</h6>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Review Section End */}
      </div>
    </div>
  );
}
