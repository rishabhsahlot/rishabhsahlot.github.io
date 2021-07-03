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
            <div style={{backgroundColor:"#f5f5f5", fontFamily: "'Dosis', sans-serif"}}> 
                <div className="profile-image s-bg-image s-bg-blurred s-bg-light-text s-new-title-section s-section background-image lazyloaded" style={{backgroundImage:`url(${prof})`}} ></div>
                <PlanComponent/>
                <DesignComponent/>
                <DevelopComponent/>
                <TestComponent/>
                <ReleaseComponent/>
                <FeedbackComponent/>
            </div>
        );
    }
}
 
export default MainComponent;