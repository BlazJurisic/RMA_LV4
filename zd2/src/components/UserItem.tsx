import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import User from '../data/model/User';

interface Props {
	user: User;
}

function UserItem({ user }: Props) {
	return (
		<View style={styles.container}>
			<Image source={{ uri: user.avatar }} style={styles.image} />
			<View style={styles.textWrapper}>
				<Text>{user.name}</Text>
				<Text>{user.email}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 60,
		width: '100%',
		flexDirection: 'row',
	},
	image: {
		width: 60,
		height: '100%',
		padding: 4,
	},
	textWrapper: {
		marginTop: 4,
		marginLeft: 8,
	},
});

export default UserItem;
