import {render as rtlRender} from '@testing-library/react'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import {BrowserRouter, Switch} from "react-router-dom"
import todoSlice from "./slices/todoSlice"

function render(
    ui,
    {
        preloadedState,
        store = configureStore({reducer: {todos: todoSlice.reducer}, preloadedState}),
        ...renderOptions
    } = {}
) {
    function Wrapper({children}) {
        return <Provider store={store}>
            <BrowserRouter>
                <Switch>{children}</Switch>
            </BrowserRouter>
        </Provider>
    }

    return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
}

export * from '@testing-library/react'
export {render}