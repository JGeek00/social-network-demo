import axios from 'axios';

import config from '../config.json';

const createPost = (posts) => {
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

const setPosts = (posts) => {
    const formatDate = (post) => {
        return {
            ...post,
            datetime: new Date(post.createdAt),
            likes: {
                liked: false,
                numLikes: 0
            },
            comments: {
                commented: false,
                allComments: []
            }
        }
    }
    return dispatch => {
        const toSave = posts.map(post => formatDate(post));
        dispatch({
            type: 'SET_POSTS',
            posts: toSave
        });
    }
}

export const postActions = {
    createPost,
    updatePosts,
    setPosts
}
