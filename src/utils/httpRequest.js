import axios from 'axios';
//instance
const httpRequest = axios.create({
    baseURL: "https://commerce-2clothy.azurewebsites.net/api/",
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response;
};
export const post = async (path, data = {}) => {
    const response = await httpRequest.post(path, data);
    return response;
};
export const put = async (path, options = {}) => {
    const response = await httpRequest.put(path, options);
    return response;
};
export const patch = async (path, options = {}) => {
    const response = await httpRequest.patch(path, options);
    return response;
};
export const deleted = async (path, options = {}) => {
    const response = await httpRequest.delete(path, options);
    return response;
};

export default httpRequest;
 