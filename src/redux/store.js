import {configureStore, createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    list: [],
  },
  reducers: {
    add: (state, action) => ({list: [...state.list, action.payload]}),
    remove: (state, action) => ({
      list: state.list.filter(name => name !== action.payload),
    }),
  },
});

export const {add, remove} = todoSlice.actions;
export const selectList = state => state.list;
export default configureStore({
  reducer: todoSlice.reducer,
});
