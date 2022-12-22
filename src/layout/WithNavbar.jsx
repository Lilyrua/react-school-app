import React,{useEffect} from "react";
import { Link, Route } from 'react-router-dom'
import useLocalStorage from "../hooks/useLocalStorage"
import { useNavigate } from "react-router-dom";

export default function WithNavbar({ children }) {
  const [user, setUser] = useLocalStorage("userData", undefined)
  const navigate = useNavigate()
  useEffect(() => {
    if(!user) {
      navigate("/login")
    }
  }, [user])
  
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="flex-1">
          <div className="normal-case text-xl">Visuttharangsri</div>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://cdn.discordapp.com/attachments/856511869631987722/1055114924541612062/visut.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-300 rounded-box w-52"
            >
            
              <li>
                <Link to="/table">ตารางสอน</Link>
              </li>
              <li>
                <Link to="/">ข่าวสาร</Link>
              </li>
              <li>
                <a onClick={()=>setUser(undefined)}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {user ? children : ""}
    </div>
  );
}
