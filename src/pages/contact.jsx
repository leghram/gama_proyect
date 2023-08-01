/* eslint-disable no-unused-vars */
import React from "react";

const contact = () => {
  return (
    <>
      <section className="contact-wrapper p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className=" text">Contactanos</h1>
              <p className=" text fs-3">Cada vez mas cerca de ti</p>
            </div>
          </div>
        </div>
      </section>
      <div className="contact-wrapper-details p-5">
        <div className="container-xxl">
          <div className="row text-center align-items-center">
            <div className="col-lg-6 col-md-12 p-3">
              <div className="map card m-auto embed-responsive embed-responsive-16by9">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiGqdFIp49c3FveKuNtajOAi2EJpR9d_cViigo9KCgm-_pQcux2Zy-rjTAIiFmiJdqvZw&usqp=CAU"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card p-5">
                <h2 className="footer-title mb-3">
                  <b>Contactanos</b>
                </h2>
                <p className="mb-2">
                  <b>Direccion:</b> Thika town, Naltex building, 2nd floor
                </p>
                <p className="mb-2">
                  <b>Telefon:</b>{" "}
                  <a className="footer-tel" href="tel:+51987654321">
                    Llamanos al +51 987654321
                  </a>
                </p>
                <p className="mb-4">
                  <b>Horas:</b> Desde 8 a.m - 6 p.m
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  quos iusto rerum architecto a eaque consequuntur impedit!
                  Harum earum iste, suscipit soluta, culpa necessitatibus quia
                  sit nulla doloremque officia cum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  hic veniam unde numquam in ullam laudantium odit explicabo
                  itaque! Voluptate similique, accusantium consequatur provident
                  soluta quaerat maxime adipisci vero sed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-message p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
              <div className="card p-5">
                <h2 className="text-center mb-4">Dejanos un mensaje</h2>
                <div className=" d-flex align-items-center justify-content-center">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="nombres"
                        aria-label="First name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="apellido"
                        aria-label="Last name"
                      />
                    </div>
                    <div className="col-12">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label mb-3"
                      >
                        Ingrese su correo
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-12">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Mensaje
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="col-12 text-center gap-2">
                      <button id="button-link" type="submit">
                        Enviar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
