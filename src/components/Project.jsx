import React from "react";
import projectData from "../Data/projectData";
import { Row, Col, Card, Button, Container } from "react-bootstrap";

const Project = () => {
  const myProject = projectData;
  return (
    <section className="py-5 bg-dark text-white" id="project">
      <Container>
        {/* section-header */}
        <div className="section-header text-center">
          <h2 className="text-uppercase m-0 p-0 d-inline border-bottom border-2 border-info">
            Projects
          </h2>
        </div>

        <Row className="g-4 mt-4">
          {myProject.map((item) => (
            <Col key={item.id} sm={12} md={6} lg={6}>
              <Card
                style={{
                  backgroundImage: ` url(${item.image})`,
                  backgroundSize: "cover",
                  height: "250px",
                }}
                className=" rounded-2 d-flex 
              justify-content-center items-center"
              >
               
              </Card>
              <div className="mt-4 text-center">
                {/* Link to the live demo */}
                <a href={item.live} target="_blank" rel="">
                  <Button className="rounded-3 btn btn-primary me-1 px-3">Live</Button>
                </a>
                <a href={item.Repo} target="_blank" rel="">
                  <Button className="rounded-3 btn btn-primary ms-1  px-3">Repo</Button>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Project;

