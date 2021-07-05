import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

class SkillsComponents extends Component {
    constructor(props){
        super(props);
        this.state = {  
            // skillList : this.props.skillList 
        };
    }
    render() {
        let a = Object.keys(this.props.skillList);
        let b = a.map(key=>{ 
            return (<ProgressBar now={{key}} label={`${{key}}%`} />)
        });
        return (
            <div align="right" style={{paddingLeft:"5%",paddingRight:"5%"}}>
                {
                    Object.keys(this.props.skillList).map((key)=>{ 
                        return (<div><h7>{this.props.skillList[key]}</h7><br/><ProgressBar align="center" now={key} label={`${key}%`} /></div>);
                    })
                }
            </div>  
            
        );
    }
}
 
export default SkillsComponents;