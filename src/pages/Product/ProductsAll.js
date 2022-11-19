import React, { useState, useEffect } from 'react';
import PageTitle from '../../components/Typography/PageTitle';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { EditIcon, EyeIcon, GridViewIcon, HomeIcon, ListViewIcon, TrashIcon } from '../../icons';
import {
    Card,
    CardBody,
    Label,
    Select,
    Button,
    TableBody,
    TableContainer,
    Table,
    TableHeader,
    TableCell,
    TableRow,
    TableFooter,
    Avatar,
    Badge,
    Pagination,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from '@windmill/react-ui';

import Icon from '../../components/Icon';
import * as apiService from '../../services/apiService';
import * as apiAuthService from '../../services/authService';
import ProductIcon from '../../components/ProductIcon';
import { useDispatch, useSelector } from 'react-redux';
import { authRemainingSelector } from '../../redux/selector';
import { createInstance } from '../../services/createInstance';
import AuthSlice from '../../redux/AuthSlice';
import { addProduct, logOutUser } from '../../services/authService';
const ProductsAll = () => {
    const [view, setView] = useState('list');

    // Table and grid data handlling
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [response, setResponse] = useState();
    const [resultCategory, setResultCategory] = useState();
    // pagination setup
    const [resultsPerPage, setResultsPerPage] = useState(10);
    const totalResults = response?.length;

    // pagination change control
    function onPageChange(p) {
        setPage(p);
    }

    // on page change, load new sliced data
    // here you would make another server request for new data
    useEffect(() => {
        const fetchApi = async () => {
            const result = await apiService.allShopProducts(1);
            const dataCategory = await apiService.categoriesShop(1);
            setResponse(result[0].items);
            setResultCategory(dataCategory[0].categories);
            console.log(dataCategory)
        };
        fetchApi();
    }, []);
    useEffect(() => {
        setData(response?.slice((page - 1) * resultsPerPage, page * resultsPerPage));
    }, [page, resultsPerPage, response]);

    // Delete action model
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDeleteProduct, setSelectedDeleteProduct] = useState(null);
    async function openModal(product) {
        // let product = await data.filter((product) => product.id === productId)[0];
        // console.log(product);
        setSelectedDeleteProduct(product);
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    // Handle list view
    const handleChangeView = () => {
        if (view === 'list') {
            setView('grid');
        }
        if (view === 'grid') {
            setView('list');
        }
    };

    const dispatch = useDispatch();
    const user = useSelector(authRemainingSelector);
    const history = useHistory();

    const currentUser = user?.login.currentUser;
    const accessToken = currentUser?.accessToken;
    let axiosJWT = createInstance(currentUser, dispatch, AuthSlice.actions.loginSuccess);

    const handleDeleteProduct = async (id) => {
        const result = await apiAuthService.deleteProduct(id, history, accessToken, axiosJWT);
        console.log(result);
        setResponse(result);
    };

    const [filter, setFilter] = useState();
    useEffect(() => {
        // If Filters Applied
        setData(response?.filter((item) => item.categoryName == filter));

        // if filters dosent applied
        if (filter === 'Tất cả' || !filter) {
            setData(response);
        }
    }, [filter]);
    return (
        <div>
            <PageTitle>Tất cả sản phẩm</PageTitle>

            {/* Breadcum */}
            <div className="flex text-gray-800 dark:text-gray-300">
                <div className="flex items-center text-orange-600">
                    <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
                    <NavLink exact to="/dashboard" className="mx-2">
                        Kênh người bán
                    </NavLink>
                </div>
                {'>'}
                <p className="mx-2 text-[#ffa400]">Tất cả sản phẩm</p>
            </div>

            {/* Sort */}
            <Card className="mt-5 mb-5 shadow-md">
                <CardBody>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <p className="text-sm text-gray-600 dark:text-gray-400">Tất cả sản phẩm</p>

                            <Label className="mx-3">
                                <Select className="py-3">
                                    <option>Sắp xếp theo </option>
                                    <option>Asc</option>
                                    <option>Desc</option>
                                </Select>
                            </Label>

                            <Label className="mx-3">
                                <Select className="py-3"onChange={(e) => setFilter(e.target.value)} >
                                    <option>Tất cả</option>
                                   
                                    {resultCategory?.map((category) => (
                                        <option>{category.name}</option>
                                    ))}
                                </Select>
                            </Label>

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
                        </div>
                        <div className="">
                            <Button
                                icon={view === 'list' ? GridViewIcon : ListViewIcon}
                                className="p-2"
                                aria-label="Edit"
                                onClick={handleChangeView}
                            />
                        </div>
                    </div>
                </CardBody>
            </Card>

            {/* Delete product model */}
            <Modal isOpen={isModalOpen} onClose={closeModal} style={{ width: '600px' }}>
                <ModalHeader className="flex items-center">
                    {/* <div className="flex items-center"> */}
                    <Icon icon={TrashIcon} className="w-6 h-6 mr-3" />
                    Xoá sản phẩm
                    {/* </div> */}
                </ModalHeader>
                <ModalBody>
                    Hãy chắc chắn rằng bạn muốn xóa sản phẩm {selectedDeleteProduct && `"${selectedDeleteProduct.name}" ?`}
                </ModalBody>
                <ModalFooter>
                    <div className="hidden sm:block">
                        <Button layout="outline" onClick={closeModal}>
                            Huỷ
                        </Button>
                    </div>
                    <div className="hidden sm:block">
                        <Button onClick={() => handleDeleteProduct(selectedDeleteProduct.id)}>Xoá</Button>
                    </div>
                </ModalFooter>
            </Modal>

            {/* Product Views */}
            {view === 'list' ? (
                <>
                    <TableContainer className="mb-8">
                        <Table>
                            <TableHeader>
                                <tr>
                                    <TableCell>Tên sản phẩm</TableCell>
                                    <TableCell>Kho hàng</TableCell>
                                    <TableCell>Size</TableCell>
                                    <TableCell>Số lượng</TableCell>
                                    <TableCell>Giá</TableCell>
                                    <TableCell>Thao tác</TableCell>
                                </tr>
                            </TableHeader>
                            <TableBody>
                                {data?.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <ProductIcon
                                                    className="hidden mr-4 md:block"
                                                    src={product.images[0].path}
                                                    alt="Product image"
                                                />
                                                <div>
                                                    <p className="font-semibold ">{product.name}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge type={product.quantity > 0 ? 'success' : 'danger'}>
                                                {product.quantity > 0 ? 'In Stock' : 'Out of Stock'}
                                            </Badge>
                                        </TableCell>
                                        {/* <TableCell className="text-sm">
                      {genRating(product.rating, product.reviews.length, 5)}
                    </TableCell> */}
                                        <TableCell className="text-sm">{product.size}</TableCell>
                                        <TableCell className="text-sm">{product.quantity}</TableCell>
                                        <TableCell className="text-sm">{product.price.toLocaleString('es-ES')} ₫</TableCell>
                                        <TableCell>
                                            <div className="flex">
                                                <Link to={`/product/${product.id}`}>
                                                    <Button icon={EyeIcon} className="mr-3" aria-label="Preview" />
                                                </Link>
                                                <Link to={`/product/update/${product.id}`}>
                                                    <Button icon={EditIcon} className="mr-3" layout="outline" aria-label="Edit" />
                                                </Link>

                                                <Button
                                                    icon={TrashIcon}
                                                    layout="outline"
                                                    onClick={() => openModal(product)}
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
                </>
            ) : (
                <>
                    {/* Car list */}
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8">
                        {data?.map((product) => (
                            <div className="" key={product.id}>
                                <Card className="">
                                    <img className="object-cover w-full" src={product.images[0].path} alt="product" />
                                    <CardBody>
                                        <div className="mb-3 flex items-center justify-between">
                                            <p className="font-semibold max-w-[50%] text-gray-600 dark:text-gray-300">{product.name}</p>
                                            <Badge type={product.quantity > 0 ? 'success' : 'danger'} className="whitespace-nowrap ">
                                                <p className="break-normal">{product.quantity > 0 ? `In Stock` : 'Out of Stock'}</p>
                                            </Badge>
                                        </div>

                                        <p className="mb-2 text-orange-500 font-bold text-lg">{product.price.toLocaleString('es-ES')} ₫</p>

                                        <p className="mb-8 text-gray-600 dark:text-gray-400">{product.description}</p>

                                        <div className="flex items-center justify-between">
                                            <div>
                                                <Link to={`/product/${product.id}`}>
                                                    <Button icon={EyeIcon} className="mr-3" aria-label="Preview" size="small" />
                                                </Link>
                                            </div>
                                            <div>
                                                <Link to={`/product/update/${product.id}`}>
                                                    <Button
                                                        icon={EditIcon}
                                                        className="mr-3"
                                                        layout="outline"
                                                        aria-label="Edit"
                                                        size="small"
                                                    />
                                                </Link>
                                                <Button
                                                    icon={TrashIcon}
                                                    layout="outline"
                                                    aria-label="Delete"
                                                    onClick={() => openModal(product.id)}
                                                    size="small"
                                                />
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        ))}
                    </div>

                    <Pagination
                        totalResults={totalResults}
                        resultsPerPage={resultsPerPage}
                        label="Table navigation"
                        onChange={onPageChange}
                    />
                </>
            )}
        </div>
    );
};

export default ProductsAll;
