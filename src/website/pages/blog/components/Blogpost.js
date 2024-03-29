import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";

const Blogpost = () => {
  const [sidebarshow, setsidebarshow] = useState(false);
  return (
    <div className="ptpx60 pbpx60 md-ptpx30 md-pbpx30 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        {sidebarshow ? (
          <div className="bg-glass fixed top-0 hidden left-0 h-100 md-block sm-block w-full z-99">
            <div className="bgwhite w-90 h-100 absolute right-0 top-0">
              <div className="bgprimary p5">
                <div className="flex items-center justify-between gap-4 plpx10 prpx10">
                  <p className="fsize16 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                    Filter
                  </p>
                  <FeatherIcon
                    icon="x"
                    className="textwhite cursor-pointer"
                    size={17}
                    onClick={() => setsidebarshow(false)}
                  />
                </div>
              </div>
              <div className="plpx10 prpx10">
              <div className="">
                <input placeholder="Search" className="w-full input-bordb" />
              </div>
              <div className="mtpx10 flex items-center gap-10 flex-wrap">
                <div className="bgprimary ptpx6 pbpx6 plpx20 prpx20 rounded-5 cursor-pointer">
                  <p className="fsize13 textwhite font-500">
                    Travel And Aviation
                  </p>
                </div>
                <div className="border-primary ptpx6 pbpx6 plpx20 prpx20 rounded-5 cursor-pointer">
                  <p className="fsize13 textdark font-500"> Service</p>
                </div>
                <div className="border-primary ptpx6 pbpx6 plpx20 prpx20 rounded-5 cursor-pointer">
                  <p className="fsize13 textdark font-500">Business </p>
                </div>
                <div className="border-primary ptpx6 pbpx6 plpx20 prpx20 rounded-5 cursor-pointer">
                  <p className="fsize13 textdark font-500">Customer Products</p>
                </div>
                <div className="border-primary ptpx6 pbpx6 plpx20 prpx20 rounded-5 cursor-pointer">
                  <p className="fsize13 textdark font-500">
                    Financial Services
                  </p>
                </div>
              </div>
              <div className="mtpx20">
                <h6 className="fsize24 md-fsize21 sm-fsize16 mtpx5 mbpx1 textprimary font-500">
                  Contact Us
                </h6>
                <div className="">
                  <div className="mtpx10">
                    <input
                      className="ptpx6 w-full pbpx6 input-bordb"
                      placeholder="Email Addres"
                    />
                  </div>
                  <div className="mtpx10">
                    <input
                      className="ptpx6 w-full pbpx6 input-bordb"
                      placeholder="Phone No."
                    />
                  </div>
                  <div className="mtpx10">
                    <textarea
                      className="ptpx6 w-full pbpx6 text-bordb"
                      placeholder="Message"
                      rows={4}
                    ></textarea>
                  </div>
                  <button className="border-0 cursor-pointer font-500 bgprimary textwhite rounded-5 ptpx12 pbpx12 sm-ptpx8 sm-pbpx8 sm-plpx20 sm-prpx20 plpx35 prpx35 mtpx20 fsize17 sm-fsize13">
                    Connect
                  </button>
                </div>
              </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className="hidden md-hidden sm-flex justify-end">
          <div className="bgprimary p5 sidebar-icon rounded-5 justify-center items-center flex">
            <FeatherIcon
              icon="sliders"
              className="textwhite"
              onClick={() => setsidebarshow(true)}
            />
          </div>
        </div>
        <div className="flex md-flex sm-block w-full sm-mtpx20">
          <div className="w-70 md-w-60 sm-w-full mrpx30 md-mrpx9 sm-mrpx1">
            <div className="mbpx40">
              <div className="relative blog-img">
                <img
                  src="https://html.creativegigstf.com/charles/images/home/20.jpg"
                  alt="servdetailsimg"
                  className="blog-img w-full filter-b6 rounded-10 flex object-cover"
                />
                <div className="absolute blog-img top-0 left-0 flex items-end">
                  <div className="p20 md-p18 sm-p10">
                    <p className="textwhite fsize19 md-fsize16 sm-fsize13 bgprimary ptpx4 pbpx4 plpx12 prpx12 rounded-5 font-500">
                      12/12/2023
                    </p>
                  </div>
                </div>
              </div>
              <h4 className="mtpx20 sm-mtpx10 md-fsize25 sm-fsize21 mbpx1 fsize30 textdark font-600">
                Business Services
              </h4>
              <p className="mtpx10 md-fsize16 sm-fsize14 fsize18 textgray font-500 line-clamp3 sm-mtpx6">
                A tale of a fateful trip that started from this tropic port
                aboard this tiny ship today still wanted by the government
                apartment in the sky moving on up to the east side a family to
                explore strange new worlds to seek out new life and new
                civilizations to boldly go where no man has gone before you
                would see the biggest gift would be from me and the card
                attached would say thank you for being a friend.
              </p>
            </div>
            <div className="mbpx40">
              <div className="relative blog-img">
                <img
                  src="https://html.creativegigstf.com/charles/images/home/11.jpg"
                  alt="servdetailsimg"
                  className="blog-img w-full filter-b6 rounded-10 flex object-cover"
                />
                <div className="absolute blog-img top-0 left-0 flex items-end">
                  <div className="p20 md-p18 sm-p10">
                    <p className="textwhite fsize19 md-fsize16 sm-fsize13 bgprimary ptpx4 pbpx4 plpx12 prpx12 rounded-5 font-500">
                      12/12/2023
                    </p>
                  </div>
                </div>
              </div>
              <h4 className="mtpx20 sm-mtpx10 md-fsize25 sm-fsize21 mbpx1 fsize30 textdark font-600">
                Business Services
              </h4>
              <p className="mtpx10 md-fsize16 sm-fsize14 fsize18 textgray font-500 line-clamp3 sm-mtpx6">
                A tale of a fateful trip that started from this tropic port
                aboard this tiny ship today still wanted by the government
                apartment in the sky moving on up to the east side a family to
                explore strange new worlds to seek out new life and new
                civilizations to boldly go where no man has gone before you
                would see the biggest gift would be from me and the card
                attached would say thank you for being a friend.
              </p>
            </div>
          </div>
          <div className="w-30 md-w-40 sm-w-full mlpx30 md-mlpx9 sm-mlpx1">
            <div className="">
              <input placeholder="Search" className="w-full input-bordb" />
            </div>
            <h5 className="fsize24 md-fsize21 sm-fsize18 mtpx20 mtpx5 mbpx1 textprimary font-500">
              Filter
            </h5>
            <div className="mtpx20 md-mtpx5 sm-mtpx1 flex items-center gap-10 flex-wrap">
              <div className="bgprimary p7 md-p5 p4 rounded-5 cursor-pointer">
                <p className="fsize13 textwhite font-500">
                  Travel And Aviation
                </p>
              </div>
              <div className="border-primary p7 md-p5 p4 rounded-5 cursor-pointer">
                <p className="fsize13 textdark font-500"> Service</p>
              </div>
              <div className="border-primary p7 md-p5 p4 rounded-5 cursor-pointer">
                <p className="fsize13 textdark font-500">Business </p>
              </div>
              <div className="border-primary p7 md-p5 p4 rounded-5 cursor-pointer">
                <p className="fsize13 textdark font-500">Customer Products</p>
              </div>
              <div className="border-primary p7 md-p5 p4 rounded-5 cursor-pointer">
                <p className="fsize13 textdark font-500">Financial Services</p>
              </div>
            </div>
            <div className="mtpx40">
              <h6 className="fsize24 md-fsize21 sm-fsize18 mtpx5 mbpx1 textprimary font-500">
                Contact Us
              </h6>
              <div className="mtpx10 md-mtpx1 sm-mtpx1">
                <div className="mtpx10">
                  <input
                    className="ptpx6 w-full pbpx6 input-bordb"
                    placeholder="Email Addres"
                  />
                </div>
                <div className="mtpx10">
                  <input
                    className="ptpx6 w-full pbpx6 input-bordb"
                    placeholder="Phone No."
                  />
                </div>
                <div className="mtpx10">
                  <textarea
                    className="ptpx6 w-full pbpx6 text-bordb"
                    placeholder="Message"
                    rows={4}
                  ></textarea>
                </div>
                <button className="border-0 cursor-pointer font-500 bgprimary textwhite rounded-5 ptpx12 pbpx12 sm-ptpx6 sm-pbpx6 sm-plpx20 sm-prpx20 plpx35 prpx35 mtpx30 fsize17 sm-fsize13">
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpost;
