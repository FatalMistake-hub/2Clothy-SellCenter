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
    const FormTitle = ({ children }) => {
        return <h2 className=" text-4xl  font-semibold text-gray-600 dark:text-gray-300">{children}</h2>;
    };
    return (
        <>
            {/* <CTA /> */}
            <div className="my-8">
                <Card>
                    <CardBody className="px-16 py-8">
                        <div className=" flex flex-col">
                            <h2 className="mb-2 text-2xl font-semibold text-gray-700 dark:text-gray-200">Danh sách cần làm</h2>

                            <p className="text-sm text-gray-600 dark:text-gray-400">Những việc bạn sẽ phải làm</p>

                            <Label className="mx-3"></Label>
                        </div>
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
                    </CardBody>
                </Card>
            </div>
            {/* <!-- Cards --> */}
            <Card>
                <CardBody className="px-16 py-8">
                    <div className="flex items-center">
                        <FormTitle className=" text-sm text-gray-600 dark:text-gray-400">Phân Tích Bán Hàng</FormTitle>
                    </div>
                    <div className="flex items-center">
                        <h3 className=" text-sm text-gray-600 dark:text-gray-400">
                            Tổng quan dữ liệu của shop đối với đơn hàng đã xác nhận
                        </h3>
                    </div>
                    <div className="grid gap-4 mb-8 md:grid-cols-2  max-h-96">
                        <ChartCard title="User Analytics">
                            <Line {...lineOptions} />
                            <ChartLegend legends={lineLegends} />
                        </ChartCard>
                        <div className=" flex flex-wrap justify-between ">
                            <div className="w-1/2 items-center flex justify-center ">
                                    <div className=''>
                                        <div class="flex flex-1 text-sm font-medium leading-4 items-center">
                                            <span class="mr-2">Doanh số</span>
                                            <div class="text-slate-600 w-4 h-4">
                                                <i class="shopee-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                        <path d="M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M8,2 C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 Z M7.98750749,10.2375075 C8.40172105,10.2375075 8.73750749,10.5732939 8.73750749,10.9875075 C8.73750749,11.401721 8.40172105,11.7375075 7.98750749,11.7375075 C7.57329392,11.7375075 7.23750749,11.401721 7.23750749,10.9875075 C7.23750749,10.5732939 7.57329392,10.2375075 7.98750749,10.2375075 Z M8.11700238,4.60513307 C9.97011776,4.60513307 10.7745841,6.50497267 9.94298079,7.72186504 C9.76926425,7.97606597 9.56587088,8.14546785 9.27050506,8.31454843 L9.11486938,8.39945305 L8.95824852,8.47993747 C8.56296349,8.68261431 8.49390831,8.75808648 8.49390831,9.0209925 C8.49390831,9.29713488 8.27005069,9.5209925 7.99390831,9.5209925 C7.71776594,9.5209925 7.49390831,9.29713488 7.49390831,9.0209925 C7.49390831,8.34166619 7.7650409,7.99681515 8.35913594,7.6662627 L8.76655168,7.45066498 C8.9424056,7.3502536 9.04307851,7.26633638 9.11735517,7.1576467 C9.52116165,6.56675314 9.11397414,5.60513307 8.11700238,5.60513307 C7.41791504,5.60513307 6.82814953,6.01272878 6.75715965,6.55275918 L6.75,6.66244953 L6.74194433,6.75232516 C6.69960837,6.98557437 6.49545989,7.16244953 6.25,7.16244953 C5.97385763,7.16244953 5.75,6.9385919 5.75,6.66244953 C5.75,5.44256682 6.87194406,4.60513307 8.11700238,4.60513307 Z"></path>
                                                    </svg>
                                                </i>
                                            </div>
                                        </div>
                                        <div class="flex items-center mt-3">
                                            <label class="font-medium mt-1 text-xl leading-6 ml-2 ">0</label>
                                        </div>
                                        <div class="flex mt-2">
                                            <span class="text-xs leading-3 text-gray-500">so với hôm qua</span>
                                        </div>
                                    </div>
                                
                            </div>
                            
                            
                        </div>
                    </div>
                </CardBody>
            </Card>

            <PageTitle>Đơn hàng</PageTitle>
            <OrdersTable resultsPerPage={10} />
        </>
    );
}

export default Dashboard;
