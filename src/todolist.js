import React, { Component } from 'react';
import Addtask from './Addtask';
import './App.css';
import List from './List';
import {v4} from 'node-uuid';
import Filter from './Filter';

class Todolist extends Component {
  
    constructor(){
      super();
      this.state={
        tasks: [],
        filter: 'All',
      }
      this._addtasksubmit=this._addtasksubmit.bind(this);
      this._changeTaskStatus=this._changeTaskStatus.bind(this);
      this._onChangeFilter=this._onChangeFilter.bind(this);
    }
    _addtasksubmit(task){
      this.setState({
        tasks : [
          ...this.state.tasks,
          {content : task, id : v4(), status : false}
          ]
      });
    }
    _changeTaskStatus(id){
        this.setState({
          tasks: this.state.tasks.map(item => {
            if(item.id===id){
              return {content : item.content, status : !item.status, id : item.id}
            }
              return item;
          })
    
          }); 
    }
    _onChangeFilter(filter){
      this.setState({
        filter : filter
      });
    }
    componentDidMount(){
      let storage=JSON.parse(localStorage.getItem('state'));
        if (this.state.tasks.length===0 && storage!==null) {
          this.setState({
            tasks : storage
          })
        }
    }
    componentDidUpdate(){
      if (this.state.tasks.length!==0) {
        localStorage.setItem('state', JSON.stringify(this.state.tasks));
      }
    }
    render() {
      
      return (
        <div>
          <Addtask addTask={this._addtasksubmit} />
          <List tasks={this.state.tasks} changeStatus={this._changeTaskStatus} filter={this.state.filter}/>
          <Filter onChangeFilter={this._onChangeFilter}/>
        </div>
      );
    }
}

export default Todolist;
