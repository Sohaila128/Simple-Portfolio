import React from 'react';
import skillsData from '../Data/skillsData';
import { Col, Container, Row } from 'react-bootstrap';


const Skills = () => {
    const mySkills = skillsData;
  return (
    <section className="py-5 bg-dark text-white" id="skills">
      <Container>
        {/* section-header */}
        <div class="section-header text-center">
          <h2 class="text-uppercase fs-7 m-0 p-0 d-inline border-bottom border-2 border-info">
            Skills
          </h2>
        </div>
        <Row className="gy-2 mt-5">
          {mySkills.map((item) => (
            <Col key={item.id} xl="3" sm="6">
              <div className='bg-dark text-center shadow-lg p-2 px-auto skillsCard'>
                <img
                  className="imgSkills"
                  src={item.image}
                  alt={item.alt}
                />
                <p className="my-4">{item.name}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;