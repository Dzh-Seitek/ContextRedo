import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const getPostsRequest = () => instance.get('posts');
export const getUsersRequest = () => instance.get('users');
export const getUserInfo = () => instance.get('users/')

export const getPostUserRequest = (userId) => instance.get(`users/${userId}`);