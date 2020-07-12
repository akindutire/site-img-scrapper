import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Head from './Head';
import Foot from './Foot';
import NotFound from './NotFound';



class App extends Component {

  render(){

    return (
      <div style={ {"background":"#222831"} }>
          <Router>

              <Head/>

                  <div>        
                  <Switch>

                    <Route path="/" component={Home} exact></Route>
                    <Route path="*" component={NotFound} exact></Route>

                  </Switch>
                  </div>
              
              <Foot/>
           
          
          </Router>
      
      </div>
    );
  }
}

export default App;
