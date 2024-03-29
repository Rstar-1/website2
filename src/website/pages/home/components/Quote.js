import React from "react";

const Quote = () => {
  return (
    <div className="ptpx60 pbpx60 md-ptpx30 md-pbpx30 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <h4 className="fsize40 md-fsize35 sm-fsize20 mtpx1 mbpx1 text-center textdark font-900">
          FREE CONSULTATION
        </h4>
        <hr className="quote-hr mtpx10" />
        <p className="text-center mtpx17 fsize17 md-fsize15 sm-fsize14 textgray">
          A tale of a fateful trip that started from this tropic port aboard
          this tiny ship today stillers
        </p>
        <div className="flex sm-block bgwhite d-shadow rounded-10 mtpx17 overflow-hidden">
          <div className="w-50 sm-w-full">
            <img
              src="https://html.creativegigstf.com/charles/images/home/9.jpg"
              alt="connect"
              className="connect-img object-cover w-full flex"
            />
          </div>
          <div className="w-50 sm-w-full p20 sm-p10">
            <div className="grid-cols-2 sm-grid-cols-1 mtpx20 md-mtpx5 sm-mtpx2 md-mtpx10 gap-12">
              <div className="mlpx10 mrpx10 md-mlpx5 md-mrpx5 sm-mlpx2 sm-mrpx2 mtpx20 md-mtpx5 sm-mtpx2">
                <input
                  className="ptpx6 sm-w-90 w-full pbpx6 input-bordb"
                  placeholder="First Name"
                />
              </div>
              <div className="mlpx10 mrpx10 md-mlpx5 md-mrpx5 sm-mlpx2 sm-mrpx2 mtpx20 md-mtpx5 sm-mtpx2">
                <input
                  className="ptpx6 sm-w-90 w-full pbpx6 input-bordb"
                  placeholder="Last Name"
                />
              </div>
              <div className="mlpx10 mrpx10 md-mlpx5 md-mrpx5 sm-mlpx2 sm-mrpx2 mtpx20 md-mtpx5 sm-mtpx2">
                <input
                  className="ptpx6 sm-w-90 w-full pbpx6 input-bordb"
                  placeholder="Email Addres"
                />
              </div>
              <div className="mlpx10 mrpx10 md-mlpx5 md-mrpx5 sm-mlpx2 sm-mrpx2 mtpx20 md-mtpx5 sm-mtpx2">
                <input
                  className="ptpx6 sm-w-90 w-full pbpx6 input-bordb"
                  placeholder="Phone No."
                />
              </div>
            </div>
            <div className="mlpx10 mrpx10 md-mlpx5 md-mrpx5 sm-mlpx2 sm-mrpx2 mtpx40 md-mtpx16 sm-mtpx15">
              <textarea
                className="ptpx6 sm-w-90 w-full pbpx6 input-bordb"
                placeholder="Message"
                rows={5}
              ></textarea>
            </div>
            <button className="border-0 cursor-pointer font-500 bgprimary textwhite rounded-5 ptpx12 pbpx12 sm-ptpx8 sm-pbpx8 sm-plpx20 sm-prpx20 plpx35 prpx35 mtpx30 sm-mtpx10 fsize17 sm-fsize13">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
