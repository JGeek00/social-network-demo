import axios from 'axios';
import config from '../config.json';

export const fetchPosts = async () => {
    // const response = await fetch(`${config.apiUrl}/posts`, {
    //     method: 'GET',
    //     headers: {
    //         'x-access-token': localStorage.getItem('jwt')
    //     },
    // });
    const response = await axios.get(`${config.apiUrl}/posts`, {
        headers: {
            'x-access-token': localStorage.getItem('jwt')
        }
    });
    return response;
}

export const likePost = async (postId, userId) => {
    const response = await axios.post(`${config.apiUrl}/likepost`, {
        postId: postId,
        idUserLiked: userId
    }, {
        headers: {
            'x-access-token': localStorage.getItem('jwt')
        },
    });
    return response;
}

export const publishPostDb = async (post) => {
    const response = await axios.post(`${config.apiUrl}/posts`, {
        title: post.title,
        content: post.content,
        author: post.author
    }, {
        headers: {
            'x-access-token': localStorage.getItem('jwt')
        },
    });
    return response;
}