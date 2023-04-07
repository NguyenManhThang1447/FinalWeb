import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const state = useSelector((state) => state.addItem)

    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">${item.price}</span>
            </li>
        );
    }
    const handleSubmit = () => {
        alert("Order Success");
        window.location.href = '/';
    };

    return (
        <>
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your Cart</span>
                            <span className="badge bg-primary rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${total}</strong>
                            </li>
                        </ul>

                        <form className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Promo code" />
                                <button type="submit" className="btn btn-secondary">Redeem</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Shipment Details</h4>
                        <form className="needs-validation" novalidate="">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" id="firstName" placeholder="First Name" required="" />
                                </div>

                                <div className="col-sm-6">
                                    <input type="text" className="form-control" id="lastName" placeholder="Last Name" required="" />
                                </div>

                                <div className="col-12">
                                    <div className="input-group has-validation">
                                        <input type="text" className="form-control" id="username" placeholder="User Name" required="" />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">@</span>
                                        <input type="email" className="form-control" id="email" placeholder="Email Address" />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <input type="text" className="form-control" id="phone" placeholder="Phone" required="" />
                                </div>

                                <div className="col-12">
                                    <input type="text" className="form-control" id="address" placeholder="Address" />
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="country" className="form-label">City</label>
                                    <select className="form-select" id="country" required="">
                                        <option value="">Choose...</option>
                                        <option>Ho Chi Minh</option>
                                    </select>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="state" className="form-label">District</label>
                                    <select className="form-select" id="state" required="">
                                        <option value="">Choose...</option>
                                        <option>District 1</option>
                                        <option>District 2</option>
                                        <option>District 3</option>
                                        <option>District 4</option>
                                        <option>District 5</option>
                                        <option>District 6</option>
                                        <option>District 7</option>
                                        <option>District 8</option>
                                        <option>District 9</option>
                                        <option>District 10</option>
                                        <option>District 11</option>
                                        <option>District 12</option>
                                        <option>Phu Nhuan District</option>
                                        <option>Binh Thanh District</option>
                                    </select>
                                </div>

                            </div>

                            <hr className="my-4" />

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="same-address" />
                                <label className="form-check-label" htmlFor="same-address">Cash payment on delivery</label>
                            </div>

                            <hr className="my-4" />

                            <div onClick={handleSubmit}>
                                <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to Checkout</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout