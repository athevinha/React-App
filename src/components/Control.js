import React, {Component} from 'react';
import Search from './Search';
import Sort from './Sort';


class Control extends Component {
    constructor(props) {
        super(props);
       this.state={
            Search : "",
            Sort : ""
       }
    }
    onClickSearch=()=>{
        this.props.onClickSearch(this.state.Search);
    }
    onChangeSearch=(Target)=>{
        this.setState({
            Search : Target
        })
    }
    render() {
        return (
            <div>
                <Search onChangeSearch={this.onChangeSearch} onClickSearch={this.onClickSearch}/>
                <Sort/>
            </div>
        );
    }
}

export default Control;