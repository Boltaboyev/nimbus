import React from "react"

const Wrap = () => {
    return (
        <section className="py-[30px]">
            <div className="container2">
                <div className="flex flex-col items-center justify-center gap-[10px]">
                    <h1 className="font-semibold text-2xl text-[#272727]">
                        Мы - команда
                    </h1>

                    <p className="font-normal text-base leading-[140%] text-center text-[#272727] w-[60%] max-[848px]:w-full">
                        О нас написали в Деловом Петербурге, Невских Новостях,
                        Авито Подкасте, Подкасте Либо-Либо, vc.ru и многие
                        другие. Также мы открыли свою школу росписи стен,
                        запустили франшизу и зарегистрировали товарный знак.
                    </p>
                </div>

                <div className="mt-[30px] flex flex-wrap gap-[20px] justify-center">
                    <div className="p-[20px_30px] rounded-xl border border-[#e6e6e6] bg-[#272727] max-[420px]:text-[13px] flex justify-center items-center font-semibold text-lg text-[#fff]">
                        Наши успехи
                    </div>

                    <div className="p-[20px_30px] rounded-xl border border-[#e6e6e6] bg-white max-[420px]:text-[13px] flex justify-center items-center font-semibold text-lg text-[#272727]">
                        За <span className="text-[#ff5681]">2021 </span> год в
                        Санкт-Петербурге
                    </div>

                    <div className="p-[20px_30px] rounded-xl border border-[#e6e6e6] bg-white max-[420px]:text-[13px] flex justify-center items-center font-semibold text-lg text-[#272727]">
                        {" "}
                        <span className="text-[#ff5681]">10</span> детских
                    </div>

                    <div className="p-[20px_30px] rounded-xl border border-[#e6e6e6] bg-white max-[420px]:text-[13px] flex justify-center items-center font-semibold text-lg text-[#272727]">
                        {" "}
                        <span className="text-[#ff5681]">14</span> офисов
                    </div>

                    <div className="p-[20px_30px] rounded-xl border border-[#e6e6e6] bg-white max-[420px]:text-[13px] flex justify-center items-center font-semibold text-lg text-[#272727]">
                        {" "}
                        <span className="text-[#ff5681]">52</span> пекарни
                    </div>

                    <div className="p-[20px_30px] rounded-xl border border-[#e6e6e6] bg-white max-[420px]:text-[13px] flex justify-center items-center font-semibold text-lg text-[#272727]">
                        {" "}
                        <span className="text-[#ff5681]">12</span> квартир
                    </div>

                    <div className="p-[20px_30px] rounded-xl border border-[#e6e6e6] bg-white max-[420px]:text-[13px] flex justify-center items-center font-semibold text-lg text-[#272727]">
                        {" "}
                        <span className="text-[#ff5681]">7</span> салонов
                        красоты
                    </div>

                    <div className="p-[20px_30px] rounded-xl border border-[#e6e6e6] bg-white max-[420px]:text-[13px] flex justify-center items-center font-semibold text-lg text-[#272727]">
                        {" "}
                        <span className="text-[#ff5681]">3</span> школы
                    </div>

                    <div className="p-[20px_30px] rounded-xl border border-[#e6e6e6] bg-white max-[420px]:text-[13px] flex justify-center items-center font-semibold text-lg text-[#272727]">
                        {" "}
                        <span className="text-[#ff5681]">2</span> кофейни
                    </div>

                    <div className="p-[20px_30px] rounded-xl border border-[#e6e6e6] bg-white max-[420px]:text-[13px] flex justify-center items-center font-semibold text-lg text-[#272727]">
                        {" "}
                        <span className="text-[#ff5681]">1</span> отель
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Wrap
