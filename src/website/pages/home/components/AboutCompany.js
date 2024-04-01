import React from "react";

const AboutCompany = () => {
  return (
    <div className="ptpx60 pbpx60 md-ptpx30 md-pbpx30 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <div className="flex sm-block w-full items-center">
          <div className="w-50 sm-w-full sm-mtpx10 prpx20 md-prpx9 sm-prpx1  ">
            <h4 className="fsize35 md-fsize23 sm-fsize18 mtpx1 mbpx1 textprimary">
              About us
            </h4>
            <p className="mtpx17 fsize16 sm-fsize14 md-fsize14 textgray">
              We spot, invest, and nurture passionate founders obsessed with
              solving the challenges of Indian consumers and businesses.<br></br> We are
              an energetic team of serial entrepreneurs, super-angels & venture
              capital professionals with an established knack of choosing
              winners at their early stages.<br></br> With our founders, we design &
              support robust models to create category leaders that deliver
              massive value for every stakeholder.
            </p>
            <button className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx9 pbpx9 sm-ptpx6 sm-pbpx6 sm-plpx20 sm-prpx20 plpx35 prpx35 mtpx20 fsize16 sm-fsize13 bgprimary">
              Know More
            </button>
          </div>
          <div className="w-50 sm-w-full plpx20 md-plpx1 sm-plpx1">
            <img
              src="https://nexuscluster.blob.core.windows.net/server01/artha-venture-fund/undefined/0.010275370141285878.png-AAmxQHtYIJ41nrH4y1qhU-1710152534"
              className="w-full abcom-img object-cover"
              alt="abcom-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
