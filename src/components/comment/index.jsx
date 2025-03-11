import React from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"

// img
import img from "../../assets/img/card.png"
import { Autoplay } from "swiper/modules"

const comments = [
    {
        author: "Артём Кукшинский",
        title: "Простые рисунки на стену своими руками",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    },
    {
        author: "Артём Кукшинский",
        title: "Простые рисунки на стену своими руками",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    },
    {
        author: "Артём Кукшинский",
        title: "Простые рисунки на стену своими руками",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    },
]

const Comment = () => {
    return (
        <section className="py-[30px]">
            <div className="container2">
                <h1 className="mb-[20px] text-center font-semibold text-2xl text-[#272727]">
                    Статьи
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
                    {comments.map((comment, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col gap-[10px] bg-[#f9f9f9] rounded-3xl overflow-hidden">
                                <img src={img} alt="" />

                                <div className="flex flex-col gap-[8px] p-[15px]">
                                    <p className="font-light text-sm leading-[150%] text-[#272727] opacity-80">
                                        {comment.author}
                                    </p>
                                    <h3 className="font-bold text-[20px] leading-[150%] text-[#272727]">
                                        {comment.title}
                                    </h3>
                                    <p className="font-normal text-[16px] leading-[150%] text-[#272727] opacity-61">
                                        {comment.text}
                                    </p>

                                    <button className="w-full mt-4 py-[10px] rounded-lg border border-[#ff6b90] text-[#ff6b90] cursor-pointer active:scale-[.98] hover:text-white hover:bg-[#ff6b90] transition duration-[.2s]">
                                        Подробнее
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Comment
