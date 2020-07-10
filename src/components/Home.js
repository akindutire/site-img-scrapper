import React, {Component} from 'react';
import { connect } from 'react-redux';

import Search from './Search';
import Output from './Output';

class Home extends Component{

    static defaultProps = {};

    
    render(){
        
        return(
            <div id="searchRow">
                                
                {
                    !this.props.outputToggle ? <Search/>  : <Output/>
                    
                }    
                
          
            </div>            
        );
    }

}

const mapStateToProps = (state) => {

    return { outputToggle: state.outputToggle };
}

export default connect(mapStateToProps)(Home);