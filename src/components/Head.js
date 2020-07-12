import React, {Component} from 'react';

class Head extends Component{

    render(){

      return(
          <div className="row sticky-top" style={ {"background": "#222831","borderBottom" : "2px solid #ce93d8"} }>
            <div className="col-12">
              <h3 className="pl-4 my-3 text-center" style={ {"color" : "#ba68c8"} }>Movie Finder</h3>       
            </div>
          </div>  
      );
    }

}

export default Head;