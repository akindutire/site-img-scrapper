import React, {Component} from 'react';
import { connect } from 'react-redux';

import { toggleOutput } from '../actions/ContentActions';

class Output extends Component{


    render(){

        return(
            <div className="row" style={ {"background":"white", "opacity":"0.8" } }>

                <div className="col-12  pt-4">
                    <p className="text-right"><button className="btn btn-success" onClick={this.props.toggleOutput}>Crawl</button></p>
                </div>
                <div className="col-md-8 col-sm-12 p-4 order-2">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            {
                                this.props.ImagesAndWordFrequency.data.images.map( (ImgSrc, i) => {
                                    return(
                                        i == 0 ? 
                                        <li data-target="#carouselExampleIndicators"  key={i} data-slide-to={i} className="active"></li>
                                        :
                                        <li data-target="#carouselExampleIndicators"  key={i} data-slide-to={i}></li>
                                    );
                                } )
                            }                            
                            
                        </ol>

                        <div className="carousel-inner">
                            {
                                this.props.ImagesAndWordFrequency.data.images.map( (ImgSrc, i) => {
                                    return(
                                        i == 0 ?
                                        <div className="carousel-item active" key={i}>
                                            <img className="d-block" src={ImgSrc} style={ {"height":"auto", "width":"100%"} }/>
                                        </div>

                                        :
     
                                        <div className="carousel-item" key={i}>
                                            <img className="d-block" src={ImgSrc} style={ {"height":"auto", "width":"100%"} }/>
                                        </div>

                                    );
                                } )
                            }                            
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12 order-1">

                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Word</th>
                                <th scope="col">Freq</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                Object.entries(this.props.ImagesAndWordFrequency.data.word_freq).map( (v, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{v[0]}</td>
                                            <td>{v[1]}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>    
                    </table>

                </div>

            </div>
        );
        
    }

}

const mapStateToProps = (state) => {
    console.log("Output", state);
    return { ImagesAndWordFrequency: state.ImagesAndWordFrequency, toggles: state.outputToggle };
}

export default connect(mapStateToProps, { toggleOutput })(Output);