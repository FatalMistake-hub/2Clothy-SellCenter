import React, { useState, useEffect, useLayoutEffect } from 'react';
import PageTitle from '../../components/Typography/PageTitle';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { EditIcon, EyeIcon, GridViewIcon, HomeIcon, ListViewIcon, TrashIcon, AddIcon, RightArrow } from '../../icons';
import {
    Card,
    CardBody,
    Label,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
} from '@windmill/react-ui';
import response from '../../utils/demo/productData';
import Icon from '../../components/Icon';


const FormTitle = ({ children }) => {
    return <h2 className=" text-4xl  font-semibold text-gray-600 dark:text-gray-300">{children}</h2>;
};

const Finance = () => {
    // Table and grid data handlling
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    // pagination setup
    const [resultsPerPage, setResultsPerPage] = useState(10);
    // pagination change control
    function onPageChange(p) {
        setPage(p);
    }
    useEffect(() => {
        setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
    }, [page, resultsPerPage]);

    //  action model
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [isModalAddOpen, setIsModalAddOpen] = useState(false);
    const [selectedDeleteCategory, setSelectedDeleteCategory] = useState(null);
    const openModal = (category, modal) => {
        if (modal == 'del') {
            // let product = data.filter((product) => product.id === productId)[0];
            // console.log(product);
            setSelectedDeleteCategory(category);
            setIsModalDeleteOpen(true);
        } else {
            setIsModalAddOpen(true);
        }
    };

    const closeModal = (modal) => {
        if (modal == 'del') {
            setIsModalDeleteOpen(false);
        } else {
            setIsModalAddOpen(false);
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
                    <div className="flex items-center justify-between py-4 mb-5">
                        <div className="flex items-center w-full justify-between">
                            <div className="flex items-center">
                                <FormTitle className=" text-sm text-gray-600 dark:text-gray-400">Tất cả danh mục</FormTitle>
                            </div>
                        </div>
                    </div>
                    <Card className="px-8 shadow-md my-8">
                        <CardBody>
                            <div className="flex items-center justify-between py-4 mb-5">
                                <div className="flex items-center w-full justify-between">
                                    <div className="flex items-center">
                                        <FormTitle className=" text-sm text-gray-600 dark:text-gray-400">Tất cả danh mục</FormTitle>
                                    </div>
                                    <div className=" flex justify-end">
                                        <Label className="mr-8">
                                            {/* <!-- focus-within sets the color for the icon when input is focused --> */}
                                            <div className="relative text-gray-500 focus-within:text-orange-600 dark:focus-within:text-orange-400">
                                                <input
                                                    className="py-3 pr-5 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-orange-400 focus:outline-none focus:shadow-outline-orange dark:focus:shadow-outline-gray form-input"
                                                    placeholder="Number of Results"
                                                    value={resultsPerPage}
                                                    onChange={(e) => setResultsPerPage(e.target.value)}
                                                />
                                            </div>
                                        </Label>
                                        <Button size="large" iconLeft={AddIcon} onClick={() => openModal(null, 'add')}>
                                            Thêm danh mục
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </CardBody>
            </Card>



            <Modal isOpen={isModalAddOpen} onClose={closeModal}>
                <ModalHeader>Modal header</ModalHeader>
                <ModalBody>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et eligendi repudiandae voluptatem tempore!
                </ModalBody>
                <ModalFooter>
                    <Button className="w-full sm:w-auto" layout="outline" onClick={closeModal}>
                        Cancel
                    </Button>
                    <Button className="w-full sm:w-auto">Accept</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Finance;
