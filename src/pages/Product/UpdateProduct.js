import React from "react";
import { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import Icon from "../../components/Icon";
import PageTitle from "../../components/Typography/PageTitle";
import { HomeIcon, AddIcon, PublishIcon, StoreIcon } from "../../icons";
import {
  Card,
  CardBody,
  Label,
  Input,
  Textarea,
  Button,
  Select,
} from "@windmill/react-ui";
import { useParams } from "react-router-dom";
import response from "../../utils/demo/productData";

const FormTitle = ({ children }) => {
  return (
    <h2 className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-300">
      {children}
    </h2>
  );
};

const AddProduct = () => {
  const { id } = useParams();

  // const [itemdata, setItemData] = useState();
  const itemdata = response.find((product) => {
    return product.id == id;
  });

  return (
    <div>
      <PageTitle>Update Product </PageTitle>

      {/* Breadcum */}
      <div className="flex text-gray-800 dark:text-gray-300">
        <div className="flex items-center text-orange-600">
          <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
          <NavLink exact to="/app/dashboard" className="mx-2">
            Kênh người bán
          </NavLink>
        </div>
        {">"}
        <div className="flex items-center text-orange-600">
          <NavLink exact to="/app/all-products" className="mx-2">
            Tất cả sản phẩm
          </NavLink>
        </div>
        {">"}
        <p className="mx-2">Update Product </p>
      </div>

      <div className="w-full mt-8 grid gap-4 grid-col md:grid-cols-3 ">
        <Card className="row-span-2 md:col-span-2">
          <CardBody>
            <FormTitle>Product Image</FormTitle>
            <input
              type="file"
              className="mb-4 text-gray-800 dark:text-gray-300"
            />

            <FormTitle>Product Name</FormTitle>
            <Label>
              <Input
                className="mb-4"
                placeholder="Type product name here"
                value={itemdata?.name}
              />
            </Label>

            <FormTitle>Product Price</FormTitle>
            <Label>
              <Input
                className="mb-4"
                placeholder="Enter product price here"
                value={itemdata?.price}
              />
            </Label>

            <FormTitle>Short description</FormTitle>
            <Label>
              <Textarea
                className="mb-4"
                rows="3"
                placeholder="Enter product short description here"
                value={itemdata?.featureDescription}
              />
            </Label>

            <FormTitle>Stock Quantity</FormTitle>
            <Label>
              <Input
                className="mb-4"
                placeholder="Enter product stock quantity"
                type="number"
                value={itemdata?.qty}
              />
            </Label>

            <FormTitle>Full description</FormTitle>
            <Label>
              <Textarea
                className="mb-4"
                rows="5"
                placeholder="Enter product full description here"
                value={itemdata?.londDescription}
              />
            </Label>

            <div className="w-full">
              <Button size="large" iconLeft={AddIcon}>
                Add Product
              </Button>
            </div>
          </CardBody>
        </Card>

        <Card className="h-48">
          <CardBody>
            <div className="flex mb-8">
              <Button layout="primary" className="mr-3" iconLeft={PublishIcon}>
                Publish
              </Button>
              <Button layout="link" iconLeft={StoreIcon}>
                Save as Draft
              </Button>
            </div>
            <Label className="mt-4">
              <FormTitle>Select Product Category</FormTitle>
              <Select className="mt-1">
                <option>Electronic</option>
                <option>Fashion</option>
                <option>Cosmatics</option>
                <option>Food and Meal</option>
              </Select>
            </Label>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default AddProduct;
