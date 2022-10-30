import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../../components/Icon";
import PageTitle from "../../components/Typography/PageTitle";
import {
  HomeIcon,
  AddIcon,
  PublishIcon,
  TrashIcon,
  RightArrow,
  StoreIcon,
} from "../../icons";
import {
  Card,
  CardBody,
  Label,
  Input,
  Textarea,
  Button,
  Select,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@windmill/react-ui";
import { useState, useEffect } from "react";
import * as apiService from "../../services/apiService";
const FormTitle = ({ children }) => {
  return (
    <h2 className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-300">
      {children}
    </h2>
  );
};

const AddProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedDeleteProduct, setSelectedDeleteProduct] = useState(null);
  async function openModal(productId) {
    // let product = await data.filter((product) => product.id === productId)[0];
    // console.log(product);
    // setSelectedDeleteProduct(product);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }
  const [categoriesResult, setCategoriesResult] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await apiService.allCategories();

      setCategoriesResult(result);
    };

    fetchApi();
  }, []);

  const [categories2, setCategories2] = useState([]);

  const fetchApi2 = async (result) => {
    const data = await apiService.categoriesById(result.id);
    setSelected(result)
    setCategories2(data);
  };
  const [categories3, setCategories3] = useState([]);

  const fetchApi3 = async (result) => {
    const data = await apiService.categoriesById(result.id);
    setSelected(result)
    setCategories3(data);
  };
  const [selected, setSelected] = useState();

  return (
    <div>
      <PageTitle>Add New Product</PageTitle>

      {/* Breadcum */}
      <div className="flex text-gray-800 dark:text-gray-300">
        <div className="flex items-center text-orange-600">
          <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
          <NavLink exact to="/app/dashboard" className="mx-2">
            Kênh người bán
          </NavLink>
        </div>
        {">"}
        <p className="mx-2">Add new Product</p>
      </div>

      <div className="w-full mt-8 grid gap-4 grid-col md:grid-cols-3 ">
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          style={{ width: "1000px" }}
        >
          <ModalHeader className="flex mb-8 text-3xl ">
            {/* <div className="flex items-center"> */}
            {/* <Icon icon={TrashIcon} className="w-6 h-6 mr-3" /> */}
            Chỉnh sửa ngành hàng
            {/* </div> */}
          </ModalHeader>
          <ModalBody className="max-w-7xl max-h-96">
            {/* Make sure you want to delete product{" "}
            {selectedDeleteProduct && `"${selectedDeleteProduct.name}"`} */}
            <div className="flex-grow min-h-8 overflow-auto text-sm px-6">
              <div className="rounded p-4 bg-gray-100">
                <div className="relative overflow-hidden  rounded">
                  <div className="py-3 relative w-96 flex bg-white">
                    <ul className=" h-80 flex-1">
                      {categoriesResult.map((result, i) => (
                        <li
                          key={result.id}
                          className="my-2 flex justify-between leading-8 items-center px-4 hover:bg-gray-100"
                          onClick={() => fetchApi2(result)}
                        >
                          <p className="text-sm font-semibold leading-8 text-ellipsis">
                            {result.name}
                          </p>
                          <div className="flex item-center ">
                            <Icon
                              className="w-5 h-5"
                              aria-hidden="true"
                              icon={RightArrow}
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                    <ul className=" h-80 flex-1">
                      {categories2?.map((result, i) => (
                        <li
                          key={result.id}
                          className="my-2 flex justify-between leading-8 items-center px-4 hover:bg-gray-100"
                          onClick={() => fetchApi3(result)}
                        >
                          <p className="text-sm font-semibold leading-8 text-ellipsis">
                            {result.name}
                          </p>
                          {/* <div className="flex item-center ">
                            <Icon
                              className="w-5 h-5"
                              aria-hidden="true"
                              icon={RightArrow}
                            />
                          </div> */}
                        </li>
                      ))}
                    </ul>
                    {/* <ul className=" h-80 flex-1">
                    {categories3?.map((result, i) => (
                        <li
                          key={result.id}
                          className="my-2 flex justify-between leading-8 items-center px-4 "
                        >
                          <p className="text-sm font-semibold leading-8 text-ellipsis">
                            {result.name}
                          </p>
                          <div className="flex item-center ">
                            <Icon
                              className="w-5 h-5"
                              aria-hidden="true"
                              icon={RightArrow}
                            />
                          </div>
                        </li>
                      ))}
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="w-full flex justify-between">
              <div className="leading-5">
                <span className="mr-1">Đã chọn :</span>
                <span className="ml-1">{selected?.name}</span>
              </div>
              <div className="flex">
                <div className="ml-4 hidden sm:block">
                  <Button layout="outline" onClick={closeModal}>
                    Cancel
                  </Button>
                </div>
                <div className="ml-4 hidden sm:block">
                  <Button>Delete</Button>
                </div>
                <div className="block w-full sm:hidden">
                  <Button
                    block
                    size="large"
                    layout="outline"
                    onClick={closeModal}
                  >
                    Cancel
                  </Button>
                </div>
                <div className="block w-full sm:hidden">
                  <Button block size="large">
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </ModalFooter>
        </Modal>

        <Card className="row-span-2 md:col-span-2">
          <CardBody>
            <FormTitle>Product Image</FormTitle>
            <input
              type="file"
              className="mb-4 text-gray-800 dark:text-gray-300"
            />

            <FormTitle>Product Name</FormTitle>
            <Label>
              <Input className="mb-4" placeholder="Type product name here" />
            </Label>

            <FormTitle>Product Price</FormTitle>
            <Label>
              <Input className="mb-4" placeholder="Enter product price here" />
            </Label>

            <FormTitle>Short description</FormTitle>
            <Label>
              <Textarea
                className="mb-4"
                rows="3"
                placeholder="Enter product short description here"
              />
            </Label>

            <FormTitle>Stock Qunatity</FormTitle>
            <Label>
              <Input
                className="mb-4"
                placeholder="Enter product stock quantity"
              />
            </Label>

            <FormTitle>Full description</FormTitle>
            <Label>
              <Textarea
                className="mb-4"
                rows="5"
                placeholder="Enter product full description here"
              />
            </Label>

            <div className="w-full">
              <Button
                size="large"
                iconLeft={AddIcon}
                onClick={() => openModal("1")}
              >
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
