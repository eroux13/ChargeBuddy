import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const Signup = () => {

  const history = useHistory();

  // initial state set to empty strings
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    zip: "",
    email: "",
    password: "",
    make: "",
    model: "",
    year: "",
    evPort: ""
  });

  // gathering data from forms
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  // adding data to the database
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const user = {
      first_name: details.firstName,
      last_name: details.lastName,
      zip_code: details.zip,
      email: details.email,
      password: details.password,
      car: [
        {
          make: details.make,
          model: details.model,
          year: details.year,
          evPort: details.evPort,
        },
      ],
    };
    const newUser = await axios.post("/api/user", user);

    // redirecting user to home page
    if (newUser.data) {
      history.push("/home");
    }
  };

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="card card-login">
              {/* left side content of Signup form*/}
              <div className="card-content">
                <form
                  method="post"
                  action="/account"
                  id="create_customer"
                  accept-charset="UTF-8"
                >
                  <input
                    type="hidden"
                    name="form_type"
                    value="create_customer"
                  />
                  <input type="hidden" name="utf8" value="✓" />
                  <h5 className="center">ABOUT YOU</h5>

                  <div className="input-field">
                    <label for="FirstName">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      id="FirstName"
                      autofocus
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>

                  <div className="input-field">
                    <label for="LastName">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      id="LastName"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>

                  <div className="input-field">
                    <label for="ZipCode">Zip Code</label>
                    <input
                      type="text"
                      name="zip"
                      id="ZipCode"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>

                  <div className="input-field">
                    <label for="Email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="Email"
                      className=""
                      value={details.email}
                      spellcheck="false"
                      autocomplete="off"
                      autocapitalize="off"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>

                  <div className="input-field">
                    <label for="CreatePassword">Create a Password</label>
                    <input
                      type="password"
                      name="password"
                      id="CreatePassword"
                      className=""
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </form>
              </div>

              {/* right side content of Signup form*/}
              <div className="card-content">
                <form
                  method="post"
                  action="/account"
                  id="create_customer"
                  accept-charset="UTF-8"
                  onSubmit={(e) => handleFormSubmit(e)}
                >
                  <input
                    type="hidden"
                    name="form_type"
                    value="create_customer"
                  />
                  <input type="hidden" name="utf8" value="✓" />
                  <h5 className="center">ABOUT YOUR VEHICLE</h5>

                  <div className="input-field">
                    <label for="Make">Make</label>
                    <input
                      type="text"
                      name="make"
                      id="Make"
                      autofocus
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>

                  <div className="input-field">
                    <label for="Model">Model</label>
                    <input
                      type="text"
                      name="model"
                      id="Model"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>

                  <div className="input-field">
                    <label for="Model">Year</label>
                    <input
                      type="text"
                      name="year"
                      id="Year"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>

                  <h6 className="center">Choose Your Plug</h6>

                  <div className="col s3"
                    onClick={(event) => setDetails({ ...details, evPort: "J1772" })}>
                    <img
                      src="./images/J1772.png"
                      alt=""
                      className="circle responsive-img"
                    />
                    <div className="chip">J1772</div>
                  </div>

                  <div className="col s3" onClick={(event) => setDetails({ ...details, evPort: "CHADEMO" })}>
                    <img
                      src="./images/chademo.png"
                      alt=""
                      className="circle responsive-img"
                    />
                    <div className="chip">CHADEMO</div>
                  </div>

                  <div className="col s3" onClick={(event) => setDetails({ ...details, evPort: "COMBO" })}>
                    <img
                      src="./images/combo.png"
                      alt=""
                      className="circle responsive-img"
                    />
                    <div className="chip">COMBO</div>
                  </div>

                  <div className="col s3" onClick={(event) => setDetails({ ...details, evPort: "TESLA" })}>
                    <img
                      src="./images/tesla.png"
                      alt=""
                      className="circle responsive-img"
                    />
                    <div className="chip">TESLA</div>
                  </div>

                  <br />
                  <p>
                    <input
                      type="submit"
                      value="Register"
                      className="btn-large z-depth-0"
                    />

                    <a href="/login"> {""}Already registered? Login here!</a>
                  </p>
                </form>
              </div>
              {/* right side content ends here */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signup;