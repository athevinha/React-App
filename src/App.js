import React, {Component} from 'react';

import './App.css';

import Control from './components/Control';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks:[]
    }
  }
  componentWillMount=()=> {
    if(localStorage && localStorage.getItem("tasks")){
      var tasksS = JSON.parse(localStorage.getItem("tasks"));
      this.setState(
        {
          tasks : tasksS
        }
      )
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
    this.setState({
      tasks : taskList
    });
    localStorage.setItem("tasks",JSON.stringify(taskList));
  }
  s4 = () => {
    return Math.floor((1 + Math.random()) * 0x1000000)
      .toString(16)
      .substring(1)
  }
  GenarateID = () => {
    return this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4();
  }
  render() {
    var Tasks= this.state.tasks;

    return (
      <div>
        <h1 className="text-center">
          Manager Jobs
        </h1>
        <div className="container">
          <div className="row">

            <TaskForm/>

            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <button className="btn btn-primary">Add Job</button>
              <button className="btn btn-success" onClick={this.onGenarate}>Genarate</button>
              <div className="row mt-15" >
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