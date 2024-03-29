import React from 'react'

const Overlapabout = () => {
  return (
    <div>
      <div
        className="md-about-height sm-about-height"
        style={{
          background:
            'url("https://html.creativegigstf.com/charles/images/home/11.jpg")',
          backgroundAttachment: "fixed",
          height: "570px",
        }}
      >
        <div className="bg-overlay relative">
          <div className="container mx-auto">
            <h4 className="fsize35 md-fsize24 sm-fsize20 text-center ptpx80 md-ptpx30 sm-ptpx17 uppercase font-900 mtpx1 mbpx1 textwhite">
              WE ARE ALWAYS BEST
            </h4>
            <hr className="aboverlap-hr mtpx10" />
            <p className="text-center mtpx17 md-mtpx12 sm-mtpx8 md-fsize14 sm-fsize14 fsize18 textwhite">
              A tale of a fateful trip that started from this tropic port aboard
              this tiny ship today stillers
            </p>
          </div>
          <div className="about-absolute ">
            <div className="container mx-auto">
              <div className="w-90 md-w-full sm-w-full mtpx90 md-mtpx50 sm-mtpx20 shadow overflow-hidden mx-auto rounded-5 bgwhite">
                <div className="flex items-center">
                  <div className="w-50 sm-w-full p35 md-p24 sm-p15">
                    <div className="flex items-center md-items-start sm-items-start">
                      <img
                        src="https://html.creativegigstf.com/charles/images/icon/1.png"
                        alt="abouticons"
                        className="about-iconsimg"
                      />
                      <div className="mlpx16">
                        <h5 className="fsize21 md-fsize18 sm-fsize15 mtpx1 mbpx1 font-600 textdark">
                          Best Strategy
                        </h5>
                        <p className="fsize16 md-fsize14 sm-fsize13 md-mtpx3 sm-mtpx3 mtpx7 textgray font-500">
                          The Love Boat soon will be making another run plore
                          strange tools enter new worlds.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center md-items-start sm-items-start mtpx40 md-mtpx20 sm-mtpx10">
                      <img
                        src="https://html.creativegigstf.com/charles/images/icon/2.png"
                        alt="abouticons"
                        className="about-iconsimg"
                      />
                      <div className="mlpx16">
                        <h5 className="fsize21 md-fsize18 sm-fsize15 mtpx1 mbpx1 font-600 textdark">
                          High-Quality Services
                        </h5>
                        <p className="fsize16 md-fsize14 sm-fsize13 md-mtpx3 sm-mtpx3 mtpx7 textgray font-500">
                          The Love Boat soon will be making another run plore
                          strange tools enter new worlds.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center md-items-start sm-items-start mtpx40 md-mtpx20 sm-mtpx10">
                      <img
                        src="https://html.creativegigstf.com/charles/images/icon/3.png"
                        alt="abouticons"
                        className="about-iconsimg"
                      />
                      <div className="mlpx16">
                        <h5 className="fsize21 md-fsize18 sm-fsize15 mtpx1 mbpx1 font-600 textdark">
                          Friendly Support
                        </h5>
                        <p className="fsize16 md-fsize14 sm-fsize13 md-mtpx3 sm-mtpx3 mtpx7 textgray font-500">
                          The Love Boat soon will be making another run plore
                          strange tools enter new worlds.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-50 sm-hidden">
                    <img
                      src="https://html.creativegigstf.com/charles/images/home/15.jpg"
                      className="w-full overlapaboutimg object-cover flex"
                      alt="overlapaboutimg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ptpx100 pbpx50"></div>
    </div>
  );
}

export default Overlapabout
