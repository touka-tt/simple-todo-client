import {useSelector} from "react-redux";
import Header from "../components/Header";
import {RootState} from "../app/store";

const IndexPage = () => {
    const todos = useSelector((state: RootState) => state.todos)

    return (
        <div className="flex">
            <Header/>
            <div>
            {todos.map((todo) =>
                <h3 key={todo.id}>{todo.title}</h3>
            )}
            </div>
        </div>
    )
}

export default IndexPage