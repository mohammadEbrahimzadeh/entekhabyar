import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar d-flex col-12 p-4 flex-row-reverse  bg-dark align-items-center  ">
      <div className="  d-flex  align-items-center  justify-content-center  containerImgLogo ">
        <img className="   imgLogo " src="/images/main.png" alt="" />
      </div>
      <div className="col-11 titleNavbar d-flex  align-items-center justify-content-end   text-white text-end pe-3">
        سامانه انتخاب یار
      </div>
    </div>
  );
};

export default Navbar;
