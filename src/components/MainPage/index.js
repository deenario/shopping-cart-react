import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router";
// import product_img from "../../assets/images/mass.jpg";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import { getProductDetail } from "../services/shoppingCart";
import { toast } from "react-toastify";

const MainPage = () => {
  let history = useHistory();
  const [productData, setProductData] = useState({});
  const [quantityData, setQuantityData] = useState([]);
  const [quantityValue, setQuantityValue] = useState("");

  useEffect(() => {
    async function fetchData() {
      let quantityOption = [];
      let title = "ON GS PRE-WORKOUT 300G GREEN APPLE 30 SERVINGS";
      let data = await getProductDetail("queryProducts", title);
      // console.log(data);
      setProductData(data?.result[0]?.record);
      for (let i = 0; i < data?.result[0]?.record?.qtyInStock; i++) {
        quantityOption.push(
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        );
      }
      setQuantityData(quantityOption);
    }
    fetchData();
  }, []);

  const onChangeQuantity = (e) => {
    setQuantityValue(e.target.value);
  };

  const addToCart = (e) => {
    e.preventDefault();
    if (quantityValue === "") {
      return toast.error("Please Enter quantity first");
    }
    history.push({
      pathname: "/add-to-cart",
      state: {
        quantity: quantityValue,
        price: productData.price,
        title: productData.title,
      },
    });
  };

  return (
    <Fragment>
      <Header />
      <section>
        <div className="container">
          <div className="row mt-5">
            <div className="col-sm-12 col-md-6 text-center mb-4 align-img-center">
              <img
                src={productData && productData.imageLink}
                alt="Product Image"
              />
            </div>
            <div className="col-sm-12 col-md-6 mb-4">
              <div className="container">
                <div className="text-center mb-5">
                  {/* <h3>ON GS PRE-WORKOUT 300G GREEN APPLE 30 SERVINGS</h3> */}
                  <h3>{productData && productData.title}</h3>
                  {/* <h3> </h3> */}
                </div>
                <div className="text-center">
                  <p className="price">
                    <b>Price: ${productData && productData.price}</b>
                  </p>
                  <p>SKU: ${productData && productData.sku}</p>
                  <p>UPC: ${productData && productData.upc}</p>
                  <p>
                    <label>QTY: </label>
                    <select
                      className="select-quantity ml-2"
                      value={quantityValue}
                      onChange={onChangeQuantity}
                    >
                      <option value="">...</option>
                      {quantityData.map((item) => item)}
                    </select>
                  </p>
                  <p>
                    <button className="btn cart-btn" onClick={addToCart}>
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-sm-12 col-md-8 text-center">
              <h4 className="mb-4">About this item</h4>
              <p>VITAMIN D Provides Immune Support</p>
              <p>
                PACKAGING MAY VERY - New look, with the same trusted Quality!
              </p>
              <p>
                175MG OF CAFFEINE - help fuel your mind and body to train at the
                highest level
              </p>
              <p>3G CREATIVE - help support overall performance</p>
              <p>1.5G BETA-ALANINE - help support enhance endurance</p>
              <p>1.5G CITRULLINE MALATE - a precursor to nitric oxide</p>
              <p>375MG ACETYL-L-CARNITINE HCL and 250MG N-ACETYL-L-TYROSINE</p>
              <p>
                BANNED SUBSTANCE TESTED - helps ensure you can trust what you
                are putting in your body
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default MainPage;
