import axios from 'axios';
import jwt_decode from 'jwt-decode';
import httpRequest from '../utils/httpRequest';

const refreshToken = async (token) => {
    try {
        const res = await httpRequest.post('user/refresh-token', {
            // withCredentials: true,
            Token: token,
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const createInstance = (user, dispatch, stateSuccess) => {
    const newInstance = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });
    newInstance.interceptors.request.use(
        async (config) => {
            let date = new Date();
            const decodedToken = jwt_decode(user?.accessToken);
            if (decodedToken.exp < (date.getTime() + 10 * 1000) / 1000) {
                const data = await refreshToken(user?.refreshToken);

                const refreshUser = {
                    ...user,
                    accessToken: data.accessToken,
                    refreshToken: data.refreshToken,
                };
                dispatch(stateSuccess(refreshUser));
                config.headers['Authorization'] = 'Bearer ' + data.accessToken;
            }
            return config;
        },
        (err) => {
            return Promise.reject(err);
        },
    );
    return newInstance;
};
