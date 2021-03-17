export const trend = (state = [], action) => {
    switch (action.type) {
        case 'INSERT_TRENDS':
            return action.trends;
    
        default:
            return state;
    }
}