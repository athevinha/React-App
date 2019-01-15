import React, {Component} from 'react';

class Sort extends Component {
    onClickSort=(NameSort,ValueSort)=>{
        this.props.onClickSort(NameSort,ValueSort);
        
    }
    render() {
        return (

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                <div className="dropdown">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        Dropdown buttons
                        <span className="fas fa-sort-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li onClick = {()=> this.onClickSort("name",1)}>
                            <a role="button" className="sort_selected" >
                                A-Z
                            </a>
                        </li>
                        <li onClick = {()=>this.onClickSort("name", -1)}>
                            <a role="button"  >
                                Z-A
                            </a>
                        </li>
                        <li  role="separator" className="divider"></li>
                        <li onClick={() => this.onClickSort("status", 1)}>
                            <a role="button" >
                                Action point
                            </a>
                        </li>
                        <li onClick={()=>this.onClickSort("status", -1)}>
                            <a role="button" >
                                Don't Action point
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default Sort;