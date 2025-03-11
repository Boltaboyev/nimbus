import React from "react"

// Example images
import img1 from "../../assets/img/grid/1.png"
import img2 from "../../assets/img/grid/2.png"
import img3 from "../../assets/img/grid/3.png"
import img4 from "../../assets/img/grid/4.png"
import img5 from "../../assets/img/grid/5.png"

const Grid = () => {
    return (
        <section className="py-[30px]">
            <div className="container2">
                <h1 className=" mb-[20px] text-center font-semibold text-2xl text-[#272727]">
                    Наша дружная команда
                </h1>

                <div className="grid grid-cols-2 gap-[20px] max-[995px]:grid-cols-1">
                    <div className="grid grid-cols-3 gap-[20px]">
                        <img
                            src={img1}
                            alt=""
                            className="h-full w-full object-cover rounded-3xl"
                        />

                        <div className="flex flex-col gap-[20px] col-span-2">
                            <img
                                src={img2}
                                alt=""
                                className="h-full w-full object-cover rounded-3xl"
                            />
                            <img
                                src={img4}
                                alt=""
                                className="h-full w-full object-cover rounded-3xl"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-[20px]">
                        <div className="flex flex-col gap-[20px]">
                            <div className="h-[200px] text-white w-full flex justify-center items-center p-[20px] text-center rounded-3xl bg-[#ff5681]">
                                Посмотреть портфолио
                            </div>
                            <img
                                src={img1}
                                alt=""
                                className="h-full w-full object-cover rounded-3xl"
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-[20px] col-span-2">
                            <img
                                src={img3}
                                alt=""
                                className="h-[250px] w-full object-cover rounded-3xl"
                            />
                            <img
                                src={img5}
                                alt=""
                                className="h-full w-full object-cover rounded-3xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Grid
