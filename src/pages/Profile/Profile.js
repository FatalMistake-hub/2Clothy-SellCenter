import React from 'react';
import PageTitle from '../../components/Typography/PageTitle';
import { NavLink, useHistory } from 'react-router-dom';
import Icon from '../../components/Icon';
import { HomeIcon, AddIcon, PublishIcon, TrashIcon, RightArrow, StoreIcon } from '../../icons';
import { Card, CardBody, Label, Input, Textarea, Button, Select, Modal, ModalHeader, ModalBody, ModalFooter } from '@windmill/react-ui';
import { useState, useEffect, useRef } from 'react';
import * as apiService from '../../services/apiService';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import UploadImage from '../../services/imageService';
import { useDispatch, useSelector } from 'react-redux';
import { authRemainingSelector } from '../../redux/selector';
import { createInstance } from '../../services/createInstance';
import AuthSlice from '../../redux/AuthSlice';
import { addProduct, logOutUser, updateShop } from '../../services/authService';
import ErrorBox from '../../components/ErrorBox.js';
const FormTitle = ({ children }) => {
    return <h2 className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-300">{children}</h2>;
};
const Profile = () => {
    const [images, setImages] = useState([]);
    const [imageURLS, setImageURLs] = useState([]);
    const [bannerPathURLS, setBannerPathURLs] = useState([]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        ShopForm.values.Pathbanner = images;

        images.forEach((image) => {
            newImageUrls.push({ path: `${URL.createObjectURL(image)}` });
        });
        setImageURLs(newImageUrls);
    }, [images]);
    const isValidFileUploaded = (file) => {
        const validExtensions = ['png', 'jpeg', 'jpg'];
        const fileExtension = file.type.split('/')[1];

        return validExtensions.includes(fileExtension);
    };
    function onImageChange(e) {
        const files = e.target.files;
        UploadImage(files, setBannerPathURLs);

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

    //Logo
    const inputFileLogo = useRef(null);
    const onDivClickLogo = () => {
        inputFileLogo.current.click();
    };
    const [imagesLogo, setImagesLogo] = useState('');
    const [imageURLSLogo, setImageURLsLogo] = useState('https://cf.shopee.vn/file/72443418d390c42dd6342d7a010532d1');
    const [logoPathURLS, setLogoPathURLs] = useState([]);

    useEffect(() => {
        if (typeof imagesLogo !== 'string') {
            console.log('set', imagesLogo[0]);
            setImageURLsLogo(URL.createObjectURL(imagesLogo[0]));
        }
    }, [imagesLogo]);
    const isValidFileUploadedLogo = (file) => {
        const validExtensions = ['png', 'jpeg', 'jpg'];
        const fileExtension = file.type.split('/')[1];
        return validExtensions.includes(fileExtension);
    };
    function onImageLogoChange(e) {
        const files = e.target.files;
        UploadImage(files, setLogoPathURLs);

        if (isValidFileUploadedLogo(files[0])) {
            setImagesLogo(files);
        } else {
            alert('File invalid');
        }
    }

    const dispatch = useDispatch();
    const user = useSelector(authRemainingSelector);
    const history = useHistory();

    const currentUser = user?.login.currentUser;
    const accessToken = currentUser?.accessToken;
    const [errorResponse, setErrorResponse] = useState('');

    const [shop, setDataShop] = useState();

    useEffect(() => {
        const fetchApi = async () => {
            const dataShop = await apiService.detailShop(currentUser.shopId);
            console.log(dataShop.images);
            ShopForm.values.Name = dataShop.name;
            ShopForm.values.Address = dataShop.address;
            ShopForm.values.PhoneNumber = dataShop.phoneNumber;
            setImageURLs(dataShop.images);
            ShopForm.values.Description = dataShop.description;
            setDataShop(dataShop);
        };
        fetchApi();
    }, []);
    const ShopForm = useFormik({
        initialValues: {
            Name: '',
            Address: '',
            PhoneNumber: '',
            Paths: [],
            Pathbanner: [],
            Description: '',
        },
        validationSchema: Yup.object({}),
        onSubmit: (values) => {
            const updateData = {
                Name: values.Name,
                Address: values.Address,
                PhoneNumber: values.PhoneNumber,
                // Paths: logoPathURLS,
                // Pathbanner: bannerPathURLS,
                Paths: bannerPathURLS,
                Description: values.Description,
            };
            const fetchApi = async () => {
                let axiosJWT = createInstance(currentUser, dispatch, AuthSlice.actions.loginSuccess);
                const res = await updateShop(updateData, history, accessToken, axiosJWT);
                setErrorResponse(res);
                console.log(res);
            };
            fetchApi();
        },
    });
    return (
        <div>
            {/* Breadcum */}
            <div className="flex  mt-8  text-gray-800 dark:text-gray-300">
                <div className="flex items-center text-orange-600">
                    <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
                    <NavLink exact to="/dashboard" className="mx-2">
                        Kênh người bán
                    </NavLink>
                </div>
                {'>'}
                <p className="mx-2">Hồ Sơ Shop</p>
            </div>

            <div className="w-full mt-8 grid gap-4 grid-col  ">
                <Card className="row-span-4 md:col-span-4 ">
                    <div className="ml-8 mb-4">
                        <PageTitle>Hồ Sơ Shop</PageTitle>
                        <FormTitle>Xem tình trạng Shop và cập nhật hồ sơ Shop của bạn</FormTitle>
                    </div>
                    <form onSubmit={ShopForm.handleSubmit}>
                        <CardBody className="w-4/5 mx-auto">
                            <FormTitle>Tên shop</FormTitle>
                            <Label>
                                <Input
                                    id="Name"
                                    name="Name"
                                    value={ShopForm.values.Name}
                                    onChange={ShopForm.handleChange}
                                    className="mb-4"
                                    placeholder="Tên shop"
                                />
                            </Label>
                            <FormTitle>Số điện thoại</FormTitle>
                            <Label>
                                <Input
                                    id="PhoneNumber"
                                    name="PhoneNumber"
                                    value={ShopForm.values.PhoneNumber}
                                    onChange={ShopForm.handleChange}
                                    className="mb-4"
                                    placeholder="Nhập số điện thoại"
                                    type="number"
                                />
                            </Label>
                            <FormTitle>Shop logo</FormTitle>

                            <div className="w-32 h-32 relative  rounded mr-4 mb-4  text-center  flex" onClick={onDivClickLogo}>
                                <div className="w-full h-full   flex items-center">
                                    <input
                                        id="Paths"
                                        name="Paths"
                                        type="file"
                                        className="hidden"
                                        onChange={onImageLogoChange}
                                        ref={inputFileLogo}
                                    />
                                    <img src={imageURLSLogo} alt="" className="rounded" />
                                </div>
                                <div className=" rounded-b absolute bottom-0 w-full h-6 text-medium leading-6 bg-gray-700 opacity-75 hover:bg-gray-500 text-white text-center cursor-pointer">
                                    Sửa
                                </div>
                            </div>
                            <FormTitle>Địa chỉ</FormTitle>
                            <Label>
                                <Textarea
                                    id="Address"
                                    name="Address"
                                    value={ShopForm.values.Address}
                                    onChange={ShopForm.handleChange}
                                    className="mb-4"
                                    rows="3"
                                    placeholder="Nhập thông tin địa chỉ của shop bạn vào đây"
                                />
                            </Label>
                            <FormTitle>Banner shop</FormTitle>

                            <div className="w-full flex flex-wrap">
                                {imageURLS.map((imageSrc, i) => (
                                    <div key={i} className="w-96 h-40 rounded mr-4 mb-4">
                                        <div className="w-full h-full ">
                                            <img src={imageSrc.path} alt="not fount" className="w-full h-full rounded border " />
                                        </div>
                                    </div>
                                ))}

                                <div className="w-20 h-20 rounded mr-4 mb-4  text-center  flex">
                                    <div
                                        onClick={onDivClick}
                                        className="w-full h-full rounded border border-dashed border-slate-600 flex items-center hover:bg-orange-100"
                                    >
                                        <input
                                            id="Pathbanner"
                                            name="Pathbanner"
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
                            <FormTitle>Mô tả shop</FormTitle>
                            <Label>
                                <Textarea
                                    id="Description"
                                    name="Description"
                                    value={ShopForm.values.Description}
                                    onChange={ShopForm.handleChange}
                                    className="mb-4"
                                    rows="6"
                                    placeholder="Nhập mô tả hoặc thông tin của shop bạn vào đây"
                                />
                            </Label>
                            {errorResponse ? <div className="">
                    <div className="w-full bg-green-200 text-white rounded-md p-4 my-6">
                        <p className="font-bold text-base leading-5 bg-transparent text-black">{errorResponse}</p>
                    </div>
                </div> : ''}
                            <div className="w-full">
                                <Button type="submit" size="large" iconLeft={AddIcon}>
                                    Lưu
                                </Button>
                            </div>

                        </CardBody>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Profile;
