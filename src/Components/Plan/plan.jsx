import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import prof  from "./imgs/prof.png";
import "./plan.css";
class PlanComponent extends Component {
    state = {  }
    render() { 
        return (          
            <div className="profile-image s-bg-image s-bg-blurred s-bg-light-text s-new-title-section s-section background-image lazyloaded" style={{backgroundImage:`url(${prof})`}} >
                
            </div>
        )
    }
}
 
export default PlanComponent;