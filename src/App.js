import React, {Component} from 'react';

import './App.css';

import Control from './components/Control';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isActive: true
    }
  }
  componentWillMount = () => {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasksS = JSON.parse(localStorage.getItem("tasks"));
      this.setState({tasks: tasksS})
    }
  }
  AddJobClick = () => { //button add job
    this.setState({
      isActive: !this.state.isActive
    });
  }
  s4 = () => { //radom math to create id
    return Math.floor((1 + Math.random()) * 0x1000000)
      .toString(16)
      .substring(1)
  }
  onXClick = () => {
    this.setState({isActive: false});

  }
  onGetData = (id) => { //function delete job
    var {tasks} = this.state;
    tasks.splice(id, 1);

    this.setState({tasks: tasks});
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }

  GenarateID = () => { //function make id differrent
    return this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4();
  }
  onSubmitForms = (Data) => { //submit form for input
    Data.id = this.GenarateID();

    var {tasks} = this.state;
    tasks.push(Data);
    this.setState({tasks: tasks});
    localStorage.setItem("tasks", JSON.stringify(tasks)) //add the data to the localstorage to save data

  }
  onUpdateStatus = (id) => {
    var tasks = this.state.tasks;
    tasks[id].status = !tasks[id].status;

    this.setState({});
  }
  render() {
    var Tasks = this.state.tasks;
    var {isActive} = this.state;
    var ValueCheckTaskForm = isActive
      ? <TaskForm onXClick={this.onXClick} onSubmitForms={this.onSubmitForms}/>
      : '';

    return (
      <div>
        <h1 className="text-center">
          Manager Jobs
        </h1>
        <div className="container">
          <div className="row">

            <div
              className={isActive
              ? "col-xs-4 col-sm-4 col-md-4 col-lg-4"
              : "col-xs-0 col-sm-0 col-md-0 col-lg-0"}>
              {ValueCheckTaskForm}
            </div>

            <div
              className={isActive
              ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
              : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
              <button className="btn btn-primary" onClick={this.AddJobClick}>Add Job</button>
              <div className="row mt-15">
                <Control/>
              </div>
              <TaskList
                Tasks={Tasks}
                onGetData={this.onGetData}
                onUpdateStatus={this.onUpdateStatus}/>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;