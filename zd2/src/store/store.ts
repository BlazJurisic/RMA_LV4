import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userRecuder from './userRecuder';

export const store = configureStore({
	reducer: {
		data: userRecuder,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
