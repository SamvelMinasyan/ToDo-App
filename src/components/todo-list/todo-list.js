import React from "react";

import TodoListItem from "../todo-list-item/todo-list-item";
import "./todo-list.css"; 

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
	// console.log(todos);
	const elements = todos.map((item) => {

		const {id,...restProps} = item;
		//console.log(restProps);
		return(
			<li key={id} className="list-group-item">
				<TodoListItem
				{...restProps} 
				onDeleted = {() => onDeleted(id)}
				onToggleImportant = {() => onToggleImportant(id)}
				onToggleDone = {() => onToggleDone(id)}
				/>
			</li>		
		);

	});	

	return(
		<ul className="list-group todo-list">
			{ elements }
		</ul>
	);
};

export default TodoList;