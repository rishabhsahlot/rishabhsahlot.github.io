import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
// import CardGroup from 'react-bootstrap/CardGroup';
import CardDeck from 'react-bootstrap/CardDeck';
import jobs from './job';
import jobImgs from './Imgs/getImgs';

class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(jobs);
        return (  
            <Container>
                <CardDeck>
                    {
                        jobs.map((e)=>{ return(
                            <Card>
                                {/* <Card.Img variant="top" src={}/> */}
                                <Carousel fade interval={null}>
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
                                                <Carousel.Caption style={{position:"relative", marginTop:"2%", maxWidth:"70%", color:"black"}}>
                                                
                                                </Carousel.Caption>
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
                                    <small className="text-muted">{e.topic_tags.join(" \u2022 ")}</small>
                                </Card.Footer>
                                <Card.Footer>
                                    <small className="text-muted">{e.tech_tags.join(" \u2022 ")}</small>  
                                </Card.Footer>
                            </Card>)        
                        })
                    }
                </CardDeck>
            </Container>
        );
    }
}
 
export default TestComponent;