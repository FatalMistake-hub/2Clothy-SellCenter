import AuthSlice from '../redux/AuthSlice';
import * as httpRequest from '../utils/httpRequest';

export const loginUser = async (user, dispatch, history) => {
    dispatch(AuthSlice.actions.loginStart());
    try {
        const res = await httpRequest.post('user/login', {
            Email: user.Email,
            Password: user.Password,
        });
        dispatch(AuthSlice.actions.loginSuccess(res.data));
        history.push('/dashboard');
        return res.data;
    } catch (error) {
        dispatch(AuthSlice.actions.loginFailed());
        return error.response.data;
    }
};
export const registerUser = async (user, dispatch, history) => {
    dispatch(AuthSlice.actions.registerStart());
    try {
        const res = await httpRequest.post('user/register', {
            Email: user.Email,
            Password: user.Password,
            ConfirmPassword: user.ConfirmPassword,
        });
        dispatch(AuthSlice.actions.registerSuccess(res.data));
        history.push('/');
        return res.data;
    } catch (error) {
        dispatch(AuthSlice.actions.registerFailed());
        console.error('error', error.response.data);
        return error.response.data;
    }
};
export const logOutUser = async (dispatch, history, id = '1', accessToken, axiosJWT) => {
    dispatch(AuthSlice.actions.logOutStart());
    try {
        const res = await axiosJWT.post('user/logout', id, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        dispatch(AuthSlice.actions.logOutSuccess());
        console.log('logout', res.data);
        history.push('/');
        return res.data;
    } catch (error) {
        dispatch(AuthSlice.actions.logOutFailed());
        console.log(error, AuthSlice.actions.logOutFailed());
    }
};
export const addCategory = async ( data, accessToken, axiosJWT) => {
    try {
        const res = await axiosJWT.post('category', data, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });

        return res.data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
};

