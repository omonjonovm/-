import { List, UserCircle } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const NavLinkS = [
    {
      to: "/about",
      title: "Оптовые продажи",
    },
    {
      to: "/roznitsa",
      title: "Продажи в рознице",
    },
    {
      to: "",
      title: "Контакты",
    },
    {
      to: "",
      title: "Вакансии",
    },
    {
      to: "",
      title: "Отзывы",
    },
  ];
  const [navActive, setNavActive] = useState(false);
  document.body.style.overflowY = navActive ? "hidden" : "auto";
  return (
    <header className="h-[80px] px-4 sticky z-20 left-0 top-0 bg-white shadow-md">
      <div className="container h-full flex items-center justify-between">
        <Link to={"/"}>
          <img src="./logo.png" alt="" />
        </Link>
        <nav className="flex items-center gap-10">
          <button className="lg:flex hidden items-center gap-3 bg-yellow-700 py-3 px-6 text-white rounded-full">
            <div className="flex rotate-90">
              <span className="font-bold">|</span>
              <span className="font-bold">|</span>
              <span className="font-bold">|</span>
            </div>
            <span>Каталог</span>
          </button>
          <ul
            className={`flex items-center gap-10 ${navActive ? "active" : ""}`}
          >
            {NavLinkS.map((li, index) => (
              <li key={index}>
                <Link to={li.to} className="font-semibold lg:hover:text-yellow-700">
                  {li.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Link to={"/users"}><UserCircle className="text-3xl" /></Link>
          <List
            onClick={() => setNavActive(navActive ? false : true)}
            className="text-3xl block lg:hidden"
          />
        </div>
      </div>
    </header>
  );
};
