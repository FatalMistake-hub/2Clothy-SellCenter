import * as httpRequest from '../utils/httpRequest';

export const searchProduct = async (keyword) => {
    try {
        const res = await httpRequest.get('search', {
            params: {
                keyword,
                
            },
        });
        // console.log(res.data);
        return res.data;
        // return res;
    } catch (error) {
        console.log(error);
    }
};
export const getAllItem = async () => {
    try {
        const res = await httpRequest.get('item' );

        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const detailProduct = async (id) => {
    try {
        const res = await httpRequest.get(`item/${id}`, {
            
        });
        return res.data; 
    } catch (error) {
        console.log("http",error);
    }
};
export const allCategories = async () => {
    try {
        const res = await httpRequest.get('category');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const categoriesById = async (id) => {
    try {
        const res = await httpRequest.get(`category/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const productByCategory = async (id) => {
    try {
        const res = await httpRequest.get(`category/${id}/item`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const categoriesShop = async (id) => {
    try {
        const res = await httpRequest.get(`shop/${id}/category`);
        console.log(res.data)
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const allShopProducts = async (id) => {
    try {
        const res = await httpRequest.get(`shop/${id}/item`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const detailShop = async (id) => {
    try {
        const res = await httpRequest.get(`shop/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};


export const put = async (keyword,data={}) => {
    try {
        const res = await httpRequest.put('put', {
            firstname: data.firstname,
            lastName: data.lastName,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const patch = async (keyword,data={}) => {
    try {
        const res = await httpRequest.patch('patch', {
            firstname: data.firstname,
            lastName: data.lastName,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};


export const deleted = async (keyword,data={}) => {
    try {
        const res = await httpRequest.deleted('deleted', {
            id: data.id,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
