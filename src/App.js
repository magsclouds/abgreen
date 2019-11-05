import React, { Component } from 'react';
import        { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar   from   './Navs/Navbar';
import Home     from   './Static/Home';
import About    from   './Static/About';
import Flower   from   './Static/Flower';
import Contact  from   './Static/Contact';

class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <Navbar/>
            <div>
              <Route exact path = "/"        component={Home}/>
              <Route path       = "/about"   component={About}/>
              <Route exact path = "/flower"  component={Flower}/>
              <Route exact path = "/contact" component={Contact}/>
            </div>
        </div>
      </Router>
    );
  }

}

export default App;