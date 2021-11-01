import {cleanup, screen} from "@testing-library/react";
import { render } from "../../test-utils";
import NewTodoPage from "../../pages/NewTodoPage";

describe("New Todo Page Components", () => {
    afterEach(() => {
        cleanup()
    })

    it("初期表示", () => {
        render(<NewTodoPage />)
        expect(screen.getByTestId("Header")).toBeTruthy()
    })
})