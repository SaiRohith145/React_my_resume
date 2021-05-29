import React,{Component} from 'react';
import {Parallax,ParallaxLayer} from 'react-spring';
import './Css.css';
class Spring2 extends Component {
    render() {
      return (
            
                
                <Parallax pages={2} style={{ top: '0', left: '0' }}>
                <ParallaxLayer
                    offset={0}
                    speed={2.5}
                    style={{backgroundColor: '#ff6d0d', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <p>Scroll down</p>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d' }} />

                <ParallaxLayer
                    offset={1}
                    speed={0.5}
                    style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    }}>
                    <p>Scroll up</p>
                </ParallaxLayer>
                </Parallax>
                    
       
      )
    }
  }
export default Spring2;

