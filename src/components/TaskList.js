import React, {Component} from 'react';
import Taskitem from './TaskItem';
class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClickSearch: false,
            SearchData: "",
            filterName: "",
            filterStatus: -1
        }
    }
    onClickSearch = (target) => {
        console.log('====================================');
        console.log(target);
        console.log('====================================');
    }
    CheckClickSearch = () => {}

    onGetData = (id) => {
        this
            .props
            .onGetData(id);
    }
    onUpdateStatus = (id) => {
        this
            .props
            .onUpdateStatus(id);
    }
    onChangeJob = (id) => {
        this
            .props
            .onChangeJob(id);

    }
    onReturn = (Task, index) => { //contact with app.js

        return <Taskitem
            key={index}
            Task={Task}
            id={index}
            onGetData={this.onGetData}
            onUpdateStatus={this.onUpdateStatus}
            onChangeJob={this.onChangeJob}/>

    }
    onchange = (event) => {
        var target = event.target,
            value = target.value,
            name = target.name;
        this.setState({[name]: value});
        this
            .props
            .onChanges(name === "filterName"
                ? value
                : this.state.filterName, name === "filterStatus"
                ? value
                : this.state.filterStatus);
        console.log(target.value);
    }

    render() {
        var Tasks = this.props.Tasks;

        var showTable = Tasks.map((Task, index) => {
            return this.onReturn(Task, index);
        });
        var {filterName, filterStatus} = this.state;
        return (

            <div>

                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Stt</th>
                            <th>Name</th>
                            <th>Action or don't Action</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name="filterName"
                                    value={filterName}
                                    className="form-control"
                                    onChange={this.onchange}/>
                            </td>
                            <td>
                                <select
                                    name=""
                                    id=""
                                    disabled=""
                                    className="form-control"
                                    name="filterStatus"
                                    value={filterStatus}
                                    onChange={this.onchange}>
                                    <option value={-1}>
                                        All
                                    </option>
                                    <option value={1}>
                                        Active
                                    </option>
                                    <option value={0}>
                                        don't Active
                                    </option>
                                </select>
                            </td>
                        </tr>
                        {showTable}
                    </tbody>
                </table>

            </div>
        );

    }
}

export default TaskList;