import { SwiperSlide, Swiper as ReactSwiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from "swiper/modules";

const Featured = () => {
    return (
        <div className="py-16">
            <div>
                <h2 className="text-4xl font-semibold text-center">Featured Bikes</h2>
            </div>
            <ReactSwiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                modules={[ Autoplay]}
                className="mySwiper my-16"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/5spt41p/bike3.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/C9R35PZ/download-1.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/xjzdhrJ/download.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/pn3yrPm/bike2.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/F880C9f/bike4.png" alt="" />
                </SwiperSlide>
            </ReactSwiper>
        </div>
    );
};

export default Featured;
