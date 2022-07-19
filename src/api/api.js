import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b7476605-3c54-460a-a815-6516e24a3644"
    }

})

export const usersAPI = {
    getUsers (currentPage, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    unfollow (id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data;
        })
    },
    follow (id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data;
        })
    }
}

export const authAPI = {
    getUserAuthData () {
        return instance.get(`auth/me`).then(response =>{
            return response.data;
        })
    }
}

export const profileAPI = {
    getProfile  (id) {
        return instance.get(`profile/${id}`).then(response => {
            return response.data;
        })
    }
}
