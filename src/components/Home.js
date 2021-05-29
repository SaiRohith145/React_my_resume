import React, { Component } from 'react'
import "./Css.css";
import {Card} from 'react-bootstrap';
import {Spring,animated} from 'react-spring';

class Home extends Component {
    change_url(varient){
        window.location=`/#/${varient}`;
    }
    render() {
        return (
            <div className="container-fluid bg_blue min-vh-100">
                <div className="row pt-3">
                    <div className="col-lg-12 text-center">
                    <h1 className="display-3 text-white">Welcome</h1>
                    <img src="rohith_new.jpg" className="rounded-circle user_img" alt="Cinque Terre"/>
                    <h2 className="display-4 text-white"><i>Sai Rohith</i></h2>
                    <hr/>
                    

                    </div>
                </div>
                
                <Spring
          
                        from={{ opacity: 0,x:-100}}
                        to={[
                            { opacity: 0.5,x:-50 },
                            { opacity: 1,x:0 },
                            
                        ]}
                        config={{ delay: 10000, duration: 1000 }}>
                        {styles => (
                            <animated.div className="container" style={styles}>
                                <div className="row d-flex justify-content-around">
                        {
                            [
                                'About',
                                'Education',
                                'Project',
                                'Programing_Skills',
                                'Skills',
                                'End',
                                ].map((variant, idx) => (
                                 
                                <Card
                                    bg={idx%2==0?'primary':'secondary'}
                                    key={idx}
                                    text={'white'}
                                    style={{ width: '18rem' }}
                                    className={`m-4 Card_h`}
                                    onClick={()=>this.change_url(`${variant.toLowerCase()}`)}
                                    
                                >
                                    <Card.Header><h3>{variant}</h3></Card.Header>
                                    <Card.Body>
                                    <Card.Title>{variant}.....</Card.Title>
                                    <Card.Text>
                                        Click here to see the {variant.toLowerCase()}...................
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                
                                ))
                        }
                        </div>
                        </animated.div>
                    )}
                </Spring>
                    
                    
                
            </div>
        )
    }
}

export default Home;