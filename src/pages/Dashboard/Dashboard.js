import React from 'react';

import InfoCard from '../../components/Cards/InfoCard';
import ChartCard from '../../components/Chart/ChartCard';
import { Doughnut, Line } from 'react-chartjs-2';
import ChartLegend from '../../components/Chart/ChartLegend';
import PageTitle from '../../components/Typography/PageTitle';
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from '../../icons';
import RoundIcon from '../../components/RoundIcon';
import { Card, CardBody, Label, Select } from '@windmill/react-ui';

import { doughnutOptions, lineOptions, doughnutLegends, lineLegends } from '../../utils/demo/chartsData';
import OrdersTable from '../../components/OrdersTable';

function Dashboard() {
    return (
        <>
            {/* <CTA /> */}
            <div className="my-8">
                <Card>
                    <CardBody className="p-8">
                        <div className=" flex flex-col">
                            <h2 className="mb-2 text-2xl font-semibold text-gray-700 dark:text-gray-200">Danh sách cần làm</h2>

                            <p className="text-sm text-gray-600 dark:text-gray-400">Những việc bạn sẽ phải làm</p>

                            <Label className="mx-3"></Label>
                        </div>
                        <div className="my-6 grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                            <InfoCard title="Tổng số khách hàng" value="765">
                                <RoundIcon
                                    icon={PeopleIcon}
                                    iconColorClass="text-orange-500 dark:text-orange-100"
                                    bgColorClass="bg-orange-100 dark:bg-orange-500"
                                    className="mr-4"
                                />
                            </InfoCard>
                            <InfoCard title="Tổng số khách hàng" value="765">
                                <RoundIcon
                                    icon={PeopleIcon}
                                    iconColorClass="text-orange-500 dark:text-orange-100"
                                    bgColorClass="bg-orange-100 dark:bg-orange-500"
                                    className="mr-4"
                                />
                            </InfoCard>
                            <InfoCard title="Tổng số khách hàng" value="765">
                                <RoundIcon
                                    icon={PeopleIcon}
                                    iconColorClass="text-orange-500 dark:text-orange-100"
                                    bgColorClass="bg-orange-100 dark:bg-orange-500"
                                    className="mr-4"
                                />
                            </InfoCard>
                            <InfoCard title="Tổng số khách hàng" value="765">
                                <RoundIcon
                                    icon={PeopleIcon}
                                    iconColorClass="text-orange-500 dark:text-orange-100"
                                    bgColorClass="bg-orange-100 dark:bg-orange-500"
                                    className="mr-4"
                                />
                            </InfoCard>
                        </div>
                    </CardBody>
                </Card>
            </div>
            {/* <!-- Cards --> */}
            <Card>
                <CardBody className="p-8">
                    <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                        <InfoCard title="Tổng số khách hàng" value="765">
                            <RoundIcon
                                icon={PeopleIcon}
                                iconColorClass="text-orange-500 dark:text-orange-100"
                                bgColorClass="bg-orange-100 dark:bg-orange-500"
                                className="mr-4"
                            />
                        </InfoCard>

                        <InfoCard title="Tổng doanh thu" value="$ 6,760.89">
                            <RoundIcon
                                icon={MoneyIcon}
                                iconColorClass="text-green-500 dark:text-green-100"
                                bgColorClass="bg-green-100 dark:bg-green-500"
                                className="mr-4"
                            />
                        </InfoCard>

                        <InfoCard title="Đơn hàng mới" value="150">
                            <RoundIcon
                                icon={CartIcon}
                                iconColorClass="text-blue-500 dark:text-blue-100"
                                bgColorClass="bg-blue-100 dark:bg-blue-500"
                                className="mr-4"
                            />
                        </InfoCard>

                        <InfoCard title="Unread Chats" value="15">
                            <RoundIcon
                                icon={ChatIcon}
                                iconColorClass="text-teal-500 dark:text-teal-100"
                                bgColorClass="bg-teal-100 dark:bg-teal-500"
                                className="mr-4"
                            />
                        </InfoCard>
                    </div>

                    <div className="grid gap-6 mb-8 md:grid-cols-2  ">
                        <ChartCard title="User Analytics">
                            <Line {...lineOptions} />
                            <ChartLegend legends={lineLegends} />
                        </ChartCard>

                        <ChartCard title="Revenue">
                            <Doughnut {...doughnutOptions} />
                            <ChartLegend legends={doughnutLegends} />
                        </ChartCard>
                    </div>
                </CardBody>
            </Card>

            {/* <PageTitle>Đơn hàng</PageTitle> */}
            {/* <OrdersTable resultsPerPage={10} /> */}
        </>
    );
}

export default Dashboard;
