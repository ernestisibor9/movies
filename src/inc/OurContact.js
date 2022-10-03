import React from "react";

function OurContact() {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-7">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15853.504875289496!2d3.3419668!3d6.60008!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d7c33eb87b3%3A0xfc23c9556f669273!2sAlabian%20Solutions%20Limited!5e0!3m2!1sen!2sng!4v1664197682633!5m2!1sen!2sng"
            width="800"
            height="550"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-md-5">
          <div class="card shadow p-3 mb-5 bg-body rounded" style={{ marginRight: "80px" }}>
            <div class="card-body">
              <h5 class="card-title text-center">Please fill this form</h5>
              <form>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="FullName"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Email"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Phone"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Message
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Enter message"
                  ></textarea>
                </div>
                <div class="d-grid gap-2">
                  <button class="btn btn-primary" type="button">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurContact;
