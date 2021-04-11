import axios from 'axios';

import config from '../config.json';

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

const createPost = (post) => {
    const postFormatted = formatDate(post);
    return dispatch => {
        dispatch({
            type: 'CREATE_POST',
            post: postFormatted
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
    return dispatch => {
        const toSave = posts.map(post => formatDate(post));
        dispatch({
            type: 'SET_POSTS',
            posts: toSave
        });
    }
}

const updatePost = (post) => {
    return dispatch => {
        const toSave = formatDate(post);
        dispatch({
            type: 'UPDATE_POST',
            posts: toSave
        });
    }
}

const removePost = (postId) => {
    return dispatch => {
        dispatch({
            type: 'REMOVE_POST',
            postId
        });
    }
}

export const postActions = {
    createPost,
    updatePosts,
    setPosts,
    updatePost,
    removePost
}
