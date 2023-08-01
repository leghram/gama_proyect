/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../assets/images/blog/blog-1.jpg";
import blog2 from "../assets/images/blog/blog-2.jpg";
import blog3 from "../assets/images/blog/blog-3.jpg";
import blog4 from "../assets/images/blog/blog-4.jpg";
import a6 from "../assets/images/about/a6.jpg";
import video from "../assets/images/about/1.mp4";
import Marquee from "react-fast-marquee";
import orders from "../assets/images/icons/icon1.png";
import orders1 from "../assets/images/icons/icon2.png";
import orders2 from "../assets/images/icons/icon3.png";
import orders3 from "../assets/images/icons/icon4.png";
import orders4 from "../assets/images/icons/icon5.png";

const about = () => {
  return (
    <>
      <section className="about-wrapper p-5 d-flex justify-content-center align-items-center">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="shop-details text-center align-items-center">
                <h1 className="text-white">Nosotros</h1>
                <p className="text-white fs-3">Conoce mas sobre nosotros</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us p-5">
        <div className="row">
          <div className="col-md-6">
            <img src={a6} alt="" className="img-fluid p-5" />
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <h1>
              <b>Quienes Somos?</b>
            </h1>
            <p className="card-text mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Quibusdam tempore unde aperiam, consectetur harum a eum error,{" "}
              <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod
              et sint facere reprehenderit?
            </p>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Quibusdam tempore unde aperiam, consectetur harum a eum error,{" "}
              <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod
              et sint facere reprehenderit?
            </p>
          </div>
        </div>
      </section>

      <section className="abouts p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex flex-column align-items-center">
              <h1 className="mb-3">Comentarios de nuestros Clientes...</h1>
              <p className="mb-4">Nuestros ultimos clientes comentan que...</p>
            </div>
            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={blog1}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Marvel Clein</h5>
                      <p className="card-text mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit{" "}
                        <br />. Doloribus maxime consequatur, ipsam architecto
                        incidunt volup <br />
                        tate! Iste ipsa numquam quos nam quibusdam perferendis
                        excepturi rem, a quo laudantium libero dolore nisi.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Actualizado hace 3 min
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={blog2}
                      alt=""
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Melisa Ivy</h5>
                      <p className="card-text mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit{" "}
                        <br />. Doloribus maxime consequatur, ipsam architecto
                        incidunt volup <br />
                        tate! Iste ipsa numquam quos nam quibusdam perferendis
                        excepturi rem, a quo laudantium libero dolore nisi.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Actualizado ahora
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={blog3}
                      alt=""
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Tristian Ann</h5>
                      <p className="card-text mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit{" "}
                        <br />. Doloribus maxime consequatur, ipsam architecto
                        incidunt volup <br />
                        tate! Iste ipsa numquam quos nam quibusdam perferendis
                        excepturi rem, a quo laudantium libero dolore nisi.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Actualizado ahora
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={blog4}
                      alt=""
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Phillip Omosh</h5>
                      <p className="card-text mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit{" "}
                        <br />. Doloribus maxime consequatur, ipsam architecto
                        incidunt volup <br />
                        tate! Iste ipsa numquam quos nam quibusdam perferendis
                        excepturi rem, a quo laudantium libero dolore nisi.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Actualizado hace 2 min
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={blog2}
                      alt=""
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Melisa Ivy</h5>
                      <p className="card-text mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit{" "}
                        <br />. Doloribus maxime consequatur, ipsam architecto
                        incidunt volup <br />
                        tate! Iste ipsa numquam quos nam quibusdam perferendis
                        excepturi rem, a quo laudantium libero dolore nisi.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Actualizado hace 1 hora
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={blog1}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Marvel Clein</h5>
                      <p className="card-text mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit{" "}
                        <br />. Doloribus maxime consequatur, ipsam architecto
                        incidunt volup <br />
                        tate! Iste ipsa numquam quos nam quibusdam perferendis
                        excepturi rem, a quo laudantium libero dolore nisi.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Actualizado hace 2 horas
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 p-3">
              <Marquee className="p-2 slide">
                <div>
                  <img src={orders} alt="" className="img-fluid" />
                  <p className="card-text mb-2">Ordenes rapidas</p>
                </div>
                <div>
                  <img src={orders1} alt="" className="img-fluid" />
                  <p className="card-text mb-2">Simple y Rapido</p>
                </div>
                <div>
                  <img src={orders2} alt="" className="img-fluid" />
                  <p className="card-text mb-2">Grandes Ahorros</p>
                </div>
                <div>
                  <img src={orders3} alt="" className="img-fluid" />
                  <p className="card-text">Atencion 24/7</p>
                </div>
                <div>
                  <img src={orders4} alt="" className="img-fluid" />
                  <p className="card-text">Online Orders</p>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
