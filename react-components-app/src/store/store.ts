import { configureStore, combineReducers } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import formCardReducer from './formCardSlice';

const rootReducer = combineReducers({
  searchReducer,
  formCardReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export default store;
