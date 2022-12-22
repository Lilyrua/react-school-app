import { useState, useEffect } from "react";
import "./App.css";
import Detail from "./components/Detail";
import { Link, Route } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
import WithNavbar from "./layout/WithNavbar";

function Table() {
  const [Tables, setTables] = useState([]);

  const [NavigateID, setNavigateID] = useState(0);
  const [NavigateData, setNavigateData] = useState(undefined);

  useEffect(() => {
    fetch("http://localhost:1337/api/tables?populate=cover_image")
      .then((res) => res.json())
      .then((result) => {
        setTables(result.data);
      });
  }, []);

  return (
    <WithNavbar>
        <div className="flex flex-wrap flex-col md:flex-row justify-center items-center gap-3 mt-3">
          {Tables.map((table,id) => (
            <div key={id} className="card card-side bg-base-100 shadow-xl">
              <figure><img src="https://placeimg.com/200/280/arch" alt="Movie"/></figure>
              <div className="card-body">
              <div className="card-title">{table.attributes.Head}</div>
              <p>กดปุ่มเพื่อเข้าดูตารางสอน.</p>
              <div className="card-actions justify-end">
              <a className="btn btn-primary" href={table.attributes.link}>calm</a>
            </div>
            </div>
            </div>
          ))}
        </div>
        
    </WithNavbar>
  );
}
export default Table;


  
 