import {cleanup, fireEvent, screen} from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {render} from "../../test-utils";
import NewTodoFormComponent from "../../components/NewTodoFormComponent";

describe("NewTodoFormComponent", () => {
    let mock: MockAdapter

    beforeEach(() => {
        mock = new MockAdapter(axios)
    })

    afterEach(() => {
        mock.reset()
        cleanup()
    })

    it("初期表示", () => {
        render(<NewTodoFormComponent />)
        expect(screen.getByText("Title")).toBeTruthy()
        expect(screen.queryByRole("textbox")).toHaveValue("")
        expect(screen.queryByRole("button")).toHaveTextContent("Send")
    })

    it("Todo名を編集できる", () => {
        render(<NewTodoFormComponent />)
        fireEvent.change(screen.getByRole("textbox"), {target: {value: "title input"}})

        expect(screen.queryByRole("textbox")).toHaveValue("title input")
    })

    it("送信ボタンを押したら、作成がリクエストされる", () => {
        render(<NewTodoFormComponent />)
        fireEvent.change(screen.getByRole("textbox"), {target: {value: "title input"}})
        fireEvent.click(screen.getByRole("button"))

        expect(mock.history.post[0].url).toEqual("/todos")
        expect(mock.history.post[0].data).toEqual(JSON.stringify({title: "title input"}))
    })
})