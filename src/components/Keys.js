import React from 'react';
import beans from '../data/data'

class Keys extends React.Component {

    styling = {
        backgroundColor:'#87e6ed', 
        borderStyle: "double"
    }
    
    render() {
        return(
        <div>
           {beans.map(bean => {
                if(this.props.stateValue === ''){
                    if(bean !== '0'){
                     return <div style={this.styling}onClick={this.props.onClick} value={bean}>{bean}</div>
                   
                    }
                }  
                else{
                    return <div style={this.styling}onClick={this.props.onClick} value={bean}>{bean}</div>
                }
             
           })
           }
           <div onClick={this.props.onClick} value="Clr">Clr</div>
        </div>
      )
    }
    
    
}

export default Keys;