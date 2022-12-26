import React, { useState } from 'react';
import PageTitle from '../../components/Typography/PageTitle';
import { NavLink } from 'react-router-dom';
import { HomeIcon } from '../../icons';
import { Card, CardBody, Label, Select } from '@windmill/react-ui';
import OrdersTable from '../../components/OrdersTable';

function Icon({ icon, ...props }) {
    const Icon = icon;
    return <Icon {...props} />;
}

const Orders = () => {
    // pagination setup
    const [resultsPerPage, setResultPerPage] = useState(5);
    const [filter, setFilter] = useState('Tất cả');

    const handleFilter = (filter_name) => {
        // console.log(filter_name);
        if (filter_name === 'Tất cả') {
            setFilter('Tất cả');
        }
        if (filter_name === 'Chờ xác nhận') {
            setFilter('Chờ xác nhận');
        }
        if (filter_name === 'Đang giao') {
            setFilter('Đang giao');
        }
        if (filter_name === 'Đã giao') {
            setFilter('Đã giao');
        }
        if (filter_name === 'Đã huỷ') {
            setFilter('Đã huỷ');
        }
    };

    return (
        <div>
            <PageTitle>Đơn hàng</PageTitle>

            {/* Breadcum */}
            <div className="flex text-gray-800 dark:text-gray-300">
                <div className="flex items-center text-orange-600">
                    <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
                    <NavLink exact to="/dashboard" className="mx-2">
                        Kênh người bán
                    </NavLink>
                </div>
                {'>'}
                <p className="mx-2">Đơn hàng</p>
            </div>

            {/* Sort */}
            <Card className="mt-5 mb-5 shadow-md">
                <CardBody>
                    <div className="flex items-center ">
                        <Label className="mx-3 flex items-center ">
                            <p className="text-sm w-full  text-gray-600 dark:text-gray-400">Lọc đơn hàng</p>
                            <Select className="py-3" onChange={(e) => handleFilter(e.target.value)}>
                                <option>Tất cả</option>
                                <option>Chờ xác nhận</option>
                                <option>Đang giao</option>
                                <option>Đã giao</option>
                                <option>Đã huỷ</option>
                            </Select>
                        </Label>

                       
                    </div>
                </CardBody>
            </Card>

            {/* Table */}
            <OrdersTable resultsPerPage={resultsPerPage} filter={filter} path={'orders'} />
        </div>
    );
};

export default Orders;
