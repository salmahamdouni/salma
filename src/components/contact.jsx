import React from "react";
import imageOverlay from "../img/earth.jpg";
import imagesalma from "../img/8831a6e6-e3c0-416e-9fb3-1d21624a1279.jfif";

class Contact extends React.Component {
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row" align="center">
                   
                   <div className="col-md-6" align="center" >
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Get in Touch</h5>
                      </div>
                      <div className="more-info">
                      <div className="work-img">
                          <img src={imagesalma} alt="" className="img-fluid" height='100px' width='150px' />
                        </div>
                         <p className="lead">
                          Whether you want to get in touch, talk about a project
                          collaboration, or just say hi, I'd love to hear from
                          you.
                          <br />
                          Simply fill the from and send me an email.
                         </p>
                        </div>
                      <div className="socials">
                        <ul>
                          
                        </ul>
                        <a  href={"mailto:" + "salmahamdouni097@gmail.com"}>
 
                        <button
                           type="submit"
                           className="button button-a button-big button-rouded">
                          contact me 
                        </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
