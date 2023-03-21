import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import AboutProject from './pages/AboutProject';
import AllTasks from './pages/AllTasks';
import CreateTask from './pages/CreateTask';

export const routing = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		// loader: rootLoader,
		children: [
			{
				element: <AboutProject />,
				index: true,
				// loader: teamLoader,
			},
			{
				path: '/all-tasks',
				element: <AllTasks />,
				// loader: teamLoader,
			},
			{
				path: '/add-task',
				element: <CreateTask />,
				// loader: teamLoader,
			},
		],
	},
]);
