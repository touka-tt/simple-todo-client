import {useEffect, useState} from "react";
import Header from "../components/Header";
import {getTodos, Todo} from "../features/TodoApi";

const IndexPage = () => {

    // ※良くない実装であとで消す
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(  () => {
        const get = async () => {
            const todosResponse = await getTodos()
            setTodos(todosResponse)
        }
        get()
    }, [])

    return (
        <div className="flex">
            <Header/>
            <div>
                {todos.map((todo) =>
                    <div key={todo.id}>{todo.title}</div>
                )}
            </div>
        </div>
    )
}

export default IndexPage