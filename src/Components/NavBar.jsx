import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { MdOutlineKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";

const navList = [
  { id: 1, title: "Shop", dropdown: ["Item 1", "Item 2", "Item 3"] },
  { id: 2, title: "On Sale", dropdown: ["Men", "Women", "Kids"] },
  { id: 3, title: "New Arrivals", dropdown: ["Nike", "Adidas", "Puma"] },
  { id: 4, title: "Brands", dropdown: [] },
];

function NavBar() {
  const [open, setOpen] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="w-full flex justify-center ">
      <div className="w-[90%] flex items-center justify-between h-16">
        {/* Logo + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <img
            src="/img/SHOP.CO.png"
            alt="logo"
            className="h-6 md:h-8 cursor-pointer"
          />

          {/* Mobile menu button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 relative">
          {navList.map((item) => (
            <li
              key={item.id}
              className="relative cursor-pointer"
              onMouseEnter={() => setOpen(item.id)}
              onMouseLeave={() => setOpen(null)}
            >
              <div className="flex items-center gap-1">
                <span>{item.title}</span>

                {item.dropdown.length > 0 && (
                  <MdOutlineKeyboardArrowDown
                    className={`transition-transform duration-300 ${
                      open === item.id ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* Dropdown */}
              {item.dropdown.length > 0 && (
                <div
                  className={`absolute left-0 mt-3 w-40 bg-white shadow-lg rounded-lg transition-all duration-300 ${
                    open === item.id
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {item.dropdown.map((sub, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Search (hidden on small screens) */}
        <div className="hidden md:block relative w-64 lg:w-80">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 outline-none text-sm"
          />
          <GoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-lg" />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 text-xl">
          <FiShoppingCart className="cursor-pointer" />
          <CgProfile className="cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50">
          <ul className="flex flex-col p-4 gap-3">
            {navList.map((item) => (
              <li key={item.id} className="border-b pb-2">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setOpen(open === item.id ? null : item.id)}
                >
                  {item.title}
                  {item.dropdown.length > 0 && (
                    <MdOutlineKeyboardArrowDown
                      className={`transition-transform ${
                        open === item.id ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Mobile dropdown */}
                {open === item.id && item.dropdown.length > 0 && (
                  <div className="ml-4 mt-2 flex flex-col gap-2 text-sm text-gray-600">
                    {item.dropdown.map((sub, i) => (
                      <span key={i}>{sub}</span>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile search */}
          <div className="p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 outline-none"
              />
              <GoSearch className="absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
