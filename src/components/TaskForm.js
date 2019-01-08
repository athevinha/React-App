import React, {Component} from 'react';
import './Css/TaskForm.css'

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            status:false
        }
    }
    OnXclickForm=()=>{
        this.props.onXClick();
    }
    onChange=(event)=>{
        var target= event.target;
        var name = target.name;
        var value=target.value;
        if(name ==="status"){
            value = target.value === "true" ? true : false 
        }

       
        this.setState({
            [name]:value
        });

    }
    onFormSubmit=(event)=>{
        event.preventDefault();
        console.log('====================================');
        console.log(this.state);
        console.log('====================================');
this
    .props
    .onSubmitForms(this.state);

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
                        <div className="panel-body" onSubmit={this.onFormSubmit}>

                            <form action="" method="POST" role="form">

                                <div className="form-group">
                                    <label>Name:</label>
                                    <input type="text" className="form-control" id="" placeholder="Input field" name="name" value={this.state.name}
                                    onChange={this.onChange}/>
                                </div>

                                <div className="form-group">
                                    <label>Action</label>

                                    <select name="status" value={this.state.status} onChange={this.onChange} id="input" className="form-control" required="required">
                                        <option value={true}>Action</option>
                                        <option value={false}>Don't care</option>
                                    </select>
                                <button className="btn btn-warning" type="submit">Save This Job</button>
                                    <button className="btn btn-danger" type="">Delete This Job</button>

                                </div>

                            </form>

                        </div>
                    </div>

                
            </div>
        );
    }
}

export default TaskForm;