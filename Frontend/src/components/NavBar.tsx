import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Assets } from "../assets/assets";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center bg-[#061039] text-[#E1F0F5] justify-between border-b text-3xl p-5 px-9">
      Typographo
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#E1F0F5] hidden" />
        </NavLink>
        <NavLink to="/shop" className="flex flex-col items-center gap-1">
          <p>Shop</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#E1F0F5] hidden" />
        </NavLink>
        <NavLink to="/contractors" className="flex flex-col items-center gap-1">
          <p>Contractors</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#E1F0F5] hidden" />
        </NavLink>
        <NavLink to="/gallery" className="flex flex-col items-center gap-1">
          <p>Gallery</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#E1F0F5] hidden" />
        </NavLink>
        <NavLink to="/news" className="flex flex-col items-center gap-1">
          <p>News</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#E1F0F5] hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <div className="relative group">
          <img src={Assets.profileicon} className="cursor-pointer text-xl h-8" />
            <div className="hidden group-hover:block absolute right-0 pt-4 z-10">
            <div className="flex flex-col gap-2 w-36 py-3 rounded shadow-lg">
              <NavLink onClick={()=>setVisible(false)} className="cursor-ponter hover:text-black" to="/login">My Profile</NavLink>
              <p className="cursor-ponter hover:text-black">Orders</p>
              <p className="cursor-ponter hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative text-xl">
          <img src={Assets.carticon} className="cursor-pointer text-xl h-8" />
          <p className="absolute right-[-9px] bottom-[-5px] w-4 text-center leading-4 bg-[#061039] text-white aspect-square rounded-full text-size-[8px]">
            5
          </p>
        </Link>
        <h1
          onClick={() => setVisible(true)}
          className="cursor-pointer sm:hidden"
        >
          Menu
        </h1>
      </div>
      {/*sidebar menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-[#061039] transition-all ${
          visible ? "w-full" : "w-0"
        }`}
          >
              <div className="flex flex-col text-gray-600">
                  <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                      <p>Back</p>
                  </div>
                  <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/">Home</NavLink>
                  <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/shop">Shop</NavLink>
                  <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/contractors">Contractors</NavLink>
                  <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/gallery">Gallery</NavLink>
                  <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/news">News</NavLink>
              </div>
      </div>
    </div>
  );
};

export default NavBar;
