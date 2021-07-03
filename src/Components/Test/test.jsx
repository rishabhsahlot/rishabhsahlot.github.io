import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import extraCurriculars from './extracurricular';
import extraCurricularImgs from './Imgs/getImgs';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import ListGroup from 'react-bootstrap/ListGroup';
import CardColumns from 'react-bootstrap/CardColumns';

class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(extraCurricularImgs);
        console.log(extraCurriculars);
        return (  
        <Container style={{paddingBottom:"2rem"}}>
            <Row><h1 style={{padding:"3rem",textAlign:"center",fontSize:"4rem"}}>The 'Test' Stage</h1></Row>
            <Row style={{width:"100%"}}>
                <CardColumns style={{width:"100%",columnCount:"2"}} >
                    {
                        extraCurriculars.map((e)=>{
                            return (
                                <Card style={{position:"relative", width:"100%"}}>
                                    <Card.Img variant="top" src={extraCurricularImgs[e.name][0].default} />
                                    <Card.Body>
                                        <Card.Title>{e.name}</Card.Title>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>
                                                {e.description}
                                                {/* <h3 style={{color:'Black'}}>{e.description}</h3> */}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <ul style={{color:'Black'}}>
                                                    {e.keynotes.map((d)=>{return (<li>{d}</li>)})}
                                                </ul>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 7th July,2021</small>
                                    </Card.Footer>
                                </Card>
                            ) 
                        })
                    }
                </CardColumns>
            </Row>
        </Container>);
    }
}
 
export default TestComponent;