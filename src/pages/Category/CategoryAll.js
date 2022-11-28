import React, { useState, useEffect, useLayoutEffect } from 'react';
import PageTitle from '../../components/Typography/PageTitle';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { EditIcon, EyeIcon, GridViewIcon, HomeIcon, ListViewIcon, TrashIcon, AddIcon, RightArrow } from '../../icons';
import {
    Card,
    CardBody,
    Label,
    Button,
    TableBody,
    TableContainer,
    Table,
    TableHeader,
    TableCell,
    TableRow,
    TableFooter,
    Pagination,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
} from '@windmill/react-ui';
import response from '../../utils/demo/productData';
import Icon from '../../components/Icon';
import ProductIcon from '../../components/ProductIcon';
import * as apiService from '../../services/apiService';
import { addCategory, deleteCategory } from '../../services/authService';
import { authRemainingSelector } from '../../redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { createInstance } from '../../services/createInstance';
import AuthSlice from '../../redux/AuthSlice';

const FormTitle = ({ children }) => {
    return <h2 className=" text-4xl  font-semibold text-gray-600 dark:text-gray-300">{children}</h2>;
};
const ProductsAll = () => {
    const [view, setView] = useState('grid');

    // Table and grid data handlling
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);

    // pagination setup
    const [resultsPerPage, setResultsPerPage] = useState(10);
    const totalResults = response.length;

    // pagination change control
    function onPageChange(p) {
        setPage(p);
    }

    // on page change, load new sliced data
    // here you would make another server request for new data
    useEffect(() => {
        setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
    }, [page, resultsPerPage]);

    // Delete action model
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

    // const { id } = useParams();
    const [categoryResult, setCategoryResult] = useState();

    const fetchApi = async () => {
        const dataCategory = await apiService.categoriesShop(currentUser.shopId);
        setCategoryResult(dataCategory[0].categories);
    };
    useEffect(() => {
        fetchApi();
    }, []);

    const [categoriesResult, setCategoriesResult] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await apiService.allCategories();

            setCategoriesResult(result);
        };

        fetchApi();
    }, []);

    const [categories2, setCategories2] = useState([]);

    const fetchApi2 = async (result) => {
        const data = await apiService.categoriesById(result.id);
        setSelected('');
        setCategories2(data.categories);
    };
    const [categories3, setCategories3] = useState([]);

    const fetchApi3 = async (result) => {
        const data = await apiService.categoriesById(result.id);
        setSelected(result);
        setCategories3(data.categories);
    };
    const [selected, setSelected] = useState();
    const [newCategory, setNewCategory] = useState();
    const handleNewCategory = (e) => {
        setNewCategory(e.target.value);
    };

    const user = useSelector(authRemainingSelector);
    const currentUser = user?.login.currentUser;
    const dispatch = useDispatch();
    const history = useHistory();

    
    const handleAddCategory = async () => {
        let axiosJWT = createInstance(currentUser, dispatch, AuthSlice.actions.loginSuccess);
        let dateNew = {
            ParentId: selected.id,
            Name: newCategory,
            Description: 'none',
            Gender: true,
            ImagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRSjVPevW-unp99H8YhqEi0FMFm5olEAX4A&usqp=CAU',
        };
        console.log(dateNew);
        const result = await addCategory(dateNew, currentUser.accessToken, axiosJWT, currentUser.shopId);
        setCategoryResult(result);
        setIsModalAddOpen(false);

    };
    const handleDeleteCategory = async (id) => {
        let axiosJWT = createInstance(currentUser, dispatch, AuthSlice.actions.loginSuccess);
        const result = await deleteCategory(id, history, currentUser.accessToken, axiosJWT, currentUser.shopId);
        console.log(result);
        setCategoryResult(result);
        setIsModalDeleteOpen(false);
    };
    return (
        <div>
            {/* Breadcum */}
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
                                        <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
                                            {/* <SearchIcon className="w-5 h-5" aria-hidden="true" /> */}
                                            Results on {`${view}`}
                                        </div>
                                    </div>
                                </Label>
                                <Button size="large" iconLeft={AddIcon} onClick={() => openModal(null, 'add')}>
                                    Thêm danh mục
                                </Button>
                            </div>
                        </div>
                    </div>
                    <TableContainer className="mb-8">
                        <Table>
                            <TableHeader>
                                <tr>
                                    <TableCell>Tên danh mục</TableCell>
                                    <TableCell>Tạo bởi</TableCell>
                                    <TableCell>Sản phẩm</TableCell>
                                    <TableCell>Thao tác</TableCell>
                                </tr>
                            </TableHeader>
                            <TableBody>
                                {categoryResult?.map((category) => (
                                    <TableRow key={category.id}>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <ProductIcon
                                                    className="hidden mr-4 md:block"
                                                    src={
                                                        category.items[0]==null
                                                            ? category.imagePath
                                                            : category.items[0]?.images[0].path
                                                    }
                                                    alt="Product image"
                                                />
                                                <div>
                                                    <p className="font-semibold">{category.name}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-sm">Người bán | Tự chọn</TableCell>

                                        <TableCell className="text-sm">{category.items.length}</TableCell>
                                        <TableCell>
                                            <div className="flex">
                                                {/* <Link to={`/categories/${category.id}`}>
                                            <Button icon={EyeIcon} className="mr-3" aria-label="Preview" />
                                        </Link> */}
                                                <Link to={`/categories/${category.id}`}>
                                                    <Button icon={EditIcon} className="mr-3" layout="outline" aria-label="Edit" />
                                                </Link>

                                                <Button
                                                    icon={TrashIcon}
                                                    layout="outline"
                                                    onClick={() => openModal(category, 'del')}
                                                    aria-label="Delete"
                                                />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <TableFooter>
                            <Pagination
                                totalResults={totalResults}
                                resultsPerPage={resultsPerPage}
                                label="Table navigation"
                                onChange={onPageChange}
                            />
                        </TableFooter>
                    </TableContainer>
                </CardBody>
            </Card>

            {/* Delete category model */}
            <Modal isOpen={isModalDeleteOpen} onClose={() => closeModal('del')} style={{ width: '400px' }}>
                <ModalHeader className="flex items-center">
                    <Icon icon={TrashIcon} className="w-6 h-6 mr-3" />
                    Xoá danh mục
                </ModalHeader>
                <ModalBody>Bạn có muốn xoá danh mục {selectedDeleteCategory && `"${selectedDeleteCategory.name}"`} ?</ModalBody>
                <ModalFooter>
                    <div className="hidden sm:block">
                        <Button layout="outline" onClick={() => closeModal('del')}>
                            Huỷ
                        </Button>
                    </div>
                    <div className="hidden sm:block">
                        <Button onClick={() => handleDeleteCategory(selectedDeleteCategory.id)}>Xoá</Button>
                    </div>
                </ModalFooter>
            </Modal>
            {/* Add category model */}
            <Modal isOpen={isModalAddOpen} onClose={() => closeModal('add')} style={{ width: '1000px' }}>
                <ModalHeader className="flex items-center">
                    {' '}
                    <FormTitle>Thêm danh mục</FormTitle>
                </ModalHeader>
                <ModalBody>
                    <h3 className="text-xl  font-normal text-gray-600 mb-4">Chọn ngành hàng:</h3>
                    <div className="flex-grow min-h-8 overflow-auto text-sm px-6">
                        <div className="rounded p-4 bg-gray-100">
                            <div className="relative overflow-hidden  rounded">
                                <div className="py-3 relative w-96 flex bg-white">
                                    <ul className=" h-80 flex-1">
                                        {categoriesResult.map((result, i) => (
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
                    <h3 className="text-xl  font-normal text-gray-600 my-4">Đặt tên danh mục:</h3>

                    <Label className="mb-4 mx-6 w-1/2">
                        <Input placeholder="Nhập vào tên danh mục hiển thị" value={newCategory} onChange={handleNewCategory} />
                    </Label>
                </ModalBody>
                <ModalFooter>
                    <div className="w-full flex justify-between">
                        <div className="leading-5 flex items-center">
                            <span className="mr-1 font-normal text-gray-600">Đã chọn :</span>
                            <span className="ml-1 mr-1">{selected?.name}</span>
                            {newCategory && (
                                <>
                                    <div className="flex item-center  ">
                                        <Icon className="w-3 h-3" aria-hidden="true" icon={RightArrow} />
                                    </div>
                                    <span className="ml-1">{newCategory}</span>
                                </>
                            )}
                        </div>
                        <div className="flex">
                            <div className="ml-4  ">
                                <Button layout="outline" onClick={() => closeModal('add')}>
                                    Huỷ
                                </Button>
                            </div>
                            <div className="ml-4 hidden sm:block">
                                <Button onClick={handleAddCategory}>Xác nhận</Button>
                            </div>
                        </div>
                    </div>
                </ModalFooter>
            </Modal>

            {/* Product Views */}
        </div>
    );
};

export default ProductsAll;
