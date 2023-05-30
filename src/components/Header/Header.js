import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {

    const {logOut, user} = useContext(AuthContext)


    const handleLogout = ()=>{
      logOut()
    }

  return (
    <section>
      <div className="navbar bg-blue-400">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost normal-case text-xl">TODO</Link>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/add-todo">ADD TODO</Link>
              </li>
              <li>
                <Link to="/" className="justify-between">
                  My TODO
                </Link>
              </li>
              <li>
                <Link to="/trash" className="justify-between">
                  Trash
                </Link>
              </li>
              <li>{
                
                user && user.uid ? <button onClick={handleLogout}>Logout</button> :  <button><Link to="/login">Login</Link></button>

                }
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
