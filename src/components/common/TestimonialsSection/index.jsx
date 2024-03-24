import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Pagination,Autoplay } from "swiper/modules";

import qouteIcon from "../../../assets/icons/right-quote (2).png";
import user1 from "../../../assets/images/user (1).jpg";
import user2 from "../../../assets/images/user (2).jpg";
import user3 from "../../../assets/images/user (3).jpg";
import user4 from "../../../assets/images/user (4).jpg";
import user5 from "../../../assets/images/user (5).jpg";
import user6 from "../../../assets/images/user (6).jpg";
import user7 from "../../../assets/images/user (7).jpg";
import user8 from "../../../assets/images/user (8).jpg";

export default function TestimonialCarousel() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        
        modules={[EffectCoverflow, Pagination, Autoplay]}
        loop={true}

      >
      
        <SwiperSlide>
          <div className="testimonialBox">
            <div className="qoute">
              <img src={qouteIcon} />
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea connodo consequat.
              </p>
              <div className="details">
                <div className="imgBx">
                  <img src={user1} />
                </div>
                <h3>
                  Someone Famous<br></br>
                  <span>creative designer</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonialBox">
            <div className="qoute">
              <img src={qouteIcon} />
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea connodo consequat.
              </p>
              <div className="details">
                <div className="imgBx">
                  <img src={user2} />
                </div>
                <h3>
                  Someone Famous<br></br>
                  <span>creative designer</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonialBox">
            <div className="qoute">
              <img src={qouteIcon} />
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea connodo consequat.
              </p>
              <div className="details">
                <div className="imgBx">
                  <img src={user3} />
                </div>
                <h3>
                  Someone Famous<br></br>
                  <span>creative designer</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonialBox">
            <div className="qoute">
              <img src={qouteIcon} />
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea connodo consequat.
              </p>
              <div className="details">
                <div className="imgBx">
                  <img src={user4} />
                </div>
                <h3>
                  Someone Famous<br></br>
                  <span>creative designer</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonialBox">
            <div className="qoute">
              <img src={qouteIcon} />
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea connodo consequat.
              </p>
              <div className="details">
                <div className="imgBx">
                  <img src={user5} />
                </div>
                <h3>
                  Someone Famous<br></br>
                  <span>creative designer</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonialBox">
            <div className="qoute">
              <img src={qouteIcon} />
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea connodo consequat.
              </p>
              <div className="details">
                <div className="imgBx">
                  <img src={user6} />
                </div>
                <h3>
                  Someone Famous<br></br>
                  <span>creative designer</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonialBox">
            <div className="qoute">
              <img src={qouteIcon} />
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea connodo consequat.
              </p>
              <div className="details">
                <div className="imgBx">
                  <img src={user7} />
                </div>
                <h3>
                  Someone Famous<br></br>
                  <span>creative designer</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonialBox">
            <div className="qoute">
              <img src={qouteIcon} />
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea connodo consequat.
              </p>
              <div className="details">
                <div className="imgBx">
                  <img src={user8} />
                </div>
                <h3>
                  Someone Famous<br></br>
                  <span>creative designer</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
