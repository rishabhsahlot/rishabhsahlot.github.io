import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import extraCurriculars from './extracurricular';
import extraCurricularImgs from './Imgs/getImgs';
import Carousel from 'react-bootstrap/Carousel';
class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(extraCurricularImgs);
        console.log(extraCurriculars);
        return (  
        <Container>
            <Carousel>
                {
                    extraCurriculars.map((e)=>{
                        return (<Carousel.Item>
                            <img
                            className="d-block w-100 "
                            src={extraCurricularImgs[e.name][0].default}
                            alt="First slide"
                            align="center"
                            style={{padding: "2.5%", opacity:"0.30", background: "rgba(255,0,0,0.9)"}}
                            />
                            <Carousel.Caption>
                                <h3 style={{color:'Black'}}>{e.description}</h3>
                                <h5>
                                    <ul style={{color:'Black'}}>
                                        {e.keynotes.map((d)=>{return (<li>{d}</li>)})}
                                    </ul>
                                </h5>

                            </Carousel.Caption>
                        </Carousel.Item>)
                }) }
            </Carousel>
        </Container>);
    }
}
 
export default TestComponent;