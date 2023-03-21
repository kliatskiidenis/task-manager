import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from './tasksSlice';

const store = configureStore({
	reducer: {
		tasks: tasksSlice,
	},
	devTools: true,
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...)
});

export default store;
