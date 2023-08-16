import React from 'react'
import AboutImg from "../Images/img3.svg";


const About = () => {

    return (
      <section id="about" className="py-5 bg-dark text-white">
        <div className="container">
          {/* section-header */}
          <div className="section-header text-center">
            <h2 className="text-uppercase m-0 p-0 d-inline border-bottom border-2 border-info">
              About
            </h2>
          </div>

          <div className="row align-items-center justify-content-center mt-5">
            <div className="col-lg-6 text-center">
              <img src={AboutImg} alt="About Img" className="img-fluid w-75" />
            </div>
            <div className="col-lg-6 py-4">
              <h2>
                Hello <span className="text-info">I'm</span> A Front End
                developer
              </h2>
              <p>
                I'm Front End Developer from Alexandria, Egypt, working in web
                development. I enjoy turning complex problems into simple,
                beautiful and intuitive development . My job is to build your
                website so that it is functional and user-friendly but at the
                same time attractive. Moreover, I add personal touch to your
                product and make sure that is eye-catching and easy to use. My
                aim is to bring across your message and identity in the
                most creative way.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;
