import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b7858090-27f9-4f61-8d9c-2fffb45d4563");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your Form Submitted Successfully!! Owner will Contact You Soon...");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
 
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
                <form onSubmit={onSubmit} className="right-sidebar-box">
      <div className="row">
        <div className="col-xxl-6 col-lg-12 col-sm-6">
          <div className="mb-md-4 mb-3 custom-form">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <div className="custom-input">
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="first_name"
                placeholder="Enter First Name"
                required
              />
              <i className="fa-solid fa-user" />
            </div>
          </div>
        </div>

        <div className="col-xxl-6 col-lg-12 col-sm-6">
          <div className="mb-md-4 mb-3 custom-form">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <div className="custom-input">
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="last_name"
                placeholder="Enter Last Name"
                required
              />
              <i className="fa-solid fa-user" />
            </div>
          </div>
        </div>

        <div className="col-xxl-6 col-lg-12 col-sm-6">
          <div className="mb-md-4 mb-3 custom-form">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <div className="custom-input">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter Email Address"
                required
              />
              <i className="fa-solid fa-envelope" />
            </div>
          </div>
        </div>

        <div className="col-xxl-6 col-lg-12 col-sm-6">
          <div className="mb-md-4 mb-3 custom-form">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <div className="custom-input">
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Enter Your Phone Number"
                maxLength={10}
                onInput={(e) => {
                  if (e.target.value.length > 10) {
                    e.target.value = e.target.value.slice(0, 10);
                  }
                }}
                required
              />
              <i className="fa-solid fa-mobile-screen-button" />
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="mb-md-4 mb-3 custom-form">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <div className="custom-textarea">
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="Enter Your Message"
                rows={6}
                required
              />
              <i className="fa-solid fa-message" />
            </div>
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-animation btn-md fw-bold text-light ms-auto ">
        Send Message
      </button><br/>
      {/* <span className="mt-5">{result}</span> */}
    </form>
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
