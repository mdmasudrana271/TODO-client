import React, { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hooks/useToken";

const Signup = () => {
  const { createUser, updateUserProfile, error, setError, user } =
    useContext(AuthContext);

  const [email,setEmail] = useState('')
  console.log(email)
  const [token] = useToken(email)

  // use location to redirect

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [passwordType, setPasswordType] = useState("password");

  // toggle password type

  const handlePasswordType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    } else {
      setPasswordType("password");
    }
  };

  if (token) {
    navigate("/");
  }


  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const Name = form.Name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    const createdUser = {
      name: Name,
      email: email,
    };

    // password authentication required

    if (!/(?=.{6,})/.test(password)) {
      setError("password must be at least 6 character");
      return;
    }

    if (!/(?=.*[a-zA-Z])/.test(password)) {
      setError("password should have Upper letter!!");
      return;
    }
    if (!/(?=.*[!#@$%&? "])/.test(password)) {
      setError("password should have special character!!");
      return;
    }

    // register user using email and password

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setEmail(user.email);
        console.log(user);
        const userInfo = {
          displayName: createdUser.name,
        };
        updateUserProfile(userInfo).then(() => {
          saveUser(createdUser);
          window.location.reload()
        });
        form.reset();
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const saveUser = (createdUser) => {
    console.log(createdUser);
    fetch("https://todo-app-server-side-phi.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createdUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        
      });
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, user]);

  return (
    <div className="  my-10 ">
      <div className="card flex-shrink-0 w-full max-w-sm border bg-base-100 md:w-9/12 mx-auto">
        <form onSubmit={handleOnSubmit} className="card-body">
          <h2>Register</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="Name"
              className="input input-bordered"
              required
            />
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              placeholder="password"
              name="password"
              type={passwordType}
              className="input input-bordered"
              required
            />
            {passwordType === "password" ? (
              <FaEye
                onClick={handlePasswordType}
                className="relative bottom-7 left-72 cursor-pointer"
              ></FaEye>
            ) : (
              <FaEyeSlash
                onClick={handlePasswordType}
                className="relative bottom-7 left-72 cursor-pointer"
              ></FaEyeSlash>
            )}
          </div>
          <>
            <span className="text-error">{error}</span>
          </>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <p className="text-xl">
            <small>Already have an account ?</small>
            <Link
              to="/login"
              className="label-text-alt link link-hover text-sm"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
