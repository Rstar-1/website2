import React from 'react'

const Counter = () => {
  return (
    <div className="relative bg-f8faff count-img">
      <img
        src="https://html.creativegigstf.com/charles/images/home/pattern.png"
        alt="count"
        className="w-full count-img object-contain"
      />
      <div className="absolute top-0 text-left left-0 flex items-center count-img">
        <div className="flex items-center justify-center container mx-auto">
          <div className="w-full text-center">
            <p className="textdark font-600 mbpx1 fsize20 md-fsize16 sm-fsize15">
              COMPANY SUCCESS
            </p>
            <h3 className="textprimary font-800 sm-font-400 mtpx9 sm-mtpx6 leading mbpx1 fsize35 md-fsize24 sm-fsize20">
              Some fun facts about our consulting
            </h3>
            <div className="flex sm-grid-cols-2 justify-around mtpx50 mbpx50 md-mtpx20 md-mbpx20 sm-mtpx10 sm-mbpx10">
              <div className="mlpx5 mrpx5 md-mlpx9 md-mrpx8 sm-mtpx8 sm-mbpx8">
                <h4 className="fsize70 md-fsize30 sm-fsize24 mtpx1 mbpx1 textprimary font-300">
                  40<sub className="fsize20 sm-fsize15 md-fsize16">%</sub>
                </h4>
                <p className="text-gray sm-fsize13 fsize14 mtpx12 sm-mtpx8">
                  Years of Excellence
                </p>
              </div>
              <div className="mlpx5 mrpx5 md-mlpx9 md-mrpx8 sm-mtpx8 sm-mbpx8">
                <h4 className="fsize70 md-fsize30 sm-fsize24 mtpx1 mbpx1 textprimary font-300">
                  100<sub className="fsize20 sm-fsize15 md-fsize16">%</sub>
                </h4>
                <p className="text-gray sm-fsize13 fsize14 mtpx12 sm-mtpx8">
                  Client Satisfaction
                </p>
              </div>
              <div className="mlpx5 mrpx5 md-mlpx9 md-mrpx8 sm-mtpx8 sm-mbpx8">
                <h4 className="fsize70 md-fsize30 sm-fsize24 mtpx1 mbpx1 textprimary font-300">
                  80<sub className="fsize20 sm-fsize15 md-fsize16">%</sub>
                </h4>
                <p className="text-gray sm-fsize13 fsize14 mtpx12 sm-mtpx8">
                  Cases Completed
                </p>
              </div>
              <div className="mlpx5 mrpx5 md-mlpx9 md-mrpx8 sm-mtpx8 sm-mbpx8">
                <h4 className="fsize70 md-fsize30 sm-fsize24 mtpx1 mbpx1 textprimary font-300">
                  20<sub className="fsize20 sm-fsize15 md-fsize16">%</sub>
                </h4>
                <p className="text-gray sm-fsize13 fsize14 mtpx12 sm-mtpx8">
                  Consultants
                </p>
              </div>
            </div>
            <button className="border-0 cursor-pointer font-500 bgprimary textwhite rounded-5 ptpx12 pbpx12 sm-ptpx6 sm-pbpx6 sm-plpx20 sm-prpx20 plpx35 prpx35 mtpx20 md-mtpx5 sm-mtpx5 fsize17 sm-fsize13">
              Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter
