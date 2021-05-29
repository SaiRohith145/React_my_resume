import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
export default class Cards2 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row d-flex justify-content-around">
                    {
                [
                    'Primary',
                    'Secondary',
                    'Success',
                    'Danger',
                    'Warning',
                    'Info',
                    'Light',
                    'Dark',
                  ].map((variant, idx) => (
                    <Card
                      bg={variant.toLowerCase()}
                      key={idx}
                      text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                      style={{ width: '18rem' }}
                      className="mb-4 d-flex justify-content-around"
                    >
                      <Card.Header>Header</Card.Header>
                      <Card.Body>
                        <Card.Title>{variant} Card Title </Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  ))
                }
                </div>                
            </div>
        )
    }
}
