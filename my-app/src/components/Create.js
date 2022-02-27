import "../App.css";
import React, {useState, Fragment} from 'react';
import renovo_logo from "../images/Renovo_Black.jpg";


const InputUser = () => {

    const [inputs, setInputs] = useState(
        {
            name:"",
            email:"",
            pass:"",
            re_pass:""
        }
    );

    const { name , email , pass , re_pass} = inputs;

    const onChange = e =>
  setInputs({ ...inputs, [e.target.name]: e.target.value });


  const onSubmitForm = async e => {



    e.preventDefault();
    try {
      const body = { name , email , pass , re_pass };
      const response = await fetch("http://localhost:5000/",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });

      console.log(response);
    } catch(err){
      console.error(err.message);
    }


  };

return(
    <Fragment>
        <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5">
      <div className="col-10 col-sm-8 col-lg-6">
        {/* <img src="bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" /> */}
      </div>
      <div className="col-lg-6 text-center">
        <img src={renovo_logo} alt="" />
        <h4 className="blue-color mb-5 fw-bold">Welcome to the Automation of the Circular Industry</h4>
        <main className="form-signin">
    
    <form onSubmit={onSubmitForm}>
                            <div className="form-floating">  
                            <p className="text-start fs-5">Full Name</p>
                            <input name="name" type="text" className="form-control my-3" id="floatingInput" placeholder="Full Name" onChange={e => onChange(e)}/>
                            {/* <label for="floatingInput">Email</label> */}
                            </div>
                            <div className="form-floating">
                            <p className="text-start fs-5">Email</p>
                            <input name="email" type="text" className="form-control my-3" id="floatingName" placeholder="name@example.com"
                            onChange={e => onChange(e)} />
                            {/* <label for="floatingInput">Email</label> */}
                            </div>
                            <div className="form-floating">
                            <p className="text-start fs-5">Set Password</p>
                            <input name="pass" type="password" className="form-control my-3" id="floatingPassword" placeholder="********" 
                            onChange={e => onChange(e)} />
                            {/* <label for="floatingInput">Email</label> */}
                            </div>
                            <div className="form-floating">
                            <p className="text-start fs-5">Confirm Password</p>
                            <input name="re_pass" type="password" className="form-control my-3" id="floatingRe_pass" placeholder="********" 
                            onChange={e => onChange(e)} />
                            {/* <label for="floatingInput">Email</label> */}
                            </div>
                            <button className="w-100 btn btn-lg my-3 blue-bg text-white" style={{"height": "50px"}} type="submit">Create Account</button>

    </form>
    </main>
      </div>
    </div>
  </div>
    
    </Fragment>
)


};

export default InputUser