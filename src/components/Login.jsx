import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import { ToastContainer, toast } from 'react-toastify';

import {loginActions} from '../actions/loginActions';

const Login = () => {
    const dispatch = useDispatch();

    const allUsers = useSelector(state => state.user);
    const loginInfo = useSelector(state => state.login);

    const [userField, setUserField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [keepLogged, setKeepLogged] = useState(false);
    const [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        checkLogin();
    }, []);

    const changeLoginFields = (e) => {
        switch (e.target.name) {
            case 'username':
                setUserField(e.target.value);
                break;

            case 'password':
                setPasswordField(e.target.value);
                break;
        
            default:
                break;
        }
    }

    const checkLogin = () => {
        if (loginInfo.username !== undefined && loginInfo.password !== undefined) {
            const found =  allUsers.find(user => user.username === loginInfo.username && user.password === loginInfo.password);
            if (found) {
                setLoginStatus(true);
            }
        }
        else {
            const loginData = localStorage.getItem('login');
            if (loginData) {
                const parsed = JSON.parse(loginData);
    
                const found =  allUsers.find(user => user.username === parsed.username && user.password === parsed.password);
                if (found) {
                    setLoginStatus(true);
                }
                else {
                    setLoginStatus(false);
                }
            }
            else {
                setLoginStatus(false);
            }
        }
    }

    const signIn = () => {
        const found =  allUsers.find(user => user.username === userField && user.password === passwordField);
        if (found) {
            dispatch(loginActions.signIn({
                username: userField,
                password: passwordField
            }));
            setLoginStatus(true);
        
            if (keepLogged === true) {
                localStorage.setItem('login', `{"username": "${userField}", "password": "${passwordField}"}`);
            }
        }
        else {
            toast.error("Username or password incorrect. Try again.", {
                autoClose: 3000,
                hideProgressBar: true,
                draggable: true,
                pauseOnHover: false,
                closeOnClick: true,
                closeButton: false
            });
        }
    }

    const handleKeepLogged = (e) => {
        setKeepLogged(e.target.checked)
    }
    
    return (
        <React.Fragment>
            {
                loginStatus === true ? (
                    <Redirect to="/" />
                ) : (
                    <div className="loginContainer">
                        <ToastContainer />
                        <div className="login">
                            <div className="loginTitle">
                                <i className="bi bi-person-circle"></i>
                                <span>Social network demo</span>
                            </div>
                            <div className="loginFields">
                                <input className="loginField" type="text" name="username" placeholder="Username" onChange={changeLoginFields} />
                                <input className="loginField" type="password" name="password" placeholder="Password" onChange={changeLoginFields} />
                                <div className="buttons">
                                    <div className="keepLogged">
                                        <input type="checkbox" name="keepLogged" id="keepLogged" onChange={handleKeepLogged} />
                                        <label htmlFor="keepLogged">Keep logged</label>
                                    </div>
                                    <button className="signInBtn" onClick={signIn}>Sign in</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </React.Fragment>
    );
}
 
export default Login;