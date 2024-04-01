import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/swiper.min.css";

const OurService = () => {
    SwiperCore.use([Autoplay]);
  return (
    <div className="ptpx60 pbpx60 md-ptpx30 md-pbpx30 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <div className="w-60 mx-auto">
          <h4 className="fsize40 md-fsize30 sm-fsize20 mtpx1 mbpx1 uppercase text-center textdark font-900">
            Our Services
          </h4>
          <p className="text-center mtpx17 fsize17 md-fsize16 sm-fsize14 textgray">
            “Artha embodies the spirit of meaning which we bring to your
            start-up. We provide our founders with all the resources required to
            create companies, today, that will define how business is conducted
            – tomorrow”
          </p>
        </div>
        <div className="mtpx22">
          <Swiper
            grabCursor={true}
            className="mySwiper p10"
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1536: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              991: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
              },
              425: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <div className="d-shadow text-center service-h flex items-center">
                <div className="plpx10 prpx10">
                  <img
                    src="https://html.creativegigstf.com/charles/images/logo/p-1.png"
                    alt="banner"
                    className="partner-img object-contain"
                  />{" "}
                  <h4 className="fsize25 md-fsize23 sm-fsize18 mtpx5 mbpx1 textprimary">
                    About us
                  </h4>
                  <p className="mtpx10 fsize16 sm-fsize14 md-fsize14 textgray">
                    “Artha embodies the spirit of meaning which we bring to your
                    start-up.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-shadow text-center service-h flex items-center">
                <div className="plpx10 prpx10">
                  <img
                    src="https://html.creativegigstf.com/charles/images/logo/p-1.png"
                    alt="banner"
                    className="partner-img object-contain"
                  />{" "}
                  <h4 className="fsize25 md-fsize23 sm-fsize18 mtpx5 mbpx1 textprimary">
                    About us
                  </h4>
                  <p className="mtpx10 fsize16 sm-fsize14 md-fsize14 textgray">
                    “Artha embodies the spirit of meaning which we bring to your
                    start-up.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-shadow text-center service-h flex items-center">
                <div className="plpx10 prpx10">
                  <img
                    src="https://html.creativegigstf.com/charles/images/logo/p-1.png"
                    alt="banner"
                    className="partner-img object-contain"
                  />{" "}
                  <h4 className="fsize25 md-fsize23 sm-fsize18 mtpx5 mbpx1 textprimary">
                    About us
                  </h4>
                  <p className="mtpx10 fsize16 sm-fsize14 md-fsize14 textgray">
                    “Artha embodies the spirit of meaning which we bring to your
                    start-up.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-shadow text-center service-h flex items-center">
                <div className="plpx10 prpx10">
                  <img
                    src="https://html.creativegigstf.com/charles/images/logo/p-1.png"
                    alt="banner"
                    className="partner-img object-contain"
                  />{" "}
                  <h4 className="fsize25 md-fsize23 sm-fsize18 mtpx5 mbpx1 textprimary">
                    About us
                  </h4>
                  <p className="mtpx10 fsize16 sm-fsize14 md-fsize14 textgray">
                    “Artha embodies the spirit of meaning which we bring to your
                    start-up.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default OurService
