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

  onGenarate = () => {

    var taskList = [
      {
        id: this.GenarateID(),
        name: "Learn MachineLearning",
        status: true
      }, {
        id: this.GenarateID(),
        name: "Learn MachineLearning by ReactJs",
        status: true
      }, {
        id: this.GenarateID(),
        name: "Learn MachineLearning by Java",
        status: false
      }
    ];
    this.setState({tasks: taskList});
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }
  AddJobClick=()=>{
    this.setState({
      isActive: !this.state.isActive
    });
  }
  s4 = () => {
    return Math.floor((1 + Math.random()) * 0x1000000)
      .toString(16)
      .substring(1)
  }
  onXClick=()=>{
    this.setState({
      isActive: false
    });
    
  }
  GenarateID = () => {
    return this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4();
  }
  onSubmitForms=(Data)=>{
    Data.id=this.GenarateID();
    console.log('====================================');
    console.log(Data);
    console.log('====================================');
    var {tasks}=this.state;
    tasks.push(Data);
    this.setState({
      tasks:tasks
    });
    localStorage.setItem("tasks", JSON.stringify(tasks))

    
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

            <div className={isActive
              ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
              : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
              <button className="btn btn-primary" onClick={this.AddJobClick}>Add Job</button>
              <button className="btn btn-success" onClick={this.onGenarate}>Genarate</button>
              <div className="row mt-15">
                <Control/>
              </div>
              <TaskList Tasks={Tasks}/>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;