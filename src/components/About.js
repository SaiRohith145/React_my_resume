import React, { Component } from 'react'
import "./Css.css";
import {Carousel,Card,ListGroup,Button} from 'react-bootstrap';
import {Spring,animated} from 'react-spring';

class About extends Component {
    change_url(varient){
        window.open(`${varient}`);
    }
    render() {
        return (
            <div className="container-fluid bg_blue min-vh-100">
                <div className="row pt-3">
                    <div className="col-lg-12 text-center">
                    <h1 className="display-3 text-white">About</h1>
                    <hr/>

                    </div>
                </div>
                
                <Spring
          
                        from={{ opacity: 0}}
                        to={[
                            { opacity: 0.5},
                            { opacity: 1 },
                            
                        ]}
                        config={{ delay: 3000, duration: 1000 }}>
                        {styles => (
                            <animated.div className="container" style={styles}>
                                <Carousel>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100 about_img"
                                    src="ongole.jpg"
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    <h1 className="">Living in Ongole</h1>
                                    <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100 about_img"
                                    src="1.jpg"
                                    alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                    <h3>Love to do Gardening</h3>
                                    <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                
                                </Carousel>
                            </animated.div>
                    )}
                </Spring>
                <hr/>
                    
                    <div className="row text-center">
                        <div className="col-lg-1"></div>
                            <div className="col-lg-10 text-center d-flex justify-content-around">
                            
                            <Card className="Card_h" style={{ width: '18rem' }}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Full Name: <i>Maddla Sai Rohith</i></ListGroup.Item>
                                <ListGroup.Item>Father Name: <i>Maddla Bhaskar</i></ListGroup.Item>
                                <ListGroup.Item>Mother Name: <i>Maddla Lakshmi sujatha</i></ListGroup.Item>
                                <ListGroup.Item>Phone No: <i>9573480603</i></ListGroup.Item>
                                <ListGroup.Item>Email: <i>m.sairohith145@gmail.com</i></ListGroup.Item>
                                <ListGroup.Item>Address: <i>21/30/321 Gopal Nager, Ongole, Prakasam, Andhra Pradesh </i></ListGroup.Item>
                            </ListGroup>
                            </Card>
                            <Card style={{ width: '18rem' }} className="Card_h">
                            <Card.Img variant="top" src="linkedin.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>LinkedIn</Card.Title>
                                <Card.Text>
                                To view LinkedIn click the below button.
                                </Card.Text>
                                <Button variant="primary" onClick={()=>this.change_url('https://www.linkedin.com/in/sairohith-maddla-290948130/')}>LinkedIn</Button>
                            </Card.Body>
                            </Card>
                            </div>
                            <div className="col-lg-1"></div>
                    </div>                
            </div>
        )
    }
}

export default About;