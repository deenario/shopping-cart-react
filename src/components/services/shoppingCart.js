import axios from "axios";
import { toast } from "react-toastify";

//Get Exchange Order By User Id
export const getProductDetail = (queryProducts, title) => {
  // console.log(title);
  return new Promise((resolve, reject) => {
    axios
      .get(
        `http://3.129.8.167:5000/channels/tribe/chaincodes/transaction?fcn=${queryProducts}&args="ON GS PRE-WORKOUT 300G GREEN APPLE 30 SERVINGS"`
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

//Buy Token
export const placeProductOrder = ({
  initialValues,
  formData,
  setFormData,
  setSuccessMsg,
  setShow,
}) => {
  const {
    email,
    phoneNumber,
    companyName,
    address,
    apt,
    city,
    country,
    countryState,
    postalCode,
    title,
  } = formData;

  let productData = [
    title,
    email,
    phoneNumber,
    companyName,
    address,
    city,
    postalCode,
  ];
  // console.log(data);
  const body = {
    fcn: "transaction",
    chaincodeName: "transaction",
    channelName: "tribe",
    args: productData,
  };
  axios
    .post("http://3.129.8.167:5000/channels/tribe/chaincodes/transaction", body)
    .then(async (res) => {
      // console.log(res);
      // toast.success(res.data?.result?.message)
      setFormData(initialValues);
      setSuccessMsg(
        (res.data && res.data.result && res.data.result.message) ||
          "Order Placed Successfully"
      );
      setShow(true);
    })
    .catch((err) => {
      console.log(err);
      if (err && err.response) toast.error(err && err.response);
      setFormData(initialValues);
      setShow(false);
    });
};
