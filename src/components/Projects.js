import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Project along with github repository link are as following:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <h3 style={{ textAlign: 'center' }}>Hotel Management System (Double Link List)</h3>
                      <p>Developed a console-based Hotel Management System in C++ using a doubly linked list data structure to efficiently manage room allocations, guest information, and billing. The system allows users to allocate different types of rooms (Family and VIP), display allocated room details, calculate bills based on room rates and duration of stay, search for specific rooms, update guest information, and delete room records. Key functionalities include first allot, after allot, before allot, and last allot operations to insert guest records at various positions in the linked list. The program ensures data integrity through input validation, tracks room availability in real-time, and calculates total revenue generated from allocated rooms.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h3 style={{ textAlign: 'center' }}>Implantable RFID Chip for Animal Identification and Data Tracking</h3>
                      <p>Designed and proposed a system for animal and human identification using implantable RFID chip technology. The project focuses on developing a non-invasive, efficient, and accurate method for tracking and identifying animals in environments such as zoos, pet homes, animal parks, and prisons. The system integrates an RFID chip implantation module, an RFID reader interface using Raspberry Pi and RDM6300 module, and a centralized data management system for storing and retrieving animal information including age, health records, species, and origin. Python was used for backend development, with libraries such as pyserial and rdm6300 enabling communication with the RFID reader. The system automatically detects new RFID chips, prompts users to assign unique identifiers, and maintains a CSV-based database for persistent storage.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h3 style={{ textAlign: 'center' }}>MapReduce (Word Count) Using Parallel Programming</h3>
                      <p>1 NOV 2025 – 19 JAN 2026</p>
                      <p>Implemented a parallel word counting system using the MapReduce programming model in a distributed computing environment. The project focused on processing large text datasets by dividing input into smaller chunks and distributing them across multiple worker nodes. The map phase transformed text into intermediate key-value pairs, the shuffle phase grouped values by key, and the reduce phase aggregated word frequencies to produce final counts. The system was designed with a master node responsible for task coordination and worker nodes executing parallel map and reduce operations. Performance was evaluated by comparing serial and parallel implementations, demonstrating significant speedup and scalability.</p>
                    </Tab.Pane>
                   
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}