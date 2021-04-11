import React, { useEffect } from 'react';

import { Redirect, Route, Switch } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';

import {checkLogin} from './services/auth';

import Main from './components/Main.jsx';
import Login from './components/Login';
import TrendsPage from './components/TrendsPage';

import {loginActions} from './actions/loginActions';


function App() {
    const dispatch = useDispatch();
    
    const loginInfo = useSelector(state => state.login);

    useEffect(() => {
        login();
    }, []);

    const login = async () => {
        if (!loginInfo) {
            if (localStorage.getItem('jwt')) {
                const response = await checkLogin();
                if (response.status === 200) {
                    dispatch(loginActions.signIn({
                        username: response.data.username,
                        name: response.data.name,
                        _id: response.data._id
                    }));
                }
            }
        }
    }

    return (
        <React.Fragment>
            <Switch>
                <Route path="/trends" render={
					props => <TrendsPage {...props} />
				} />
                <Route path="/login" render={
					props => <Login {...props} />
				} />
                <Route path="/" exact render={
					props => <Main {...props} />
				} />
            </Switch>
        </React.Fragment>
    );
}

export default App;