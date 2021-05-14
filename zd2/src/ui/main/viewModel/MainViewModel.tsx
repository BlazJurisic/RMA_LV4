import React from 'react';
import { ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers, getUsers } from '../../../store/userRecuder';
import MainActivity from '../view/MainActivity';

function MainViewModel() {
	const data = useSelector(selectUsers);
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	React.useEffect(() => {
		if (data.message)
			ToastAndroid.showWithGravityAndOffset(data.message, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
	}, [data]);

	return <MainActivity users={data.users} status={data.status} />;
}

export default MainViewModel;
