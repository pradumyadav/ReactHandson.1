import React, { Component } from "react";
import './Apply.css' ;

class Classcomp extends Component{

    render(){
      
        return(
            <div className='Classstyle'>
            <h1>This is created using class Component</h1>
            <p>This is done using external CSS</p>
            <p style={{color:"orange"}}>This is done using inline CSS</p>
           
            </div>
        )
    }
}


export default Classcomp ;
