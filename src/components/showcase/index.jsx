import React from "react"

// img
import img from "../../assets/img/showcase.png"

const Showcase = () => {
    return (
        <section className="py-[30px]">
            <div className="container2 bg-[#f9f9f9] rounded-2xl overflow-hidden flex justify-between items-center gap-[50px] ">
                <div className="flex flex-col gap-[40px] p-[40px] justify-center items-start max-[600px]:p-0 max-[600px]:gap-[20px]">
                    <h1 className="font-semibold text-5xl leading-[120%] text-[#272727] max-[600px]:text-[25px]">
                        Роспись стен в <br /> Санкт-Петербурге
                    </h1>

                    <p className="font-normal text-base leading-[140%] text-[#272727]">
                        Закажите роспись стен в Санкт-Петербурге от
                        художественной студии Нимбус. Авторская техника росписи.
                        Оформляем квартиры, детские и офисы от 1 дня. Создаем
                        эскизы, сами закупаем материалы и оставляем всё в
                        чистоте. Вам нужно только позвонить нам.
                    </p>

                    <div className="flex justify-between items-center p-[3px] h-[50px] rounded-xl overflow-hidden bg-[#fff] w-full">
                        <input
                            type="text"
                            className="outline-none h-full w-full px-[10px]"
                            placeholder="0 (000) 000-00-00"
                        />

                        <button className="h-full px-[30px] rounded-lg active:scale-[.98] bg-[#ff5681] text-white cursor-pointer">
                            заказать
                        </button>
                    </div>
                </div>

                <div className="flex flex-1/1 justify-center items-center max-[1100px]:hidden">
                    <img src={img} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Showcase
