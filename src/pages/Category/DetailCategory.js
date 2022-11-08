import React, { useState, useEffect,useLayoutEffect } from 'react';
import PageTitle from '../../components/Typography/PageTitle';
import { Link, NavLink } from 'react-router-dom';
import { EditIcon, EyeIcon, GridViewIcon, HomeIcon, ListViewIcon, TrashIcon, AddIcon } from '../../icons';
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
    Input,
} from '@windmill/react-ui';
import response from '../../utils/demo/productData';
import Icon from '../../components/Icon';
import { genRating } from '../../utils/genarateRating';
import ProductIcon from '../../components/ProductIcon';
import * as apiService from '../../services/apiService';
import { useParams } from 'react-router-dom';

const FormTitle = ({ children }) => {
    return <h2 className=" text-3xl  font-semibold text-gray-600 dark:text-gray-300">{children}</h2>;
};
const ProductsAll = () => {
    const { id } = useParams();

    const fetchApi = async (id) => {
        const dataItem = await apiService.productByCategory(id);
        const dataAllItem = await apiService.allShopProducts(id);
        console.log(dataItem)
        setResponseTable(dataItem);
        setResponse(dataAllItem[0].items)
        // setAllItem(dataAllItem[0]);
    };
    useEffect(() => {
        fetchApi(id);
    }, [id]);


// For modal pagination
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [response, setResponse] = useState([]);

    const resultsPerPage=5;
    const totalResults = response?.length;

    function onPageChange(p) {
        setPage(p);
    }
    useEffect(() => {
        setData(response?.slice((page - 1) * resultsPerPage, page * resultsPerPage));
    }, [page, resultsPerPage,response]);
// For main Table pagination
    const [pageTable, setPageTable] = useState(1);
    const [dataTable, setDataTable] = useState([]);
    const [responseTable, setResponseTable] = useState([]);

    const resultsPerPageTable=10;
    const totalResultsTable = responseTable.items?.length;

    function onPageChangeTable(p) {
        setPageTable(p);
    }
    useEffect(() => {
        setDataTable(responseTable.items?.slice((pageTable - 1) * resultsPerPageTable, pageTable * resultsPerPageTable));
    }, [pageTable, resultsPerPageTable,responseTable.items]);

    // Delete action model
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [isModalAddOpen, setIsModalAddOpen] = useState(false);
    const [selectedDeleteProduct, setSelectedDeleteProduct] = useState(null);
    const openModal = (productId, modal) => {
        if (modal == 'del') {
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

    // Handle list view
    
    console.log(response)
    return (
        <div>
            {/* Delete category model */}
            <Modal isOpen={isModalDeleteOpen} onClose={() => closeModal('del')} style={{ width: '400px' }}>
                <ModalHeader className="flex items-center">
                    <Icon icon={TrashIcon} className="w-6 h-6 mr-3" />
                    Xoá danh mục
                </ModalHeader>
                <ModalBody>Bạn có muốn xoá danh mục {selectedDeleteProduct && `"${selectedDeleteProduct.name}"`} ?</ModalBody>
                <ModalFooter>
                    <div className="hidden sm:block">
                        <Button layout="outline" onClick={() => closeModal('del')}>
                            Huỷ
                        </Button>
                    </div>
                    <div className="hidden sm:block">
                        <Button>Xoá</Button>
                    </div>
                </ModalFooter>
            </Modal>
            {/* Add category model */}
            <Modal isOpen={isModalAddOpen} onClose={() => closeModal('add')} style={{ width: '1000px' }}>
                <ModalHeader className="flex items-center">Chọn sản phẩm</ModalHeader>
                <ModalBody>
                    <TableContainer className="mb-8">
                        <Table>
                            <TableHeader>
                                <tr>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Stock</TableCell>
                                    <TableCell>Size</TableCell>
                                    <TableCell>QTY</TableCell>
                                    <TableCell>Price</TableCell>
                                   
                                </tr>
                            </TableHeader>
                            <TableBody>
                                {data?.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <ProductIcon className="hidden mr-4 md:block" src={product.images[0].path} alt="Product image" />
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

                                        <TableCell className="text-sm">{product.size}</TableCell>
                                        <TableCell className="text-sm">{product.quantity}</TableCell>
                                        <TableCell className="text-sm">{product.price.toLocaleString('es-ES')} ₫</TableCell>
                                        
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
                </ModalBody>
                <ModalFooter>
                    <div className="hidden sm:block">
                        <Button layout="outline" onClick={() => closeModal('add')}>
                            Huỷ
                        </Button>
                    </div>
                    <div className="hidden sm:block">
                        <Button>Xác nhận</Button>
                    </div>
                </ModalFooter>
            </Modal>
            {/* Breadcum */}
            <div className="flex mt-8 text-gray-800 dark:text-gray-300">
                <div className="flex items-center text-orange-600">
                    <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
                    <NavLink exact to="/dashboard" className="mx-2">
                        Kênh người bán
                    </NavLink>
                </div>
                {'>'}
                <div className="flex items-center text-orange-600">
                    <NavLink exact to="/all-categories" className="mx-2">
                        Quản lý danh mục
                    </NavLink>
                </div>

                {'>'}
                <p className="mx-2">Chi tiết danh mục</p>
            </div>

            {/* Sort */}
            <Card className="mt-8 mb-5 shadow-md ">
                <CardBody className="flex items-center">
                    <div className="p-2">
                        <ProductIcon
                            src="	https://cf.shopee.vn/file/sg-11134201-22110-em4g3m5y5cjv5a"
                            alt="Product image"
                            size="w-32 h-32"
                        />
                    </div>
                    <div className="">
                        <FormTitle>{dataTable?.name}</FormTitle>
                        <div className="flex items-center mt-2">
                            <span className="font-medium mr-1 text-gray-400">Tạo bởi:</span>
                            <span className="font-medium mr-4">Người bán | Tự chọn</span>
                            <span className="font-medium mr-1 text-gray-400">Sản phẩm:</span>
                            <span className="font-medium ">{dataTable?.items?.length}</span>
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Card className="px-8 shadow-md mb-8">
                <CardBody>
                    <div className="flex items-center justify-between py-4 mb-5 ">
                        <div className="flex items-center w-full justify-between ">
                            <div className="flex items-center">
                                <FormTitle>Danh sách sản phẩm</FormTitle>
                            </div>
                            <div className=" flex justify-end">
                                <Button size="large" iconLeft={AddIcon} onClick={() => openModal(null, 'add')}>
                                    Thêm sản phẩm
                                </Button>
                            </div>
                        </div>
                    </div>
                    <TableContainer className="mb-8">
                        <Table>
                            <TableHeader>
                                <tr>
                                    <TableCell>Tên sản phẩm</TableCell>
                                    <TableCell>Giá</TableCell>
                                    <TableCell>Số lượng</TableCell>
                                    {/* <TableCell>Price</TableCell> */}
                                    <TableCell>Thao tác</TableCell>
                                </tr>
                            </TableHeader>
                            <TableBody>
                                {dataTable?.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <ProductIcon
                                                    className="hidden mr-4 md:block"
                                                    src={product.images[0].path}
                                                    alt="Product image"
                                                />
                                                <div>
                                                    <p className="font-semibold">{product.name}</p>
                                                </div>
                                            </div>
                                        </TableCell>

                                        <TableCell className="text-sm">{product.price}</TableCell>
                                        <TableCell className="text-sm">{product.quantity}</TableCell>
                                        <TableCell>
                                            <div className="flex">
                                                <Button
                                                    icon={TrashIcon}
                                                    layout="outline"
                                                    onClick={() => openModal(product.id, 'del')}
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
                                totalResults={totalResultsTable}
                                resultsPerPage={resultsPerPageTable}
                                label="Table navigation"
                                onChange={onPageChangeTable}
                            />
                        </TableFooter>
                    </TableContainer>
                </CardBody>
            </Card>
        </div>
    );
};

export default ProductsAll;
