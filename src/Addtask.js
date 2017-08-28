import React, { Component } from 'react';

	class Addtask extends Component {
		
		constructor(){
			super();
			this.state = { value : "",
			}
		}



		render() {

      		return (
		        <form onSubmit={ (e) => {
		        	e.preventDefault();
		        	
		        	this.props.addTask(this.state.value);
		        	this.setState({value : ""});
		        }}>
		          <label htmlFor="add">Ajouter une tache</label>
		            <input onChange={ (e) => {this.setState({value : e.target.value})}} type="text" name="add" id="add" value={this.state.value}/>
		        
		        <input type="submit" value="Submit" />
		        </form>
		    );
		}
	}
	export default Addtask;