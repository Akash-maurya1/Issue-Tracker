import { Formik } from 'formik';
import React from 'react';


const Login = () => {

  const loginSubmit = async (formdata, { resetForm }) => {
    console.log(formdata)
    // resetForm()

    const response = await fetch('http://localhost:5000/user/authenticate', {
      method : 'POST',
      body : JSON.stringify(formdata),
      headers : {
        'Content-Type' : 'application/json'
      }
    });
  }


  return (
    <>
      <section className="vh-100 login-bg pt-5">
        <div className="container-fluid h-custom">
        <div className='card'>
          <div className='card-body'>

          <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <Formik initialValues={{ email: "", password: "" }} onSubmit={loginSubmit} 
            
            >
            {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
              <form onSubmit={handleSubmit}>
                {/* Email input */}
                <div className='container'>
                  <div className='card'>
                    <div className='card-body' style={{backgroundColor : ""}}>
                <div className="form-outline mb-4">
                <h1>Login</h1>

                <label>
                    Email address
                  </label>
                  <br />
                  <input
                    type="email"
                     className=""
                    placeholder="Enter a valid email address"
                  />
                  
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                  <br/>
                  <input
                    type="password"
                    className=""
                    placeholder="Enter password"
                  />
                  
                  
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="/ForgotPassword" className="text-body">
                    Forgot password?
                  </a>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <a href="#!" className="link-danger">
                      Register
                    </a>
                  </p>
                </div>
                </div>
                </div>
                </div>
              </form>
               )}
               </Formik>
            </div>
          </div>
          </div>
          </div>
        </div> 
      </section>
    </>


  )
}

export default Login
