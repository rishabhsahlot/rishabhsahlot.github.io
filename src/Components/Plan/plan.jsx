import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import prof  from "./imgs/prof.png";
class PlanComponent extends Component {
    state = {  }
    render() { 
        return ( 

            // <Card style={{borderRadius:"50%", margin:"1em", width: "47%", height: "46%",background: "#fff1e6", padding: "17.5%", overflowWrap: "break-word", zIndex:"1000", position:"absolute", left:"9%", top:"8%"}}>
            //     <Card.Img variant="top" src={prof} style={{height:"100%"}} />
            //     <Card.Body>
            //         <Card.Title>Card Title</Card.Title>
            //         <Card.Text>
            //         Some quick example text to build on the card title and make up the bulk of
            //         the card's content.
            //         </Card.Text>
            //         {/* <Button variant="primary">Go somewhere</Button> */}
            //     </Card.Body>
            // </Card>

            <img src={prof} style={{borderRadius:"50%", marginTop:"1.4em", marginLeft:"11.8em",width: "49%", height: "77%",background: "#fff1e6",  overflowWrap: "break-word", zIndex:"1000", position:"absolute", left:"9%", top:"8%"}}/>

            // <Container style={{borderRadius:"50%", margin:"1em", width: "47%", height: "46%",background: "#fff1e6", padding: "17.5%", overflowWrap: "break-word", zIndex:"1000", position:"absolute", left:"9%", top:"8%"}}>
            //    <img src={prof} style={{height:"100%"}}/> 
            //    <h1 style={{fontSize:"2em"}}>ernvlreawighnlweirgv;3qwoigq34igj4g4g3  g34g5g5gtnhytm66746jj7</h1>   
            // </Container>
        )
    }
}
 
export default PlanComponent;