import {useSelector} from "react-redux";
import {RootState} from "../app/store";

const TodoList = () => {
    const todos = useSelector((state: RootState) => state.todos)

    return (
        <div data-testid="TodoList">
            {todos.map((todo) =>
                <h3 key={todo.id}>{todo.title}</h3>
            )}
        </div>
    )
}

export default TodoList