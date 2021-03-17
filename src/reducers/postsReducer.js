export const post = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case 'CREATE_POST':
        case 'UPDATE_POSTS':
            return action.posts
    
        default:
            return state;
    }
}