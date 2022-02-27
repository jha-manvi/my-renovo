import React, {Fragment, useState} from "react";
import { Link } from "react-router-dom";
import "../App.css";
import renovo_logo from "../images/Renovo_Black.jpg";

const LoginUser = () => {
    const [inputs, setInputs] = useState(
        {
          email:"",
          pass:""
        }
      );

      const { email,pass } = inputs;

      const onChange = e =>
      setInputs({ ...inputs, [e.target.name]: e.target.value });

      const onSubmitForm = async e => {
        e.preventDefault();
        try {
          const body = {  email, pass  };
          const response = await fetch("http://localhost:5000/",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
            
          });
    
          const parseRes = await response.json();
    
          console.log(parseRes);
    
          console.log(response);
        } catch(err){
          console.error(err.message);
        }
      
    
    };





    return (
        <Fragment>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              {/* <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" /> */}
            </div>
            <div className="col-lg-6 text-center">
              <img src={renovo_logo} alt="" />
              <h4 className="blue-color mb-5 fw-bold">Welcome to the Automation of the Circular Industry</h4>
              <main className="form-signin">
                  <form onSubmit={onSubmitForm}>
                      <div className="form-floating">
                      <p className="text-start fs-5">Email</p>
                      <input name= "email" type="email" className="form-control my-3" id="floatingInput" placeholder="name@example.com"
                      onChange={e => onChange(e)}
                       />
                      {/* <label for="floatingInput">Email</label> */}
                      </div>
                      <div className="form-floating">
                      <p className="text-start fs-5">Password</p>
                      <input name="pass" type="password" className="form-control my-3" id="floatingPassword" placeholder="********"
                     onChange={e => onChange(e)} 
                      />
                      {/* <label for="floatingInput">Email</label> */}
                      </div>
                      <p className="text-end fs-6 blue-color fw-bold" role="button">Forgot your password?</p>
                      <button className="w-100 btn btn-lg mb-3 blue-bg text-white" style={{"height": "50px"}} type="submit">Login</button>
                      <h4 className="fw-normal mb-3">OR</h4>
                      <Link to="/create" className="signup w-100 btn btn-lg mb-3" type="submit">Create an account</Link>
                  </form>
              </main>
            </div>
          </div>
        </div>
        </Fragment>)

}

export default LoginUser;