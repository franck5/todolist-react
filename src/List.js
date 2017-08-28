import React, { Component } from 'react';

	class List extends Component{
		render(){
			console.log(this.props.tasks);
			const rows = this.props.tasks.map(item => (
				<li key={item.id}>{item.content}</li>
				));
			return(

				<ul>
				{rows}
				</ul>
			)
		}
	};

	export default List;