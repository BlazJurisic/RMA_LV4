import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import User from '../data/model/User';
import { mainRepository } from '../data/repository/MainRepository';
import { Status } from '../utils/Status';
import { RootState } from './store';

export interface userState {
	users: User[];
	status: Status;
	message: string;
}

const initialState: userState = {
	users: [],
	status: Status.LOADING,
	message: '',
};

export const getUsers = createAsyncThunk('user/get', async () => {
	return await mainRepository.getUsers();
});

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},

	extraReducers: (builder) => {
		builder
			.addCase(getUsers.pending, (state) => {
				state.status = Status.LOADING;
			})
			.addCase(getUsers.fulfilled, (state, action) => {
				state.status = Status.SUCCESS;
				state.users = action.payload;
			})
			.addCase(getUsers.rejected, (state) => {
				state.status = Status.ERROR;
				state.message = 'Something Went Wrong';
			});
	},
});

export const selectUsers = (state: RootState) => state.data;

export default usersSlice.reducer;
