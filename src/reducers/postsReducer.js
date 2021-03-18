const defaultState = [
    {
        id: 0,
        title: 'Initial post',
        content: 'This is the initial post',
        datetime: new Date(),
        likes: {
            liked: false,
            numLikes: 0
        },
        comments: {
            commented: false,
            allComments: []
        }
    }
];

export const post = (state = defaultState, action) => {
    switch (action.type) {
        case 'CREATE_POST':
        case 'UPDATE_POSTS':
            return action.posts
    
        default:
            return state;
    }
}