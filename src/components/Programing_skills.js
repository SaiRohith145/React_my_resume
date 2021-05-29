import React, { Component } from 'react'
import "./Css.css";
import {Carousel,Card,ListGroup,Button} from 'react-bootstrap';
import {Spring,animated} from 'react-spring';

class Programing_skills extends Component {
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
                    <h1 className="display-3 text-white">Programing skills</h1>
                    <hr/>

                    </div>
                </div>
                

                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 d-flex flex-row justify-content-around">
                    <i class="fab fa-bootstrap fa-5x"></i>
                    <i class="fab fa-react fa-5x"></i>
                    <i class="fab fa-redux fa-5x"></i>
                    <i class="fab fa-cuttlefish fa-5x"></i>
                    <i class="fab fa-python fa-5x"></i>
                    <i class="fab fa-js fa-5x"></i>
                    <i class="fab fa-java fa-5x"></i>
                    <i class="fab fa-html5 fa-5x"></i>
                    <i class="fab fa-css3-alt fa-5x"></i>
                    </div>
                    <div className="col-lg-2"></div>

                </div>

                                
                
                
            </div>
        )
    }
}

export default Programing_skills;