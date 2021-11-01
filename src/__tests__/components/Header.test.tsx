import {cleanup, screen} from "@testing-library/react";
import Header from "../../components/Header";
import {render} from "../../test-utils";

describe("Header Components", () => {
    afterEach(() => {
        cleanup()
    })

    it("初期表示", () => {
        render(<Header />)
        expect(screen.getByText("Todo App")).toBeInTheDocument()
        expect(screen.getAllByRole('link')[0]).toHaveTextContent("Todo List")
        expect(screen.getAllByRole('link')[0]).toHaveProperty("href", "http://localhost/")
        expect(screen.getAllByRole("link")[1]).toHaveTextContent("New Todo")
        expect(screen.getAllByRole('link')[1]).toHaveProperty("href", "http://localhost/new")
    })
})