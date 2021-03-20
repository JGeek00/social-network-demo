export const login = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'LOGOUT':
            return action.login;
    
        default:
            return state;
    }
}