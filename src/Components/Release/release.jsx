import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
// import CardGroup from 'react-bootstrap/CardGroup';
import CardColumns from 'react-bootstrap/CardColumns';
import jobs from './job';
import jobImgs from './Imgs/getImgs';
import Row from 'react-bootstrap/Row';

class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(jobImgs);
        return (  
            <Container>
                <Row><h1 style={{padding:"3rem",textAlign:"center",fontSize:"4rem"}}>The 'Release' Stage</h1></Row>
                <Row>
                    <CardColumns style={{columnCount:"2"}}>
                        {
                            jobs.map((e)=>{ return(
                                <Card>
                                    {/* <Card.Img variant="top" src={}/> */}
                                    <Carousel>
                                        {
                                            jobImgs[e.name].map((d)=>{
                                                return (<Carousel.Item>
                                                    <img
                                                    className="d-block w-100 "
                                                    src={d.default}
                                                    alt="First slide"
                                                    align="center"
                                                    style={{padding: "2.5%"}}
                                                    />
                                                </Carousel.Item>)
                                            }) }
                                    </Carousel>
                                    <Card.Body>
                                    <Card.Title><a href = {e.companyLink}>{e.name}</a></Card.Title>
                                    <Card.Text>
                                        Supervisor : <a href={e.supervisorlink}> {e.supervisor}</a><br/>
                                        Description : {e.description}
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted"> <b>Topics</b> : {e.topic_tags.join(" \u2022 ")}</small>
                                    </Card.Footer>
                                    <Card.Footer>
                                        <small className="text-muted"> <b>Technologies</b> : {e.tech_tags.join(" \u2022 ")}</small>  
                                    </Card.Footer>
                                </Card>)        
                            })
                        }
                    </CardColumns>
                </Row>
            </Container>
        );
    }
}
 
export default TestComponent;