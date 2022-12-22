import { useState, useEffect } from "react";
import "./App.css";
import Detail from "./components/Detail";
import { Link, Route } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
import WithNavbar from "./layout/WithNavbar";



function App() {
  const [activitys, setActivitys] = useState([]);

  const [NavigateID, setNavigateID] = useState(0);
  const [NavigateData, setNavigateData] = useState(undefined);

  useEffect(() => {
    fetch("http://localhost:1337/api/activities?populate=cover_image")
      .then((res) => res.json())
      .then((result) => {
        setActivitys(result.data);
      });
  }, []);

  return (
    <WithNavbar>
      {NavigateID <= 0 ? (
        <div className="flex flex-wrap flex-col md:flex-row justify-center items-center gap-3 mt-3">
          {activitys.map((activity,id) => (
            <div key={id} className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={
                    "http://localhost:1337" +
                    activity.attributes.cover_image.data.attributes.url
                  }
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{activity.attributes.name}</h2>
                <p className="truncate">{activity.attributes.detail}</p>
                <div className="card-actions justify-end">
                  <button onClick={()=>{
                    setNavigateData(activity);
                    setNavigateID(activity.id);
                  }} className="btn btn-primary">More Detail</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Detail
          id={NavigateID}
          data={NavigateData}
          onBack={() => {
            setNavigateData(undefined);
            setNavigateID(0);
          }}
        />
      )}
    </WithNavbar>
  );
}
export default App;
