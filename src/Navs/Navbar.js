import React, {Component} from 'react';
import        {NavLink} from 'react-router-dom';
import        {GiHemp} from 'react-icons/gi';
import        {IoIosMenu} from 'react-icons/io';

import './App.css';

export default class Navbar extends Component {
  
  state = {
      toggle: false
  }

  Toggle = () => {
      this.setState({toggle:!this.state.toggle})
  }

  render() {

      return (
        <>
            <div className="navbar">
                <button onClick = {this.Toggle}>
                    <IoIosMenu/>
                </button>
                <ul className = {this.state.toggle ? "links show-nav" : "links"}>
                    <li><NavLink to='/'>HOME</NavLink></li>
                    <li><GiHemp/></li>
                    <li><NavLink to='/about'>ABOUT</NavLink></li>
                    <li><GiHemp/></li>
                    <li><NavLink to="/flower">FLOWER</NavLink></li>
                    <li><GiHemp/></li>
                    <li><NavLink to="/contact">CONTACT</NavLink></li>
                </ul>
            </div>
        </>
      );
  }
}
    
 