import React, { useState, useEffect, useLayoutEffect } from 'react';
import PageTitle from '../../components/Typography/PageTitle';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { EditIcon, EyeIcon, GridViewIcon, HomeIcon, ListViewIcon, TrashIcon, AddIcon, RightArrow } from '../../icons';
import { Card, CardBody, Label, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from '@windmill/react-ui';
import * as apiAuthService from '../../services/authService';
import { useDispatch, useSelector } from 'react-redux';
import { authRemainingSelector } from '../../redux/selector';
import { createInstance } from '../../services/createInstance';
import moment from 'moment/moment';
import AuthSlice from '../../redux/AuthSlice';
import Icon from '../../components/Icon';

const FormTitle = ({ children }) => {
    return <h2 className=" text-4xl  font-semibold text-gray-600 dark:text-gray-300">{children}</h2>;
};

const Finance = () => {
    // Table and grid data handlling

    const [response, setResponse] = useState([]);
    // pagination setup

    const dispatch = useDispatch();
    const user = useSelector(authRemainingSelector);
    const currentUser = user?.login.currentUser;
    const accessToken = currentUser?.accessToken;
    useEffect(() => {
        const fetchApi = async () => {
            let axiosJWT = createInstance(currentUser, dispatch, AuthSlice.actions.loginSuccess);
            const result = await apiAuthService.getBank(accessToken, axiosJWT);
            setResponse(result[0]);
        };
        fetchApi();
    }, []);
    //  action mobank
    const [isModalBankOpen, setIsModalBankOpen] = useState(false);
    const [isModalCheckOutOpen, setIsModalCheckOutOpen] = useState(false);
    const [selectedBankCategory, setSelectedBankCategory] = useState(null);
    const openModal = (modal) => {
        if (modal == 'bank') {
            setSelectedBankCategory();
            setIsModalBankOpen(true);
        } else {
            setIsModalCheckOutOpen(true);
        }
    };

    const closeModal = (modal) => {
        if (modal == 'bank') {
            setIsModalBankOpen(false);
        } else {
            setIsModalCheckOutOpen(false);
        }
    };
    return (
        <div>
            <div className="flex mt-8 text-gray-800 dark:text-gray-300">
                <div className="flex items-center text-orange-600">
                    <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
                    <NavLink exact to="/dashboard" className="mx-2">
                        Kênh người bán
                    </NavLink>
                </div>
                {'>'}
                <p className="mx-2">Quản lý danh mục</p>
            </div>

            {/* Sort */}
            <Card className="px-8 shadow-md my-8">
                <CardBody>
                    <div className="flex items-center justify-between py-4 mb-2">
                        <div className="flex items-center w-full justify-between">
                            <div className="flex items-center">
                                <FormTitle className=" text-sm text-gray-600 dark:text-gray-400">Tổng quan</FormTitle>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex  justify-around p-6">
                        <div className="z-0 w-5/12 h-full rounded-lg shadow-xl  text-orange-900 bg-orange-200 ">
                            <div className="p-8 flex flex-col justify-between w-full h-full ">
                                <div>
                                    <h6 className="font-semibold text-xl leading-relaxed">Số dư tài khoản</h6>
                                    <h3 className="font-bold leading-normal text-4xl mt-2">₫0</h3>
                                </div>
                                <div className="flex flex-end flex-row-reverse mt-4">
                                    <Button size="large" className="p-4" onClick={() => openModal('checkout')}>
                                        Yêu cầu thanh toán
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="z-0 w-6/12 shadow-2xl text-white bg-gray-700 rounded-lg">
                            <div className="p-8 flex flex-col">
                                <h3 className="font-semibold text-xl text-gray-300 leading-relaxed flex justify-between mb-4">
                                    <div className="flex">Tài khoản ngân hàng {response?.bankCode} </div>
                                    <button className="" onClick={() => openModal('bank')}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            // xmlns:xlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true"
                                            role="img"
                                            class="MuiBox-root css-1t9pz9x iconify iconify--eva"
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
                                            <circle cx="12" cy="5" r="2" fill="currentColor"></circle>
                                            <circle cx="12" cy="19" r="2" fill="currentColor"></circle>
                                        </svg>
                                    </button>
                                </h3>
                                <h3 className="font-bold leading-normal text-4xl mt-2">{response?.accountName}</h3>
                                <h6 className="flex flex-end flex-row-reverse items-center my-4">
                                    {/* **** **** **** {response?.bankNumber?.splice(-4, response?.bankNumber.length)} */}
                                    **** **** **** {response?.bankNumber}
                                    <img
                                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-vnpay.png"
                                        alt=""
                                        className="w-12 h-12 mr-2"
                                    />
                                </h6>
                                <div className="flex flex-end flex-row">
                                    <h5 className="font-semibold text-l text-gray-300 leading-relaxed">Expired Date:</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>

            <Modal isOpen={isModalBankOpen} onClose={() => closeModal('bank')} style={{ width: '1000px' }}>
                <ModalHeader>Modal header</ModalHeader>
                <ModalBody>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et eligendi repudiandae voluptatem tempore!
                </ModalBody>
                <ModalFooter>
                    <Button className="w-full sm:w-auto" layout="outline" onClick={() => closeModal('bank')}>
                        Cancel
                    </Button>
                    <Button className="w-full sm:w-auto">Accept</Button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={isModalCheckOutOpen} onClose={() => closeModal('checkout')} style={{ width: '1000px' }}>
                <ModalHeader>Modal header</ModalHeader>
                <ModalBody>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et eligendi repudiandae voluptatem tempore!
                </ModalBody>
                <ModalFooter>
                    <Button className="w-full sm:w-auto" layout="outline" onClick={() => closeModal('checkout')}>
                        Cancel
                    </Button>
                    <Button className="w-full sm:w-auto">Accept</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Finance;
