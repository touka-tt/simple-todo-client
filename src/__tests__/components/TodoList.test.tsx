import {cleanup, screen} from "@testing-library/react";
import {render} from "../../test-utils";
import TodoList from "../../components/TodoList";


describe("TodoListComponent", () => {
    afterEach(() => {
        cleanup()
    })

    it("Stateが空だったらリストは何も表示されない", () => {
        render(<TodoList/>, {preloadedState: {todos: []}})
        expect(screen.queryByRole("heading")).toBeFalsy()
    })

    it("Stateにタスクの要素があればタイトルを表示する", () => {
        const initialTodos = [{
            id: 1,
            title: "title#1",
            completed: false
        },{
            id: 2,
            title: "title#2",
            completed: false
        }]

        render(<TodoList />, {preloadedState: {todos: initialTodos}})

        expect(screen.getAllByRole("heading")[0]).toHaveTextContent("title#1")
        expect(screen.getAllByRole("heading")[1]).toHaveTextContent("title#2")
    })
})