import React from 'react'

const Signup = () => {
    return (
        <div>
            <button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className="fa fa-user-plus me-1"></span> Sign Up
            </button>

            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-google me-2"></span> Continue with Google
                            </button>
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-facebook me-2"></span> Continue with Facebook
                            </button>
                            <form>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="exampleInput" placeholder="First Name" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="exampleInput" placeholder="Last Name" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" />
                                </div>
                                <div>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100 mt-4">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup