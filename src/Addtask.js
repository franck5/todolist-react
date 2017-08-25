import React, { Component } from 'react';

	class Addtask extends Component {
		constructor(props) {
			super(props);
			this.Recup = this.Recup.bind(this);
    		this.Loading = this.Loading.bind(this);
			this.state = {value: ''};
		}

		Recup(event){
			this.setState({value : event.target.value});
			var result = [];
			result.push(event);
			console.log(result);
		}

		Loading(event){
			event.preventDefault();

		}



		render() {

      		return (
		        <form onSubmit={this.Loading}>
		          <label>
		           Name:
		            <input type="text" name="test" value={this.state.value} onChange={this.Recup}/>
		          </label>
		        <input type="submit" value="Submit" />
		        </form>
		    );
		}
	}
	export default Addtask;