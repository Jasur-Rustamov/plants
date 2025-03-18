import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#EDF2EC] py-5">
      <div className="container mx-auto max-w-screen-xl flex justify-between items-center px-4">
        <a href="#" className="flex items-center">
          <img src="/images/logo.svg" alt="logo" className="w-8 h-8 mr-2" />
          <p className="text-lg font-semibold">Plants</p>
        </a>

        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav
          className={`absolute top-16 left-0 w-full bg-[#EDF2EC] shadow-lg lg:shadow-none lg:static lg:flex lg:w-auto lg:bg-transparent transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row gap-6 p-5 lg:p-0 lg:gap-10">
            <li>
              <a className="hover:text-porange" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-porange" href="#">
                About us
              </a>
            </li>
            <li>
              <a className="hover:text-porange" href="#">
                Service
              </a>
            </li>
            <li>
              <a className="hover:text-porange" href="#">
                Price
              </a>
            </li>
            <li>
              <a className="hover:text-porange" href="#">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
