import React from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay, Navigation, Pagination} from "swiper/modules"
import "swiper/css"

// img
import card1 from "../../assets/img/service/1.png"
import card2 from "../../assets/img/service/2.png"
import card3 from "../../assets/img/service/3.png"
import card4 from "../../assets/img/service/4.png"

const services = [
    {img: card1, title: "Роспись стен в офисе"},
    {img: card2, title: "Граффити"},
    {img: card3, title: "Роспись в детской"},
    {img: card4, title: "Роспись в квартире"},
]

const Services = () => {
    return (
        <section className="py-[40px] bg-[#f9f9f9]">
            <div className="container2">
                <h1 className="mb-[20px] text-center font-semibold text-2xl text-[#272727]">
                    Услуги
                </h1>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: {slidesPerView: 2},
                        1024: {slidesPerView: 4},
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    loop={true}
                    className="!pb-10">
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col gap-[10px] justify-center items-center bg-white p-[15px] rounded-2xl hover:-translate-y-1.5 hover:shadow-xl transition duration-200">
                                <img src={service.img} alt={service.title} />

                                <h1 className="font-semibold text-lg text-center text-[#272727]">
                                    {service.title}
                                </h1>

                                <button className="border border-[#939393] text-[#939393] p-[8px_25px] hover:border-[#ff5681] hover:bg-[#ff5681] hover:text-white rounded-full active:scale-[.98] cursor-pointer">
                                    Подробнее
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Services
