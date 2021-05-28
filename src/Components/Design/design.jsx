import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import SkillsComponent from './skills';
import profs from './proficiencies';

class DesignComponent extends Component {
    constructor(props){
        super(props);
        this.state = {  
            showProf:"languages"
        }
    }
    render() { 
        return (
            <div>
                <Nav justify variant="tabs" defaultActiveKey={this.state.showProf} onSelect={(e)=>this.setState({showProf:e})}>
                    <Nav.Item>
                        <Nav.Link href="/" eventKey="languages">Languages</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="frameworks">Frameworks</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="tools">Tools</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="libraries">Libraries</Nav.Link>
                    </Nav.Item>
                </Nav>
                <SkillsComponent skillList={profs[this.state.showProf]}/>
            </div> 
            // <SkillsComponent languages={languages}/>
        );
    }
}
  
export default DesignComponent;