import {cleanup, screen} from "@testing-library/react";
import IndexPage from "../../pages/IndexPage";
import { render } from "../../test-utils";

describe("Index Page Components", () => {
    afterEach(() => {
        cleanup()
    })

    it("初期表示", () => {
        render(<IndexPage />)
        expect(screen.getByTestId("Header")).toBeTruthy()
        expect(screen.getByTestId("TodoList")).toBeTruthy()
    })
})