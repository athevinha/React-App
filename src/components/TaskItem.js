import React, { Component } from 'react';

class Taskitem extends Component {

    render() {
        var Tasks= this.props.Task;
        var id=this.props.id;

        return (

                        <tr>
                            <td>{id + 1}</td>

                            <td>{Tasks.name}</td>
                            <td className="text-center">
                                <label htmlFor="" className="label label-danger">{(Tasks.status) ? "Active" : "Don't Care"}</label>
                            </td>
                            <td className="text-center">

                                <button type="button" className="btn btn-warning">Change</button>
                                <button type="button" className="btn btn-danger">delete</button>

                            </td>

                        </tr>
                

        );

    }
}

export default Taskitem;