import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/swiper.min.css";

const AboutBlog = () => {
    SwiperCore.use([Autoplay]);
  return (
    <div className="bg-f8faff ptpx60 pbpx60 md-ptpx30 md-pbpx30 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <Swiper
          grabCursor={true}
          className="mySwiper"
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
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1.1,
              spaceBetween: 20,
            },
            425: {
              slidesPerView: 1.1,
              spaceBetween: 20,
            },
            325: {
              slidesPerView: 1.1,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <div className="bgwhite shadow">
              <img
                src="https://html.creativegigstf.com/charles/images/home/15.jpg"
                alt="banner"
                className="aboutblog-img flex object-cover w-full"
              />
              <div className="p16">
                <h4 className="fsize22 md-fsize18 sm-fsize16 mbpx1 mtpx1 textprimary font-600">
                  Innovation Solution
                </h4>
                <p className="fsize16 md-fsize14 sm-fsize14 mtpx6 textgray">
                  The Love Boat soon will be making other run plore strange
                  tools.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bgwhite shadow">
              <img
                src="https://html.creativegigstf.com/charles/images/home/16.jpg"
                alt="banner"
                className="aboutblog-img flex object-cover w-full"
              />
              <div className="p16">
                <h4 className="fsize22 md-fsize18 sm-fsize16 mbpx1 mtpx1 textprimary font-600">
                  Innovation Solution
                </h4>
                <p className="fsize16 md-fsize14 sm-fsize14 mtpx6 textgray">
                  The Love Boat soon will be making other run plore strange
                  tools.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bgwhite shadow">
              <img
                src="https://html.creativegigstf.com/charles/images/home/18.jpg"
                alt="banner"
                className="aboutblog-img flex object-cover w-full"
              />
              <div className="p16">
                <h4 className="fsize22 md-fsize18 sm-fsize16 mbpx1 mtpx1 textprimary font-600">
                  Innovation Solution
                </h4>
                <p className="fsize16 md-fsize14 sm-fsize14 mtpx6 textgray">
                  The Love Boat soon will be making other run plore strange
                  tools.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bgwhite shadow">
              <img
                src="https://html.creativegigstf.com/charles/images/home/19.jpg"
                alt="banner"
                className="aboutblog-img flex object-cover w-full"
              />
              <div className="p16">
                <h4 className="fsize22 md-fsize18 sm-fsize16 mbpx1 mtpx1 textprimary font-600">
                  Innovation Solution
                </h4>
                <p className="fsize16 md-fsize14 sm-fsize14 mtpx6 textgray">
                  The Love Boat soon will be making other run plore strange
                  tools.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default AboutBlog
