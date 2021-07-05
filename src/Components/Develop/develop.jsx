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
        this.state = projects.reduce((acc,e)=>{
            acc[e.name]=false
            return acc
        });
    }
    render() {
        console.log(projects);
        return (
            <div style={{padding:"0em 6em 2em 6em",backgroundColor:"#ce786b"}}>
                <Row>
                    <div style={{alignItems:"center"}}>
                        <h1 style={{padding:"0 6rem 0 6rem",textAlign:"center",alignSelf:"center", fontSize:"4rem"}}>The 'Develop' Phase</h1>
                        <h4 style={{padding:"0 10rem 1rem 10rem",textAlign:"center",color:"#ddd"}}>In the develop phase we implement the 'Career' project in the form of academic and other personal projects</h4>
                    </div>
                </Row>
                <Row style={{width:"100%", display: "flex"}}>
                    <CardColumns style={{columnCount:"3"}}>
                        {
                            projects.map((p)=>{
                                return (
                                    <Card style={{postion:"relative"}}>
                                        <Carousel fade style={{background:"Black", width:"100%",height:"22em"}}>
                                            {
                                                projectImgs[p.name].map((e)=>{
                                                    return (
                                                        <Carousel.Item>
                                                            <img src={e.default} alt={p.name} align="center" style={{width:"auto",maxWidth:"100%",height:"22em",margin:"auto",display: "block"}}/>    
                                                        </Carousel.Item>)
                                                }) }
                                        </Carousel>
                                        {(this.state[p.name])?
                                            <div style={{position:"absolute",top:"0",left:"0", zIndex:"1000"}}>
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
                                            :
                                            <div></div>
                                        }
                                        <Card.Title style={{textAlign:"center",height:"2em"}} onMouseOver={(event)=>this.setState({[p.name]:true})} onMouseOut={(event)=>this.setState({[p.name]:false})}>
                                            {p.name}
                                            &nbsp;
                                            <a href={p.source}><i class="bi bi-github"></i></a>
                                            {
                                                (p.youtube_link)?
                                                    <span>
                                                        &nbsp; 
                                                        <a href={p.youtube_link}><i class="bi bi-youtube" style={{fill:"red"}}></i></a>
                                                    </span>
                                                    :
                                                    <p/>
                                                    
                                            }
                                        </Card.Title>
                                    </Card>
                                )
                            })
                        }
                    </CardColumns>
                </Row>
            </div>
         );
    }
}
 
export default DevelopComponent;