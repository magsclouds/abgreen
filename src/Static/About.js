import React, { Component } from 'react';
import image1 from '../Images/abgreen-farm-general view.jpg'
import image2 from '../Images/abgreen-hero-hand.jpg'
import image3 from '../Images/abgreen-sunset.1.jpg'
import image4 from '../Images/abgreen-field-worker.jpg'

export default class About extends Component{
    render(){
        return(
            <>
                <div>
                    <img  
                        src   = {image1}
                        style = {{width: '100%'}} 
                        alt   = 'Beautiful Italian Farm Overlooking Adriatic - Blooming Poppy Flowers Everywhere'
                    />
                    <img  
                        src   = {image2}
                        style = {{width: '100%'}} 
                        alt   = 'Young Cannabis Plant'
                    />
                    <img  
                        src   = {image3}
                        style = {{width: '100%'}} 
                        alt   = 'Young Cannabis Plant'
                    />
                    <img  
                        src   = {image4}
                        style = {{width: '100%'}} 
                        alt   = 'Young Cannabis Plant'
                    />
                </div>
            </>    

        )
    }
}