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
            return [
                ...state,
                action.post
            ];

        case 'UPDATE_POSTS':
        case 'SET_POSTS':
            return action.posts;

        case 'UPDATE_POST':
            const updated = state.map(post => {
                if (`${post._id}` === `${action.posts._id}`) {
                    return action.posts;
                }
                else {
                    return post;
                }
            });
            return updated;
    
        default:
            return state;
    }
}