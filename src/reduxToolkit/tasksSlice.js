import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const MODULE_NAME = '@@tasks';
const API_URL = `${process.env.REACT_APP_API_URL}/tasks`;
// const API_URL = 'https://jsonplaceholder.typicode.com/todos';

/*
 * GET ALL TASKS.
 */
export const getAllTasksAction = createAsyncThunk(
	`${MODULE_NAME}/getAllTasks`,
	async (_, { rejectWithValue, dispatch, getState }) => {
		try {
			const { tasksList } = getState().tasks;

			if (tasksList.length > 0) {
				return;
			}

			const { data } = await axios.get(API_URL);

			// return data;
			dispatch(setTasksToState(data));
		} catch (error) {
			return rejectWithValue('Error!');
		}
	}
);

/*
 * CREATE NEW TASK
 */
export const createTaskAction = createAsyncThunk(
	`${MODULE_NAME}/createTask`,
	async (title, { rejectWithValue }) => {
		try {
			const preparedData = {
				title,
				completed: false,
				important: false,
			};

			const { data } = await axios.post(API_URL, preparedData);

			return data;
		} catch (error) {
			return rejectWithValue('error');
		}
	}
);

/*
 * DELETE TASK
 */
export const deleteTaskAction = createAsyncThunk(
	`${MODULE_NAME}/deleteTask`,
	async (id, { rejectWithValue, dispatch }) => {
		try {
			await axios.delete(`${API_URL}/${id}`);
			dispatch(deleteTaskFromState(id));
		} catch (error) {
			return rejectWithValue('error');
		}
	}
);

/*
 * COMPLETE TASK
 */
export const completedTaskAction = createAsyncThunk(
	`${MODULE_NAME}/completedTask`,
	async (id, { rejectWithValue, dispatch, getState }) => {
		try {
			dispatch(completedTask(id));

			const state = getState();

			const preparedData = state.tasks.tasksList.find((task) => task.id === id);

			await axios.patch(`${API_URL}/${id}`, preparedData);
		} catch (error) {
			return rejectWithValue('error');
		}
	}
);

/*
 * IMPORTANT TASK
 */
export const importantTaskAction = createAsyncThunk(
	`${MODULE_NAME}/importantTask`,
	async (id, { rejectWithValue, dispatch, getState }) => {
		try {
			dispatch(checkImportantTask(id));

			const state = getState();

			const preparedData = state.tasks.tasksList.find((task) => task.id === id);

			await axios.patch(`${API_URL}/${id}`, preparedData);
		} catch (error) {
			return rejectWithValue('error');
		}
	}
);

const initialState = {
	isLoading: false,
	tasksList: [],
	taskQty: 0,
	error: '',
	deletedData: {
		isOpenDialogModal: false,
		deletedTaskId: null,
	},
};

const tasksSlice = createSlice({
	name: `${MODULE_NAME}`,
	initialState,
	reducers: {
		setTasksToState: (state, action) => {
			state.tasksList = action.payload;
			state.taskQty = action.payload.length;
		},
		deleteTaskFromState: (state, action) => {
			state.tasksList = state.tasksList.filter((task) => task.id !== action.payload);
			state.taskQty = state.tasksList.length;
		},
		completedTask: (state, action) => {
			const currentTask = state.tasksList.find((item) => item.id === action.payload);
			currentTask.completed = !currentTask.completed;
			currentTask.important = false;
		},
		checkImportantTask: (state, action) => {
			const currentTask = state.tasksList.find((item) => item.id === action.payload);
			currentTask.important = !currentTask.important;
			currentTask.completed = false;
		},
		openDialogModal: (state, action) => {
			state.deletedData.isOpenDialogModal = true;
			state.deletedData.deletedTaskId = action.payload;
		},
		closeDialogModal: (state) => {
			state.deletedData.isOpenDialogModal = false;
			state.deletedData.deletedTaskId = null;
		},
		dropInitialState: (state, action) => {
			state = initialState;
		},
	},
	//Async Actions
	extraReducers: (builder) => {
		builder
			.addCase(getAllTasksAction.fulfilled, (state, action) => {})
			.addCase(createTaskAction.fulfilled, (state, action) => {
				state.tasksList.unshift(action.payload);
				state.isLoading = false;
			})
			.addCase(deleteTaskAction.fulfilled, (state, action) => {})
			.addCase(completedTaskAction.fulfilled, (state, action) => {})
			.addCase(importantTaskAction.fulfilled, (state, action) => {})
			.addMatcher(
				(action) => action.type.endsWith('/pending'),
				(state, action) => {
					state.isLoading = true;
					state.error = '';
				}
			)
			.addMatcher(
				(action) => action.type.endsWith('/rejected'),
				(state, action) => {
					state.isLoading = false;
					state.error = action.payload || action.error.message;
				}
			)
			.addMatcher(
				(action) => action.type.endsWith('/fulfilled'),
				(state, action) => {
					state.isLoading = false;
				}
			);
	},
});

export const {
	setTasksToState,
	deleteTaskFromState,
	completedTask,
	checkImportantTask,
	dropInitialState,
	openDialogModal,
	closeDialogModal,
} = tasksSlice.actions;
export default tasksSlice.reducer;
