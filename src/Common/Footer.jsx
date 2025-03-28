import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='link-remover'>
      <footer className="section-t-space footer-section-2 footer-color-2">
  <div className="container-fluid-lg">
    <div className="main-footer">
      <div className="row g-md-4 gy-sm-5">
        <div className="col-xxl-3 col-xl-4 col-sm-6">
          <Link to="/" className="foot-logo theme-logo">
          {/* <h1>Maa Sundha Traders</h1> */}
            <img src="../assets/images/logo/without_bg.png" style={{height:'130px'}} className="img-fluid blur-up lazyload" alt />
          </Link>
          <p className="information-text information-text-2">it is a long established fact that a reader will
            be distracted by the readable content.</p>
          <ul className="social-icon">
            <li className="light-bg">
              <a href="https://www.facebook.com/" className="footer-link-color">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="light-bg">
              <a href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="footer-link-color">
                <i className="fab fa-google" />
              </a>
            </li>
            <li className="light-bg">
              <a href="https://twitter.com/i/flow/login" className="footer-link-color">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="light-bg">
              <a href="https://www.instagram.com/" className="footer-link-color">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li className="light-bg">
              <a href="https://in.pinterest.com/" className="footer-link-color">
                <i className="fab fa-pinterest-p" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-xxl-2 col-xl-4 col-sm-6">
          <div className="footer-title">
            <h4 className="text-white">About Sundha Traders</h4>
          </div>
          <ul className="footer-list footer-contact footer-list-light">
            <li>
              <Link to="/about" className="light-text">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="light-text">Contact Us</Link>
            </li>
            {/* <li>
              <a href="term_condition.html" className="light-text">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="careers.html" className="light-text">Careers</a>
            </li>
            <li>
              <a href="blog-list.html" className="light-text">Latest Blog</a>
            </li> */}
          </ul>
        </div>
        <div className="col-xxl-2 col-xl-4 col-sm-6">
          <div className="footer-title">
            <h4 className="text-white">Useful Link</h4>
          </div>
          <ul className="footer-list footer-list-light footer-contact">
            <li>
              <a href="order-success.html" className="light-text">Your Order</a>
            </li>
            <li>
              <a href="user-dashboard.html" className="light-text">Your Account</a>
            </li>
            <li>
              <a href="order-tracking.html" className="light-text">Track Orders</a>
            </li>
            <li>
              <a href="wishlist.html" className="light-text">Your Wishlist</a>
            </li>
            <li>
              <a href="faq.html" className="light-text">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="col-xxl-2 col-xl-4 col-sm-6">
          <div className="footer-title">
            <h4 className="text-white">Categories</h4>
          </div>
          <ul className="footer-list footer-list-light footer-contact">
            <li>
              <a href="vegetables-demo.html" className="light-text">Fresh Vegetables</a>
            </li>
            <li>
              <a href="spice-demo.html" className="light-text">Hot Spice</a>
            </li>
            <li>
              <a href="bags-demo.html" className="light-text">Brand New Bags</a>
            </li>
            <li>
              <a href="bakery-demo.html" className="light-text">New Bakery</a>
            </li>
            <li>
              <a href="grocery-demo.html" className="light-text">New Grocery</a>
            </li>
          </ul>
        </div>
        <div className="col-xxl-3 col-xl-4 col-sm-6">
          <div className="footer-title">
            <h4 className="text-white">Store information</h4>
          </div>
          <ul className="footer-address footer-contact">
            <li>
              <Link to="/contact" className="light-text">
                <div className="inform-box flex-start-box">
                  <i data-feather="map-pin" />
                  <p>Maa Sundha Traders,  store Sabarmati 380019</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="tel:+91 8320675758 " className="light-text">
                <div className="inform-box">
                  <i data-feather="phone" />
                  <p>Call us: +91 8320675758 </p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="mailto: nikhilprajapati03063@gmail.com" className="light-text">
                <div className="inform-box">
                  <i data-feather="mail" />
                  <p>Email:nikhilprajapati03063@gmail.com</p>
                </div>
              </Link>
            </li>
            {/* <li>
              <a href="javascript:void(0)" className="light-text">
                <div className="inform-box">
                  <i data-feather="printer" />
                  <p>Fax: 123456</p>
                </div>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
    {/* <div className="sub-footer sub-footer-lite section-b-space section-t-space">
      <div className="left-footer">
        <p className="light-text">2022 Copyright By Themeforest Powered By Pixelstrap</p>
      </div>
      <ul className="payment-box">
        <li>
          <img src="../assets/images/icon/paymant/visa.png" className="blur-up lazyload" alt />
        </li>
        <li>
          <img src="../assets/images/icon/paymant/discover.png" alt className="blur-up lazyload" />
        </li>
        <li>
          <img src="../assets/images/icon/paymant/american.png" alt className="blur-up lazyload" />
        </li>
        <li>
          <img src="../assets/images/icon/paymant/master-card.png" alt className="blur-up lazyload" />
        </li>
        <li>
          <img src="../assets/images/icon/paymant/giro-pay.png" alt className="blur-up lazyload" />
        </li>
      </ul>
    </div> */}
  </div>
</footer>


    </div>
  )
}
