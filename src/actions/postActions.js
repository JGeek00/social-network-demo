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

const fetchPosts = () => {
    const formatDate = (post) => {
        return {
            ...post,
            datetime: new Date(post.createdAt)
        }
    }
    return dispatch => {
        axios.get(`${config.apiUrl}/posts`).then(response => {
            const toSave = response.data.map(post => formatDate(post));
            dispatch({
                type: 'SET_POSTS',
                posts: toSave
            });
        });
    }
}

export const postActions = {
    createPost,
    updatePosts,
    fetchPosts
}
