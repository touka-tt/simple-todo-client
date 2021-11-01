import {FC, ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import {BrowserRouter, Switch} from "react-router-dom";

const AllTheProviders: FC = ({children}) => (
        <BrowserRouter>
            <Switch>
                {children}
            </Switch>
        </BrowserRouter>
    )

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}