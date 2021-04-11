const signIn = (loginInfo) => {
    return dispatch => {
        dispatch({
            type: 'LOGIN',
            login: {
                username: loginInfo.username,
                name: loginInfo.name,
                _id: loginInfo._id
            }
        });
    }
}

const logout = () => {
    return dispatch => {
        dispatch({
            type: 'LOGOUT',
            login: null
        });
    }
}

export const loginActions = {
    signIn,
    logout
}