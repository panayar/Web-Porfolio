import { Col, Row } from "react-bootstrap";
import Arrow from "../../img/arrow-icon.png";

export const ProjectCard = ({ title, subtitle, imgUrl, url }) => {
  return (
    <Row className="project-card-container">
      <Col md={12} lg={5} sm={12} className="project-card">
        <div className="project-card-content">
          <p className="project-card-subtitle primary">{subtitle}</p>
          <h3 className="project-card-title primary">{title}</h3>
          <a
            className="project-card-link primary"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Arrow} alt="arrow icon" className="arrow-icon" />
          </a>
        </div>
      </Col>
      <Col md={12} lg={7} sm={12} className="project-card ml-2">
        <div className="project-card-content-img">
          <img src={imgUrl} alt={title} className="project-card-image" />
          <p className="project-s-card-subtitle secondary mt-4">{subtitle}</p>
          <a
            className="project-card-link"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="secondary project-s-card">
              {title}{" "}
              <a
                className="secondary"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Arrow} alt="arrow icon" className="arrow-s-icon" />
              </a>
            </h3>
          </a>
        </div>
      </Col>
    </Row>
  );
};
