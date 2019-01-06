import React, {Component} from 'react';
import Search from './Search';
import Sort from './Sort';


class Control extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            fontSize: 15 + 'px'
        }
    }

    render() {
        return (
            <div>
                <Search/>
                <Sort/>
            </div>
        );
    }
}

export default Control;