import React from 'react'
import { Container , Row , Col} from 'react-bootstrap'
import HeaderImg from "../Images/ME.png";

const Home = () => {
  return (
    <section
      className="home bg-dark justify-content-between text-white w-100 position-relative py-5"
      id="home"
      name="home"
    >
      <Container>
        <Row className="gy-3 align-items-center justify-content-center">
          <Col
            md="6"
            xl="6"
            sm="12"
            className="order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start"
          >
            <span className="tagline">Hi my name is</span>
            <h1>
              <span className="text-info">Sohaila Abo El-Wafa </span> <br />
              I'm a Frond-End Developer
            </h1>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              dolores reiciendis nobis commodi cumque! Quis laboriosam enim
              officia culpa modi. sit amet consectetur adipisicing elit.
            </p>
            <button class="btn btn-info">Get Started</button>
          </Col>
          <Col md="6" xl="5" sm="12" className=" order-1 order-lg-2 me-3">
          <div className='text-center'>
            <img
              className="img-fluid mx-auto rounded-circle"
              src={HeaderImg}
              alt="Header Img"
            />
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home