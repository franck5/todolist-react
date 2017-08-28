import React, { Component } from 'react';

	class Addtask extends Component {
		
		constructor(){
			super();
			this.state={ value : "",
			}
		}



		render() {

			return (

		        <form onSubmit={ (e) => {
					e.preventDefault();
		        	
					this.props.addTask(this.state.value);
					this.setState({value : ""});
				}}>
					<div className="input-group">
						<label htmlFor="add">Ajouter une tache : </label>
						<input className="form-control" onChange={ (e) => {this.setState({value : e.target.value})}} type="text" name="add" id="add" value={this.state.value}/>
			        </div>
					<input className="btn btn-primary" type="submit" value="Ajouter" />
				</form>
		    );
		}
	}
	export default Addtask;