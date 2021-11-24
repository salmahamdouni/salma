import React from "react";

//import stock
import stock from "../img/téléchargement.jfif";
import stock1 from "../img/tubik_studio_weather.png";
import stock2 from "../img/Best-Telegram-Bots-for-Groups_935adec67b324b146ff212ec4c69054f.png";
import stock3 from "../img/Streaming2017.jpg";


let project = [
  {
    name: "To Do List",
    tech: "ReactNative Firebase Expo",
    Image:stock
  }, {
    name: "Spotify clone ",
    tech: "ReactJs Firebase ",
    Image:stock3
  },
  {
    name: "Weather app",
    tech: "ReactJs Firebase ",
    Image:stock1
  },
  {
    name: "Telegram bot",
    tech: "NodeJs ",
    Image:stock2
  },
];

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {project.map((ele) => {
              return (
                  <div className="col-md-4">
                    <div className="work-box">
                      <a href={ele.Image} data-lightbox="gallery-todo">
                        <div className="work-img">
                          <img src={ele.Image} alt="" className="img-fluid" />
                        </div>
                        <div className="work-content">
                          <div className="row">
                            <div className="col-sm-8">
                              <h2 className="w-title">{ele.name}</h2>
                              <div className="w-more">
                                <span className="w-ctegory">{ele.tech}</span>
                                {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="w-like">
                                <span className="ion-ios-plus-outline"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      
                    </div>
                  </div>
                
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;