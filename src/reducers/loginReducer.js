export const login = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.login;
    
        default:
            return state;
    }
}