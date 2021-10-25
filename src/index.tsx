import ReactDOM from "react-dom"
import {StrictMode} from "react"
import {Provider} from "react-redux"
import App from "./App"
import {store} from "./app/store"
import './index.css'

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
    document.getElementById("root")
)
