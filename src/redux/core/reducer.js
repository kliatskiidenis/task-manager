import { GET_MOVIES } from './actionTypes';

const initialState = {
	isLoading: true,
	movies: [],
};

export const corReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_MOVIES:
			return {
				...state,
				movies: state.movies.push(action.payload),
			};

		default:
			return state;
	}
};
