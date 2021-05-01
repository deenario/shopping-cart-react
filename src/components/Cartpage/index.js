import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import { placeProductOrder } from "../services/shoppingCart";
import PlaceOrderModal from "./PlaceOrderModal";

const CartPage = (props) => {
  const { state } = props.location;

  const initialValues = {
    email: "",
    phoneNumber: "",
    companyName: "",
    address: "",
    apt: "",
    city: "",
    country: "",
    countryState: "",
    postalCode: "",
  };
  const [formData, setFormData] = useState(initialValues);
  const [error, setError] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [show, setShow] = useState(false);

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
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const placeOrder = (e) => {
    e.preventDefault();
    if (!state) {
      return toast.error("Please Select a Product First");
    }
    if (
      email === "" ||
      phoneNumber === "" ||
      companyName === "" ||
      address === "" ||
      city === "" ||
      country === "" ||
      countryState === "" ||
      postalCode === ""
    ) {
      return setError(true);
    }

    setError(false);
    formData.title = `${state.title}-${Date.now()}`;
    placeProductOrder({
      initialValues,
      formData,
      setFormData,
      setSuccessMsg,
      setShow,
    });
  };

  return (
    <Fragment>
      <Header />
      <section>
        <div className="container mb-5 ">
          <div className="row">
            <div className="col-sm-12 col-md-8 mt-5">
              {/* <div className="container mt-5"> */}
              <div className="card">
                <h5 className="card-header">Customer Information</h5>
                <div className="card-body">
                  <form role="form" data-toggle="validator">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            name="email"
                            placeholder="Enter Email Address*"
                            value={email}
                            onChange={onChange}
                            required
                          />
                          {error && email === "" && (
                            <div className="alert alert-danger" role="alert">
                              Email is required
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Phone Number</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            name="phoneNumber"
                            placeholder="Enter Phone Number*"
                            value={phoneNumber}
                            onChange={onChange}
                            required
                          />
                          {error && phoneNumber === "" && (
                            <div className="alert alert-danger" role="alert">
                              Phone Number is required
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card mt-3">
                <h5 className="card-header">Shipping Address</h5>
                <div className="card-body">
                  <form role="form" data-toggle="validator">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Company Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            name="companyName"
                            placeholder="Name or Company Name*"
                            value={companyName}
                            onChange={onChange}
                            required
                          />
                          {error && companyName === "" && (
                            <div className="alert alert-danger" role="alert">
                              Company Name is required
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Address</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            name="address"
                            placeholder="Enter Address*"
                            value={address}
                            onChange={onChange}
                            required
                          />
                          {error && address === "" && (
                            <div className="alert alert-danger" role="alert">
                              Address is required
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Apt / Suite</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            name="apt"
                            placeholder="Apt, Suite etc (optional)"
                            value={apt}
                            onChange={onChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>City</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            name="city"
                            placeholder="Enter City*"
                            value={city}
                            onChange={onChange}
                            required
                          />
                          {error && city === "" && (
                            <div className="alert alert-danger" role="alert">
                              City is required
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Country</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            name="country"
                            placeholder="Enter Country*"
                            value={country}
                            onChange={onChange}
                            required
                          />
                          {error && country === "" && (
                            <div className="alert alert-danger" role="alert">
                              Country is required
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>State</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            name="countryState"
                            placeholder="Enter State*"
                            value={countryState}
                            onChange={onChange}
                            required
                          />
                          {error && countryState === "" && (
                            <div className="alert alert-danger" role="alert">
                              State is required
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Postal Code</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            name="postalCode"
                            placeholder="Enter Postal Code*"
                            value={postalCode}
                            onChange={onChange}
                            required
                          />
                          {error && postalCode === "" && (
                            <div className="alert alert-danger" role="alert">
                              Postal Code is required
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* </div> */}
              <div className="d-flex justify-content-between mt-2">
                <Link to="/">
                  <i className="fas fa-chevron-left"></i> Return to Cart
                </Link>
                <button
                  onClick={placeOrder}
                  data-toggle="modal"
                  data-target="#exampleModalCentered"
                  className="btn cart-btn"
                >
                  Place Order
                </button>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mt-5 pt-3 cart-detail">
              <div className="d-flex justify-content-between">
                {/* <p>1 - 16*20 Vintage Pet Portrait (Vertical)</p> */}
                <p>1 - {(state && state.title) || ""}</p>
                <p>${(state && state.price) || ""}</p>
              </div>
              <hr />
              <form className="form-inline">
                <div className="input-group w-100">
                  <input
                    type="text"
                    className="form-control"
                    name="discountCode"
                    placeholder="Discount Code"
                  />
                  <div className="input-group-append">
                    <button type="button" className="btn btn-secondary">
                      Apply
                    </button>
                  </div>
                </div>
              </form>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Subtotal</p>
                <p>${(state && state.price * state.quantity) || ""}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Tax</p>
                <p>$0</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Total</p>
                <p>${(state && state.price * state.quantity) || ""}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PlaceOrderModal {...{ show, setShow, successMsg }} />

      <Footer />
    </Fragment>
  );
};

export default CartPage;
