import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { FaSackDollar } from "react-icons/fa6";
import { HiTicket } from 'react-icons/hi';
import { ImPriceTags } from 'react-icons/im';
import { IoMdApps } from 'react-icons/io';
import { MdOutlineSecurity } from 'react-icons/md';
import { AiFillSound } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { icon: AiFillSound, text: 'audio devices', path: 'devices' },
    { icon: FaLocationArrow, text: 'locations', path: 'locations' },
    { icon: ImPriceTags, text: 'new products', path: 'products' },
    { icon: MdOutlineSecurity, text: 'security', path: 'security' },
    { icon: FaSackDollar, text: 'your finance', path: 'finance' },
    { icon: HiTicket, text: 'your ticket', path: 'tickets' },
    { icon: IoMdApps, text: 'application', path: 'apps' }
  ];

  const [activePath, setActivePath] = React.useState('/devices');

  return (
    <aside className="w-64 h-screen gap-3 px-6 py-8 bg-[#262633] poppins">
      <h1 className="text-white text-center text-3xl font-semibold">Godithiya<span className='text-[#637CFF]'>.</span></h1>
      
      <nav className="flex flex-col gap-4 w-full mt-12">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const Path = item.path

          return (
            <NavLink
            key={index}
            to={Path}
            onClick={() => setActivePath(Path)}
            className={ `
              flex gap-3 justify-start items-center text-lg pl-4
              hover:bg-[#39394A] w-full h-12 rounded-lg text-[#C4C5D0] fill-[#C4C5D0]
              ${activePath === Path ? 'bg-[#39394A] text-[#738afc]' : ''}
            `}
            >
              <Icon className="w-6 h-6"/>
              <span className="capitalize">{item.text}</span>
            </NavLink>
          )
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;