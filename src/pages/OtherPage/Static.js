import React from 'react';
import PageTitle from '../../components/Typography/PageTitle';
import ChartCard from '../../components/Chart/ChartCard';
import { Doughnut, Line, Bar } from 'react-chartjs-2';
import ChartLegend from '../../components/Chart/ChartLegend';
import { Link, NavLink } from 'react-router-dom';

import { lineOptions, lineLegends, realTimeUsersBarLegends, realTimeUsersBarOptions } from '../../utils/demo/chartsData';
import UsersTable from '../../components/UsersTable';
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

const Customers = () => {
    return (
        <div>
            <PageTitle>Phân Tích Bán Hàng</PageTitle>
            <div className="flex text-gray-800 dark:text-gray-300">
                <div className="flex items-center text-orange-600">
                    <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
                    <NavLink exact to="/dashboard" className="mx-2">
                        Kênh người bán
                    </NavLink>
                </div>
                {'>'}
                <p className="mx-2 text-[#ffa400]">Phân Tích Bán Hàng</p>
            </div>

            <Card className="mt-5 mb-5 hover:shadow-md">
                <CardBody>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <p className="text-sm text-gray-600 dark:text-gray-400">Khung thòi gian</p>

                            <Label className="mx-3">
                                <Select className="py-3">
                                    <option>Sort by</option>
                                    <option>Asc</option>
                                    <option>Desc</option>
                                </Select>
                            </Label>

                            <Label className="mx-3">
                                <Select className="py-3">
                                    <option>Filter by Category</option>
                                    <option>Electronics</option>
                                    <option>Cloths</option>
                                    <option>Mobile Accerssories</option>
                                </Select>
                            </Label>

                            <Label className="mr-8">
                                {/* <!-- focus-within sets the color for the icon when input is focused --> */}
                                <div className="relative text-gray-500 focus-within:text-orange-600 dark:focus-within:text-orange-400">
                                    <input
                                        className="py-3 pr-5 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-orange-400 focus:outline-none focus:shadow-outline-orange dark:focus:shadow-outline-gray form-input"
                                        placeholder="Number of Results"
                                        // value={resultsPerPage}
                                        // onChange={(e) => setResultsPerPage(e.target.value)}
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
                                        {/* <SearchIcon className="w-5 h-5" aria-hidden="true" /> */}
                                        {/* Results on {`${view}`} */}
                                    </div>
                                </div>
                            </Label>
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Card className="mt-5 mb-5 hover:shadow-md">
                <CardBody>
                    <div className=" mb-8 ">
                        <PageTitle>Chỉ số quan trọng</PageTitle>

                        <div className="pb-6 mt-6 flex items-center relative w-full overflow-hidden">
                            <div className="w-48 ml-4 flex-col flex justify-between relative rounded-md  hover:shadow-md border-t-4 border-t-blue-600 border-solid border border-slate-600 py-4 pr-2 pl-4 ">
                                <div className="flex flex-1 text-sm font-medium leading-4 items-center">
                                    <span className="mr-2">Doanh số</span>
                                    <div className="text-slate-600 w-4 h-4">
                                        <i className="shopee-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                <path d="M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M8,2 C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 Z M7.98750749,10.2375075 C8.40172105,10.2375075 8.73750749,10.5732939 8.73750749,10.9875075 C8.73750749,11.401721 8.40172105,11.7375075 7.98750749,11.7375075 C7.57329392,11.7375075 7.23750749,11.401721 7.23750749,10.9875075 C7.23750749,10.5732939 7.57329392,10.2375075 7.98750749,10.2375075 Z M8.11700238,4.60513307 C9.97011776,4.60513307 10.7745841,6.50497267 9.94298079,7.72186504 C9.76926425,7.97606597 9.56587088,8.14546785 9.27050506,8.31454843 L9.11486938,8.39945305 L8.95824852,8.47993747 C8.56296349,8.68261431 8.49390831,8.75808648 8.49390831,9.0209925 C8.49390831,9.29713488 8.27005069,9.5209925 7.99390831,9.5209925 C7.71776594,9.5209925 7.49390831,9.29713488 7.49390831,9.0209925 C7.49390831,8.34166619 7.7650409,7.99681515 8.35913594,7.6662627 L8.76655168,7.45066498 C8.9424056,7.3502536 9.04307851,7.26633638 9.11735517,7.1576467 C9.52116165,6.56675314 9.11397414,5.60513307 8.11700238,5.60513307 C7.41791504,5.60513307 6.82814953,6.01272878 6.75715965,6.55275918 L6.75,6.66244953 L6.74194433,6.75232516 C6.69960837,6.98557437 6.49545989,7.16244953 6.25,7.16244953 C5.97385763,7.16244953 5.75,6.9385919 5.75,6.66244953 C5.75,5.44256682 6.87194406,4.60513307 8.11700238,4.60513307 Z"></path>
                                            </svg>
                                        </i>
                                    </div>
                                </div>
                                <div className="flex items-center mt-3">
                                    <label className="font-normal translate-y-2.5 ">₫</label>
                                    <label className="font-medium mt-1 text-xl leading-6 ml-2 ">0</label>
                                </div>
                                <div className="flex mt-2">
                                    <span className="text-xs leading-3 text-gray-500">So với 7 ngày trước</span>
                                </div>
                            </div>
                            <div className="w-48 ml-4 flex-col flex justify-between relative rounded-md  hover:shadow-md border-t-4 border-t-blue-600 border-solid border border-slate-600 py-4 pr-2 pl-4 ">
                                <div className="flex flex-1 text-sm font-medium leading-4 items-center">
                                    <span className="mr-2">Doanh số</span>
                                    <div className="text-slate-600 w-4 h-4">
                                        <i className="shopee-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                <path d="M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M8,2 C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 Z M7.98750749,10.2375075 C8.40172105,10.2375075 8.73750749,10.5732939 8.73750749,10.9875075 C8.73750749,11.401721 8.40172105,11.7375075 7.98750749,11.7375075 C7.57329392,11.7375075 7.23750749,11.401721 7.23750749,10.9875075 C7.23750749,10.5732939 7.57329392,10.2375075 7.98750749,10.2375075 Z M8.11700238,4.60513307 C9.97011776,4.60513307 10.7745841,6.50497267 9.94298079,7.72186504 C9.76926425,7.97606597 9.56587088,8.14546785 9.27050506,8.31454843 L9.11486938,8.39945305 L8.95824852,8.47993747 C8.56296349,8.68261431 8.49390831,8.75808648 8.49390831,9.0209925 C8.49390831,9.29713488 8.27005069,9.5209925 7.99390831,9.5209925 C7.71776594,9.5209925 7.49390831,9.29713488 7.49390831,9.0209925 C7.49390831,8.34166619 7.7650409,7.99681515 8.35913594,7.6662627 L8.76655168,7.45066498 C8.9424056,7.3502536 9.04307851,7.26633638 9.11735517,7.1576467 C9.52116165,6.56675314 9.11397414,5.60513307 8.11700238,5.60513307 C7.41791504,5.60513307 6.82814953,6.01272878 6.75715965,6.55275918 L6.75,6.66244953 L6.74194433,6.75232516 C6.69960837,6.98557437 6.49545989,7.16244953 6.25,7.16244953 C5.97385763,7.16244953 5.75,6.9385919 5.75,6.66244953 C5.75,5.44256682 6.87194406,4.60513307 8.11700238,4.60513307 Z"></path>
                                            </svg>
                                        </i>
                                    </div>
                                </div>
                                <div className="flex items-center mt-3">
                                    <label className="font-normal translate-y-2.5 ">₫</label>
                                    <label className="font-medium mt-1 text-xl leading-6 ml-2 ">0</label>
                                </div>
                                <div className="flex mt-2">
                                    <span className="text-xs leading-3 text-gray-500">So với 7 ngày trước</span>
                                </div>
                            </div>
                            <div className="w-48 ml-4 flex-col flex justify-between relative rounded-md  hover:shadow-md border-t-4 border-t-blue-600 border-solid border  py-4 pr-2 pl-4 ">
                                <div className="flex flex-1 text-sm font-medium leading-4 items-center">
                                    <span className="mr-2">Doanh số</span>
                                    <div className="text-slate-600 w-4 h-4">
                                        <i className="shopee-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                <path d="M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M8,2 C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 Z M7.98750749,10.2375075 C8.40172105,10.2375075 8.73750749,10.5732939 8.73750749,10.9875075 C8.73750749,11.401721 8.40172105,11.7375075 7.98750749,11.7375075 C7.57329392,11.7375075 7.23750749,11.401721 7.23750749,10.9875075 C7.23750749,10.5732939 7.57329392,10.2375075 7.98750749,10.2375075 Z M8.11700238,4.60513307 C9.97011776,4.60513307 10.7745841,6.50497267 9.94298079,7.72186504 C9.76926425,7.97606597 9.56587088,8.14546785 9.27050506,8.31454843 L9.11486938,8.39945305 L8.95824852,8.47993747 C8.56296349,8.68261431 8.49390831,8.75808648 8.49390831,9.0209925 C8.49390831,9.29713488 8.27005069,9.5209925 7.99390831,9.5209925 C7.71776594,9.5209925 7.49390831,9.29713488 7.49390831,9.0209925 C7.49390831,8.34166619 7.7650409,7.99681515 8.35913594,7.6662627 L8.76655168,7.45066498 C8.9424056,7.3502536 9.04307851,7.26633638 9.11735517,7.1576467 C9.52116165,6.56675314 9.11397414,5.60513307 8.11700238,5.60513307 C7.41791504,5.60513307 6.82814953,6.01272878 6.75715965,6.55275918 L6.75,6.66244953 L6.74194433,6.75232516 C6.69960837,6.98557437 6.49545989,7.16244953 6.25,7.16244953 C5.97385763,7.16244953 5.75,6.9385919 5.75,6.66244953 C5.75,5.44256682 6.87194406,4.60513307 8.11700238,4.60513307 Z"></path>
                                            </svg>
                                        </i>
                                    </div>
                                </div>
                                <div className="flex items-center mt-3">
                                    <label className="font-normal translate-y-2.5 ">₫</label>
                                    <label className="font-medium mt-1 text-xl leading-6 ml-2 ">0</label>
                                </div>
                                <div className="flex mt-2">
                                    <span className="text-xs leading-3 text-gray-500">So với 7 ngày trước</span>
                                </div>
                            </div>
                            <div className="w-48 ml-4 flex-col flex justify-between relative rounded-md  hover:shadow-md border-t-4 border-t-blue-600 border-solid border border-slate-600 py-4 pr-2 pl-4 ">
                                <div className="flex flex-1 text-sm font-medium leading-4 items-center">
                                    <span className="mr-2">Doanh số</span>
                                    <div className="text-slate-600 w-4 h-4">
                                        <i className="shopee-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                <path d="M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M8,2 C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 Z M7.98750749,10.2375075 C8.40172105,10.2375075 8.73750749,10.5732939 8.73750749,10.9875075 C8.73750749,11.401721 8.40172105,11.7375075 7.98750749,11.7375075 C7.57329392,11.7375075 7.23750749,11.401721 7.23750749,10.9875075 C7.23750749,10.5732939 7.57329392,10.2375075 7.98750749,10.2375075 Z M8.11700238,4.60513307 C9.97011776,4.60513307 10.7745841,6.50497267 9.94298079,7.72186504 C9.76926425,7.97606597 9.56587088,8.14546785 9.27050506,8.31454843 L9.11486938,8.39945305 L8.95824852,8.47993747 C8.56296349,8.68261431 8.49390831,8.75808648 8.49390831,9.0209925 C8.49390831,9.29713488 8.27005069,9.5209925 7.99390831,9.5209925 C7.71776594,9.5209925 7.49390831,9.29713488 7.49390831,9.0209925 C7.49390831,8.34166619 7.7650409,7.99681515 8.35913594,7.6662627 L8.76655168,7.45066498 C8.9424056,7.3502536 9.04307851,7.26633638 9.11735517,7.1576467 C9.52116165,6.56675314 9.11397414,5.60513307 8.11700238,5.60513307 C7.41791504,5.60513307 6.82814953,6.01272878 6.75715965,6.55275918 L6.75,6.66244953 L6.74194433,6.75232516 C6.69960837,6.98557437 6.49545989,7.16244953 6.25,7.16244953 C5.97385763,7.16244953 5.75,6.9385919 5.75,6.66244953 C5.75,5.44256682 6.87194406,4.60513307 8.11700238,4.60513307 Z"></path>
                                            </svg>
                                        </i>
                                    </div>
                                </div>
                                <div className="flex items-center mt-3">
                                    <label className="font-normal translate-y-2.5 ">₫</label>
                                    <label className="font-medium mt-1 text-xl leading-6 ml-2 ">0</label>
                                </div>
                                <div className="flex mt-2">
                                    <span className="text-xs leading-3 text-gray-500">So với 7 ngày trước</span>
                                </div>
                            </div>
                        </div>
                        <ChartCard title="User Details" className="max-h-96">
                            <Line {...lineOptions} />
                            <ChartLegend legends={lineLegends} />
                        </ChartCard>

                        {/* <ChartCard title="Online Visitors">
          <Bar {...realTimeUsersBarOptions} />
          <ChartLegend legends={realTimeUsersBarLegends} />
        </ChartCard> */}
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default Customers;
