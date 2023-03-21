import { combineReducers, legacy_createStore } from 'redux';
import { corReducer } from './redux/core/reducer';

const store = legacy_createStore(
	combineReducers({
		corReducer,
	})
);
export default store;
