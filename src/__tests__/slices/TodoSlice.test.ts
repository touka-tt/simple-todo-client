import todoSlice, {getTodoAction, postTodoAction} from "../../slices/todoSlice";


describe("todo reducer", () => {
    it("初期状態", () => {
        expect(todoSlice.reducer(undefined, {type: undefined})).toEqual([])
    })

    describe("get Todos", () => {
        it("get todos is pending", () => {
            const action = {type: getTodoAction.pending.type}
            const state = todoSlice.reducer([], action)
            expect(state).toEqual([])
        })

        it("get todos is rejected", () => {
            const action = {type: getTodoAction.rejected.type}
            const state = todoSlice.reducer([], action)
            expect(state).toEqual([])
        })

        it("get todos is fulfilled", () => {
            const action = {
                type: getTodoAction.fulfilled.type,
                payload: [
                    {
                        id: 1,
                        title: "title#1",
                        completed: false
                    }, {
                        id: 2,
                        title: "title#2",
                        completed: false
                    }
                ]
            }

            const state = todoSlice.reducer([], action)
            expect(state.length).toEqual(2)
            expect(state[0].id).toEqual(1)
            expect(state[0].title).toEqual("title#1")
            expect(state[0].completed).toEqual(false)
            expect(state[1].id).toEqual(2)
            expect(state[1].title).toEqual("title#2")
            expect(state[1].completed).toEqual(false)
        })
    })

    describe("post todo action", () => {
        it("post todos is pending", () => {
            const action = {type: postTodoAction.pending.type}
            const state = todoSlice.reducer([], action)
            expect(state).toEqual([])
        })

        it("post todos is rejected", () => {
            const action = {type: postTodoAction.rejected.type}
            const state = todoSlice.reducer([], action)
            expect(state).toEqual([])
        })

        it("post todo is fulfilled", async () => {
            const action = {
                type: postTodoAction.fulfilled.type,
                payload: {
                    id: 2,
                    title: "title#2",
                    completed: false
                }
            }

            const initialState = [{
                id: 1,
                title: "title#1",
                completed: false
            }]

            const state = todoSlice.reducer(initialState, action)
            expect(state.length).toEqual(2)
            expect(state[0].id).toEqual(1)
            expect(state[1].id).toEqual(2)
        })
    })
})