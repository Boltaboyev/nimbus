import React from "react"

const PriceCard = () => {
    return (
        <section className="py-[30px]">
            <div className="container2">
                <h1 className=" mb-[20px] text-center font-semibold text-2xl text-[#272727]">
                    Цена росписи стен
                </h1>

                <div className="grid grid-cols-3 gap-[20px] max-[995px]:grid-cols-2 max-[680px]:grid-cols-1">
                    <div className="flex flex-col justify-center items-center gap-[20px] h-[400px] p-[20px] rounded-3xl shadow-2xl border border-[#7b7b7b32]">
                        <p className="font-normal text-2xl text-center text-[#272727]">
                            Просто
                        </p>
                        <p className="font-semibold text-2xl text-center text-[#ff5681]">
                            от 900 ₽
                        </p>
                        <p className="font-normal text-sm leading-[140%] text-center text-[#787878]">
                            Геометрия, линии и роспись по скотчу
                        </p>
                        <button className="p-[10px_30px] rounded-lg border border-[#ff6b90] text-[#ff6b90] cursor-pointer active:scale-[.97]">
                            заказать
                        </button>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-[20px] h-[400px] p-[20px] rounded-3xl shadow-2xl border border-[#7b7b7b32]">
                        <p className="font-normal text-2xl text-center text-[#272727]">
                            Детально
                        </p>
                        <p className="font-semibold text-2xl text-center text-[#ff5681]">
                            от 2000 ₽
                        </p>
                        <p className="font-normal text-sm leading-[140%] text-center text-[#787878]">
                            Более детальные прорисовки и от двух художников
                        </p>
                        <button className="p-[10px_30px] rounded-lg border border-[#ff6b90] text-[#ff6b90] cursor-pointer active:scale-[.97]">
                            заказать
                        </button>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-[20px] h-[400px] p-[20px] rounded-3xl shadow-2xl border border-[#7b7b7b32]">
                        <p className="font-normal text-2xl text-center text-[#272727]">
                            Идеально
                        </p>
                        <p className="font-semibold text-2xl text-center text-[#ff5681]">
                            от 2900 ₽
                        </p>
                        <p className="font-normal text-sm leading-[140%] text-center text-[#787878]">
                            Профессиональные рисунки с тенями и деталями
                        </p>
                        <button className="p-[10px_30px] rounded-lg border border-[#ff6b90] text-[#ff6b90] cursor-pointer active:scale-[.97]">
                            заказать
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PriceCard
