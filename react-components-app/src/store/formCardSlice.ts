import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormItem } from '../types/item';

interface FormState {
  items: IFormItem[];
}

const initialState: FormState = {
  items: [],
};

export const formCardSlice = createSlice({
  name: 'formCard',
  initialState,
  reducers: {
    addFormCard(state, action: PayloadAction<IFormItem>) {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { addFormCard } = formCardSlice.actions;

export default formCardSlice.reducer;
