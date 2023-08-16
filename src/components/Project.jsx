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
                  <Button className="rounded-3 btn btn-primary">Live</Button>
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

//   return (
//     <Row className="g-4">
//       {/* Render each project item */}
//       {projects.map((item) => (
//         <Col key={item.id} sm={12} md={6}>
//           <Card
//             style={{
//               backgroundImage: `url(${item.image})`,
//               width: "100%",
//             }}
//             className="shadow-lg shadow-[#040c16] group container rounded-md
//             flex justify-center text-center items-center mx-auto content-div"
//           >
//             {/* Hover effect for images */}
//             <Card.Body className="opacity-0 group-hover:opacity-100">
//               <Card.Title className="text-2xl font-bold text-white tracking-wider">
//                 {item.name}
//               </Card.Title>
//               <div className="pt-4 text-center">
//                 {/* Link to the GitHub repository */}
//                 <a href={item.github} target="_blank" rel="noopener noreferrer">
//                   <Button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Code
//                   </Button>
//                 </a>
//                 {/* Link to the live demo */}
//                 <a href={item.live} target="_blank" rel="noopener noreferrer">
//                   <Button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                     Live
//                   </Button>
//                 </a>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// };

// export default Project;
