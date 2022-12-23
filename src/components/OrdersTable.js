import React, { useState, useEffect } from 'react';
import {
    TableBody,
    TableContainer,
    Table,
    TableHeader,
    TableCell,
    TableRow,
    TableFooter,
    Button,
    Avatar,
    Badge,
    Pagination,
} from '@windmill/react-ui';
import { EyeIcon } from '../icons';
import ordersData from '../utils/demo/ordersData';
import { Link, NavLink } from 'react-router-dom';
import ProductIcon from './ProductIcon';
import * as apiAuthService from '../services/authService';
import { useDispatch, useSelector } from 'react-redux';
import { authRemainingSelector } from '../redux/selector';
import { createInstance } from '../services/createInstance';
import moment from 'moment/moment';
import AuthSlice from '../redux/AuthSlice';
const OrdersTable = ({ resultsPerPage, filter, path }) => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [response, setResponse] = useState([]);
    // pagination setup

    const dispatch = useDispatch();
    const user = useSelector(authRemainingSelector);
    const currentUser = user?.login.currentUser;
    const accessToken = currentUser?.accessToken;
    useEffect(() => {
        const fetchApi = async () => {
            let axiosJWT = createInstance(currentUser, dispatch, AuthSlice.actions.loginSuccess);
            const result = await apiAuthService.getShopOrder(accessToken, axiosJWT);
            setResponse(result);
            
        };
        fetchApi();
    }, []);

    // pagination change control
    function onPageChange(p) {
        setPage(p);
    }

    // on page change, load new sliced data
    // here you would make another server request for new data
    useEffect(() => {
        if (filter === 'Tất cả' || !filter) {
            setData(response?.slice((page - 1) * resultsPerPage, page * resultsPerPage));
        }
        if (filter === 'Chờ xác nhận') {
            setData(response?.filter((order) => order.statusId === 1).slice((page - 1) * resultsPerPage, page * resultsPerPage));
        }
        if (filter === 'Đang giao') {
            setData(response?.filter((order) => order.statusId === 2).slice((page - 1) * resultsPerPage, page * resultsPerPage));
        }
        if (filter === 'Đã giao') {
            setData(response?.filter((order) => order.statusId === 3).slice((page - 1) * resultsPerPage, page * resultsPerPage));
        }
        if (filter === 'Đã huỷ') {
            setData(response?.filter((order) => order.statusId === 4).slice((page - 1) * resultsPerPage, page * resultsPerPage));
        }
    }, [page, resultsPerPage, filter,response]);

    const handleStatus = (status, id) => {
        switch (status) {
            case 1:
                return (
                    <>
                        <span
                            onClick={() => handleOrder(id, 2)}
                            className="my-2 font-medium cursor-pointer leading-3 text-blue-500 hover:text-blue-700"
                            aria-label="Preview"
                        >
                            Xác nhận
                        </span>
                        <span
                            onClick={() => handleOrder(id, 4)}
                            className="my-2 font-medium cursor-pointer leading-3 text-blue-500 hover:text-blue-700"
                            aria-label="Preview"
                        >
                            Huỷ
                        </span>
                    </>
                );
            // case 2:
            //     return (
            //         <span
            //             onClick={() => handleOrder(id, 4)}
            //             className="my-2 font-medium cursor-pointer leading-3 text-blue-500 hover:text-blue-700"
            //             aria-label="Preview"
            //         >
            //             Huỷ
            //         </span>
            //     );
            default:
                return '';
        }
    };
    const handleOrder = (purchaseId, status) => {
        const fetchApi = async () => {
            let axiosJWT = createInstance(currentUser, dispatch, AuthSlice.actions.loginSuccess);
            let result;
            if (status == 2) {
                result = await apiAuthService.updateOrder(
                    purchaseId,
                    {
                        StatusId: status,
                    },
                    accessToken,
                    axiosJWT,
                );
                setResponse(result);
                

                // setFilterPurchases(result);
            } else {
                result = await apiAuthService.cancelOrder(purchaseId, accessToken, axiosJWT);
                setResponse(result);
                

                // setFilterPurchases(result);
            }
        };
        fetchApi();
    };
    return (
        <div>
            {/* Table */}
            <TableContainer className="mb-8">
                <Table>
                    <TableHeader>
                        <tr>
                            <TableCell>Sản phẩm</TableCell>
                            <TableCell>Số lượng</TableCell>
                            <TableCell>Tổng Đơn hàng</TableCell>
                            <TableCell>Trạng thái </TableCell>
                            <TableCell>Ngày đặt đơn</TableCell>
                            <TableCell>Thao tác</TableCell>
                        </tr>
                    </TableHeader>
                    <TableBody>
                        {data?.map((order, i) => (
                            <>
                                <TableRow key={i} className="mb-4">
                                    <TableCell>
                                        {/* <TableHeader> */}
                                        <div className="flex flex-end p-4"> Mã đơn hàng: {order.billId} </div>
                                        {/* </TableHeader> */}
                                        <div className="flex items-center text-sm">
                                            <ProductIcon
                                                className="hidden mr-3 md:block"
                                                src={order.orderDetails[0]?.itemImg}
                                                alt="User image"
                                            />
                                            <div>
                                                <p className="font-semibold">{order.orderDetails[0]?.itemName}</p>
                                            </div>
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        <span className="text-sm">X {order.orderDetails[0]?.quantity}</span>
                                    </TableCell>
                                    <TableCell>
                                        <span className="text-sm">
                                            {order.orderDetails
                                                .reduce(function (total, order) {
                                                    return total + order.price;
                                                }, 0)
                                                .toLocaleString('es-ES')}{' '}
                                            ₫
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            type={
                                                order.statusId === 4
                                                    ? 'danger'
                                                    : order.statusId === 3
                                                    ? 'success'
                                                    : order.statusId === 1
                                                    ? 'warning'
                                                :"primary"
                                            }
                                        >
                                            {order.statusName}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <span className="text-sm">{moment(data.dateCreated).format('L')}</span>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col  justify-between">
                                            <Link to={`/orders/${order.id}`}>
                                                <span
                                                    className="my-2 font-medium leading-3 text-blue-500 hover:text-blue-700"
                                                    aria-label="Preview"
                                                >
                                                    Xem chi tiết
                                                </span>
                                            </Link>
                                            {handleStatus(order.statusId, order.id)}
                                        </div>
                                    </TableCell>
                                </TableRow>
                                {order.orderDetails.splice(1,order.orderDetails.length).map((orderDetails, i) => (
                                    <TableRow key={i}>
                                        <TableCell>
                                            <div className="flex items-center text-sm">
                                                <ProductIcon className="hidden mr-3 md:block" src={orderDetails.itemImg} alt="User image" />
                                                <div>
                                                    <p className="font-semibold">{orderDetails.itemName}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>X {orderDetails.quantity}</TableCell>
                                        <TableCell>
                                            {/* <span className="text-sm">{orderDetails.price.toLocaleString('es-ES')} ₫</span> */}
                                        </TableCell>
                                        <TableCell>
                                            {/* <Badge
                                                type={
                                                    orderDetails.status === 'Un-paid'
                                                        ? 'danger'
                                                        : orderDetails.status === 'Paid'
                                                        ? 'success'
                                                        : orderDetails.status === 'Completed'
                                                        ? 'warning'
                                                        : 'neutral'
                                                }
                                            >
                                                {orderDetails.status}
                                            </Badge> */}
                                        </TableCell>
                                        <TableCell>
                                            {/* <span className="text-sm">{moment(data.dateCreated).format('MMMM Do YYYY')}</span> */}
                                        </TableCell>
                                        <TableCell>
                                            {/* <div className="flex flex-col  justify-between">
                                                <Link to={`/ordersDetail`}>
                                                    <span
                                                        className="my-2 font-medium leading-3 text-blue-500 hover:text-blue-700"
                                                        aria-label="Preview"
                                                    >
                                                        Xem chi tiết
                                                    </span>
                                                </Link>
                                                {handleStatus(data.statusId)}
                                                <span icon={EyeIcon} className="my-2" aria-label="Preview">Đang giao</span>
                                            </div> */}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <Pagination
                            totalResults={response?.length}
                            resultsPerPage={resultsPerPage}
                            label="Table navigation"
                            onChange={onPageChange}
                        />
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>
    );
};

export default OrdersTable;
