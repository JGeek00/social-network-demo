export const user = (state = [], action) => {
    switch (action.type) {
        case 'INSERT_USERS':
            return action.users

        default:
            return state;
    }
}