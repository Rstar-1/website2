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
      name: "Services",
      route: "service",
    },
    {
      icon: "grid",
      name: "Gallery",
      route: "gallery",
    },
    {
      icon: "folder",
      name: "Blog",
      route: "blog",
    },
    {
      icon: "phone-call",
      name: "Connect Us",
      route: "connect",
    },
  ];

  return (
    <div className="w-full ptpx10 pbpx30 bgwhite md-ptpx1 md-pbpx1 sm-ptpx1 sm-pbpx1 navbar">
      {sidebarshow ? (
        <div className="bg-glass fixed hidden h-100 md-block sm-block w-full z-99">
          <div className="bgwhite w-90 md-w-40 h-100 absolute right-0 top-0">
            <div className="bgprimary p5">
              <div className="flex items-center justify-between gap-4 plpx10 prpx10">
                <p className="fsize16 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                  Logo
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
                  <div className="plpx20 prpx20 mbpx20">
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
      <div className="container mx-auto">
        <div className="relative flex justify-between items-center ">
          <div className="">
            <img src={logo} alt="logo" className="object-contain nav-logo" />
          </div>
          <div className="flex items-center md-hidden sm-hidden">
            <div className="flex items-center">
              <FeatherIcon icon="map-pin" size={25} className="textdark flex" />
              <div className="mlpx15">
                <h3 className="fsize15 font-500 mtpx1 mbpx1 textdark">
                  Address:
                </h3>
                <p className="fsize12 mtpx1 mbpx1 textgray">
                  Mumbai, Maharashtra
                </p>
              </div>
            </div>
            <div className="flex items-center mlpx30">
              <FeatherIcon icon="mail" size={25} className="textdark flex" />
              <div className="mlpx15">
                <h3 className="fsize15 font-500 mtpx1 mbpx1 textdark">
                  Email:
                </h3>
                <p className="fsize12 mtpx1 mbpx1 textgray">abcd@gmail.com</p>
              </div>
            </div>
            <div className="mlpx30">
              <button className="border-primary plpx20 prpx20 ptpx6 pbpx6 bgwhite textprimary fsize15">
                Get Quote
              </button>
            </div>
          </div>
          <div className="hidden md-block sm-block">
            <div className="bg-fa sidebar-icon rounded-5 justify-center items-center flex">
              <FeatherIcon
                icon="align-justify"
                className="textgray"
                onClick={() => setsidebarshow(true)}
              />
            </div>
          </div>
          <div className="absolute md-hidden sm-hidden bottom-0 left-0 bgprimary z-20 minus-nav ptpx32 pbpx32 w-full">
            <div className="flex items-center justify-between plpx20 prpx40">
              <div className="flex items-center">
                {NavMenu.map((e) => (
                  <>
                    <div className="flex items-center">
                      <NavLink
                        activeClass="active"
                        className="fsize18 activetext mrpx20 mlpx20 cursor-pointer"
                        to={e.route}
                      >
                        {e.name}
                      </NavLink>
                      <p className="textwhite mlpx8">/</p>
                    </div>
                  </>
                ))}
              </div>
              <div className="flex items-center">
                <FeatherIcon
                  icon="facebook"
                  size={17}
                  className="textwhite mlpx12"
                />
                <FeatherIcon
                  icon="instagram"
                  size={17}
                  className="textwhite mlpx12"
                />
                <FeatherIcon
                  icon="linkedin"
                  size={17}
                  className="textwhite mlpx12"
                />
                <FeatherIcon
                  icon="youtube"
                  size={17}
                  className="textwhite mlpx12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
