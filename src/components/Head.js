import React, {Component} from 'react';

class Head extends Component{

    render(){

      return(
          <div className="row sticky-top" style={ {"background" : "#181d24 "} }>
            <div className="col-12">
              <h2 className="text-left pl-4 my-3" style={ {"color" : "#d1c4e9"} }>Crawler</h2>       
            </div>
          </div>  
      );
    }

}

export default Head;