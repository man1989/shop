import React from "react";
import { InputField } from "../common/InputField.jsx"
import { SelectElement } from "../common/SelectElement.jsx"

export const CheckoutPage = () => {
    return (
        <form className="needs-validation row">
            <div className="col-md-6">
                <div>
                    <h6>Account Information</h6>
                    <InputField type="email" placeholder="Email" required />
                    <InputField type="tel" placeholder="Phone Number" required />
                </div>
                <div>
                    <h6>Shipping Address</h6>
                    <InputField type="text" placeholder="Address" required />
                    <InputField type="text" placeholder="City" required />
                    <div className="d-flex">
                        <InputField type="text" placeholder="State/Province" required />
                        <InputField type="text" placeholder="Zip/Postal Code" required />
                    </div>
                    <SelectElement label="Country" options={[]} required />
                </div>
            </div>
            <div className="col-md-6">
                <div>
                    <h6>Payment Method</h6>
                    <InputField type="text" placeholder="Cardholder Name" required />
                    <InputField type="text" placeholder="Card Number" required />
                    <small>Expiry</small>
                    <div className="d-flex">
                        <SelectElement options={[]} required />
                        <SelectElement options={[]} required />
                        <InputField type="text" placeholder="CVV" required />
                    </div>
                </div>
                <div>
                    <h6>Order Summary</h6>
                </div>
                <button type="submit" className="btn btn-dark">Place Order   </button>
            </div>
        </form>
    )
}
