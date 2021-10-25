import {cleanup, render, screen} from "@testing-library/react";
import IndexPage from "../../pages/IndexPage";

describe("Index Page Components", () => {
    afterEach(() => {
        cleanup()
    })

    it("初期表示", () => {
        render(<IndexPage />)
        expect(screen.getByTestId("Header")).toBeTruthy()
    })
})