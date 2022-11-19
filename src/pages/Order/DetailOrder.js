import React, { useState } from 'react';
import PageTitle from '../../components/Typography/PageTitle';
import { NavLink } from 'react-router-dom';
import { HomeIcon, PeopleIcon } from '../../icons';
import {
    Card,
    CardBody,
    Label,
    Select,
    TableBody,
    TableContainer,
    Table,
    TableHeader,
    TableCell,
    TableRow,
    TableFooter,Badge
} from '@windmill/react-ui';
import OrdersTable from '../../components/OrdersTable';
import RoundIcon from '../../components/RoundIcon';
import InfoCard from '../../components/Cards/InfoCard';

function Icon({ icon, ...props }) {
    const Icon = icon;
    return <Icon {...props} />;
}

const Orders = () => {
    // pagination setup
    const [resultsPerPage, setResultPerPage] = useState(10);
    const [filter, setFilter] = useState('all');

    const handleFilter = (filter_name) => {
        // console.log(filter_name);
        if (filter_name == 'Tất cả') {
            setFilter('all');
        }
        if (filter_name == 'Chưa thanh toán') {
            setFilter('un-paid');
        }
        if (filter_name == 'Đã thanh toán') {
            setFilter('paid');
        }
        if (filter_name == 'Hoàn thành') {
            setFilter('completed');
        }
    };

    return (
        <div>
            <PageTitle>Chi tiết đơn hàng</PageTitle>

            {/* Breadcum */}
            <div className="flex text-gray-800 dark:text-gray-300">
                <div className="flex items-center text-orange-600">
                    <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
                    <NavLink exact to="/dashboard" className="mx-2">
                        Kênh người bán
                    </NavLink>
                </div>
                {'>'}
                <NavLink exact to="/orders" className="mx-2  text-orange-600">
                    Đơn hàng
                </NavLink>

                {'>'}
                <p className="mx-2">Chi tiết đơn hàng</p>
            </div>

            {/* Sort */}
            <Card className="mt-5 mb-5 shadow-md">
                <div className="bg-orange-300 p-4">
                    <div className="px-3 flex flex-col">
                        <span className="text-base font-bold leading-7 flex items-center ">
                            <img className="w-6 h-6 mr-1" src="https://img.icons8.com/windows/32/1A1A1A/calendar-week.png" />
                            Dec 12 2021
                        </span>
                        <span className="text-sm font-normal leading-6 mx-4">Order ID: 1245780075gh54</span>
                    </div>
                </div>
                <CardBody>
                    {/* <div className="flex items-center"> */}
                    {/* <Label className="mx-3"></Label> */}
                    <div className="flex  w-full mb-12 mt-3 px-3">
                        <div className="w-2/6 flex">
                            <RoundIcon
                                icon={PeopleIcon}
                                iconColorClass="text-orange-500 dark:text-orange-100"
                                bgColorClass="bg-orange-100 dark:bg-orange-500"
                                className="mr-4 w-12 h-12 flex justify-center"
                            />
                            <div className=" flex flex-col">
                                <h6 className="text-base font-medium leading-5">Người mua</h6>
                                <p className="flex flex-col">
                                    <span className="text-base font-normal leading-6">datko24</span>
                                    <span className="text-base font-normal leading-6">datko24@example.com</span>
                                </p>
                            </div>
                        </div>
                        <div className="w-2/6 flex">
                            <RoundIcon
                                icon={PeopleIcon}
                                iconColorClass="text-green-500 dark:text-green-100"
                                bgColorClass="bg-green-100 dark:bg-green-500"
                                className="mr-4 w-12 h-12 flex justify-center"
                            />
                            <div className=" flex flex-col">
                                <h6 className="text-base font-medium leading-5">Người mua</h6>
                                <p className="flex flex-col">
                                    <span className="text-base font-normal leading-6">datko24</span>
                                    <span className="text-base font-normal leading-6">datko24@example.com</span>
                                </p>
                            </div>
                        </div>
                        <div className="w-2/6 flex">
                            <RoundIcon
                                icon={PeopleIcon}
                                iconColorClass="text-teal-500 dark:text-teal-100"
                                bgColorClass="bg-teal-100 dark:bg-teal-500"
                                className="mr-4 w-12 h-12 flex justify-center"
                            />
                            <div className=" flex flex-col">
                                <h6 className="text-base font-medium leading-5">Người mua</h6>
                                <p className="flex flex-col">
                                    <span className="text-base font-normal leading-6">datko24</span>
                                    <span className="text-base font-normal leading-6">datko24@example.com</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </CardBody>
                <div className="mx-8">
                    <TableContainer className="mb-8">
                        <Table>
                            <TableHeader>
                                <tr>
                                    <TableCell>Sản phẩm</TableCell>
                                    <TableCell>Đơn giá</TableCell>
                                    <TableCell>Số lượng</TableCell>
                                    <TableCell>Thành tiền</TableCell>
                                </tr>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell>
                                        <div className="flex flex-col items-start ">
                                            <span className="text-base font-normal leading-6">Tổng tiền sản phẩm:</span>
                                            <span className="text-base font-normal leading-6">Phí vận chuyển:</span>
                                            <span className="text-base font-normal leading-6">Tổng tiền thanh toán:</span>
                                            <span className="text-base font-normal leading-6 mt-4">Trạng thái đơn hàng:</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col w-48 items-end">
                                            <span className="text-base font-normal leading-6">₫112.000</span>
                                            <span className="text-base font-normal leading-6">₫112.000</span>
                                            <span className="text-base font-normal leading-6">₫112.000</span>
                                            <Badge
                                            className="mt-4 w-24 h-14 flex items-center justify-center p-2"
                                            // type={
                                            //     order.status === 'Un-paid'
                                            //         ? 'danger'
                                            //         : order.status === 'Paid'
                                            //         ? 'success'
                                            //         : order.status === 'Completed'
                                            //         ? 'warning'
                                            //         : 'neutral'
                                            // }
                                            >
                                                Thành công
                                            </Badge>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Card>
        </div>
    );
};

export default Orders;
