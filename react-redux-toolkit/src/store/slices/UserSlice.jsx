import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUser(state, action) {
            console.log(action.payload,"2")
            state.push(action.payload)
        },
        removeUser(state, action) {
            state.shift(action.payload)
        },
        deleteUsers(state, action) {
            console.log("hel")
            return []
        },
    }
})

export default userSlice.reducer
export const {addUser, removeUser, deleteUsers} = userSlice.actions