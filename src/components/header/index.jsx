import React from "react"

// icons
import icn1 from "../../assets/icon/telegram.png"
import icn2 from "../../assets/icon/whatsapp.png"
import icn3 from "../../assets/icon/mail.png"

import {FaPhone} from "react-icons/fa6"
import {LuMenu} from "react-icons/lu"


const Header = () => {
    return (
        <header className="py-[8px] shadow-lg bg-white">
            <div className="container2 flex justify-between items-center gap-[10px]">
                <nav className="flex justify-start items-center gap-[20px]">
                    <h1 className="font-semibold text-[26px] text-[#272727]">
                        nimbus
                    </h1>

                    <div className="max-[900px]:hidden flex justify-center items-center gap-[10px] text-[14px] *:cursor-pointer *:outline-none *:hover:text-[#ff5681] *:transition duration-[.2s]">
                        <select>
                            <option>Фотографии</option>
                            <option>Видео</option>
                        </select>

                        <select>
                            <option>Цены</option>
                            <option>Цены2</option>
                        </select>

                        <select>
                            <option>Услуги</option>
                            <option>Услуги2</option>
                        </select>

                        <select>
                            <option>Контакты</option>
                            <option>Контакты2</option>
                        </select>

                        <select>
                            <option>О нас</option>
                            <option>О нас2</option>
                        </select>
                    </div>
                </nav>

                <nav className="flex justify-end items-center gap-[20px]">
                    <div className="flex justify-center items-center gap-[5px] *:cursor-pointer max-[900px]:hidden">
                        <img src={icn1} alt="" />
                        <img src={icn2} alt="" />
                        <img src={icn3} alt="" />
                    </div>

                    <a
                        href="tel:8 (965) 016-54-31"
                        className="flex justify-center items-center gap-[3px] font-semibold text-sm text-[#ff5681] max-[350px]:hidden">
                        <FaPhone />8 (965) 016-54-31
                    </a>

                    <LuMenu className="hidden max-[900px]:block text-[25px]"/>
                </nav>
            </div>
        </header>
    )
}

export default Header
