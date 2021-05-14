import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Screen from './Screen';
import {
	selectTracker,
	setTracker,
	resetTrackerCounter,
	changeTrackerColorAndIncrement,
	resetTrackerColor,
	storeTracker,
} from './trackerR';

export const BUTTON_CONSTS = {
	red: { label: 'Red', color: 'red' },
	blue: { label: 'Blue', color: 'blue' },
	green: { label: 'Green', color: 'green' },
	yellow: { label: 'Yellow', color: 'yellow' },
};

function Container() {
	const tracker = useSelector(selectTracker);
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(setTracker());
	}, [dispatch]);

	React.useEffect(() => {
		if (tracker.tracker) dispatch(storeTracker(tracker.tracker));
	}, [tracker, dispatch]);

	const resetCounter = React.useCallback(() => {
		dispatch(resetTrackerCounter());
	}, [dispatch]);

	const changeColorAndIncrement = React.useCallback(
		(color: string) => () => {
			dispatch(changeTrackerColorAndIncrement(color));
		},
		[dispatch]
	);

	const resetColor = React.useCallback(() => {
		dispatch(resetTrackerColor());
	}, [dispatch]);

	if (!tracker.tracker) return null;

	return (
		<Screen
			tracker={tracker.tracker}
			onResetCounterPress={resetCounter}
			onResetColorPress={resetColor}
			onChangeColorPress={changeColorAndIncrement}
		/>
	);
}

export default Container;
