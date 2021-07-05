import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
// import CardGroup from 'react-bootstrap/CardGroup';
import CardColumns from 'react-bootstrap/CardColumns';
import jobs from './job';
import jobImgs from './Imgs/getImgs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './release.css'

class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(jobImgs);
        return (  
            <div style={{backgroundColor:"#598a8e", padding:"0em 6em 2em 6em"}}>
                <Row><h1 style={{padding:"3rem",textAlign:"center",fontSize:"4rem"}}>The 'Release' Stage</h1></Row>
                <Row>
                    <Col style={{width:"20%"}}></Col>
                    <Col style={{width:"20%",height:"16em"}}>
                        <img src={jobImgs['Edelweiss Financial Product Distribution'][0].default} alt="First slide" style={{width:"100%",height:"auto",maxHeight:"16em", margin:"auto",display: "block"}}/>
                    </Col>
                    <Col style={{width:"20%",height:"16em"}}>
                        <img src={jobImgs["Mukesoft IT Consultants"][0].default} alt="First slide" style={{width:"100%",height:"auto",maxHeight:"16em", margin:"auto",display: "block"}}/>
                    </Col>
                    <Col style={{width:"20%"}}></Col>
                </Row>
                <Row style={{paddingBottom:"2em"}}>
                    <Col style={{width:"20%",height:"28em"}}>
                        <img src={jobImgs['Edelweiss Financial Product Distribution'][1].default} alt="First slide" style={{width:"100%",height:"auto",maxHeight:"28em", margin:"auto",display: "block"}}/>
                    </Col>
                    <Col style={{width:"20%",height:"28em"}}>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={jobImgs['Edelweiss Financial Product Distribution'][2].default} alt="First slide" style={{width:"100%",height:"auto",maxHeight:"28em", margin:"auto",display: "block"}}/>
                                </div>
                                <div class="flip-card-back">
                                    <Card.Body>
                                        <Card.Title><a href = {jobs[0].companyLink}>{jobs[0].name}</a></Card.Title>
                                        <Card.Text>
                                            Supervisor : <a href={jobs[0].supervisorlink}> {jobs[0].supervisor}</a><br/>
                                            Description : {jobs[0].description}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted"> <b>Topics</b> : {jobs[0].topic_tags.join(" \u2022 ")}</small>
                                    </Card.Footer>
                                    <Card.Footer>
                                        <small className="text-muted"> <b>Technologies</b> : {jobs[0].tech_tags.join(" \u2022 ")}</small>  
                                    </Card.Footer>
                                </div>
                            </div>
                        </div>

                    </Col>
                    <Col style={{width:"20%",height:"28em"}}>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={jobImgs["Mukesoft IT Consultants"][2].default} alt="First slide" style={{width:"100%",height:"auto",maxHeight:"28em", margin:"auto",display: "block"}}/>
                                </div>
                                <div class="flip-card-back">
                                    <Card.Body>
                                        <Card.Title><a href = {jobs[1].companyLink}>{jobs[1].name}</a></Card.Title>
                                        <Card.Text>
                                            Supervisor : <a href={jobs[1].supervisorlink}> {jobs[1].supervisor}</a><br/>
                                            Description : {jobs[1].description}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted"> <b>Topics</b> : {jobs[1].topic_tags.join(" \u2022 ")}</small>
                                    </Card.Footer>
                                    <Card.Footer>
                                        <small className="text-muted"> <b>Technologies</b> : {jobs[1].tech_tags.join(" \u2022 ")}</small>  
                                    </Card.Footer>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col style={{width:"20%",height:"28em"}}>
                        <img src={jobImgs["Mukesoft IT Consultants"][1].default} alt="First slide" style={{width:"100%",height:"auto",maxHeight:"28em", margin:"auto",display: "block"}}/>
                    </Col>
                </Row>
                <Row>
                    <Col style={{width:"20%"}}></Col>
                    <Col style={{width:"20%",height:"16em"}}>
                        <img src={jobImgs['Edelweiss Financial Product Distribution'][3].default} alt="First slide" style={{width:"100%",height:"auto",maxHeight:"16em", margin:"auto",display: "block"}}/>
                    </Col>
                    <Col style={{width:"20%",height:"16em"}}>
                        <img src={jobImgs["Mukesoft IT Consultants"][3].default} alt="First slide" style={{width:"100%",height:"auto",maxHeight:"16em", margin:"auto",display: "block"}}/>
                    </Col>
                    <Col style={{width:"20%"}}></Col>
                </Row>
            </div>
        );
    }
}
 
export default TestComponent;