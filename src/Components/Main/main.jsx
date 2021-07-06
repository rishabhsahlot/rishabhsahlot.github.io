import React, { Component } from 'react';
import prof from "./Imgs/prof.png";
import PlanComponent from "../Plan/plan.jsx";
import DesignComponent from "../Design/design.jsx";
import DevelopComponent from "../Develop/develop.jsx";
import TestComponent from '../Test/test';
import ReleaseComponent from '../Release/release';
import FeedbackComponent from '../Feedback/feedback';
import './main.scss';
import Nav from "react-bootstrap/Nav";

class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            rotRange : {}
        }
    }
    componentDidMount(){
        
    }
    render() { 
        return (
            <div style={{backgroundColor:"#f5f5f5", fontFamily: "'Dosis', sans-serif",display:"flex"}}> 
                <div id="sidebar" style={{paddingRight:"3px",width:"4rem",height:"100%",backgroundColor:"rgba(0,0,0,0.7)",position:"fixed"}}>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3.5em" fill="white" class="bi bi-caret-right-square-fill" viewBox="0 0 16 16" 
                        style={{width:"100%",position: "absolute",top: "50%", left: "50%", transform: "translateX(-50%) translateY(-50%)"}}
                        // onClick    
                    >
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z"></path>
                    </svg> */}
                    <Nav defaultActiveKey="#plan" className="flex-column">
                        <Nav.Link href="#plan" style={{lineHeight:"95%"}}>P<br/>L<br/>A<br/>N</Nav.Link>
                        <Nav.Link href="#design" style={{lineHeight:"95%"}}>D<br/>E<br/>S<br/>I<br/>G<br/>N</Nav.Link>
                        <Nav.Link href="#develop" style={{lineHeight:"95%"}}>D<br/>E<br/>V<br/>E<br/>L<br/>O<br/>P</Nav.Link>
                        <Nav.Link href="#test" style={{lineHeight:"95%"}}>T<br/>E<br/>S<br/>T</Nav.Link>
                        <Nav.Link href="#release" style={{lineHeight:"95%"}}>R<br/>E<br/>L<br/>E<br/>A<br/>S<br/>E</Nav.Link>
                        <Nav.Link href="#feedback" style={{lineHeight:"95%"}}>F<br/>E<br/>E<br/>D<br/>B<br/>A<br/>C<br/>K</Nav.Link>
                    </Nav>
                </div>
            
                <div style={{overflowY: "scroll", width: "100%",paddingLeft:"5rem"}}>
                    <div id="profImg" className="profile-image s-bg-image s-bg-blurred s-bg-light-text s-new-title-section s-section background-image lazyloaded" style={{backgroundImage:`url(${prof})`}}>
                        {/* <div style={{backgroundColor:"rgb(23,24,73,0.4)", position:"absolute", top:"0", left:"0", width:"100%", height:"100%"}}>

                        </div> */}
                    </div>
                    <div style={{position:"relative",height:"100%"}}>
                        {/* <div className="typewriter">
                            <h1> Checking, checking , 1....2.....3..</h1>
                        </div> */}
                        <div id="plan">
                            <PlanComponent/>
                        </div>
                        <div id="design">
                            <DesignComponent/>
                        </div>
                        <div id="develop">
                            <DevelopComponent/>
                        </div>
                        <div id="test"> 
                            <TestComponent/>
                        </div>
                        <div id="release">
                            <ReleaseComponent/>
                        </div>
                        <div id="feedback">
                            <FeedbackComponent/>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MainComponent;