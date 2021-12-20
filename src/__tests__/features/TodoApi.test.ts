import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {getTodos, postTodos} from "../../features/TodoApi";

describe("Todo Api", () => {
    let mock: MockAdapter

    beforeEach(() => {
        mock = new MockAdapter(axios)
    })

    afterEach(() => {
        mock.reset()
    })

    it("get /todos", async () => {
        mock.onGet('/todos').reply(200, [
            {
                id: 1,
                title: 'title',
                completed: false
            }
        ])

        const response = await getTodos()

        expect(mock.history.get[0].url).toEqual("/todos")
        expect(response[0].id).toEqual(1)
        expect(response[0].title).toEqual("title")
        expect(response[0].completed).toEqual(false)
    })

    it("post /todos", async () => {
        mock.onPost("/todos", {title: "title#1"}).reply(201,
            {
                id: 1,
                title: "title#1",
                completed: false
            })

        const response = await postTodos("title#1")

        expect(mock.history.post[0].url).toEqual("/todos")
        expect(mock.history.post[0].data).toEqual(JSON.stringify({title: "title#1"}))
        expect(response.id).toEqual(1)
        expect(response.title).toEqual("title#1")
        expect(response.completed).toEqual(false)
    })
})