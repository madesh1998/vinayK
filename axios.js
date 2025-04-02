import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jurysoftprojects.com/calibreply/api/api.php',
    // baseURL: 'https://jsonplaceholder.typicode.com/posts',
    headers: {
        post: {
            "Accept": 'application/json',
            "Content-Type": "application/json",
        },
        get: {
            "Accept": 'application/json',
            "Content-Type": "application/json",
        },
    },
    withCredentials: false,
})

export default instance;