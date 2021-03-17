const createPost = (posts) => {
    console.log('dispatch posts', posts)
    return dispatch => {
        dispatch({
            type: 'CREATE_POST',
            posts
        });
    }
}

const updatePosts = (posts) => {
    return dispatch => {
        dispatch({
            type: 'UPDATE_POSTS',
            posts
        });
    }
}

export const postActions = {
    createPost,
    updatePosts
}
