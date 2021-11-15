import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {render} from "../test-utils";
import App from "../App";

describe("App", () => {
    let mock: MockAdapter

    beforeEach(() => {
        mock = new MockAdapter(axios)
    })

    afterEach(() => {
        mock.reset()
    })

    it("アプリケーション初期表示にTodoを全件取得している", () => {
        mock.onGet("/todos").reply(200, [])

        render(<App />)

        expect(mock.history.get[0].url).toEqual("/todos")
    })
})