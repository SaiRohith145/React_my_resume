import React, { Component } from 'react'
import "./Css.css";
import {Carousel,Card,ListGroup,Button} from 'react-bootstrap';
import {Spring,animated} from 'react-spring';

class Project extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             python:false,
             react:false,
             bootstrap:false
        }
    }
    
    render() {
        return (
            <div className="container-fluid bg_blue min-vh-100">
                <div className="row pt-3">
                    <div className="col-lg-12 text-center">
                    <h1 className="display-3 text-white">Project</h1>
                    <hr/>

                    </div>
                </div>
                <div className="row text-center">
                        <div className="col-lg-4"></div>
                            <div className="col-lg-4 text-center d-flex flex-column">
                           
                            
                                <Button variant="outline-light" className="m-3" onClick={() => this.setState({python:!this.state.python})}>
                                Python Projects
                                </Button>
                                <Button variant="outline-light" className="m-3" onClick={() => this.setState({react:!this.state.react})}>
                                React Projects
                                </Button>
                                <Button variant="outline-light" className="m-3" onClick={() => this.setState({bootstrap:!this.state.bootstrap})}>
                                Bootstrap Projects
                                </Button>
                            </div>
                            <div className="col-lg-4"></div>

                </div>

                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 d-flex flex-column">
                    {this.state.python?<Spring
          
                    from={{ opacity: 0, color: 'pink',x:-500 }}
                    to={[
                        { opacity: 1, color: 'orange',x:0},
                        
                        
                    ]}
                    config={{ delay: 1000, duration: 1300 }}>
                    {styles => (
                        <animated.div className="container" style={styles}>
                            <div className="d-flex flex-row">
                            <Card style={{ width: '18rem' }} className="Card_h m-2">
                            <Card.Img variant="top" src="python_img.jfif"></Card.Img>
                            <Card.Body>
                                <Card.Title>Python Django</Card.Title>
                                <Card.Text>
                                Make functional web page using Django 
                                </Card.Text>
                                <Button variant="primary" onClick={()=>this.change_url('')}>GitHub</Button>
                            </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }} className="Card_h m-2">
                            <Card.Img variant="top" src="python_img.jfif"></Card.Img>
                            <Card.Body>
                                <Card.Title>Python Web scraping</Card.Title>
                                <Card.Text>
                                Web Scraping using Python 
                                </Card.Text>
                                <Button variant="primary" onClick={()=>this.change_url('')}>GitHub</Button>
                            </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }} className="Card_h m-2">
                            <Card.Img variant="top" src="python_img.jfif"></Card.Img>
                            <Card.Body>
                                <Card.Title>Python Games</Card.Title>
                                <Card.Text>
                                Games 
                                </Card.Text>
                                <Button variant="primary" onClick={()=>this.change_url('')}>GitHub</Button>
                            </Card.Body>
                            </Card>
                            
                            
                            
                                
                            </div>
                            <hr/>
                        </animated.div>
                    )}
                    </Spring>:""}
                    {this.state.react?<Spring
          
                    from={{ opacity: 0, color: 'pink',x:-500 }}
                    to={[
                        { opacity: 1, color: 'orange',x:0},
                        
                        
                    ]}
                    config={{ delay: 1000, duration: 1300 }}>
                    {styles => (
                        <animated.div className="container" style={styles}>
                            <div>
                            <Card style={{ width: '18rem' }} className="Card_h m-2">
                            <Card.Img variant="top" src="reactjs.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>React.JS</Card.Title>
                                <Card.Text>
                                Create a UI using React.js Examples
                                </Card.Text>
                                <Button variant="primary" onClick={()=>this.change_url('')}>GitHub</Button>
                            </Card.Body>
                            </Card>
                            
                            
                              <hr/>  
                            </div>
                        </animated.div>
                    )}
                    </Spring>:""}
                    {this.state.bootstrap?<Spring
          
                    from={{ opacity: 0, color: 'pink',x:-500 }}
                    to={[
                        { opacity: 1, color: 'orange',x:0},
                        
                        
                    ]}
                    config={{ delay: 1000, duration: 1300 }}>
                    {styles => (
                        <animated.div className="container" style={styles}>
                            <div>
                            <Card style={{ width: '18rem' }} className="Card_h m-2">
                            <Card.Img variant="top" src="bootstrap_img.jpg"></Card.Img>
                            <Card.Body>
                                <Card.Title>Bootstrap</Card.Title>
                                <Card.Text>
                                Web page Desing with Bootstrap
                                </Card.Text>
                                <Button variant="primary" onClick={()=>this.change_url('')}>GitHub</Button>
                            </Card.Body>
                            </Card>
                            
                            <hr/>
                                
                            </div>
                        </animated.div>
                    )}
                    </Spring>:""}
                    </div>
                    <div className="col-lg-2"></div>

                        </div>

                                
                
                
            </div>
        )
    }
}

export default Project;