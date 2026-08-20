import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';


export type TProduct = {
  id: string;
  title: string;
  price: number;
  image: string;
  rating: number;
};

export type Status = 'loading' | 'success' | 'error';

export interface IProductSliceState {
  products: TProduct[];
  status: Status;
}

const initialState: IProductSliceState = {
  products: [],
  status: 'loading', 
};

interface FetchProductArgs {
  categoryId: string;
}

// First, create the thunk
export const fetchProducts = createAsyncThunk<TProduct[], FetchProductArgs, { rejectValue: string }>(
  'product/fetchProductStatus',
  async ({categoryId}, thunkAPI) => {
    try {
      //  Если выбрано 'all', параметр не добавляем. Если конкретная категория — формируем query-параметр для MockAPI
      const categoryParam = categoryId && categoryId !== 'all' ? `category=${categoryId}` : `rating=5`;

      const { data } = await axios.get<TProduct[]>(
        `https://6a84284553754283b0b83373.mockapi.io/allItems?${categoryParam}`,
        { signal: thunkAPI.signal },
      );

      return data;
    } catch {
      return thunkAPI.rejectWithValue('Не удалось загрузить товары');
    }
  },
);






export const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    setProductItems(state, action: PayloadAction<TProduct[]>) {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.products = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = 'success';
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'error';
        state.products = [];
      });
  },
});

export const { setProductItems } = productSlice.actions;
export default productSlice.reducer;