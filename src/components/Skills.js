import React, { Component } from 'react'
import "./Css.css";

class Skills extends Component {
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
                    <h1 className="display-3 text-white">Skills</h1>
                    <hr/>

                    </div>
                </div>
                

                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 d-flex flex-row justify-content-around">
                    <i class="fas fa-paint-brush fa-5x"></i>
                    <i class="fas fa-code fa-5x"></i>
                    </div>
                    <div className="col-lg-2"></div>

                </div>

                                
                
                
            </div>
        )
    }
}

export default Skills;