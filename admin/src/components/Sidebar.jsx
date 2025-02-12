import React from 'react'
import {NavLink} from "react-router-dom";
import {assets} from "../assets/admin_assets/assets.js";

const Sidebar = () => {
    return (
        <div className='w-[22%] min-h-screen border-r-2 ' >
            <div className='flex flex-col gap-3 pt-6 pl-[15%] text-[15px]'>
                <NavLink className={ `flex items-center py-2 rounded-lg gap-3 border border-r-0 px-3 border-gray-100`} to='/add-product'>
                    <img className='w-5 h-5' src={assets.add_icon} alt=""/>
                    <p className='hidden md:block  '>Добавить продукт</p>
                </NavLink>
                <NavLink className='flex items-center py-2 rounded-lg gap-3 border border-r-0 px-3 border-gray-100' to='/list-product'>
                    <img className='w-5 h-5' src={assets.order_icon} alt=""/>
                    <p className='hidden md:block  '>Все продукты</p>
                </NavLink>
                <NavLink className='flex items-center py-2 rounded-lg gap-3 border border-r-0 px-3 border-gray-100'
                         to='/orders'>
                    <svg width='22' height='22' xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 448 512">
                        <path fill='black'
                              d="M50.7 58.5L0 160l208 0 0-128L93.7 32C75.5 32 58.9 42.3 50.7 58.5zM240 160l208 0L397.3 58.5C389.1 42.3 372.5 32 354.3 32L240 32l0 128zm208 32L0 192 0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-224z"/>
                    </svg>
                    <p className='hidden md:block  '>Заказы</p>
                </NavLink>
            </div>
        </div>
    )
}
export default Sidebar
