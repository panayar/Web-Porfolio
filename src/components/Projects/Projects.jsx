import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "../Card/ProjectCard";
import adertic from "../../img/adertic.png";
import intra from "../../img/intra.png";
import weather from "../../img/weather.png";
import selia from "../../img/selia.png";
import "./projects.css";

export const Projects = () => {
  const projects = [
    {
      title: "Intra Website",
      description:
        "Web page developed with REACT and bootstrap, for a technology company",
      imgUrl: intra,
      url: "https://panayar.github.io/INTRA_website/",
    },
    {
      title: "Weather App",
      description:
        "Weather application developed in React, which uses the openweathermap API to obtain data in real time",
      imgUrl: weather,
      url: "https://panayar.github.io/weather-app/",
    },
    {
      title: "Selia",
      description:
        "website to find psychological help, on this page you can schedule virtual appointments . website developed in react",
      imgUrl: selia,
      url: "https://selia.co/",
    },
    {
      title: "Adertic Website",
      description:
        "Website built in HTML and CSS, for a law firm specialized in computer law",
      imgUrl: adertic,
      url: "https://www.adertic.com.co/",
    },
    {
      title: "App music",
      description:
        "Music application developed in react, which uses the spotify API to obtain data in real time",
      imgUrl: adertic,
      url: "",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: adertic,
      url: "",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col md={12}>
            <h1
              className="text-center"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              Projects
              <span className="orange-point">.</span>
            </h1>
            <p data-aos="fade-up" data-aos-duration="1800">
              Explore some of the exciting projects I have worked on as a
              developer.
            </p>
          </Col>
        </Row>
        <Row data-aos="fade-up" data-aos-duration="1800">
          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </Row>
      </Container>
      <br />
      <br />
      <br />
    </section>
  );
};
