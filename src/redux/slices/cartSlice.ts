import { createSlice, type PayloadAction } from '@reduxjs/toolkit';


export interface CartItems { //Описала тип одного товара
    id:string;
    title: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartState { // Описываем все состояния которые есть в корзине
    items: CartItems[];
    totalPrice: number;
}

const initialState: CartState = { //Здесь описываем начальное состояние всех стейтов
     items: [],
    totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Omit<CartItems, 'quantity'>>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.quantity, 0);
    },

    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        if (findItem.quantity > 1) {
          findItem.quantity--;
        } else {
          state.items = state.items.filter((obj) => obj.id !== action.payload);
        }
      }
      state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.quantity, 0);
    },

    removeItem(state, action: PayloadAction<string>) {
        state.items = state.items.filter((obj) => obj.id !== action.payload);
        state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.quantity ,0)
    },

    clearItems(state){
        state.items = [];
        state.totalPrice = 0;
    }
  },
});

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;