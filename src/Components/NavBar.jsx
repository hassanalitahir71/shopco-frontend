import React, { useState, useRef, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { MdMenu, MdClose } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const profileRef = useRef(null);

  //  Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "COLLECTION", path: "/collection" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <div className="w-full flex justify-center relative">
      <div className="w-[90%] flex items-center justify-between h-16">
        {/* Logo + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <Link to='/'>
            
            <img
              src="/img/SHOP.CO.png"
              alt="logo"
              className="h-6 md:h-8 cursor-pointer"
            />
          </Link>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="flex flex-col items-center gap-0.5"
            >
              <p className="text-sm font-integral text-gray-500">{link.name}</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-500 hidden" />
            </NavLink>
          ))}
        </ul>

        {/* Search */}
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
          {/* Cart */}
          <Link to="/cart" className="relative">
            <FiShoppingCart className="cursor-pointer" />
            <p className="absolute text-[8px] font-bold rounded-2xl bg-gray-400 p-0.5 left-2.5 bottom-2.5">
              10
            </p>
          </Link>

          {/* Profile Dropdown */}
          <div ref={profileRef} className="relative">
            <CgProfile
              className="cursor-pointer text-xl"
              onClick={() => setProfileOpen(!profileOpen)}
            />

            {/* Dropdown */}
            {profileOpen && (
              <div className="absolute right-0 top-8 w-36 bg-gray-200 rounded-2xl shadow-lg py-2 z-50">
                <p className="px-3 py-2 text-sm hover:bg-black rounded-2xl hover:text-white cursor-pointer">
                  Profile
                </p>
                <p className="px-3 py-2 text-sm hover:bg-black rounded-2xl hover:text-white cursor-pointer">
                  Orders
                </p>
                <p className="px-3 py-2 text-sm hover:bg-black rounded-2xl hover:text-white cursor-pointer">
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50">
          <ul className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenu(false)}
                className="text-sm font-integral text-gray-700 pb-2"
              >
                {link.name}
              </NavLink>
            ))}
          </ul>

          {/* Mobile Search */}
          <div className="p-4 pt-0">
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
