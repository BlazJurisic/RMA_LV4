import { apiHelper } from '../api/ApiHelper';
import User from '../model/User';

export const mainRepository = {
	getUsers(): Promise<User[]> {
		return apiHelper.getUsers();
	},
};
