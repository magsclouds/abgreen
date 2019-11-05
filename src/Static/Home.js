import React, { Component } from 'react';
import image2 from '../Images/abgreen-hero-hand.jpg'

export default class About extends Component{
    render(){
        return(
            <div>
                <img  src = {image2} alt = 'young cannabis plant'
                      style = {{width: '100%'}}
                />
            </div>

        )
    }
}