import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // const [index, setIndex] = useState(1); (unused)
  const toRotate = [ "Cybersecurity Analyst", "DevOps Engineer", "SQA Engineer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      // setIndex(prevIndex => prevIndex - 1); (unused)
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      // setIndex(1); (unused)
      setDelta(500);
    } else {
      // setIndex(prevIndex => prevIndex + 1); (unused)
    }
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Ammar-Janjuha-Updated.pdf';
    link.download = 'Ammar-Janjuha-Updated.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to My Portfolio</span>
                <h1>{`Hi! I'm Ammar Janjuha`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Cybersecurity Analyst, DevOps Engineer, SQA EngineerWeb Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a recent Computer Science graduate from Capital University of Science and Technology, with a strong
                    foundational interest in Cybersecurity, DevOps, SOC operations, and Software Quality Assurance (SQA).</p>
                  <br />
                  <p>I completed a six-week internship at Overroots, where I assisted in vulnerability scanning and learned to write clean,
                    maintainable code. Currently, I am actively expanding my practical knowledge through self-directed learning in areas
                    such as CI/CD pipelines (GitHub Actions), containerization (Docker), and test automation (Selenium).</p>
                  <br />
                  <p>I have also built academic projects including a Hotel Management System and an RFID-based animal tracking system,
                    which strengthened my skills in scripting, data structures, and system design. I am now seeking an entry-level role or
                    internship where I can contribute to meaningful projects, learn alongside experienced professionals, and grow into a
                    well-rounded security and operations professional. I am deeply committed to continuous improvement, attention to
                    detail, and teamwork.</p>
                  <br />
                  <p>I am seeking for an entry-level role where I can apply my technical abilities, contribute to meaningful projects, and
                    grow under the guidance of experienced professionals.</p>

<button onClick={handleDownload}>Download CV <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
