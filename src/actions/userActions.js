const insertUsers = (users) => {
    return dispatch => {
        dispatch({
            type: 'INSERT_USERS',
            users
        });
    }
}

export const userActions = {
    insertUsers
}