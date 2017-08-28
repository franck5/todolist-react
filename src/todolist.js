import React, { Component } from 'react';
import Addtask from './Addtask';
import './App.css';
import List from './List';
import {v4} from 'node-uuid';
class Todolist extends Component {
  
    constructor(){
      super();
      this.state = {
        tasks: [],
      }
      this._addtasksubmit = this._addtasksubmit.bind(this);
    }
    _addtasksubmit(task){
      this.setState({
        tasks : [
          ...this.state.tasks,
          {content : task, id : v4(), status : false}
          ]
      });
    }
    render() {
    console.log(this.state.tasks);
      return (
        <div>
          <Addtask addTask={this._addtasksubmit} />
          <List tasks={this.state.tasks}/>
        </div>
      );
    }
}

export default Todolist;
