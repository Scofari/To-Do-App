import Button from "../UI/Button";
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import styles from "./TodosActions.module.css";

const TodosActions = ({
	resetTodos,
	deleteCompletedTodos,
	completedTodosExists,
}) => {
	return (
		<div className={styles.todosActionsContainer}>
			<Button title={"Reset Todos"} onClick={resetTodos}>
				<RiRefreshLine />
			</Button>
			<Button
				disabled={!completedTodosExists}
				title={"Clear Completed Todos"}
				onClick={deleteCompletedTodos}
			>
				<RiDeleteBin2Line />
			</Button>
		</div>
	);
};

export default TodosActions;
