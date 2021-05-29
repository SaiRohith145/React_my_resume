import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark">
                <div className="d-flex flex-column">
                <footer className="footer">
                <div>
                <a href="#">CoreUI</a>
                <span>&copy; 2020 creativeLabs.</span>
                </div>
                <div className="ml-auto">
                <span>Powered by</span>
                <a href="#">React Bootstrap</a>
                </div>
                </footer>
                </div>
                
            </div>
        )
    }
}
