import React from 'react';
import { Provider } from 'react-redux';
import Container from './Container';
import { store } from './store';

function App() {
	return (
		<Provider store={store}>
			<Container />
		</Provider>
	);
}

export default App;
