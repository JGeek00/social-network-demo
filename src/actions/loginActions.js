const signIn = (loginInfo) => {
    return dispatch => {
        dispatch({
            type: 'LOGIN',
            login: {
                username: loginInfo.username,
                password: loginInfo.password
            }
        });
    }
}

const logout = () => {
    return dispatch => {
        dispatch({
            type: 'LOGOUT',
            login: {}
        });
    }
}

export const loginActions = {
    signIn,
    logout
}