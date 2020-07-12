import React, { Component } from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import Output from './Output';

class Home extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return (
            <div>

                { this.props.outputToggle ?  <Output/> : <Search/> }
            
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { outputToggle: state.outputToggle }
}
export default connect(mapStateToProps, {})(Home);