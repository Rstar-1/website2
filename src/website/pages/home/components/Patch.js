import React from 'react'

const Patch = () => {
  return (
    <div className="relative patch-img">
      <img
        src="https://html.creativegigstf.com/charles/images/home/2.jpg"
        alt="patch"
        className="w-full patch-img filter-b4 object-cover"
      />
      <div className="absolute top-0 left-0 flex items-center patch-img">
        <div className="container mx-auto flex justify-center">
          <div className="text-center w-70 md-w-90 sm-w-full">
            <h3 className="textwhite font-800 sm-font-400 mtpx1 sm-mtpx6 mbpx1 fsize30 md-fsize23 sm-fsize18">
              We provide high quality services & innovative solutions for the
              realiable growth
            </h3>

            <button className="border-0 cursor-pointer font-500 bgprimary textwhite rounded-5 ptpx12 pbpx12 sm-ptpx8 sm-pbpx8 sm-plpx20 sm-prpx20 plpx35 prpx35 mtpx20 fsize17 sm-fsize13">
              Get A Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patch
