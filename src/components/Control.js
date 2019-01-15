import React, {Component} from 'react';
import Search from './Search';
import Sort from './Sort';
import TaskList from './TaskList';


class Control extends Component{
    constructor(props) {
        super(props);
       this.state={
            Search : "",
            Sort : ""
       }
    }
    onClickSort=(NameSort,ValueSort)=>{
        this.props.onClickSort(NameSort,ValueSort);

    }
    onClickSearch=()=>{
        this.props.onClickSearch(this.state.Search);
        console.log('====================================');
        console.log("hahasdfasds");
        console.log('====================================');
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
                <Sort onClickSort = {this.onClickSort}/>
            </div>
        );
    }
}

export default Control;