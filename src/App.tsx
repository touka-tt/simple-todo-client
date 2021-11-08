import {BrowserRouter, Switch, Route} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import IndexPage from "./pages/IndexPage";
import NewTodoPage from "./pages/NewTodoPage";
import {AppDispatch} from "./app/store";
import {getTodoAction} from "./slices/todoSlice";

function App() {

    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodoAction())
    })

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={IndexPage}/>
                    <Route exact path="/new" component={NewTodoPage}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
