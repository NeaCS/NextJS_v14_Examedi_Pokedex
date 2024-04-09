import React from 'react';




import Link from 'next/link';
const Menu = () => {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div className="flex lg:gap-x-12">
          <div className="menu-item">
            <Link href="/" className="menu-link text-sm font-medium text-gray-700 hover:text-blue-500">
              Pokédex
            </Link>
          </div>
          <div className="menu-item">
            <Link href="/about" className="menu-link text-sm font-medium text-gray-700 hover:text-blue-500">
              Sobre mí
            </Link>
          </div>
          <div className="menu-item">
            <a
              href="https://www.linkedin.com/in/sehc-ing/"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-link text-sm font-medium text-gray-700 hover:text-blue-500"
            >
              LinkedIn
            </a>
          </div>
          <div className="menu-item">
            <a
              href="https://github.com/Bazz666/NextJS_v14_Examedi_Pokedex"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-link text-sm font-medium text-gray-700 hover:text-blue-500"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Menu;
