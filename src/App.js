import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from './reduxToolkit/store';
import { routing } from './Routing';

import './main.scss';

function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={routing} />
		</Provider>
	);
}

export default App;
