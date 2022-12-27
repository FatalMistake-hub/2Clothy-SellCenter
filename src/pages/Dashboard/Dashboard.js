import React, { useState, useEffect } from 'react';

import InfoCard from '../../components/Cards/InfoCard';
import ChartCard from '../../components/Chart/ChartCard';
import { Doughnut, Line } from 'react-chartjs-2';
import ChartLegend from '../../components/Chart/ChartLegend';
import PageTitle from '../../components/Typography/PageTitle';
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from '../../icons';
import RoundIcon from '../../components/RoundIcon';
import { Card, CardBody, Label, Select } from '@windmill/react-ui';
import { useDispatch, useSelector } from 'react-redux';
import { doughnutOptions, lineOptions, doughnutLegends, lineLegends } from '../../utils/demo/chartsData';
import OrdersTable from '../../components/OrdersTable';
import * as apiAuthService from '../../services/authService';
import { authRemainingSelector } from '../../redux/selector';
import { createInstance } from '../../services/createInstance';
import AuthSlice from '../../redux/AuthSlice';
import ThemedSuspense from '../../components/ThemedSuspense';
function Dashboard() {
    const FormTitle = ({ children }) => {
        return <h2 className=" text-4xl  font-semibold text-gray-600 dark:text-gray-300">{children}</h2>;
    };
    const [response, setResponse] = useState([]);
    const [dataChart, setDataChart] = useState();
    let lineLegends, lineOptions;
    const [isLoading, setIsLoading] = useState();
    const dispatch = useDispatch();
    const user = useSelector(authRemainingSelector);
    const currentUser = user?.login.currentUser;
    const accessToken = currentUser?.accessToken;
    const [typeTime, setTypeTime] = useState('Yesterday');
    function getNormalized(array) {
        var min = Math.min(...array),
            max = Math.max(...array);

        return array?.map((v) => (v - min) / (max - min));
    }
    const handleStatus = (status) => {
        switch (status) {
            case 'Yesterday':
                return 'so với hôm qua';
            case '7Days':
                return 'so với 7 ngày trước';
            case '30Days':
                return 'so với 30 ngày trước';
            default:
                return '';
        }
    };
    useEffect(() => {
        const fetchApi = async () => {
            let axiosJWT = createInstance(currentUser, dispatch, AuthSlice.actions.loginSuccess);
            setIsLoading(false);

            const revenueOrder = await apiAuthService.getRevenueOrder(
                {
                    Type: typeTime,
                },
                accessToken,
                axiosJWT,
            );
            const revenueCancelOrder = await apiAuthService.getRevenueCancelOrder(
                {
                    Type: typeTime,
                },
                accessToken,
                axiosJWT,
            );
            const quantityOrder = await apiAuthService.getQuantityOrder(
                {
                    Type: typeTime,
                },
                accessToken,
                axiosJWT,
            );
            const quantityCancelOrder = await apiAuthService.getQuantityCancelOrder(
                {
                    Type: typeTime,
                },
                accessToken,
                axiosJWT,
            );
            const resultStatis = [revenueOrder, revenueCancelOrder, quantityOrder, quantityCancelOrder];
            if (revenueOrder && revenueCancelOrder && quantityOrder && quantityCancelOrder) {
                setIsLoading(true);
            }
            lineLegends = [
                { title: resultStatis[0]?.title, color: 'bg-red-600' },
                { title: resultStatis[1]?.title, color: 'bg-green-600' },
                { title: resultStatis[2]?.title, color: 'bg-blue-600' },
                { title: resultStatis[3]?.title, color: 'bg-purple-600' },
            ];

            lineOptions = {
                type: 'line',
                responsive: true,
                data: {
                    labels: resultStatis[0]?.labels,
                    datasets: [
                        {
                            label: resultStatis[0]?.title,
                            backgroundColor: '#e02424',
                            borderColor: '#e02424',
                            data: getNormalized(resultStatis[0]?.data),
                            fill: false,
                            tension: 0.5,
                        },
                        {
                            label: resultStatis[1]?.title,
                            fill: false,
                            backgroundColor: '#057a55',
                            borderColor: '#057a55',
                            data: getNormalized(resultStatis[1]?.data),
                            tension: 0.5,
                        },
                        {
                            label: resultStatis[2]?.title,
                            fill: false,
                            backgroundColor: '#1c64f2',
                            borderColor: '#1c64f2',
                            data: getNormalized(resultStatis[2]?.data),
                            tension: 0.5,
                        },
                        {
                            label: resultStatis[3]?.title,
                            fill: false,
                            backgroundColor: '#7e3af2',
                            borderColor: '#7e3af2',
                            data: getNormalized(resultStatis[3]?.data),
                            tension: 0.5,
                        },
                    ],
                },
                height:90,
                options: {
                    responsive: true,
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true,
                    },

                    scales: {
                        x: {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Month',
                            },
                        },
                        y: {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Value',
                            },
                        },
                    },
                },
                legend: {
                    display: true,
                },
            };
            setDataChart({ lineLegends, lineOptions, resultStatis: resultStatis });
        };
        fetchApi();
    }, [typeTime]);
    useEffect(() => {
        const fetchApi = async () => {
            let axiosJWT = createInstance(currentUser, dispatch, AuthSlice.actions.loginSuccess);
            const result = await apiAuthService.getShopOrder(accessToken, axiosJWT);
            setResponse(result);
            
        };
        fetchApi();
    }, []);
    return (
        <>
            {/* <CTA /> */}
            <div className="my-8">
                <Card>

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
                    <div className="flex max-h-96 justify-center mt-8">
                        {isLoading ? (
                            <>
                                {dataChart && (
                                    <div className="w-full">
                                        <ChartCard title="">
                                            <Line {...dataChart.lineOptions} />
                                            {/* <ChartLegend legends={dataChart.lineLegends} /> */}
                                        </ChartCard>
                                    </div>
                                )}
                                    <div className=" flex  flex-wrap justify-between ml-12">
                                {dataChart?.resultStatis?.map((data, i) => (
                                        <div className="w-1/2 items-center flex justify-center ">
                                            <div className="w-full">
                                                <div class="flex flex-1 text-sm font-medium leading-4 items-center">
                                                    <span className="mr-2">{data.title}</span>
                                                    <div className="text-slate-600 w-4 h-4">
                                                        <i className="shopee-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                <path d="M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M8,2 C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 Z M7.98750749,10.2375075 C8.40172105,10.2375075 8.73750749,10.5732939 8.73750749,10.9875075 C8.73750749,11.401721 8.40172105,11.7375075 7.98750749,11.7375075 C7.57329392,11.7375075 7.23750749,11.401721 7.23750749,10.9875075 C7.23750749,10.5732939 7.57329392,10.2375075 7.98750749,10.2375075 Z M8.11700238,4.60513307 C9.97011776,4.60513307 10.7745841,6.50497267 9.94298079,7.72186504 C9.76926425,7.97606597 9.56587088,8.14546785 9.27050506,8.31454843 L9.11486938,8.39945305 L8.95824852,8.47993747 C8.56296349,8.68261431 8.49390831,8.75808648 8.49390831,9.0209925 C8.49390831,9.29713488 8.27005069,9.5209925 7.99390831,9.5209925 C7.71776594,9.5209925 7.49390831,9.29713488 7.49390831,9.0209925 C7.49390831,8.34166619 7.7650409,7.99681515 8.35913594,7.6662627 L8.76655168,7.45066498 C8.9424056,7.3502536 9.04307851,7.26633638 9.11735517,7.1576467 C9.52116165,6.56675314 9.11397414,5.60513307 8.11700238,5.60513307 C7.41791504,5.60513307 6.82814953,6.01272878 6.75715965,6.55275918 L6.75,6.66244953 L6.74194433,6.75232516 C6.69960837,6.98557437 6.49545989,7.16244953 6.25,7.16244953 C5.97385763,7.16244953 5.75,6.9385919 5.75,6.66244953 C5.75,5.44256682 6.87194406,4.60513307 8.11700238,4.60513307 Z"></path>
                                                            </svg>
                                                        </i>
                                                    </div>
                                                </div>
                                                <div className="flex items-center mt-3">
                                                    {data.data.reduce(function (total, count) {
                                                        return total + count;
                                                    }, 0) > 10000 && <label className="font-normal translate-y-2.5 ">₫</label>}
                                                    <label className="font-medium mt-1 text-xl leading-6 ml-2 ">
                                                        {data.data.reduce(function (total, count) {
                                                            return total + count;
                                                        }, 0)}
                                                    </label>
                                                </div>
                                                <div className="flex mt-2">
                                                    <span className="text-xs leading-3 text-gray-500">{handleStatus(typeTime)}</span>
                                                </div>
                                            </div>
                                        </div>
                                ))}
                                    </div>
                            </>
                        ) : (
                            <ThemedSuspense />
                        )}
                    </div>
                </CardBody>
            </Card>

            <PageTitle>Đơn hàng</PageTitle>
            <OrdersTable resultsPerPage={10} />
        </>
    );
}

export default Dashboard;
