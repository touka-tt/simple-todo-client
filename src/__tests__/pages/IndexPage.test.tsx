import {cleanup, render, screen} from "@testing-library/react";

describe("Index Page Components", () => {
    afterEach(() => {
        cleanup()
    })

    it("初期表示", () => {
        render(<IndexPage />)
        expect(screen.getByTestId("Header")).toBeTruthy()
    })
})