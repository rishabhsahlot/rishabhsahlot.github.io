import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
class FeedbackComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            messageSent = false
        }
    }
    render() { 
        return ( 
            <Container>
                <Form action="mailto:rs3655@rit.edu" method="POST" onSubmit={()=>this.setState({messageSent:true})}>
                    {this.state.messageSent?<div>Message has been sent</div>:<div></div>}
                    <Form.Group>
                        <Form.Control type="text" placeholder="Normal text" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type="text" placeholder="Normal text" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
         );
    }
}
 
export default FeedbackComponent;