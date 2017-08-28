import React, { Compenent } from 'react';

	const Filter=({onChangeFilter}) => (
		<select onChange={(e) => {onChangeFilter(e.target.value)}}>
			<option value="All">Toute les tâches</option>
			<option value="Todo">Taches a effectuer</option>
			<option value="Done">Tache finit</option>
		</select>
	);
export default Filter;
