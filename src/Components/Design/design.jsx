import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import SkillsComponent from './skills';
import profs from './proficiencies';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import courseData from './courses'
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
                <Row>
                    <div style={{alignItems:"center"}}>
                        <h1 style={{padding:"0 6rem 0 6rem",textAlign:"center",alignSelf:"center", fontSize:"4rem"}}>The 'Design' Phase</h1>
                        <h4 className="mb-2 text-muted" style={{padding:"0 10rem 1rem 10rem",textAlign:"center"}}><b><i>"To design solving the 'Career' project I needed to build up skills & learn new Concepts"</i></b></h4>
                    </div>
                </Row>
                <Row style={{padding:"-1rem",alignContent:"center",fontsize:"2rem"}}>
                    <Col>
                        <h1>Technologies & their Proficiency</h1>
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
                        <div style={{paddingTop:"3rem"}}>
                            <Card.Title style={{fontSize:"2.5rem"}}>Self-studied Courses</Card.Title>
                            <ListGroup variant="flush">
                                {
                                    courseData['otherCourses'].map((course)=>{
                                        return (
                                            <ListGroup.Item>
                                                <a href={course.link}>{course.name}</a> 
                                            </ListGroup.Item>
                                        )
                                    })
                                }
                            </ListGroup>
                        </div>
                    </Col>
                    <Col>
                        <Card style={{ width: '100%',fontSize:"1.5rem"}}>
                            <Card.Body>
                                <Card.Title style={{fontSize:"2.5rem"}}>Courses & Concepts</Card.Title>
                                <Card.Text style={{fontSize:"1rem"}}>
                                    Courses that I have taken:-
                                    <ListGroup variant='flush'>
                                        {
                                            courseData['courses'].map((course)=>{
                                                return (
                                                    <ListGroup.Item>
                                                        <a href={course.link}>{course.name},    {course.sem}</a> 
                                                    </ListGroup.Item>
                                                )
                                            })
                                        }
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
  
export default DesignComponent;