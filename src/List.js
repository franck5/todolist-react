import React, { Component } from 'react';

	class List extends Component{
		render(){
			
			const getVisibilityFilter=(filter) => {
				if (this.props.filter==="Todo") {
					return filter.filter(item => !item.status);
				}
				if (this.props.filter==="Done") {
					return filter.filter(item => item.status);
				}
				return filter;
			}
			const rows=getVisibilityFilter(this.props.tasks).map(item => (
				<li onClick={() => this.props.changeStatus(item.id)} className={item.status ? 'done':'todo'} key={item.id}>{item.content}</li>
				));
			return(

				<ul>
				{rows}
				</ul>
			)
		}
	};

	export default List;