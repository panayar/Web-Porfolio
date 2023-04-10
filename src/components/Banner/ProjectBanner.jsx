import React from "react";
import "./ProjectBanner.css";

function ProjectBanner() {
  return (
    <div class="row" style={{ marginTop: "12%" }}>
      <h1
        className="text-center mb-5"
        data-aos="fade-right"
        data-aos-duration="1800"
      >
        Porfolio
        <span className="orange-point">.</span>
      </h1>
      <div
        class="center col-sm-12 col-md-6 col-lg-3 mt-3"
        data-aos="fade-righ"
        data-aos-duration="1800"
      >
        <div class="card-me project-two">
          <div class="card-content">
            <div class="card-title">
              <h5>Intra Website</h5>
            </div>
            <p class="card-body">
              web page developed with REACT and bootstrap, for a technology
              company
            </p>
            <a href="https://panayar.github.io/INTRA_website/" class="button">
              Go to website
            </a>
          </div>
        </div>
      </div>
      <div
        class="center col-sm-12 col-md-6 col-lg-3 mt-3"
        data-aos="fade-righ"
        data-aos-duration="1800"
      >
        <div class="card-me project-three">
          <div class="card-content">
            <div class="card-title">
              <h5>Weather App</h5>
            </div>
            <p class="card-body">
              Weather application developed in React, which uses the
              openweathermap API to obtain data in real time
            </p>
            <a href="https://panayar.github.io/weather-app/" class="button">
              Go to website
            </a>
          </div>
        </div>
      </div>
      <div
        class="center col-sm-12 col-md-6 col-lg-3 mt-3"
        data-aos="fade-righ"
        data-aos-duration="1800"
      >
        <div class="card-me project-one">
          <div class="card-content">
            <div class="card-title">
              <h5>Adertic Website</h5>
            </div>
            <p class="card-body">
              Website built in HTML and CSS, for a law firm specialized in
              computer law
            </p>
            <a
              target="_blank"
              href="https://www.adertic.com.co/"
              class="button"
              rel="noreferrer"
            >
              Go to website
            </a>
          </div>
        </div>
      </div>
      <div
        class="center col-sm-12 col-md-6 col-lg-3 mt-3"
        data-aos="fade-righ"
        data-aos-duration="1800"
      >
        <div class="card-me project-four">
          <div class="card-content">
            <div class="card-title">
              <h5>Selia</h5>
            </div>
            <p class="card-body">
              website to find psychological help, on this page you can schedule
              virtual appointments . website developed in react
            </p>
            <a
              href="https://selia.co/"
              target="_blank"
              class="button"
              rel="noreferrer"
            >
              Go to website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectBanner;
