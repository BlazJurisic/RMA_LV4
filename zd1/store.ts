import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import trackerReducer from './trackerR';

export const store = configureStore({
	reducer: {
		tracker: trackerReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
