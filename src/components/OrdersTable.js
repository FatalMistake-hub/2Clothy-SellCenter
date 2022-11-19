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
import response from '../utils/demo/ordersData';
import { EyeIcon } from '../icons';
import ordersData from '../utils/demo/ordersData';
import { Link, NavLink } from 'react-router-dom';
import ProductIcon from './ProductIcon';

const OrdersTable = ({ resultsPerPage, filter, path }) => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    // pagination setup
    const totalResults = response.length;

    // pagination change control
    function onPageChange(p) {
        setPage(p);
    }

    // on page change, load new sliced data
    // here you would make another server request for new data
    useEffect(() => {
        // If Filters Applied
        if (filter === 'Đã thanh toán') {
            setData(response.filter((order) => order.status === 'Paid').slice((page - 1) * resultsPerPage, page * resultsPerPage));
        }
        if (filter === 'Chưa thanh toán') {
            setData(response.filter((order) => order.status === 'Un-paid').slice((page - 1) * resultsPerPage, page * resultsPerPage));
        }
        if (filter === 'Hoàn thành') {
            setData(response.filter((order) => order.status === 'Completed').slice((page - 1) * resultsPerPage, page * resultsPerPage));
        }

        // if filters dosent applied
        if (filter === 'Tất cả' || !filter) {
            setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
        }
    }, [page, resultsPerPage, filter]);

    return (
        <div>
            {/* Table */}
            <TableContainer className="mb-8">
                <Table>
                    <TableHeader>
                        <tr>
                            <TableCell>Sản phẩm</TableCell>
                            <TableCell>Mã đơn hàng</TableCell>
                            <TableCell>Tổng Đơn hàng</TableCell>
                            <TableCell>Trạng thái </TableCell>
                            <TableCell>Hạn xác nhận</TableCell>
                            <TableCell>Thao tác</TableCell>
                        </tr>
                    </TableHeader>
                    <TableBody>
                        {data.map((order, i) => (
                            <TableRow key={i}>
                                <TableCell>
                                    <div className="flex items-center text-sm">
                                        <ProductIcon className="hidden mr-3 md:block" src={order.avatar} alt="User image" />
                                        <div>
                                            <p className="font-semibold">{order.name}</p>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <span className="text-sm">#000{i}</span>
                                </TableCell>
                                <TableCell>
                                    <span className="text-sm">{order.amount} ₫</span>
                                </TableCell>
                                <TableCell>
                                    <Badge
                                        type={
                                            order.status === 'Un-paid'
                                                ? 'danger'
                                                : order.status === 'Paid'
                                                ? 'success'
                                                : order.status === 'Completed'
                                                ? 'warning'
                                                : 'neutral'
                                        }
                                    >
                                        {order.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <span className="text-sm">{new Date(order.date).toLocaleDateString()}</span>
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-col  justify-between">
                                        <Link to={`/ordersDetail`} ><span  className="my-2 font-medium leading-3 text-blue-500 hover:text-blue-700" aria-label="Preview">Xem chi tiết</span></Link>
                                        <span  className="my-2 font-medium leading-3 text-blue-500 hover:text-blue-700" aria-label="Preview">Xác nhận</span>

                                        <span  className="my-2 font-medium leading-3 text-blue-500 hover:text-blue-700" aria-label="Preview">Huỷ</span>

                                        {/* <span icon={EyeIcon} className="my-2" aria-label="Preview">Đang giao</span> */}
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
        </div>
    );
};

export default OrdersTable;
