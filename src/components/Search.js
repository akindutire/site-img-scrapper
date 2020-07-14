import React, { Component } from 'react';
import { searchFormProcessing } from './../actions/FormActions';
import { toggleOutput, getMovieDetails } from './../actions/MovieActions';
import { connect } from 'react-redux';

class Search extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            movieTitle: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.search = this.search.bind(this);
    }


    async search(e){
        e.preventDefault();

        try{

            this.props.searchFormProcessing(true);

            await this.props.getMovieDetails({t: this.state.movieTitle, type: "movie", r: "json"});
            
            if(Object.entries(this.props.movieDetails).length > 0){
                this.props.toggleOutput();
            }else{
                alert("No movie found for "+this.state.movieTitle);
            }

        }catch(err){
            console.log(err.message);
            alert(err.message + " : An error occured, try again");
        }finally{
            this.props.searchFormProcessing(false);
        }

    }

    handleInputChange(event){

        this.setState(
            { [event.target.name] : event.target.value }
        )
    }

    render(){
        return (
            
            <div className="row" style={ {"minHeight" : "450px", "opacity":"0.8" } }>
                
            
                <form  className="col-md-6 col-sm-12 my-auto mx-auto  px-4">

                    {
                        this.props.searchFormOnProcess ?
                            <div className="d-block text-center text-light mb-1">
                                <i className="fa fa-circle-o-notch fa-spin fa-fw"></i> Getting details
                            </div>
                        :
                            null

                    }
                    
                    <div className="form-row" style={ { "background":"#f3e5f5", "border":"2px solid #e1bee7", "borderRadius": ".4rem .5rem .5rem .4rem"}  }>
                        <div className="col-10">
                            <input type="text" value={this.state.movieTitle} name="movieTitle" onChange={this.handleInputChange} id="searchInput"  className="form-control form-control-lg" style={ {"border":"0px", "background":"#f3e5f5"} } placeholder="Movie title" />
                        </div>
                        <div className="col-2 pr-0">
                               
                                <button type="button" disabled={this.props.searchFormOnProcess} id="searchBtn" className="btn btn-lg w-100" onClick={this.search}  style={ {"background":"#e1bee7", "borderRadius": "0 .3rem .3rem 0"} } >
                                    {
                                        <i className="fas fa-search"></i>
                                    } 
                                </button>
                        
                        </div>
                    </div>
                </form>
            </div>

        );

    }
}

const mapStateToProps = (state) => {

    return {movieDetails: state.movieDetails, searchFormOnProcess: state.searchFormOnProcess};
}

export default connect(mapStateToProps, {searchFormProcessing, toggleOutput, getMovieDetails})(Search);