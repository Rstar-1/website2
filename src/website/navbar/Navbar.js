import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [sidebarshow, setsidebarshow] = useState(false);
  const NavMenu = [
    {
      icon: "home",
      name: "Home",
      route: "home",
    },
    {
      icon: "user",
      name: "About Us",
      route: "about",
    },
    {
      icon: "settings",
      name: "Plans",
      route: "plans",
    },
    {
      icon: "folder",
      name: "Blogs",
      route: "blogs",
    },
    {
      icon: "grid",
      name: "Gallery",
      route: "gallery",
    },
    {
      icon: "phone-call",
      name: "Connect Us",
      route: "connect",
    },
  ];

  return (
    <div className="w-full ptpx4 pbpx4 bgwhite sm-ptpx1 sm-pbpx1 navbar">
      {sidebarshow ? (
        <div className="bg-glass fixed hidden h-100 sm-block w-full z-99">
          <div className="bgwhite w-90 h-100 absolute right-0 top-0">
            <div className="bgprimary p5">
              <div className="flex items-center justify-between gap-4 plpx10 prpx10">
                <p className="fsize16 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                  RS Developers
                </p>
                <FeatherIcon
                  icon="x"
                  className="textwhite cursor-pointer"
                  size={17}
                  onClick={() => setsidebarshow(false)}
                />
              </div>
            </div>
            <div className="mtpx20">
              {NavMenu.map((e) => (
                <>
                  <div className="plpx20 prpx20 mbpx25">
                    <NavLink
                      to={e.route}
                      activeClass="active"
                      className="fsize13 textforth flex items-center gap-8 cursor-pointer"
                    >
                      <FeatherIcon icon={e.icon} size={16} />
                      <p className="my-0" onClick={() => setsidebarshow(false)}>
                        {e.name}
                      </p>
                    </NavLink>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      ) : null}
      <div className="flex justify-between items-center container mx-auto">
        <div className="">
          <NavLink to="/">
            <img src={logo} alt="logo" className="object-contain nav-logo" />
          </NavLink>
        </div>
        <div className="flex justify-center gap-5 items-center sm-hidden">
          {NavMenu.map((e) => (
            <>
              <NavLink
                activeClass="active"
                className="fsize17 font-500 mlpx16 mrpx16 activetext cursor-pointer"
                to={e.route}
              >
              {e.name}
              </NavLink>
            </>
          ))}
        </div>
        <div className="hidden sm-block">
          <div className="bg-ec sidebar-icon rounded-5 justify-center items-center flex">
            <FeatherIcon
              icon="align-justify"
              className="textgray"
              onClick={() => setsidebarshow(true)}
            />
          </div>
        </div>
        <div className="flex sm-hidden">
          <button className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx7 pbpx7 plpx24 prpx24 fsize15 bgprimary">
            Enquity Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
