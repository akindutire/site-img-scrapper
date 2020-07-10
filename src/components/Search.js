import React, {Component} from 'react'; 
import { connect } from 'react-redux';

import { contentCrawler, toggleOutput } from '../actions/ContentActions';

class Search extends Component{

    constructor(props){
        super(props);
    
    
        this.state = {
            searchField: "http://",
            processingForm: false
        };

        this.crawl = this.crawl.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
        
    }

    static defaultProps = {};

    async crawl(event){

        event.preventDefault();
        this.setState({processingForm: true});

        try{
            
            await this.props.contentCrawler({url: this.state.searchField.trim() });
            
            if (this.props.ImagesAndWordFrequency.data.images.length > 0) {
                this.props.toggleOutput();
            }else{
               alert("No images found");
            }

        }catch(err){
            console.log(err);
            alert("An error occured retry");
            
        }

    }

    handleInputChange(event){

        this.setState(
            { [event.target.name] : event.target.value }
        )
    }

    render(){
                
        return(
            
            <div className="row" style={ {"background":"black", "opacity":"0.8" } }>
                <div className="col-6 text-light" style={ {"height":"400px","paddingLeft":"3%", "margin" : "10% auto", "borderRight": "1px solid rgb(209, 196, 233)"} }>
                    <h1 style={ {"fontSize":"4.5rem"} }>Crawl images and words</h1>
                </div>

                <form className="col-6" style={ {"margin" : "20% auto", "paddingRight": "15%", "paddingLeft": "3%"} }>
                    <div className="form-row" style={ { "background":"#ffffff", "border":"2px solid #d1c4e9", "borderRadius": ".4rem .5rem .5rem .4rem"}  }>
                        <div className="col-10">
                            <input type="text" value={this.state.searchField} name="searchField" onChange={this.handleInputChange} id="searchInput"  className="form-control form-control-lg" style={ {"border":"0px"} } placeholder="Enter URL" />
                        </div>
                        <div className="col-2 pr-0">
                                {
                                    this.state.processingForm ?
                                        <button type="disabled" id="searchBtn" className="btn btn-lg w-100"  style={ {"background":"#e0e0e0", "borderRadius": "0 .3rem .3rem 0"} } >
                                            <i className="fa fa-circle-o-notch fa-spin"></i> 
                                        </button>
                                    :
                                        <button type="submit" id="searchBtn" className="btn btn-lg w-100" onClick={this.crawl}  style={ {"background":"#d1c4e9", "borderRadius": "0 .3rem .3rem 0"} } >
                                            <i className="fas fa-search"></i> 
                                        </button>
                                }
                                
                            
                        </div>
                    </div>
                </form>

            </div>
        );
    }

}

const mapStateToProps = (state) => {
    // console.log(state.ImagesAndWordFrequency);
    return { ImagesAndWordFrequency: state.ImagesAndWordFrequency };
}


export default connect(mapStateToProps, { contentCrawler, toggleOutput})(Search);