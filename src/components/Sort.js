import React, {Component} from 'react';

class Sort extends Component {

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
                        <li>
                            <a role="button" className="sort_selected" href="#">
                                A-Z
                            </a>
                        </li>
                        <li>
                            <a role="button" href="#">
                                Z-A
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li>
                            <a role="button" href="#">
                                Action point
                            </a>
                        </li>
                        <li>
                            <a role="button" href="#">
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