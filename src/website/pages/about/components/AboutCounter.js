import React from 'react'

const AboutCounter = () => {
  return (
    <div className="ptpx50 pbpx50 md-ptpx30 md-pbpx1 sm-ptpx10 sm-pbpx1">
      <div className="container mx-auto">
        <div className="flex sm-grid-cols-2 justify-around mtpx50 mbpx50  md-mtpx30 sm-mbpx30">
          <div className="mlpx5 mrpx5 sm-mtpx10">
            <h4 className="fsize60 md-fsize30 sm-fsize20 mtpx1 mbpx1 text-center textprimary font-300">
              40<sub className="fsize20 md-fsize16 sm-fsize14">%</sub>
            </h4>
            <p className="text-gray fsize16 md-fsize15 sm-fsize14 md-mtpx10 sm-mtpx6 mtpx12 text-center">
              Years of Excellence
            </p>
          </div>
          <div className="mlpx5 mrpx5 sm-mtpx10">
            <h4 className="fsize60 md-fsize30 sm-fsize20 mtpx1 mbpx1 text-center textprimary font-300">
              100<sub className="fsize20 md-fsize16 sm-fsize14">%</sub>
            </h4>
            <p className="text-gray fsize16 md-fsize15 sm-fsize14 md-mtpx10 sm-mtpx6 mtpx12 text-center">
              Client Satisfaction
            </p>
          </div>
          <div className="mlpx5 mrpx5 sm-mtpx10">
            <h4 className="fsize60 md-fsize30 sm-fsize20 mtpx1 mbpx1 text-center textprimary font-300">
              80<sub className="fsize20 md-fsize16 sm-fsize14">%</sub>
            </h4>
            <p className="text-gray fsize16 md-fsize15 sm-fsize14 md-mtpx10 sm-mtpx6 mtpx12 text-center">
              Cases Completed
            </p>
          </div>
          <div className="mlpx5 mrpx5 sm-mtpx10">
            <h4 className="fsize60 md-fsize30 sm-fsize20 mtpx1 mbpx1 text-center textprimary font-300">
              20<sub className="fsize20 md-fsize16 sm-fsize14">%</sub>
            </h4>
            <p className="text-gray fsize16 md-fsize15 sm-fsize14 md-mtpx10 sm-mtpx6 mtpx12 text-center">
              Consultants
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCounter
