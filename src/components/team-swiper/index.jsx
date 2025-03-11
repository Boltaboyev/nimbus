import React from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import {Autoplay} from "swiper/modules"


// img
import img from "../../assets/img/team.png"

// icons
import {FaStar} from "react-icons/fa6"

const teamMembers = [
    {name: "Анна", img: img},
    {name: "Олег", img: img},
    {name: "Мария", img: img},
]

const TeamSwiper = () => {
    return (
        <section className="py-[30px]">
            <div className="container2">
                <h1 className="mb-[20px] text-center font-semibold text-2xl text-[#272727]">
                    Мы - команда
                </h1>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: {slidesPerView: 2},
                        1024: {slidesPerView: 3},
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    loop={true}
                    className="!pb-10">
                    {teamMembers.map((member, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col gap-[10px] justify-start items-start py-[20px] overflow-hidden rounded-3xl bg-[rgba(255,86,129,0.1)]">
                                <div className="w-full flex justify-start items-start">
                                    <div className="w-[20px] h-[167px] bg-[#ff5681]"></div>
                                    <img src={member.img} alt={member.name} />
                                </div>

                                <div className="flex flex-col gap-[6px] justify-start items-start p-[15px]">
                                    <h1 className="font-bold text-[20px] leading-[150%] text-[#272727]">
                                        {member.name}
                                    </h1>
                                    <div className="flex justify-start items-center gap-[5px] text-[#ff5681]">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>

                                    <p className="font-normal text-[16px] leading-[150%] text-[#272727] opacity-61">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default TeamSwiper
