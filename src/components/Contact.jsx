import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Have Some Question?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="/photo-archive/images/contact.jpg" alt="Contact Us" height="300px" width="300px" />
                    </div>
                    <div className="col-md-6">
                        <form >
                            <div class="mb-3">
                                <input type="text" class="form-control" id="exampleForm" placeholder="Full Name" />
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                            </div>
                            <div class="mb-3">
                                <input type="phone" class="form-control" id="exampleFormControlInput1" placeholder="Phone" />
                            </div>
                            <div class="mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Type your question"></textarea>
                            </div>
                            <button type="submit" class="btn btn-outline-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact