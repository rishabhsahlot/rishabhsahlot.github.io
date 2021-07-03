import React, { Component } from 'react';
import AGILE_trans from "./Imgs/AGILE_trans.png";
import PlanComponent from "../Plan/plan.jsx";
import DesignComponent from "../Design/design.jsx";
import DevelopComponent from "../Develop/develop.jsx";
import TestComponent from '../Test/test';
import ReleaseComponent from '../Release/release';
import FeedbackComponent from '../Feedback/feedback';
import Container from 'react-bootstrap/Container';

class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            rotationAngle : 0
        }
        
    }
    getComponent(angle) {
        if(angle<60){
            return <PlanComponent/>
        }else if(angle<120){
            return <DesignComponent/>
        }else if(angle<180){
            return <DevelopComponent/>
        }else if(angle<240){
            return <TestComponent/>
        }else if(angle<300){
            return <ReleaseComponent/>
        }else if(angle<360){
            return <FeedbackComponent/> 
        }
    }


    render() { 
        return (
            <div style={{backgroundColor:"#f5f5f5", fontFamily: "'Dosis', sans-serif"}}> 
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