import React from 'react';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';

import { NavLink, useHistory } from 'react-router-dom';
import Icon from '../../components/Icon';
import PageTitle from '../../components/Typography/PageTitle';
import { HomeIcon, AddIcon, PublishIcon, StoreIcon, RightArrow } from '../../icons';
import { Card, CardBody, Label, Input, Textarea, Button, Select, Modal, ModalHeader, ModalBody, ModalFooter } from '@windmill/react-ui';
import { useParams } from 'react-router-dom';
import response from '../../utils/demo/productData';
import * as apiService from '../../services/apiService';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import UploadImage from '../../services/imageService';
import { useDispatch, useSelector } from 'react-redux';
import { authRemainingSelector } from '../../redux/selector';
import { createInstance } from '../../services/createInstance';
import AuthSlice from '../../redux/AuthSlice';
import { addProduct, logOutUser, updateProduct } from '../../services/authService';
const FormTitle = ({ children }) => {
    return <h2 className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-300">{children}</h2>;
};

const UpdateProduct = () => {
    const { id } = useParams();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDeleteProduct, setSelectedDeleteProduct] = useState(null);
    async function openModal(productId) {
        // let product = await data.filter((product) => product.id === productId)[0];
        // console.log(product);
        // setSelectedDeleteProduct(product);
        setIsModalOpen(true);
    }
    function closeModal() {
        setIsModalOpen(false);
    }
    const [categoriesResult, setCategoriesResult] = useState([]);
    const [product, setDataProduct] = useState();

    useLayoutEffect(() => {
        const fetchApi = async () => {
            const result = await apiService.allCategories();
            setCategoriesResult(result);
            const dataProduct = await apiService.detailProduct(id);

            UpdateProductForm.values.CategoryId = { name: dataProduct[0].categoryName, id: dataProduct[0].id };
            UpdateProductForm.values.Name = dataProduct[0].name;
            UpdateProductForm.values.Price = dataProduct[0].price;
            UpdateProductForm.values.Description = dataProduct[0].description;
            UpdateProductForm.values.Size = dataProduct[0].size;
            setImageURLs(dataProduct[0].images);
            setDataProduct(dataProduct[0]);
        };
        fetchApi();
    }, [id]);
    const [categories2, setCategories2] = useState([]);
    const fetchApi2 = async (result) => {
        const data = await apiService.categoriesById(result.id);
        // setSelected(result);
        // UpdateProductForm.values.CategoryId = result;
        setCategories2(data.categories);
    };
    const fetchApi3 = (result) => {
        setSelected(result);
        UpdateProductForm.values.CategoryId = result;
    };

    const [selected, setSelected] = useState();

    const [images, setImages] = useState([]);
    const [imageURLS, setImageURLs] = useState([]);
    const [pathURLS, setPathURLs] = useState([]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];

        UpdateProductForm.values.Paths = images;
        console.log(UpdateProductForm.values.Paths);

        images.forEach((image) => newImageUrls.push({ path: `${URL.createObjectURL(image)}` }));
        setImageURLs(newImageUrls);
    }, [images]);
    const isValidFileUploaded = (file) => {
        const validExtensions = ['png', 'jpeg', 'jpg'];
        const fileExtension = file.type.split('/')[1];

        return validExtensions.includes(fileExtension);
    };
    function onImageChange(e) {
        const files = e.target.files;
        UploadImage(files, setPathURLs);

        let check;
        for (let i = 0; i < e.target.files.length; i++) {
            if (isValidFileUploaded(files[i])) {
                check = true;
            } else {
                check = false;
                break;
            }
        }
        if (files.length < 9 && check) {
            if (images.concat([...e.target.files]).length <= 9) {
                const data = images.concat([...e.target.files]);
                setImages(data);
            } else {
                alert('Over the allowed file amount');
            }
        } else {
            alert('File invalid');
        }
    }
    const inputFile = useRef(null);
    const onDivClick = () => {
        inputFile.current.click();
    };

    const dispatch = useDispatch();
    const user = useSelector(authRemainingSelector);
    const history = useHistory();

    const currentUser = user?.login.currentUser;
    const accessToken = currentUser?.accessToken;
    const [errorResponse, setErrorResponse] = useState('');
    const UpdateProductForm = useFormik({
        initialValues: {
            CategoryId: product?.CategoryId,
            Name: product?.Name,
            Price: product?.Price,
            Description: product?.Description,
            Size: product?.Size,
            // Quantity: null,
            Paths: [],
        },
        validationSchema: Yup.object({
            // CategoryId: Yup.object().required('Bắt buộc!'),
            // Name: Yup.string().required('Bắt buộc!'),
            // Price: Yup.number().required('Bắt buộc!'),
            // Description: Yup.string().required('Bắt buộc!'),
            // Size: Yup.string().required('Bắt buộc!'),
            // Paths: Yup.array().required('Bắt buộc!'),
            // Quantity: Yup.string().required('Bắt buộc!'),
        }),
        onSubmit: (values) => {
            const newProduct = {
                Id: id,
                CategoryId: values.CategoryId.id,
                Name: values.Name,
                Price: values.Price,
                Description: values.Description,
                Size: values.Size,
                Paths: pathURLS,
                // Quantity: null,
            };
            console.log('submit', newProduct);
            console.log(UpdateProductForm.errors);
            let axiosJWT = createInstance(currentUser, dispatch, AuthSlice.actions.loginSuccess);
            const fetchApi = async () => {
                const res = await updateProduct(newProduct, history, accessToken, axiosJWT);
                setErrorResponse(res);
                console.log(res);
            };
            fetchApi();
        },
    });
    return (
        <div>
            <PageTitle>Thêm Mới Sản Phẩm</PageTitle>

            {/* Breadcum */}
            <div className="flex text-gray-800 dark:text-gray-300">
                <div className="flex items-center text-orange-600">
                    <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
                    <NavLink exact to="/dashboard" className="mx-2">
                        Kênh người bán
                    </NavLink>
                </div>
                {'>'}
                <div className="flex items-center text-orange-600">
                    <NavLink exact to="/all-products" className="mx-2">
                        Tất cả sản phẩm
                    </NavLink>
                </div>
                <p className="mx-2">Thêm Mới Sản Phẩm</p>
            </div>

            <div className="w-full mt-8 grid gap-4 grid-col md:grid-cols-3 ">
                <Modal isOpen={isModalOpen} onClose={closeModal} style={{ width: '1000px' }}>
                    <ModalHeader className="flex mb-8 text-3xl ">
                        {/* <div className="flex items-center"> */}
                        {/* <Icon icon={TrashIcon} className="w-6 h-6 mr-3" /> */}
                        Chỉnh sửa ngành hàng
                        {/* </div> */}
                    </ModalHeader>
                    <ModalBody className="max-w-7xl max-h-96">
                        {/* Hãy chắc chắn rằng bạn muốn xóa sản phẩm{" "}
            {selectedDeleteProduct && `"${selectedDeleteProduct.name}"`} */}
                        <div className="flex-grow min-h-8 overflow-auto text-sm px-6">
                            <div className="rounded p-4 bg-gray-100">
                                <div className="relative overflow-hidden  rounded">
                                    <div className="py-3 relative w-96 flex bg-white">
                                        <ul className=" h-80 flex-1">
                                            {categoriesResult?.map((result, i) => (
                                                <li
                                                    key={result.id}
                                                    className="my-2 flex justify-between leading-8 items-center px-4 hover:bg-gray-100"
                                                    onClick={() => fetchApi2(result)}
                                                >
                                                    <p className="text-sm font-semibold leading-8 text-ellipsis">{result.name}</p>
                                                    <div className="flex item-center ">
                                                        <Icon className="w-5 h-5" aria-hidden="true" icon={RightArrow} />
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        <ul className=" h-80 flex-1">
                                            {categories2?.map((result, i) => (
                                                <li
                                                    key={result.id}
                                                    className="my-2 flex justify-between leading-8 items-center px-4 hover:bg-gray-100"
                                                    onClick={() => fetchApi3(result)}
                                                >
                                                    <p className="text-sm font-semibold leading-8 text-ellipsis">{result.name}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <div className="w-full flex justify-between">
                            <div className="leading-5">
                                <span className="mr-1">Đã chọn :</span>
                                <span className="ml-1">{selected?.name}</span>
                            </div>
                            <div className="flex">
                                <div className="ml-4 ">
                                    <Button block layout="outline" onClick={closeModal}>
                                        HUỷ
                                    </Button>
                                </div>
                                <div className="ml-4 hidden sm:block">
                                    <Button onClick={closeModal}>Xác nhận</Button>
                                </div>
                            </div>
                        </div>
                    </ModalFooter>
                </Modal>

                <Card className="row-span-4 md:col-span-4 ">
                    <form onSubmit={UpdateProductForm.handleSubmit}>
                        <CardBody>
                            <FormTitle>Hình ảnh sản phẩm</FormTitle>
                            <div className="w-full flex flex-wrap">
                                {imageURLS?.map((imageSrc, i) => (
                                    <div key={i} className="w-20 h-20 rounded mr-4 mb-4">
                                        <div className="w-full h-full ">
                                            <img src={imageSrc.path} alt="not fount" className="w-20 h-20 rounded border " />
                                        </div>
                                    </div>
                                ))}

                                <div className="w-20 h-20 rounded mr-4 mb-4  text-center  flex">
                                    <div
                                        onClick={onDivClick}
                                        className="w-full h-full rounded border border-dashed border-slate-600 flex items-center hover:bg-orange-100"
                                    >
                                        <input
                                            id="Paths"
                                            name="Paths"
                                            // value={UpdateProductForm.values.Paths}
                                            type="file"
                                            multiple={true}
                                            className="hidden"
                                            onChange={onImageChange}
                                            ref={inputFile}
                                        />
                                        <div className="flex text-orange-600 flex-col   ">
                                            <div className="h-6">
                                                <i className="w-6 h-6 inline-block fill-current">
                                                    <svg viewBox="0 0 23 21" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.5 0A1.5 1.5 0 0 1 20 1.5V12c-.49-.07-1.01-.07-1.5 0V1.5H2v12.65l3.395-3.408a.75.75 0 0 1 .958-.087l.104.087L7.89 12.18l3.687-5.21a.75.75 0 0 1 .96-.086l.103.087 3.391 3.405c.81.813.433 2.28-.398 3.07A5.235 5.235 0 0 0 14.053 18H2a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 2 0h16.5z"></path>
                                                        <path d="M6.5 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM18.5 14.25a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5H20v2.25a.75.75 0 0 1-1.5 0V18h-2.25a.75.75 0 0 1 0-1.5h2.25v-2.25z"></path>
                                                    </svg>
                                                </i>
                                            </div>
                                            <div className="leading-3 text-xs">Thêm hình ảnh ({imageURLS.length}/9)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <FormTitle>Tên sản phẩm</FormTitle>
                            <Label>
                                <Input
                                    id="Name"
                                    name="Name"
                                    value={UpdateProductForm.values.Name}
                                    onChange={UpdateProductForm.handleChange}
                                    className="mb-4"
                                    placeholder="Nhập vào"
                                />
                            </Label>
                            <FormTitle>Danh mục</FormTitle>
                            <Label>
                                <Input
                                    id="CategoryId"
                                    name="CategoryId"
                                    value={
                                        UpdateProductForm.values.CategoryId?.name
                                            ? UpdateProductForm.values.CategoryId?.name
                                            : UpdateProductForm.values.CategoryId
                                    }
                                    onChange={UpdateProductForm.handleChange}
                                    // value={selected?.name}
                                    onClick={() => openModal('1')}
                                    className="mb-4"
                                    placeholder="Chọn danh mục"
                                    readOnly
                                />
                            </Label>
                            <FormTitle>Size</FormTitle>
                            <Label>
                                <Input
                                    id="Size"
                                    name="Size"
                                    value={UpdateProductForm.values.Size}
                                    onChange={UpdateProductForm.handleChange}
                                    className="mb-4"
                                    placeholder="Nhập size"
                                />
                            </Label>
                            <FormTitle>Mô tả sản phẩm</FormTitle>
                            <Label>
                                <Textarea
                                    id="Description"
                                    name="Description"
                                    value={UpdateProductForm.values.Description}
                                    onChange={UpdateProductForm.handleChange}
                                    className="mb-4"
                                    rows="6"
                                />
                            </Label>
                            <FormTitle>Giá</FormTitle>
                            <Label>
                                <Input
                                    id="Price"
                                    name="Price"
                                    value={UpdateProductForm.values.Price}
                                    onChange={UpdateProductForm.handleChange}
                                    type="number"
                                    className="mb-4 "
                                    placeholder="Nhập vào"
                                />
                            </Label>

                            <div className="w-full">
                                <Button type="submit" size="large" iconLeft={AddIcon}>
                                    Cập nhật sản phẩm
                                </Button>
                            </div>
                        </CardBody>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default UpdateProduct;
