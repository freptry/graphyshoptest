import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const [winVh, setWinVh] = useState(window.innerHeight);
  const [winVw, setWinVw] = useState(window.innerWidth);

  useEffect(() => {
    const getWindowHeight = () => {
      setWinVh(window.innerHeight);
    };

    const getWindowWidth = () => {
      setWinVw(window.innerWidth);
    };

    window.addEventListener("resize", getWindowHeight);
    window.addEventListener("resize", getWindowWidth);

    return () => {
      window.removeEventListener("resize", getWindowHeight);
      window.removeEventListener("resize", getWindowWidth);
    };
  }, []);

  return (
    <>
      <div id="navbar" className="">
        <div id="navbar-title">
          <Link to="/" className="navbar-brand">
            GRAPHYSHOP
          </Link>
        </div>
      </div>
      <div id="container" className="">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
