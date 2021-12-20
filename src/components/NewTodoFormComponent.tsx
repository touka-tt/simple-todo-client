import {useState} from "react";
import {useDispatch} from "react-redux"
import {postTodoAction} from "../slices/todoSlice"

const NewTodoFormComponent = () => {
    const [todoInput, setTodoInput] = useState("")
    const dispatch = useDispatch()

    const onClickCreateButton = async () => {
        dispatch(postTodoAction({title: todoInput}))
    }

    return (
        <form data-testid="NewTodoForm">
            <label>Title</label>
            <input type="text"
                   value={todoInput}
                   onChange={(event) => setTodoInput(event.target.value)}/>
            <button type="button"
                    onClick={onClickCreateButton}>Send
            </button>
        </form>
    )
}

export default NewTodoFormComponent