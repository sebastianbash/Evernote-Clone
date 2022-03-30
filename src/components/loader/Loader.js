import React, { useState, useEffect } from "react";
import Router from "next/router";
import BounceLoader from "react-spinners/BounceLoader";

const Loader = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen w-screen bg-slate-200">
          <BounceLoader
            color={"#F37A24"}
            loading={loading}
            size={80}
          />
        </div>
      ) : (
        () => Router.push("/")
      )}
    </>
  );
};

export default Loader;
