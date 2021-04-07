// const defaultState = [
//     {
//         id: 0,
//         title: 'Initial post',
//         content: 'This is the initial post',
//         datetime: new Date(),
//         likes: {
//             liked: false,
//             numLikes: 0
//         },
//         comments: {
//             commented: false,
//             allComments: []
//         }
//     }
// ];

const defaultState = [];

export const post = (state = defaultState, action) => {
    switch (action.type) {
        case 'CREATE_POST':
        case 'UPDATE_POSTS':
        case 'SET_POSTS':
            return action.posts
    
        default:
            return state;
    }
}