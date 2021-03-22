const signIn = (loginInfo) => {
    return dispatch => {
        dispatch({
            type: 'LOGIN',
            login: {
                username: loginInfo.username,
                password: loginInfo.password,
                name: loginInfo.name
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