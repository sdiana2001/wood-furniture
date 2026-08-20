import { configureStore } from '@reduxjs/toolkit';
import product from './slices/productSlice';
import cart from './slices/cartSlice';
import filter from './slices/filterSlice';
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
  reducer: {
    product,
    cart,
    filter,
  },
});

// Типизация для TypeScript (чтобы автокомплит работал идеально)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Кастомные хуки для безопасной работы с типами
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;