import React, { Component } from 'react';
import AGILE_trans from "./Imgs/AGILE_trans.png";
import PlanComponent from "../Plan/plan.jsx";
import DesignComponent from "../Design/design.jsx";
import DevelopComponent from "../Develop/develop.jsx";
import ReleaseComponent from '../Release/release';
import TestComponent from '../Test/test';

class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            rotationAngle : 0
        }
    }
    
    render() { 
        return (
            <TestComponent/>
            // <ReleaseComponent/>
            // <DevelopComponent/>
            // <div>
            //     <img src={imgs[0].default}></img>
            // </div>
            // <DesignComponent/>
            // <div style={{backgroundColor:"#f5f5f5", height:"80%"}}> 
            // {/* "#242526"   #5d6770 */}
            //     {/* <h1>Hi Th</h1> */}
            //     <span align="center"><h1 style={{fontSize:"3em", color:"#4ad7ff", display:"inline-block"}}>myProfile</h1> <h1 style={{fontSize:"3em", color:"#d0d0d0",display:"inline-block"}}>= AGILEProcess() ; </h1> </span>
            //     <span align="center">
            //     <button style={{display:"inline-block", verticalAlign:"middle"}} onClick={()=>this.setState({rotationAngle:(this.state.rotationAngle+60)%360})}>Go To Previous</button>
            //     <div align="center" style={{position: "relative", height:"60%", width:"60%"}}>
            //         <PlanComponent/>
            //         <img src={AGILE_trans} style={{margin:"1em",height:"60%",width:"60%", transform: `rotate(${this.state.rotationAngle}deg)`}}></img>
                    
            //     </div>
            //     <button style={{display:"inline-block", verticalAlign:"middle"}} onClick={()=>this.setState({rotationAngle:(this.state.rotationAngle+300)%360})}>Go To Next</button>
            //     </span>
                
            // </div>
        );
    }
}
 
export default MainComponent;