import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import projects from './project';
import projectImgs from './Imgs/getImgs';
import Carousel from 'react-bootstrap/Carousel';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class DevelopComponent extends Component {
    constructor(props){
        super(props);
        this.state = {  
            project:projects[0]
        }
    }
    render() {
        console.log(projects);     
        // let prevIndicator = <span className="carousel-control-prev-icon" style={{color:"black"}}/>;
        // let nextIndicator = <span className="carousel-control-next-icon" style={{color:"black"}}/>;
        return (
            <Container style={{width:"60%", position:"absolute", display: "flex"}}>
                <Card style={{minWidth:"70%", background:"yellow"}}>
                    <Carousel fade interval={null}>
                        {
                            projectImgs[this.state.project.name].map((e)=>{
                                return (<Carousel.Item>
                                    <img
                                    className="d-block w-100 "
                                    src={e.default}
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
                        <Card.Header>Description</Card.Header>
                        <Card.Text>{this.state.project.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer style={{display:'flex'}}>    
                        <Button href={this.state.project.source}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                            &nbsp;
                            Get Source
                        </Button>
                        
                        &nbsp;
                        {this.state.project.hasOwnProperty('youtube_link')?
                            <Button href={this.state.project.youtube_link} style={{background:"red"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                                </svg>
                                &nbsp;
                                Watch Demonstration
                            </Button>
                            :
                            <p></p>
                        }
                    </Card.Footer>
                </Card>
                <Nav defaultActiveKey={this.state.projectName} className="flex-column" align="left" style={{marginLeft:"5%", minWidth:"25%"}}>
                    {
                        projects.map((e)=>{
                            return (
                                <Nav.Link eventKey={e.name} align="left" onClick={(f)=>this.setState({project:e})}> 
                                    <p style={{width:"100%"}}>{e.name}</p>
                                </Nav.Link>
                            )
                        })
                    }
                </Nav>
            </Container>
         );
    }
}
 
export default DevelopComponent;