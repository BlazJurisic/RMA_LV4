import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import UserItem from '../../../components/UserItem';
import User from '../../../data/model/User';
import { Status } from '../../../utils/Status';

interface Props {
	users: User[];
	status: Status;
}

function MainActivity({ users, status }: Props) {
	if (status === Status.LOADING)
		return (
			<View style={styles.activityWrapper}>
				<ActivityIndicator color="#000" size="large" />
			</View>
		);

	if (status === Status.SUCCESS)
		return (
			<>
				<FlatList
					keyExtractor={(item) => item.id}
					data={users}
					windowSize={10}
					getItemLayout={(_, index) => ({ length: 60, offset: 60 * index, index: index })}
					renderItem={({ item }) => <UserItem user={item} />}
				/>
			</>
		);

	return <View />;
}

const styles = StyleSheet.create({
	activityWrapper: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
});

export default MainActivity;
