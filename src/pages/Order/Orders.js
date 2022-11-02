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
                    <div className="flex items-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Lọc đơn hàng</p>

                        <Label className="mx-3">
                            <Select className="py-3" onChange={(e) => handleFilter(e.target.value)}>
                                <option>Tất cả</option>
                                <option>Chưa thanh toán</option>
                                <option>Đã thanh toán</option>
                                <option>Hoàn thành</option>
                            </Select>
                        </Label>

                        <Label className="">
                            {/* <!-- focus-within sets the color for the icon when input is focused --> */}
                            <div className="relative text-gray-500 focus-within:text-orange-600 dark:focus-within:text-orange-400">
                                <input
                                    className="py-3 pr-5 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-orange-400 focus:outline-none focus:shadow-outline-orange dark:focus:shadow-outline-gray form-input"
                                    value={resultsPerPage}
                                    onChange={(e) => setResultPerPage(e.target.value)}
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
                                    {/* <SearchIcon className="w-5 h-5" aria-hidden="true" /> */}
                                    Results on Table
                                </div>
                            </div>
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
