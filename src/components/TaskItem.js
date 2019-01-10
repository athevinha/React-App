import React, {Component} from 'react';

class Taskitem extends Component {
    DeleJob = (id) => {
        this
            .props
            .onGetData(id);
    }
    UpdateSatus = (id) => {
        this.props.onUpdateStatus(id);
       
        }
        onChangeJob=(id)=>{
            this.props.onChangeJob(id);
        }
    render() {
        var Tasks = this.props.Task;
        var id = this.props.id;

        return (

            <tr>
                <td>{id + 1}</td>
                <td>{Tasks.name}</td>
                <td className="text-center">
                    <label
                        onClick={()=>this.UpdateSatus(id)}
                        htmlFor=""
                        className={(Tasks.status)
                        ? "laleb label-success"
                        : "laleb label-danger"}>
                        {(Tasks.status)
                            ? "Active"
                            : "Don't Care"
}
                    </label>
                </td>
                <td className="text-center">

                    <button type="button" className="btn btn-warning" onClick={()=>this.onChangeJob(id)}>Change</button>
                    <button
                        type="button"
                        id={id}
                        className="btn btn-danger buttonDele"
                        onClick={() => this.DeleJob(id)}>delete</button>

                </td>

            </tr>

        );

    }
}

export default Taskitem;