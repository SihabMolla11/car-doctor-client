import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Signup = () => {
  const { createUser } = useContext(AuthContext);

  const handelregister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name,email, password)

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset()
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col gap-14 items-center lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="card border-2 p-8 rounded-md flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <div className="card-body">
              <h3 className="text-2xl font-semibold text-[#444444] text-center">
                Sign Up
              </h3>
              <form onSubmit={handelregister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Conform Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter password"
                    name="password"
                    required
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary bg-[#FF3811] border-0 hover:bg-[#FF3811]"
                    type="submit"
                    value="Sign in"
                  />
                </div>
              </form>
              <div className="text-center">
                <p className="my-4">Or Sign Up with</p>
                <div className="flex gap-6 justify-center items-center ">
                  <button className="bg-[#F5F5F8] p-3 text-[#3B5998] rounded-full">
                    <FaFacebookF />
                  </button>
                  <button className="bg-[#F5F5F8] p-3 text-[#138df1] rounded-full">
                    <FaLinkedinIn />
                  </button>
                  <button className="bg-[#F5F5F8] p-3 rounded-full">
                    <FcGoogle />
                  </button>
                </div>
                <p className="mt-10">
                  Have an account?{" "}
                  <Link to="/login" className="text-[#FF3811] font-bold">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
