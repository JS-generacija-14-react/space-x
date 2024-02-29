import { useState, useEffect } from "react";
import instance from "../../services/api";
import LaunchesList from "../launches/LaunchesList";

const LaunchesView = () => {
  const [launches, setLaunches] = useState(null);

  useEffect(() => {
    instance.get("/launches").then((res) => setLaunches(res.data.slice(0, 10)));
  }, []);
  return (
    <>
      <h1>LaunchesView</h1>
      {launches ? <LaunchesList launches={launches} /> : null}
    </>
  );
};

export default LaunchesView;
