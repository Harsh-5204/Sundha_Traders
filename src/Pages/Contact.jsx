import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <div className="link-remover">
        {/* Breadcrumb Section Start */}
        <section className="breadcrumb-section pt-0">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-contain">
                  <h2>Contact Us</h2>
                  <nav>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <Link to="/">
                          <i className="fa-solid fa-house" />
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">Contact Us</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Breadcrumb Section End */}
        {/* Contact Box Section Start */}
        <section className="contact-box-section">
          <div className="container-fluid-lg">
            <div className="row g-lg-5 g-3">
              <div className="col-lg-6">
                <div className="left-sidebar-box">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="contact-image">
                        <img
                          src="../assets/images/inner-page/contact-us.png"
                          className="img-fluid blur-up lazyloaded"
                          alt
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="contact-title">
                        <h3>Get In Touch</h3>
                      </div>
                      <div className="contact-detail">
                        <div className="row g-4">
                          <div className="col-xxl-6 col-lg-12 col-sm-6">
                          <Link to='tel:+91 8320675758' style={{color:'black'}}>
                            <div className="contact-detail-box">
                              <div className="contact-icon">
                                <i className="fa-solid fa-phone" />
                              </div>
                              <div className="contact-detail-title">
                                <h4>Phone</h4>
                              </div>
                              <div className="contact-detail-contain">
                                <p>+91 8320675758</p>
                              </div>
                            </div>
                              </Link>
                          </div>
                          <div className="col-xxl-6 col-lg-12 col-sm-6">
                          <Link to='mailto:nikhilprajapati03063@gmail.com' style={{color:'black'}}>
                            <div className="contact-detail-box">
                              <div className="contact-icon">
                                <i className="fa-solid fa-envelope" />
                              </div>
                              <div className="contact-detail-title">
                                <h4>Email</h4>
                              </div>
                              <div className="contact-detail-contain">
                                <p>nikhilprajapati03063@gmail.com</p>
                              </div>
                            </div>
                          </Link>
                          </div>
                          <div className="col-xxl-6 col-lg-12 col-sm-6">
                            <div className="contact-detail-box">
                              <div className="contact-icon">
                                <i className="fa-solid fa-location-dot" />
                              </div>
                              <div className="contact-detail-title">
                                <h4>Main office</h4>
                              </div>
                              <div className="contact-detail-contain">
                                <p>Sabarmati</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-6 col-lg-12 col-sm-6">
                            <div className="contact-detail-box">
                              <div className="contact-icon">
                                <i className="fa-solid fa-building" />
                              </div>
                              <div className="contact-detail-title">
                                <h4>Home Address</h4>
                              </div>
                              <div className="contact-detail-contain">
                                <p>Sarvottamnagar Sabarmari</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="title d-xxl-none d-block">
                  <h2>Contact Us</h2>
                </div>
                <div className="right-sidebar-box">
                  <div className="row">
                    <div className="col-xxl-6 col-lg-12 col-sm-6">
                      <div className="mb-md-4 mb-3 custom-form">
                        <label
                          htmlFor="exampleFormControlInput"
                          className="form-label"
                        >
                          First Name
                        </label>
                        <div className="custom-input">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput"
                            placeholder="Enter First Name"
                          />
                          <i className="fa-solid fa-user" />
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-lg-12 col-sm-6">
                      <div className="mb-md-4 mb-3 custom-form">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Last Name
                        </label>
                        <div className="custom-input">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Enter Last Name"
                          />
                          <i className="fa-solid fa-user" />
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-lg-12 col-sm-6">
                      <div className="mb-md-4 mb-3 custom-form">
                        <label
                          htmlFor="exampleFormControlInput2"
                          className="form-label"
                        >
                          Email Address
                        </label>
                        <div className="custom-input">
                          <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput2"
                            placeholder="Enter Email Address"
                          />
                          <i className="fa-solid fa-envelope" />
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-lg-12 col-sm-6">
                      <div className="mb-md-4 mb-3 custom-form">
                        <label
                          htmlFor="exampleFormControlInput3"
                          className="form-label"
                        >
                          Phone Number
                        </label>
                        <div className="custom-input">
                          <input
                            type="tel"
                            className="form-control"
                            id="exampleFormControlInput3"
                            placeholder="Enter Your Phone Number"
                            maxLength={10}
                            oninput="javascript: if (this.value.length > this.maxLength) this.value =
                                      this.value.slice(0, this.maxLength);"
                          />
                          <i className="fa-solid fa-mobile-screen-button" />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-md-4 mb-3 custom-form">
                        <label
                          htmlFor="exampleFormControlTextarea"
                          className="form-label"
                        >
                          Message
                        </label>
                        <div className="custom-textarea">
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea"
                            placeholder="Enter Your Message"
                            rows={6}
                            defaultValue={""}
                          />
                          <i className="fa-solid fa-message" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className=" btn btn-animation btn-md fw-bold text-light  ms-auto">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Box Section End */}
        {/* Map Section Start */}
        <section className="map-section">
          <div className="container-fluid p-0">
            <div className="map-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.9661510357337!2d72.58319407477242!3d23.098334913497684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8382ed4e018b%3A0xd6ba2980fc57471b!2sSARVOTTAM%20NAGAR%20SABARMATI!5e0!3m2!1sen!2sin!4v1743060518218!5m2!1sen!2sin"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

             
            </div>
          </div>
        </section>
        {/* Map Section End */}
      </div>
    </div>
  );
}
