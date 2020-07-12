import React, { Component } from 'react';
import { toggleOutput } from './../actions/MovieActions';

import { connect } from 'react-redux';

class Output extends Component{
    
    constructor(props){
        super(props);
        
        this.goBackToSearch = this.goBackToSearch.bind(this);
    }

    goBackToSearch(){
        this.props.toggleOutput();
    }

    render(){ 
        const movie = this.props.movieDetails;
        return (
            
            <div className="row container mt-4">
               
                <div className="col-md-6 col-sm-12">
                    <img src={movie.Poster} className="img-fluid" alt="Poster"/>
                </div>

                <div className="col-md-6 col-sm-12">
                    <ul className="list-group list-group-flush" style={ {"background" : "transparent"} }>
                                    
                            <li className="list-group-item">
                                <b>Title-</b> {movie.Title}
                            </li>

                            <li className="list-group-item">
                                <b>Year-</b> {movie.Year}
                            </li>

                            <li className="list-group-item">
                                <b>Rated</b> {movie.Rated}
                            </li>

                            <li className="list-group-item">
                                <b>Released-</b> {movie.Released}
                            </li>

                            <li className="list-group-item">
                                <b>Genre-</b> {movie.Genre}
                            </li>

                            <li className="list-group-item">
                                <b>Director-</b> {movie.Director}
                            </li>

                            <li className="list-group-item">
                                <b>Actors-</b> {movie.Actors}
                            </li>

                            <li className="list-group-item">
                                <b>Language-</b> {movie.Language}
                            </li>

                            <li className="list-group-item">
                                <b>Ratings-</b> {movie.Ratings[0].Value}
                            </li>
                              
                    </ul>
                </div>

                <div className="col-12 mt-4">
                    <p className="text-center">
                        <a className="btn btn-warning" onClick={this.goBackToSearch}><i className="fas fa-chevron-left"></i> Back</a>
                    </p>
                </div>
            </div>

        );
    }
}

const mapStateTopProps = (state) => {
    console.log(state.movieDetails);
    return { movieDetails: state.movieDetails, outputToggle: state.outputToggle }
}

export default connect(mapStateTopProps, { toggleOutput  })(Output);