import React from "react";
import { useState, useEffect, useRef } from "react";


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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  RightArrow,

} from "@windmill/react-ui";
import { useParams } from "react-router-dom";
import response from "../../utils/demo/productData";
import * as apiService from "../../services/apiService";

const FormTitle = ({ children }) => {
  return (
    <h2 className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-300">
      {children}
    </h2>
  );
};

const AddProduct = () => {
  const { id } = useParams();
  const [detailResult, setDetailResult] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const result = await apiService.detailProduct(id);

      setDetailResult(result[0]);
    };

    fetchApi();
  }, [id]);

  // const [itemdata, setItemData] = useState();
  const itemdata = response.find((product) => {
    return product.id == id;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    setSelected(result);
    setCategories2(data);
  };
  const [categories3, setCategories3] = useState([]);

  const fetchApi3 = async (result) => {
    const data = await apiService.categoriesById(result.id);
    setSelected(result);
    setCategories3(data);
  };
  const [selected, setSelected] = useState();

  const [images, setImages] = useState([]);
  const [imageURLS, setImageURLs] = useState([]);
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);
  const isValidFileUploaded = (file) => {
    const validExtensions = ["png", "jpeg", "jpg"];
    const fileExtension = file.type.split("/")[1];

    return validExtensions.includes(fileExtension);
  };
  function onImageChange(e) {
    const files = e.target.files;
    let check;
    for (let i = 0; i < e.target.files.length; i++) {
      if (isValidFileUploaded(files[i])) {
        check = true;
      } else {
        check = false;
        break;
      }
    }
    if (files.length < 9 && check) {
      if (images.concat([...e.target.files]).length <= 9) {
        const data = images.concat([...e.target.files]);
        console.log(data);
        setImages(data);
      } else {
        alert("Over the allowed file amount");
      }
    } else {
      alert("File invalid");
    }
  }
  const inputFile = useRef(null);
  const onDivClick = () => {
    inputFile.current.click();
  };
  return (
    <div>
      <PageTitle>Thêm Mới Sản Phẩm</PageTitle>

      {/* Breadcum */}
      <div className="flex text-gray-800 dark:text-gray-300">
        <div className="flex items-center text-orange-600">
          <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
          <NavLink exact to="/app/dashboard" className="mx-2">
            Kênh người bán
          </NavLink>
        </div>
        {">"}
        <p className="mx-2">Thêm Mới Sản Phẩm</p>
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
                {/* <div className="ml-4 hidden sm:block">
                  <Button layout="outline" onClick={closeModal}>
                    Cancel
                  </Button>
                </div> */}
                <div className="ml-4 hidden sm:block">
                  <Button onClick={closeModal}>Xác nhận</Button>
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

        <Card className="row-span-4 md:col-span-4 " >
          <CardBody>
            <FormTitle>Hình ảnh sản phẩm</FormTitle>
            <div className="w-full flex flex-wrap">
              {imageURLS.map((imageSrc, i) => (
                <div key={i} className="w-20 h-20 rounded mr-4 mb-4">
                  <div className="w-full h-full ">
                    <img
                      src={imageSrc}
                      alt="not fount"
                      className="w-20 h-20 rounded border "
                    />
                  </div>
                </div>
              ))}

              <div className="w-20 h-20 rounded mr-4 mb-4  text-center  flex">
                <div
                  onClick={onDivClick}
                  className="w-full h-full rounded border border-dashed border-slate-600 flex items-center hover:bg-orange-100"
                >
                  <input
                    type="file"
                    multiple={true}
                    className="hidden"
                    onChange={onImageChange}
                    ref={inputFile}
                  />
                  <div className="flex text-orange-600 flex-col   ">
                    <div className="h-6">
                      <i className="w-6 h-6 inline-block fill-current">
                        <svg
                          viewBox="0 0 23 21"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M18.5 0A1.5 1.5 0 0 1 20 1.5V12c-.49-.07-1.01-.07-1.5 0V1.5H2v12.65l3.395-3.408a.75.75 0 0 1 .958-.087l.104.087L7.89 12.18l3.687-5.21a.75.75 0 0 1 .96-.086l.103.087 3.391 3.405c.81.813.433 2.28-.398 3.07A5.235 5.235 0 0 0 14.053 18H2a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 2 0h16.5z"></path>
                          <path d="M6.5 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM18.5 14.25a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5H20v2.25a.75.75 0 0 1-1.5 0V18h-2.25a.75.75 0 0 1 0-1.5h2.25v-2.25z"></path>
                        </svg>
                      </i>
                    </div>
                    <div className="leading-3 text-xs">
                      Thêm hình ảnh ({imageURLS.length}/9)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <FormTitle>Tên sản phẩm</FormTitle>
            <Label>
              <Input className="mb-4" placeholder="Nhập vào" />
            </Label>

            <FormTitle>Danh mục</FormTitle>
            <Label>
              <Input
                value={selected?.name}
                onClick={() => openModal("1")}
                className="mb-4"
                placeholder="Chọn danh mục"
                readOnly
              />
            </Label>

            <FormTitle>Size</FormTitle>
            <Label>
              <Input
                className="mb-4"
                placeholder="Nhập size"
              />
            </Label>
            <FormTitle>Mô tả sản phẩm</FormTitle>
            <Label>
              <Textarea
                className="mb-4"
                rows="6"
                // placeholder="Enter product full description here"
              />
            </Label>
            <FormTitle>Giá</FormTitle>
            <Label>
              <Input
              type="number"
                className="mb-4 "
                placeholder="Nhập vào"
              />
            </Label>

            <div className="w-full">
              <Button
                size="large"
                iconLeft={AddIcon}
                onClick={() => openModal("1")}
              >
                Thêm sản phẩm
              </Button>
            </div>
          </CardBody>
        </Card>

        {/* <Card className="h-48">
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
        </Card> */}
      </div>
    </div>
  );
};

export default AddProduct;
