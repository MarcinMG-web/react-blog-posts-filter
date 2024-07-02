import { api } from './apiConfig';

export const fetchRequestPosts = async () => {
  return await api
    .get('/posts')
    .then((response) => response)
    .catch((error) => error);
};

export const fetchRequestAuthors = async () => {
  return await api
    .get('/users')
    .then((response) => response)
    .catch((error) => error);
};
