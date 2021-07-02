import React, { Component } from 'react';
import AGILE_trans from "./Imgs/AGILE_trans.png";
import PlanComponent from "../Plan/plan.jsx";
import DesignComponent from "../Design/design.jsx";
import DevelopComponent from "../Develop/develop.jsx";
import ReleaseComponent from '../Release/release';
import TestComponent from '../Test/test';
import FeedbackComponent from '../Feedback/feedback';

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
            // <FeedbackComponent/>
            // <TestComponent/>
            // <ReleaseComponent/>
            // <DevelopComponent/>
            // <div>
            //     <img src={imgs[0].default}></img>
            // </div>
            // <DesignComponent/>
            <div style={{backgroundColor:"#f5f5f5", height:"80%"}}> 
                {/* First Line */}
                <span align="center">
                    <h1 style={{fontSize:"3em", color:"#4ad7ff", display:"inline-block"}}>
                        myProfile
                    </h1> 
                    <h1 style={{fontSize:"3em", color:"#d0d0d0",display:"inline-block"}}
                        >= AGILEProcess() ; 
                    </h1> 
                </span>
                {/* Main Component */}
                <span style={{display:"inline-block"}}>
                    <span align="center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" style={{display:"inline-block", verticalAlign:"middle"}} fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16" onClick={()=>this.setState({rotationAngle:(this.state.rotationAngle+60)%360})}>
                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                        </svg>
                        {/* <button style={{display:"inline-block", verticalAlign:"middle"}} >
                            Go To Previous
                        </button> */}
                        <div align="center" style={{position: "relative", height:"60%", width:"60%", display: "inline-block"}}>
                            <img src={AGILE_trans} style={{margin:"1em",height:"60%",width:"60%", transform: `rotate(${this.state.rotationAngle}deg)`}}/>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{display:"inline-block", verticalAlign:"middle"}} width="60" height="60" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16" onClick={()=>this.setState({rotationAngle:(this.state.rotationAngle+300)%360})}>
                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                        </svg>
                    </span>
                    <div>
                        {this.getComponent(this.state.rotationAngle)}
                    </div>
                </span>    
            </div>
        );
    }
}
 
export default MainComponent;