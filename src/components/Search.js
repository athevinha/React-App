import React, { Component } from 'react';
// use in control

class Search extends Component {
    constructor(props) {
        super(props);
        this.state= {
            value : "",
            nameInput : ""
        }
    }
    onClickSearch=()=>{
        this.props.onClickSearch();
    }
        onChangeSearch=(event)=>{
            var target = event.target;
            var value = target.value;
            var name = target.name;
            this.setState({
                value : value,
                nameInput : name
            });
        this.props.onChangeSearch(target);

    }
    render() {
        return (

                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputAmount"
                            placeholder="Search" 
                            onChange = {this.onChangeSearch}
                            name="InputSearch"
                            value={this.state.value}/>
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-default" onClick={this.onClickSearch}>Search</button>
                        </span>
                    </div>
                </div>

        );
    }
}

export default Search;