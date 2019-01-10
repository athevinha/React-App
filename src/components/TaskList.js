import React, {Component} from 'react';
import Taskitem from './TaskItem';

class TaskList extends Component {
    onGetData=(id)=>{
        this.props.onGetData(id);
    }
    onUpdateStatus=(id)=>{
        this.props.onUpdateStatus(id);
    }
    onChangeJob=(id)=>{
       
        this.props.onChangeJob(id);

    }
    render() {
        var Tasks=this.props.Tasks;

       
      var showTable=Tasks.map((Task,index)=>{
          return <Taskitem key ={index} Task={Task} id={index} onGetData= {this.onGetData} onUpdateStatus={this.onUpdateStatus} onChangeJob={this.onChangeJob}/>
      });
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
                        {showTable}
                    </tbody>
                </table>

            </div>
        );

    }
}

export default TaskList;