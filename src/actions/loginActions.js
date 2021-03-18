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

export const loginActions = {
    signIn
}