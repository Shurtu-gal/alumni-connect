import React from "react";
import { Section } from "./style";
import { Card } from "../shared";
import mentors from "../../../config/Mentors";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";
import { EffectCoverflow, EffectCube, Pagination } from "swiper";

const Mentors = ({ id }) => {
  return (
    <Section id={id}>
      <h1>The Alumni</h1>
      <h3>The Mentors guiding everyone in the team</h3>
      <Swiper
        grabCursor={true}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {mentors.mentorList.map((elem) => (
          <SwiperSlide key={elem.id}>
            <Card
              src={elem.src}
              alt={elem.alt}
              desc={elem.desc}
              key={elem.id}
              id={elem.id}
              name={elem.name}
            ></Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export default Mentors;
