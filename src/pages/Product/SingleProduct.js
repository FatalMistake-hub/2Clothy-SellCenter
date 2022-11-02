import React, { useState, useEffect } from 'react';

import { NavLink, useParams } from 'react-router-dom';
import Icon from '../../components/Icon';
import PageTitle from '../../components/Typography/PageTitle';
import { HomeIcon } from '../../icons';
import response from '../../utils/demo/productData';
import { Card, CardBody, Badge, Button, Avatar } from '@windmill/react-ui';
import { genRating } from '../../utils/genarateRating';
import * as apiService from '../../services/apiService';

const SingleProduct = () => {
    const { id } = useParams();
    const [detailResult, setDetailResult] = useState();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await apiService.detailProduct(id);

            setDetailResult(result[0]);
        };

        fetchApi();
    }, [id]);
    // change view component
    const [tabView, setTabView] = useState('reviews');
    const handleTabView = (viewName) => setTabView(viewName);

    //   get product
    let product = response.filter((product) => product.id == id)[0];

    return (
        <div>
            <PageTitle>Product Details</PageTitle>

            {/* Breadcum */}
            <div className="flex text-gray-800 dark:text-gray-300">
                <div className="flex items-center text-orange-600">
                    <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
                    <NavLink exact to="/dashboard" className="mx-2">
                        Kênh người bán
                    </NavLink>
                </div>
                {'>'}
                <NavLink exact to="/all-products" className="mx-2 text-orange-600">
                    Tất cả Products
                </NavLink>
                {'>'}
                <p className="mx-2">{detailResult?.name}</p>
            </div>

            {/* Product overview  */}
            <Card className="my-8 shadow-md">
                <CardBody>
                    <div className="grid grid-col  items-center md:grid-cols-2 lg:grid-cols-2 ">
                        <div className="flex justify-center">
                            <img src={detailResult?.images[0].path} alt="" className="w-full rounded-lg " />
                        </div>

                        <div className="mx-8 pt-5 md:pt-0 ">
                            <h1 className="text-3xl mb-4 font-semibold text-gray-700 dark:text-gray-200">{detailResult?.name}</h1>

                            <Badge type={detailResult?.quantity > 0 ? 'success' : 'danger'} className="mb-2">
                                <p className="break-normal">
                                    {detailResult?.quantity > 0 ? `In Stock` : 'Out of Stock'}
                                    {/* {detailResult?.quantity}  */}
                                </p>
                            </Badge>

                            <p className="mb-2 text-sm text-gray-800 dark:text-gray-300">{detailResult?.description}</p>
                            <p className="mb-3 text-sm text-gray-800 dark:text-gray-300">{/* {detailResult?.description} */}</p>

                            {/* <p className="text-sm text-gray-900 dark:text-gray-400">
                Product Rating
              </p>
              <div>{genRating(detailResult?.rating, product.reviews?.length, 6)}</div> */}
                            <p className="text-sm text-gray-900 dark:text-gray-400 flex">
                                Danh mục : {''}
                                <p> {detailResult?.size}</p>
                            </p>
                            <p className="text-sm text-gray-900 dark:text-gray-400 flex">
                                Size : {''}
                                <p> {detailResult?.size}</p>
                            </p>

                            <h4 className="mt-4 text-orange-600 text-2xl font-semibold">{detailResult?.price.toLocaleString('es-ES')} ₫</h4>
                            <p className="text-sm text-gray-900 dark:text-gray-400">Product Quantity : {detailResult?.quantity}</p>
                            <p className="text-sm text-gray-900 dark:text-gray-400">
                                dateCreated : {detailResult?.dateCreated.slice(0, 10)}
                            </p>
                        </div>
                    </div>
                </CardBody>
            </Card>

            {/* Product Reviews and Description */}
            <Card className="my-8 shadow-md">
                <CardBody>
                    {/* Navigation Area */}
                    <div className="flex items-center">
                        <Button
                            className="mx-5"
                            layout="link"
                            onClick={() => handleTabView('reviews')}
                        >{`Reviews (${product?.reviews.length})`}</Button>
                        <Button layout="link" onClick={() => handleTabView('description')}>
                            Description
                        </Button>
                        <Button layout="link" onClick={() => handleTabView('faq')}>
                            FAQ
                        </Button>
                    </div>

                    {/* Divider */}
                    <hr className="mx-3 my-2 customeDivider" />

                    {/* Component area */}
                    <div className="mx-3 mt-4">
                        {tabView === 'reviews' ? (
                            <>
                                <p className="text-5xl text-gray-700 dark:text-gray-200">{product?.rating.toFixed(1)}</p>
                                {genRating(detailResult?.rating, product?.reviews.length, 6)}

                                <div className="mt-4">
                                    {product?.reviews.map((review, i) => (
                                        <div className="flex py-3" key={i}>
                                            <Avatar
                                                className="hidden mr-3 md:block"
                                                size="large"
                                                src={review.avatar_url}
                                                alt="User image"
                                            />
                                            <div>
                                                <p className="font-medium text-lg text-gray-800 dark:text-gray-300">{review.username}</p>
                                                {genRating(review.rate, null, 4)}
                                                <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">{review.review}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : tabView === 'description' ? (
                            <>
                                <div className="px-3">
                                    <p className="text-sm text-gray-800 dark:text-gray-300">{detailResult?.description}</p>
                                </div>
                            </>
                        ) : tabView === 'faq' ? (
                            <>faq</>
                        ) : (
                            <></>
                        )}
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default SingleProduct;
