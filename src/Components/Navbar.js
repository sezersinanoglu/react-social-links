import React, { useState, useEffect } from "react";
import { RWebShare } from "react-web-share";
import { MdIosShare, MdShare, MdWbSunny, MdAcUnit } from "react-icons/md";

const getStorageTheme = () => {
  let theme = "light";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getStorageTheme());
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <div className="navbar" id="navbar">
        <nav>
          <div className="header">
            <div className="left-icon">
              <a onClick={toggleTheme}>
                {theme ? <MdWbSunny /> : <MdAcUnit />}
              </a>
            </div>
            <div className="right-icon">
              <RWebShare
                data={{
                  text: "Sezer Sinanoglu Social Links",
                  url: "https://on.natgeo.com/2zHaNup",
                  title: "Sezer Sinanoglu Social Links",
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <a>
                  <MdShare />
                </a>
              </RWebShare>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
