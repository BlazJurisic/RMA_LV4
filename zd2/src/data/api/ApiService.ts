import User from '../model/User';

export interface ApiService {
	getUsers(): Promise<User[]>;
}
