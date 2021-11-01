import {BrowserRouter, Switch, Route} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import NewTodoPage from "./pages/NewTodoPage";

function App() {
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
