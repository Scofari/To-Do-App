import { useState } from "react";
import Button from "../../UI/Button";
import styles from "./TodoForm.module.css";

const TodoForm = ({ addTodo }) => {
	const [text, setText] = useState("");

	function onSubmitHandler(event) {
		event.preventDefault();

		addTodo(text);
		setText("");
	}

	return (
		<div className={styles.todoFormContainer}>
			<form onSubmit={onSubmitHandler}>
				<input
					value={text}
					type="text"
					placeholder="Enter new todo"
					onChange={(e) => setText(e.target.value)}
				/>
				<Button type="submit" title="Submit">
					Submit
				</Button>
			</form>
		</div>
	);
};

export default TodoForm;
