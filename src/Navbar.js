import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="text-sm md:text-lg lg:text-xl bg-black shadow-white flex justify-between items-center p-4 shadow w-full">
      <div className="flex items-center">
        <p className="text-white text-lg">Nina</p>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link to="/about" className="text-white hover:bg-gray-200 hover:text-black px-3 py-2 rounded">About</Link>
        </li>
        <li>
          <Link to="/skills" className="text-white hover:bg-gray-200 hover:text-black px-3 py-2 rounded">Skills</Link>
        </li>
        <li>
          <Link to="/projects" className="text-white hover:bg-gray-200 hover:text-black px-3 py-2 rounded">Projects</Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:bg-gray-200 hover:text-black px-3 py-2 rounded">Contact</Link>
        </li>
        <li className="relative">
          <button onClick={toggleDropdown} className="text-white focus:outline-none">
            &#8230; {}
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-black rounded-md shadow-lg z-10">
              <ul className="py-2">
                <li>
                  <Link to="/option1" className="block px-4 py-2 text-black bg-white hover:bg-gray-200 hover:text-black">Option 1</Link>
                </li>
                <li>
                  <Link to="/option2" className="block px-4 py-2 text-black bg-white hover:bg-gray-200 hover:text-black">Option 2</Link>
                </li>
                <li>
                  <Link to="/option3" className="block px-4 py-2 text-black bg-white hover:bg-gray-200 hover:text-black">Option 3</Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li>
          <button className="text-white bg-black px-4 py-2 rounded border border-white hover:bg-white hover:text-black">
            <Link to="/Login">Login</Link>
          </button>
        </li>
        <li>
          <button className="text-black bg-white px-4 py-2 rounded hover:bg-black hover:text-white hover:border border-white">
            <Link to="/Signup">Sign Up</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
