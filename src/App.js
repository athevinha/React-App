import React, {Component} from 'react';

import './App.css';

import Control from './components/Control';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      color: 'red',
      fontSize: 15 + 'px'
    }
  }

  render() {
    return (
      <div>
        <h1 className="text-center">
          Manager Jobs </h1>
        <div className="container">
          <div className="row">

            <TaskForm/>

            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <button className="btn btn-primary">Add Job</button>
              <div className="row mt-15">
                <Control/>
              </div>
              <TaskList/>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;