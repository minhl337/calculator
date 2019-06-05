import React from 'react';

class Display extends React.Component {
    
    render(){
        return(
            <div>
              {this.props.stateValue}
            </div>
        )            
    }
    
    
}

export default Display;