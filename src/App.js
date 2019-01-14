import React, {Component} from 'react';

import './App.css';

import Control from './components/Control';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isActive: false,
      TasksEditing: null,
      isSearchBtn : false,
      TargetSearch : "",
      filter : {
        filterName : "",
        filterStatus : ""
      }
    }
  }
  // =================================================
  // =================================================
  componentWillMount = () => { //went it run => this func run 
    if (localStorage && localStorage.getItem("tasks")) {
      var tasksS = JSON.parse(localStorage.getItem("tasks"));
      this.setState({tasks: tasksS})
    }
  }
  // =================================================
  // //=================================================
  AddJobClick = () => { //button add job
    if (this.state.isActive === true && this.state.TasksEditing !== null) {

      this.setState({TasksEditing: null});
    } else {
      this.setState({
        isActive: !this.state.isActive,
        TasksEditing: null

      });
    }
  }
  // =================================================
  // //=================================================
  s4 = () => { //radom math to create id
    return Math.floor((1 + Math.random()) * 0x1000000)
      .toString(16)
      .substring(1)
  }
  // =================================================
  // //=================================================
  onXClick = () => {//onClick X to close TaskForm
    this.setState({isActive: false});

  }
  // =================================================
  // //=================================================
  onGetData = (id) => { //function delete job
    var {tasks} = this.state;
    tasks.splice(id, 1);

    this.setState({tasks: tasks});
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }
  // =================================================
  // //=================================================
  GenarateID = () => { //function make id differrent
    return this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4();
  }
  // =================================================
  // //=================================================
  FindIndex = (id) => { // find the index by have the id
    for (var i = 0; i < this.state.tasks.length; i++) {
      if (id == this.state.tasks[i].id) {
        return i;
      }
    }
  }
  // =================================================
  // //=================================================
  onSubmitForms = (Data) => { // click save data
    var {tasks} = this.state;
    this.setState({isActive: false}) //submit form for input
    if (Data.id === null) {
      Data.id = this.GenarateID();
      tasks.push(Data);

    } else {
      console.log(this.FindIndex(Data.id));
      tasks[this.FindIndex(Data.id)] = Data;
    }

    this.setState({tasks: tasks});
    this.setState({TasksEditing: null});

    localStorage.setItem("tasks", JSON.stringify(tasks)) //add the data to the localstorage to save data

  }
  // =================================================
  // =================================================
  onUpdateStatus = (id) => { // click acive or don't care
    var tasks = this.state.tasks;
    tasks[id].status = !tasks[id].status;

    this.setState({tasks: tasks});
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }
  // =================================================
  // =================================================
  onClickDele = () => { // delete click
    this.setState({status: false})
  }
  // =================================================
  // =================================================
  onChangeJob = (id) => { //change Job , change click
    var TaskEdit = this.state.tasks[id];
    this.setState({TasksEditing: TaskEdit, isActive: true})

  }
// =================================================
//==================================================
onClickSearch = (Target)=>{//onSearch on Click the button search in search.js => control.js=>app.js
  console.log('====================================');
  console.log(Target);
  console.log('====================================');
  this.setState({
    isSearchBtn : true,
    TargetSearch : Target
  })
 
}
  onChanged = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    console.log(filterStatus);

    this.setState({
      filter:{
        filterName : filterName,
        filterStatus : filterStatus
      }
    })
  }
  render() {
    var Tasks = this.state.tasks;
    var {isActive} = this.state;
    var ValueCheckTaskForm = isActive
      ? <TaskForm
          onXClick={this.onXClick}
          onSubmitForms={this.onSubmitForms}
          onClickDele={this.onClickDele}
          onChangeJobValue={this.state.TasksEditing}
          />
      : '';
      var {filter} = this.state;
      if(filter){if(filter.filterName){
        Tasks = Tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.filterName.toLowerCase()) !== -1;
        })
      }
      Tasks=Tasks.filter((task)=>{
         if(filter.filterStatus == -1){
           return task
         }
         else{
           return task.status === (filter.filterStatus === 1 ? true : false);
         }
       })
    }
    if(this.state.TargetSearch){
      console.log('====================================');
      console.log(this.state.TargetSearch);
      console.log('====================================');
      Tasks=Tasks.filter((task)=>{
        return task.name.toLowerCase().indexOf(this.state.TargetSearch.value.toLowerCase()) !== -1;
      })
    }
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
                <Control onClickSearch={this.onClickSearch}/>{/*Manager Search or Sort*/}
              </div>
              <TaskList
                Tasks={Tasks}
                onGetData={this.onGetData}
                onUpdateStatus={this.onUpdateStatus}
                onChangeJob={this.onChangeJob}
                SearchData={this.state.TargetSearch}
                ClickSearch={this.state.isSearchBtn}
                onChanges={this.onChanged}/>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;