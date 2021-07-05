import React, { Component } from 'react';
import prof from "./Imgs/prof.png";
import PlanComponent from "../Plan/plan.jsx";
import DesignComponent from "../Design/design.jsx";
import DevelopComponent from "../Develop/develop.jsx";
import TestComponent from '../Test/test';
import ReleaseComponent from '../Release/release';
import FeedbackComponent from '../Feedback/feedback';
import Container from 'react-bootstrap/Container';
import './main.css';

class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            rotationAngle : 0
        }
        
    }
    render() { 
        return (
            <div style={{backgroundColor:"#f5f5f5", fontFamily: "'Dosis', sans-serif",display:"flex"}}> 
                <div style={{paddingRight:"3px",width:"4rem",height:"100%",backgroundColor:"rgba(0,0,0,0.7)",position:"fixed"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3.5em" fill="white" class="bi bi-caret-right-square-fill" viewBox="0 0 16 16" style={{width:"100%",position: "absolute",top: "50%", left: "50%", transform: "translateX(-50%) translateY(-50%)"}}>
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z"></path>
                    </svg>
                </div>
            
                <div style={{overflowY: "scroll", width: "100%",paddingLeft:"5rem"}}>
                    <div className="profile-image s-bg-image s-bg-blurred s-bg-light-text s-new-title-section s-section background-image lazyloaded" style={{backgroundImage:`url(${prof})`}} ></div>
                    <div style={{position:"relative",height:"100%"}}>
                        <PlanComponent/>
                        <DesignComponent/>
                        <DevelopComponent/>
                        <TestComponent/>
                        <ReleaseComponent/>
                        <FeedbackComponent/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MainComponent;