import axios from 'axios';
import User from '../model/User';
import { ApiService } from './ApiService';

export const apiServiceImpl: ApiService = {
	async getUsers(): Promise<User[]> {
		const res = await axios.get('https://5e510330f2c0d300147c034c.mockapi.io/users');
		return res.data.map(User.fromJSON);
	},
};
