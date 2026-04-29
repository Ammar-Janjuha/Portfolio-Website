import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I bring a diverse technical foundation rooted in Computer Science, with core competencies in C, C++, Python,
                           and web development (HTML/CSS, JavaScript). My project experience includes building a Hotel Management System
                            using doubly linked lists, an RFID-based animal tracking system with Raspberry Pi, and a parallel MapReduce word 
                            counting system, demonstrating strong skills in data structures, system design, and distributed computing </p>

                          <p>I am actively expanding my DevOps and security tooling knowledge—including CI/CD pipelines (GitHub Actions), 
                            containerization (Docker), and test automation (Selenium)
                            —complemented by cybersecurity fundamentals earned through Google's Cybersecurity Specialization. 
                            Beyond technical abilities, I value clean, maintainable code, teamwork, and attention to detail,
                             supported by strong object-oriented design, database management, and interpersonal skills.</p>
                             <br />
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Skill" />
                                <h5>Programming & Development</h5>
                                <p>C/C++, Python, HTML/CSS, JavaScript, Bootstrap</p>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Skill" />
                                <h5>Software Engineering</h5>
                                <p>Object Oriented Design, Object Oriented Analysis, Software Engineering-I</p>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Skill" />
                                <h5>Cybersecurity & SOC</h5>
                                <p>Vulnerability Scanning, Security Analysis</p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Skill" />
                                <h5>DevOps & Automation (Inprocess, learning)</h5>
                                <p>CI/CD (GitHub Actions), Docker, Selenium Test Automation</p>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Skill" />
                                <h5>Parallel Programming (MPI)</h5>
                                <p> MapReduce </p>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Skill" />
                                <h5>Soft Skills</h5>
                                <p>Teamwork, Attention to Detail, Clean Code Practices, Documentation</p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Skill" />
                                <h5>Languages</h5>
                                <p>English, French, Urdu, Punjab</p>
                            </div>
                        
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
alt="" />
    </section>
  )
}