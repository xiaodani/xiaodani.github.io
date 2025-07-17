import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Projects", to: "/projects" },
  { name: "Games", to: "/games" },
  { name: "Contact", to: "/contact" },
];

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">My Portfolio</div>
        <ul className="flex space-x-6">
          {navItems.map(({ name, to }) => (
            <li key={to}>
              <Link
                to={to}
                className={`hover:text-blue-400 ${
                  location.pathname === to ? "text-blue-400" : ""
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
