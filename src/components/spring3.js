import React,{PureComponent} from 'react';
import {Spring,animated} from 'react-spring';

class Spring3 extends PureComponent {
    
       constructor(props) {
           super(props)
       
           this.state = {
                view:true
           }
       }
       change=()=>{
           this.setState({
               view:!this.state.view
           })

       }
       render(){
           return(
               <div className="text-center">
                   <button className="btn btn-primary btn-rounded" onClick={this.change}>{this.state.view?`to hide click here`:`to view click here`}</button>
                   {this.state.view?<Spring
          
          from={{ opacity: 0, color: 'pink',x:-500 }}
          to={[
            { opacity: 1, color: 'orange',x:0},
            
            
          ]}
          config={{ delay: 1000, duration: 3000 }}>
          {styles => (
            <animated.div className="container" style={styles}>
                <div>
                 <h1>Welcome TO Page</h1>
                   
                    
                </div>
            </animated.div>
          )}
        </Spring>:""}
                
                </div>
           )
       }
       
      
    
}
export default Spring3;
