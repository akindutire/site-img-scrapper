import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Head from './Head';
import NotFound from './NotFound';

class App extends Component {

  render(){

    return (
      <div>
          <Router>

              <Head/>
              
                  <div>        
                  <Switch>

                    <Route path="/" component={Home} exact></Route>
                    <Route path="*" component={NotFound} exact></Route>

                  </Switch>
                  </div>
              
          </Router>
      
      </div>
    );
  }
}

export default App;
