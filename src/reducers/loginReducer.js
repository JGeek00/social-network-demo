export const login = (state = null, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'LOGOUT':
            return action.login;
    
        default:
            return state;
    }
}