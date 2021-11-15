import todoSlice, {getTodoAction} from "../../slices/todoSlice";


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
})