import React, {Component} from 'react';
import './Css/TaskForm.css'

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            fontSize: 15 + 'px'
        }
    }
    OnXclickForm=()=>{
        this.props.onXClick();
    }
    render() {
        return (
            <div>

                

                    <div className="panel panel-danger">
                        <div className="panel-heading">
                            <h3 className="panel-title">
                                Add Manager
                                <span className="far fa-window-close text-right CloseX" onClick={this.OnXclickForm}></span>
                            </h3>
                        </div>
                        <div className="panel-body">

                            <form action="" method="POST" role="form">

                                <div className="form-group">
                                    <label>Name:</label>
                                    <input type="text" className="form-control" id="" placeholder="Input field"/>
                                </div>

                                <div className="form-group">
                                    <label>Action</label>

                                    <select name="status" id="input" className="form-control" required="required">
                                        <option value={true}>Action</option>
                                        <option value={false}>Don't care</option>
                                    </select>
                                    <button className="btn btn-warning" type="button">Save This Job</button>
                                    <button className="btn btn-danger" type="submit">Delete This Job</button>

                                </div>

                            </form>

                        </div>
                    </div>

                
            </div>
        );
    }
}

export default TaskForm;