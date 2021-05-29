import React, { Component,useState } from 'react'
import "./Css.css";
import {Modal,Button,Card,ListGroup} from 'react-bootstrap';
//import {Spring,animated} from 'react-spring';

class Education extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
            fullscreen: true,
            show : false
        }
    }
    handleShow=(breakpoint)=> {
        this.setState({
            fullscreen : breakpoint,
            show : true
        });
        
      }
    
    
    render() {
        return (
            <div className="container-fluid bg_blue min-vh-100">
                <div className="row pt-3">
                    <div className="col-lg-12 text-center">
                    <h1 className="display-3 text-white">Education</h1>
                    <hr/>

                    </div>
                </div>
                    
                    <div className="row text-center">
                        <div className="col-lg-4"></div>
                            <div className="col-lg-4 text-center d-flex flex-column">
                           
                            
                                <Button variant="outline-light" className="m-3" onClick={() => this.handleShow(true)}>
                                Education
                                </Button>
                                <Modal className="d-flex justify-content-center" show={this.state.show} fullscreen={this.state.fullscreen} onHide={() => this.setState({show:false})}>
                                    <Modal.Header closeButton>
                                    <Modal.Title>Education</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className="d-flex justify-content-center flex-column">
                                    <Card className="Card_h m-3" style={{ width: '18rem' }}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Secondary Education/Tenth class</ListGroup.Item>
                                        <ListGroup.Item>Pass %: 83%</ListGroup.Item>
                                        <ListGroup.Item>Year of Passing: 2014</ListGroup.Item>
                                        <ListGroup.Item>School Name: <i>Apex High School</i></ListGroup.Item>
                                        
                                    </ListGroup>
                                    </Card>
                                
                                    
                                
                                    <Card className="Card_h m-3" style={{ width: '18rem' }}>
                                    <ListGroup variant="flush">
                                    <ListGroup.Item>12 th class</ListGroup.Item>
                                    <ListGroup.Item>Pass %: 91%</ListGroup.Item>
                                    <ListGroup.Item>Year of Passing: 2016</ListGroup.Item>
                                    <ListGroup.Item>School Name: <i>Narayana Junior College</i></ListGroup.Item>
                                    </ListGroup>
                                    </Card>
                                    
                                    
                                
                                    
                                    <Card className="Card_h m-3" style={{ width: '18rem' }}>
                                    <ListGroup variant="flush">
                                    <ListGroup.Item>Higher Education</ListGroup.Item>
                                    <ListGroup.Item>Degree: BE</ListGroup.Item>
                                    <ListGroup.Item>Specialisation: <i>Electronics and Communiction</i></ListGroup.Item>
                                    <ListGroup.Item>Pass %: 83%</ListGroup.Item>
                                    <ListGroup.Item>Year of Passing: 2020</ListGroup.Item>
                                    <ListGroup.Item>School Name: <i>RMK Engineering College</i></ListGroup.Item>
                                    </ListGroup>
                                    </Card>
                                    </Modal.Body>
                                    
                                </Modal>
                                
                                      
                            </div>
                            <div className="col-lg-4"></div>
                    </div>  
                    <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                    <Card className="Card_h m-3" style={{ width: '18rem' }}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Secondary Education/Tenth class</ListGroup.Item>
                                        <ListGroup.Item>Pass %: 83%</ListGroup.Item>
                                        <ListGroup.Item>Year of Passing: 2014</ListGroup.Item>
                                        <ListGroup.Item>School Name: <i>Apex High School</i></ListGroup.Item>
                                        
                                    </ListGroup>
                                    </Card>
                                
                                    
                                
                                    <Card className="Card_h m-3" style={{ width: '18rem' }}>
                                    <ListGroup variant="flush">
                                    <ListGroup.Item>12 th class</ListGroup.Item>
                                    <ListGroup.Item>Pass %: 91%</ListGroup.Item>
                                    <ListGroup.Item>Year of Passing: 2016</ListGroup.Item>
                                    <ListGroup.Item>School Name: <i>Narayana Junior College</i></ListGroup.Item>
                                    </ListGroup>
                                    </Card>
                                    
                                    
                                
                                    
                                    <Card className="Card_h m-3" style={{ width: '18rem' }}>
                                    <ListGroup variant="flush">
                                    <ListGroup.Item>Higher Education</ListGroup.Item>
                                    <ListGroup.Item>Degree: BE</ListGroup.Item>
                                    <ListGroup.Item>Specialisation: <i>Electronics and Communiction</i></ListGroup.Item>
                                    <ListGroup.Item>Pass %: 83%</ListGroup.Item>
                                    <ListGroup.Item>Year of Passing: 2020</ListGroup.Item>
                                    <ListGroup.Item>School Name: <i>RMK Engineering College</i></ListGroup.Item>
                                    </ListGroup>
                                    </Card>
                    </div>
                    </div>              
            </div>
        )
    }
}

export default Education;