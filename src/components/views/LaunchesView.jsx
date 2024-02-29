import { useState, useEffect } from "react";
import instance from "../../services/api";
import LaunchesList from "../launches/LaunchesList";
import Loading from "../loading/Loading";
import Error from "../error/Error";

const LaunchesView = () => {
  const [launches, setLaunches] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance
      .get("/launches")
      .then((res) => setLaunches(res.data.slice(0, 10)))
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <h1>LaunchesView</h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <LaunchesList launches={launches} />
      )}
    </>
  );
};

export default LaunchesView;
