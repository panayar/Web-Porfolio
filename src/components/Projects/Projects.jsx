import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "../Card/ProjectCard";
import intra from "../../img/intra.png";
import hoobank from "../../img/hoobank.png";
import gpt3 from "../../img/gpt3.png";
import selia from "../../img/selia.png";
import "./card.css";

export const Projects = () => {
  const projects = [
    {
      title: "INTRA Website",
      subtitle: "Design & Development",
      imgUrl: intra,
      url: "https://panayar.github.io/INTRA_website/",
    },
    {
      title: "HooBank Portal", 
      subtitle: "Design & Development",
      imgUrl: hoobank,
      url: "https://panayar.github.io/hoobank/",
    },
    {
      title: "Selia Project",
      subtitle: "Design & Development", 
      imgUrl: selia,
      url: "https://selia.co/",
    },
    {
      title: "GPT-3 Website",
      subtitle: "Design & Development",
      imgUrl: gpt3,
      url: "https://panayar.github.io/GPT-3-website/",
    }
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col md={12}>
            <p
              className="p-subtitle"
              data-aos="fade-down"
              data-aos-duration="1800"
            >
              Portfolio
              <span className="orange-point">.</span>
            </p>
            <h1
              className="p-title"
              data-aos="fade-down"
              data-aos-duration="1800"
            >
              RECENT PROJECTS
            </h1>
          </Col>
        </Row>
        <Row data-aos="fade-up" data-aos-duration="1800" className="cards-container">
          {projects.map((project, index) => {
            return (
              <Col key={index} md={6} lg={6} sm={12} className="mt-5 card-col">
                <ProjectCard
                  key={index}
                  title={project.title}
                  subtitle={project.subtitle}
                  imgUrl={project.imgUrl}
                  url={project.url}
                />
              </Col>
            );
          })}
        </Row>
        <Row className="mt-5">
          <Col md={12} className="text-center">
            <a href="https://github.com/panayar" target="_blank" rel="noopener noreferrer">
              <button className="blkBtn">See More </button>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};