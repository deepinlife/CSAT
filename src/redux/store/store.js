
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import CombineReducers from '../reducer/combineReducer.js';

const store = createStore(
    CombineReducers,
    { rootRecuer: { counter: -1, data: [] } },
    applyMiddleware(thunk)
)

export default store;