import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CACHE_KEY = 'CACHE_KEY';

export interface ITracker {
	numberOfBirds: number;
	color: string;
}

export interface TrackerState {
	tracker: ITracker | undefined;
	status: 'idle' | 'loading' | 'pending';
}

const initialState: TrackerState = {
	tracker: undefined,
	status: 'pending',
};

const initTracker: ITracker = {
	numberOfBirds: 0,
	color: '#FFF',
};

export const setTracker = createAsyncThunk('tracker/getInit', async () => {
	const response = await AsyncStorage.getItem(CACHE_KEY);
	return response ? JSON.parse(response) : initTracker;
});

export const storeTracker = createAsyncThunk('tracker/store', async (tracker: ITracker) => {
	AsyncStorage.setItem(CACHE_KEY, JSON.stringify(tracker)).catch((_) => {
		console.error('Failed to store CACHE');
	});
});

export const trackerSlice = createSlice({
	name: 'tracker',
	initialState,
	reducers: {
		resetTrackerCounter: (state) => {
			if (state.tracker) state.tracker.numberOfBirds = initTracker.numberOfBirds;
		},
		changeTrackerColorAndIncrement: (state, action: PayloadAction<string>) => {
			if (state.tracker) {
				state.tracker.numberOfBirds += 1;
				state.tracker.color = action.payload;
			}
		},
		resetTrackerColor: (state) => {
			if (state.tracker) {
				state.tracker.color = initTracker.color;
			}
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(setTracker.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(setTracker.fulfilled, (state, action) => {
				state.status = 'idle';
				state.tracker = action.payload;
			});
	},
});

export const { resetTrackerCounter, changeTrackerColorAndIncrement, resetTrackerColor } = trackerSlice.actions;

export const selectTracker = (state: RootState) => state.tracker;

export default trackerSlice.reducer;
