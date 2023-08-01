import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "../Card/ProjectCard";
import adertic from "../../img/adertic.png";
import intra from "../../img/intra.png";
import weather from "../../img/weather.png";
import hoobank from "../../img/hoobank.png";
import gpt3 from "../../img/gpt3.png";
import selia from "../../img/selia.png";
import "./projects.css";

export const Projects = () => {
  const projects = [
    {
      title: "Intra website",
      description: "Web page developed with REACT and bootstrap, for a technology company",
      imgUrl: intra,
      url: "",
    },
    {
      title: "Hoobank",
      description:
        "Website developed in react and tailwind, for a company that provides financial services",
      imgUrl: hoobank,
      url: "",
    },
    {
      title: "Selia",
      description:
        "Website to find psychological help, on this page you can schedule virtual appointments . website developed in react",
      imgUrl: selia,
      url: "https://selia.co/",
    },
    {
      title: "GPT-3 Website",
      description: "Design & Development",
      imgUrl: gpt3,
      url: "",
    },
    {
      title: "Adertic Website",
      description:
        "Website built in HTML and CSS, for a law firm specialized in computer law",
      imgUrl: adertic,
      url: "https://www.adertic.com.co/",
    },
    {
      title: "Weather App",
      description:
        "Weather app built in react, where you can see the weather of the cities you want",
      imgUrl: weather,
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
