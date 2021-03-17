import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {post} from './reducers/postsReducer';
import {user} from './reducers/usersReducer';
import {trend} from './reducers/trendsReducer';

const reducers = combineReducers({
    post,
    user,
    trend
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;    //React devtools
const middlewareEnhancer = applyMiddleware(thunkMiddleware);


export const store = createStore(reducers, undefined, composeEnhancers(
    middlewareEnhancer
)); 