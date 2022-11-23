import AuthSlice from '../redux/AuthSlice';
import * as httpRequest from '../utils/httpRequest';
import { allShopProducts, categoriesShop, productByCategory } from './apiService';

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
        return error.response.data;
    }
};
export const addCategory = async (data, accessToken, axiosJWT,shopId) => {
    try {
        let res;
        res = await axiosJWT.post('category', data, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (res.status == 200) {
            res = await categoriesShop(shopId);
            console.log(res);
            return res;
        }
        return res.data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
};
export const deleteCategory = async (id, history, accessToken, axiosJWT,shopId) => {
    try {
        let res = '';
        res = await axiosJWT.delete(`category/${id}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (res.status == 200) {
            res = await allShopProducts(shopId);
            console.log(res);
            return res;
        }
        // history.push('/all-products');

        return res.data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
};
export const addProduct = async (data, history, accessToken, axiosJWT) => {
    try {
        const res = await axiosJWT.post('item', data, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        history.push('/all-products');

        return res.data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
};
export const addProductCategoryShop = async (idcategory,data, history, accessToken, axiosJWT) => {
    try {
        let res=''
        res = await axiosJWT.post('item/more', data, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        // history.push('/all-products');
        if (res.status == 200) {
            res = await productByCategory(idcategory);
            console.log(res);
            return res;
        }
        return res.data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
};
export const updateProduct = async (data, history, accessToken, axiosJWT) => {
    try {
        const res = await axiosJWT.put('item', data, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        history.push('/all-products');

        return res.data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
};
export const deleteProduct = async (id, history, accessToken, axiosJWT,shopId) => {
    try {
        let res = '';
        res = await axiosJWT.delete(`item/${id}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (res.status == 200) {
            res = await allShopProducts(shopId);
            console.log(res);
            return res;
        }
        // history.push('/all-products');
        console.log(res);
        return res.data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
};
export const deleteShopCategoryProduct = async (id,idcategory, history, accessToken, axiosJWT) => {
    try {
        let res = '';
        res = await axiosJWT.delete(`item/${id}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (res.status == 200) {
            res = await productByCategory(idcategory);
            console.log(res);
            return res;
        }
        // history.push('/all-products');
        console.log(res);
        return res.data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
};

export const updateShop = async (data, history, accessToken, axiosJWT) => {
    try {
        const res = await axiosJWT.put('shop', data, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });

        return res.data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
};
