import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import extraCurriculars from './extracurricular';
import extraCurricularImgs from './Imgs/getImgs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade'

class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
        <Container style={{paddingBottom:"2rem"}}>
            <Row>
                <div style={{alignItems:"center"}}>
                    <h1 style={{padding:"0 3rem 0 3rem",textAlign:"center",alignSelf:"center", fontSize:"4rem"}}>The 'Test' Phase</h1>
                    <h4 className="mb-2 text-muted" style={{padding:"0 10rem 1rem 10rem",textAlign:"center"}}>To test the 'Career' Project one needs to evaluate is against testcases/compete in competitions</h4>
                </div>
            </Row>
            <Row style={{witdh:"100%",paddingBottom:"3rem"}}>
                <Col>
                    <Fade left>
                        <img src={extraCurricularImgs['Competitive Coding'][0].default} style={{width:"85%",height:"auto",margin:"auto",display:"block",boxShadow:"0 10px 15px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)",transform: "matrix(1, 0, 0, 1, 0, 0)"}}/>
                    </Fade>
                </Col>
                <Col>
                    <Fade right>
                        <div>
                            <h1>{extraCurriculars[0].name}</h1>
                            <p style={{fontSize:"1.5rem"}}>{extraCurriculars[0].description}</p>
                            <ul style={{color:'Black',fontSize:"1.5rem"}}>
                                {extraCurriculars[0].keynotes.map((d)=>{return (<li>{d}</li>)})}
                            </ul>
                        </div>
                    </Fade>
                </Col>
            </Row>
            <br></br>
            <Row style={{width:"100%"}}>
                <Col>
                    <Fade left>
                        <h1>{extraCurriculars[1].name}</h1>
                        <p style={{fontSize:"1.5rem"}}>{extraCurriculars[1].description}</p>
                        <ul style={{color:'Black',fontSize:"1.5rem"}}>
                            {extraCurriculars[1].keynotes.map((d)=>{return (<li>{d}</li>)})}
                        </ul>
                    </Fade>
                </Col>
                <Col>
                    <Fade right>
                        <img src={extraCurricularImgs['Hackathons'][0].default} style={{width:"85%",height:"auto",margin:"auto",display:"block", boxShadow:"0 10px 15px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)"}}/>
                    </Fade>
                </Col>
            </Row>
        </Container>);
    }
}
 
export default TestComponent;