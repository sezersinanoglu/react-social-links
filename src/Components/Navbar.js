import React from "react";
import { MdIosShare } from "react-icons/md";
const Navbar = () => {
  return (
    <>
      <div className="navbar" id="navbar">
        <nav>
          <div className="header">
            <div className="right-icon">
              <MdIosShare className="share-icon" />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
