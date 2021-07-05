import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import resume from './ResumeJune22.pdf';
class PlanComponent extends Component {
    state = {  }
    render() { 
        return (          
            <div style={{backgroundColor:"#ffd6c2",alignItems:"center",width:"100%",paddingBottom:"2em"}}>
                <Container>
                    <Row style={{alignItems:"center",width:"100%"}}>
                        <div style={{alignItems:"center"}}>
                            <h1 style={{padding:"0 3rem 0 3rem",textAlign:"center",alignSelf:"center", fontSize:"4rem"}}>The 'Plan' Phase</h1>
                            <h4 className="mb-2 text-muted" style={{padding:"0 10rem 1rem 10rem",textAlign:"center"}}>The 'Me' Project required myself to evaluate my past, taken into consideration the present and decide on a solution 
                            for my future.</h4>
                        </div>
                    </Row>
                    <Row style={{alignItems:"center",width:"100%"}}>
                        <Col style={{alignItems:"center"}}>
                        <Card>
                            <Card.Body>
                                <Card.Title style={{textAlign:"center"}}>About Me</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted" style={{textAlign:"center"}}>My Past,Present & Future</Card.Subtitle>
                                <Card.Text>
                                    <p>
                                            Hi, my name is Rishabh Manish Sahlot. I am currently pursuing Masters in Computer Science at Rochester Institute of Technology. I enjoy solving 
                                        data structure & algorithm-based problems. Atleast, that's what my journey in Software engineering started with! But, soon I started finding 
                                        myself watching a sequence of youtube recommendations on topics like <a href="https://www.youtube.com/channel/UCRPMAqdtSgd0Ipeef7iFsKw">System 
                                        design </a>& <a href="https://www.youtube.com/channel/UCZHmQk67mSJgfCCTn7xBfew">Artifical Intelligence</a>. I realized while it was still a 
                                        problem solving, it had now entered new domains. So, after I completed my Bachelors in Computer Engineering from Mumbai University (which I 
                                        pursued because of my interest in algorithms and data-structures), I headed straight to R.I.T. to pursue my Masters to develop & improve my skills.  
                                    </p>
                                    <p>
                                            During my Masters,I took various courses in Databases, Data Analytics, Cloud Computing, Computer Vision & Deep Learning domain. But those
                                        are just my academic courses. I also watched free courses on Quantum Computing (specifically the IBM-CERN initiative) & dove deep into Software 
                                        Development. Having worked in Java for Android Development during an internship in my Undergrad years, I had grown complacent & felt I had 
                                        the domain conquered enough. That was until I explored the sweet world of Microservice Archtitechture, Spring Boot & Node (& React). This discovery 
                                        led me to the realization that while learning new concepts feels very fulfilling - learning, working & improving in new Technologies is also similarly 
                                        fun if not more. And that is when I formulated my own concept of what being a Software Engineer is-
                                    </p>
                                    <figure style={{margin: "0", background: "#eee",padding: "1em",borderRadius: "1em"}}>
                                        <blockquote>
                                            A Software Engineer is a problem solver, who efficiently considers the different concepts & technologies to solve any software problem
                                            posed to him/her, & work out a fast, resource-friendly solution that persists as unbreakable for a long foreseable
                                            future. 
                                        </blockquote>
                                    </figure>
                                    <br/>
                                    <p>
                                            So while I still find myself enamoured with Software Development, Deep Learning & System design currently, I envision my future in Software 
                                        Engineering coding up various solutions by utilizing the concepts I learnt during my education as well as incorporating the tried & tested 
                                        state-of-the-art solutions to solve any software problem that may be posed to me. 
                                    </p>
                                </Card.Text>
                                <Card.Link class="btn btn-warning pull-right" href={resume} target = "_blank">
                                    <i class="fa fa-file-text"></i>
                                    Resume
                                </Card.Link>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
 
export default PlanComponent;