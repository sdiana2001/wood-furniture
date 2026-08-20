import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface FilterState{
    categoryId: string; // chair, table, lamp. bookshelf, sofa
}

const initialState: FilterState = {
    categoryId: 'all',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<string>) {
      state.categoryId = action.payload;
    },
  },
});

export const { setCategoryId } = filterSlice.actions;
export default filterSlice.reducer;