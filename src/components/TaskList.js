import React, {Component} from 'react';

class TaskList extends Component {

    render() {
        return (
            <div>

                <table class="table table-bordered table-hover">
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
                                <input type="text" placeholder="Name" name="" className="form-control"/>
                            </td>
                            <td>
                                <select name="" id="" disabled="" className="form-control">
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
                        <tr>
                            <td>1</td>

                            <td>Code ReactJS</td>
                            <td className="text-center">
                                <label htmlFor="" className="label label-danger">Active</label>
                            </td>
                            <td className="text-center">

                                <button type="button" class="btn btn-warning">Change</button>
                                <button type="button" class="btn btn-danger">delete</button>

                            </td>

                        </tr>
                    </tbody>
                </table>

            </div>
        );

    }
}

export default TaskList;