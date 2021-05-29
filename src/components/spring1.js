import React,{PureComponent} from 'react';
import {Spring,animated} from 'react-spring';
import './Css.css';
import Spring2 from './spring2';
class Spring1 extends PureComponent {
    render() {
      return (
        <React.Fragment>
            <div  className="container">
                <div className="row backgro">
                    <div className="col-lg-6">
            <Spring
          //loop
          from={{ opacity: 0, color: 'black',marginTop: 300 }}
          to={[
            { opacity: 1, color: '#ffffff',marginTop: 30 },
            
          ]}
          config={{ delay: 1000, duration: 3000 }}>
          {styles => (
            <animated.div className="container" style={styles}>
                <div>
                    <h1>Welcome TO Page</h1>
                    
                </div>
            </animated.div>
          )}
        </Spring>
        </div>

        <div className="col-lg-6">
        <Spring
          
          from={{ y:0 ,color:'white'}}
          to={[
            { y:100, color:'pink' },
            { y:40, color:'white' },
            
            
            
          ]}
          config={{ delay: 500, duration: 1500 }}>
          {styles => (
            <animated.div className="container" style={styles}>
                <div>
                    <h1>I will fade in and out</h1>
                </div>
            </animated.div>
          )}
        </Spring></div>
        </div></div>
        
        </React.Fragment>
      )
    }
  }
export default Spring1;

