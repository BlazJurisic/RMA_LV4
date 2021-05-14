import React from 'react';
import MainViewModel from './src/ui/main/viewModel/MainViewModel';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

function App() {
	return (
		<Provider store={store}>
			<MainViewModel />
		</Provider>
	);
}

export default App;
