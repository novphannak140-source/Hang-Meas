import HangMeas from "../assets/Images/HangMeas.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="bg-white shadow-md sticky top-0  z-50 ">
      <div className="max-w-7xl overflow-hidden mx-auto px-4  ">
        <div className="flex justify-between items-center  h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center  justify-center">
            <img src={HangMeas} alt="HangMeas" className="w-20 sm:w-20" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-gray-700 font-medium">
            {links.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="hover:text-blue-600 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden text-3xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden flex flex-col gap-4 mt-4 pb-4 text-gray-700 font-medium">
            {links.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
