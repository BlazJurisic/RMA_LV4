class User {
	id: string = '';
	name: string = '';
	email: string = '';
	avatar: string = '';

	constructor(id: string, name: string, email: string, avatar: string) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.avatar = avatar;
	}

	public static fromJSON(maybe: any) {
		if (!maybe) throw Error('must be object');
		if (typeof maybe.id !== 'string') throw Error('id must be string');
		if (typeof maybe.name !== 'string') throw Error('name must be string');
		if (typeof maybe.avatar !== 'string') throw Error('avatar must be string');
		if (typeof maybe.email !== 'string') throw Error('email must be string');

		return { id: maybe.id, name: maybe.name, email: maybe.email, avatar: maybe.avatar };
	}
}

export default User;
