/* eslint-disable array-callback-return */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoList: []
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload)
    },
    setCheck: (state, action) =>{
      // eslint-disable-next-line array-callback-return
      state.todoList.map(item => {
         if(action.payload === item.id){
          return  item.done === true ? item.done = false : item.done = true
        }
      })
    },
    deleteItem: (state, action) =>{
      state.todoList.map((item, index)=>{
        if(action.payload === item.id){
          state.todoList.splice(index, 1)
        }
      })
    },
    changeInput: (state, action) => {
      
      state.todoList.map(item => {
       if(action.payload._id === item.id){
         item.name = action.payload.value
       }
      })
    }
  }
});

export const { saveTodo, setCheck, deleteItem, changeInput} = todoSlice.actions;

export const selectTodoList = state => state.todos.todoList 

export default todoSlice.reducer;