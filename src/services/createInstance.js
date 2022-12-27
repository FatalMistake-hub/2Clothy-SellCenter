import axios from 'axios';
import jwt_decode from 'jwt-decode';
import AuthSlice from '../redux/AuthSlice';
import httpRequest from '../utils/httpRequest';

const refreshToken = async (token, dispatch) => {
    const refreshInstance = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });
    refreshInstance.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            localStorage.clear();
            alert('Phiên đăng nhập của bạn đã hết hạn. Vui lòng đăng nhập lại!');
            window.location.href = '/';
            window.location.reload(false);
        },
    );
    try {
        const res = await refreshInstance.post('user/refresh-token', {
            Token: token,
        });
        // , {
        //     withCredentials: true,
        //   });
        return res.data;
    } catch (err) {
        console.log('refresh', err);
    }
};
export const createInstance = (user, dispatch, stateSuccess) => {
    const newInstance = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });
    newInstance.interceptors.request.use(
        async (config) => {
            let date = new Date();
            const decodedToken = jwt_decode(user?.accessToken);
            if (decodedToken.exp < date.getTime() / 1000) {
                const data = await refreshToken(user?.refreshToken, dispatch);
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
    newInstance.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            // localStorage.clear();
            // alert('Lỗi request!');
            // // window.location.href = '/';
            // window.location.reload(false);
        },
    );
    return newInstance;
};
// import axios from 'axios';
// import jwt_decode from 'jwt-decode';
// import AuthSlice from '../redux/AuthSlice';
// import httpRequest from '../utils/httpRequest';

// const refreshToken = async (token, dispatch) => {
//     try {
//         const res = await httpRequest.post('user/refresh-token', {
//             Token: token,
//         });
//         // , {
//         //     withCredentials: true,
//         //   });
//         if (res.status == 400) {
//             dispatch(AuthSlice.actions.logOutSuccess());
//             alert('Phiên đăng nhập của bạn đã hết hạn. Vui lòng đăng nhập lại!')
//         }
//         return res.data;
//     } catch (err) {
//         console.log('refresh', err);
//     }
// };
// export const createInstance = (user, dispatch, stateSuccess) => {
//     const newInstance = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });
//     newInstance.interceptors.request.use(
//         async (config) => {
//             let date = new Date();
//             const decodedToken = jwt_decode(user?.accessToken);
//             if (decodedToken.exp < date.getTime() / 1000) {
//                 const data = await refreshToken(user?.refreshToken, dispatch);
//                 const refreshUser = {
//                     ...user,
//                     accessToken: data.accessToken,
//                     refreshToken: data.refreshToken,
//                 };
//                 dispatch(stateSuccess(refreshUser));
//                 config.headers['Authorization'] = 'Bearer ' + data.accessToken;
//             }
//             return config;
//         },
//         (err) => {
//             return Promise.reject(err);
//         },
//     );
//     return newInstance;
// };

