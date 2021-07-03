import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import projects from './project';
import projectImgs from './Imgs/getImgs';
import Carousel from 'react-bootstrap/Carousel';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col } from 'react-bootstrap';

class DevelopComponent extends Component {
    constructor(props){
        super(props);
        this.state = {  
        }
    }
    render() {
        console.log(projects);
        return (
            <Container style={{paddingBottom:"2em"}}>
                <Row><h1 style={{padding:"3rem",textAlign:"center",fontSize:"4rem"}}>The 'Develop' Stage</h1> </Row>
                <Row style={{width:"60%", display: "flex"}}>
                    <CardColumns style={{columnCount:"3"}}>
                        {
                            projects.map((p)=>{
                                return (
                                    <Card>
                                        <Carousel fade style={{background:"White"}}>
                                            {
                                                projectImgs[p.name].map((e)=>{
                                                    return (
                                                        <Carousel.Item>
                                                            <img src={e.default} alt={p.name} align="center"/>    
                                                        </Carousel.Item>)
                                                }) }
                                        </Carousel>
                                        <Card.Title style={{textAlign:"center"}}>{p.name}</Card.Title>
                                        <div>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item style={{backgroundColor:"Black",color:"White",opacity:"0.7"}}>
                                                    <Row>
                                                        <Col style={{borderRight:"2px solid gray"}}>
                                                            Topic Tags: {p.topic_tags.join(" \u2022 ")}
                                                        </Col>
                                                        <Col style={{borderRight:"2px solid gray"}}>
                                                            Tech Tags: {p.tech_tags.join(" \u2022 ")}
                                                        </Col>
                                                        <Col>
                                                            Collaborators: &nbsp; 
                                                            {p.collaborators.map((col,idx)=>
                                                            <a href={p.collaborator_links[idx]}>
                                                                &bull; 
                                                                {col} &nbsp;
                                                            </a>
                                                            )} 
                                                            <a href="https://www.linkedin.com/in/rishabh-sahlot/">&bull;Myself</a>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item style={{backgroundColor:"Black",color:"White",opacity:"0.7"}}>
                                                    <Card.Text>
                                                        {p.description}
                                                    </Card.Text>    
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </div>
                                    </Card>
                                )
                            })
                        }


                        
                    </CardColumns>
                        {/* <Card.Body>
                            <Card.Title> <h1 style={{alignItems:'center'}}>{this.state.project.name}</h1></Card.Title>
                            
                            <CardDeck>
                                <Card>
                                    <Card.Header>Topic Tags</Card.Header>
                                    <Card.Text> {this.state.project.topic_tags.join(" \u2022 ")}</Card.Text>
                                </Card>
                                <Card>
                                    <Card.Header>Tech Tags</Card.Header>
                                    <Card.Text>{this.state.project.tech_tags.join(" \u2022 ")}</Card.Text> 
                                </Card>
                                <Card>
                                    <Card.Header>Collaborators</Card.Header>
                                    <Card.Text>
                                        &nbsp; 
                                        {this.state.project.collaborators.map((col,idx)=>
                                        <a href={this.state.project.collaborator_links[idx]}>
                                            &bull; 
                                            {col} &nbsp;
                                        </a>
                                        )} 
                                        <a href="https://www.linkedin.com/in/rishabh-sahlot/">&bull;Myself</a> 
                                    </Card.Text>
                                </Card>
                            </CardDeck>
                            <Card.Header style={{color:"white"}}>Description</Card.Header>
                            <Card.Text style={{color:"white"}}>{this.state.project.description}</Card.Text>
                        </Card.Body>
                        
                        <Card.Footer style={{display:'flex'}}>    
                            <Button href={this.state.project.source}>
                                <i class="bi bi-github"/> &nbsp; Get Source
                            </Button>
                            
                            &nbsp;
                            {this.state.project.hasOwnProperty('youtube_link')?
                                <Button href={this.state.project.youtube_link} style={{background:"red"}}>
                                    <i class="bi bi-youtube"/> &nbsp; YouTube
                                </Button>
                                :
                                <p/>
                            }
                        </Card.Footer>
                    
                    </Card> */}

                    {/* <Nav defaultActiveKey={this.state.projectName} className="flex-column" align="left" style={{marginLeft:"5%", minWidth:"25%"}}>
                        {
                            projects.map((e)=>{
                                return (
                                    <Nav.Link eventKey={e.name} align="left" onClick={(f)=>this.setState({project:e})}> 
                                        <p style={{width:"100%"}}>{e.name}</p>
                                    </Nav.Link>
                                )
                            })
                        }
                    </Nav> */}
                </Row>
            </Container>
         );
    }
}
 
export default DevelopComponent;