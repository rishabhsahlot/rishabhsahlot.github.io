import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import SkillsComponent from './skills';
import profs from './proficiencies';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class DesignComponent extends Component {
    constructor(props){
        super(props);
        this.state = {  
            showProf:"languages"
        }
    }
    render() { 
        return (
            <Container style={{paddingBottom:"2rem"}}>
                <Row><h1 style={{padding:"3rem",textAlign:"center",fontSize:"4rem"}}>The 'Design' Stage</h1> </Row>
                <Row style={{padding:"-1rem",alignContent:"center"}}>
                    <Col>
                        <Nav justify variant="tabs" defaultActiveKey={this.state.showProf} onSelect={(e)=>this.setState({showProf:e})}>
                            <Nav.Item>
                                <Nav.Link href="/" eventKey="languages">Languages</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="frameworks">Frameworks</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tools">Tools</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="libraries">Libraries</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <SkillsComponent skillList={profs[this.state.showProf]}/>
                    </Col>
                    <Col>
                        <Card style={{ width: '36rem'}}>
                            <Card.Body>
                                <Card.Title style={{fontSize:"2.5rem"}}>How I 'designed' myself</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted" style={{fontSize:"1rem"}}>Skills & Courses</Card.Subtitle>
                                <Card.Text style={{fontSize:"1.5rem"}}>
                                Just Like a 
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
  
export default DesignComponent;