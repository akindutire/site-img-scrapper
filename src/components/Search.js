import React, {Component} from 'react'; 
import { connect } from 'react-redux';

import { contentCrawler, toggleOutput } from '../actions/ContentActions';
import { searchFormProcessing } from '../actions/FormActions';

class Search extends Component{

    constructor(props){
        super(props);
    
    
        this.state = {
            searchField: "http://"
        };

        this.crawl = this.crawl.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
        
    }

    static defaultProps = {};

    async crawl(event){

        event.preventDefault();
       
        this.props.searchFormProcessing(true);

        try{
            
            await this.props.contentCrawler({url: this.state.searchField.trim() });
            
            if (this.props.ImagesAndWordFrequency.data.images.length > 0) {
                this.props.toggleOutput();
            }else{
               alert("No images found");
            }

            this.props.searchFormProcessing(false);

        }catch(err){
            console.log(err);
            alert("An error occured retry");
            this.props.searchFormProcessing(false);
        }

    }

    handleInputChange(event){

        this.setState(
            { [event.target.name] : event.target.value }
        )
    }

    render(){
                
        return(
            
            <div className="row" style={ {"minHeight" : "450px","background":"black", "opacity":"0.8" } }>
                <div className="col-md-6 d-none d-sm-block text-light py-4 pl-4 my-4 h-75">
                    <span style={ {"fontSize":"4.5rem"} }>Crawl images and words</span>
                </div>
                
                <span className="my-4  d-none d-sm-block" style={ { "borderRight": "1px solid rgb(209, 196, 233)"} }></span>

                <form  className="col-md-5 col-sm-12 my-auto px-4">
                    {
                        this.props.searchFormOnProcess ?
                            <div className="d-block text-center text-light mb-1">
                                <i className="fas fa-circle-o-notch fa-spin fa-fw"></i> Crawling {this.state.searchField}
                            </div>
                        :
                            null

                    }
                    <div className="form-row" style={ { "background":"#ffffff", "border":"2px solid #d1c4e9", "borderRadius": ".4rem .5rem .5rem .4rem"}  }>
                        <div className="col-10">
                            <input type="text" value={this.state.searchField} name="searchField" onChange={this.handleInputChange} id="searchInput"  className="form-control form-control-lg" style={ {"border":"0px"} } placeholder="Enter URL" />
                        </div>
                        <div className="col-2 pr-0">
                               
                                <button type="button" disabled={this.props.searchFormOnProcess} id="searchBtn" className="btn btn-lg w-100" onClick={this.crawl}  style={ {"background":"#d1c4e9", "borderRadius": "0 .3rem .3rem 0"} } >
                                    <i className="fas fa-search"></i> 
                                </button>
                        
                        </div>
                    </div>
                </form>

            </div>
        );
    }

}

const mapStateToProps = (state) => {
    // console.log(state.ImagesAndWordFrequency);
    return { ImagesAndWordFrequency: state.ImagesAndWordFrequency, searchFormOnProcess: state.searchformOnProcess };
}


export default connect(mapStateToProps, { contentCrawler, toggleOutput, searchFormProcessing})(Search);