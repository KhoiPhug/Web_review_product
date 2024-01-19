import React from "react";
import PropTypes from "prop-types";
import iconWeb from "../assets/iconWeb.svg";
import "../pasts/Header.css";


const Header = ({ categories }) => {
  return (
    <header className="bg-blue-900">
      <section className="w-screen font-mono">
        <div className=" container mx-auto px-8 py-6 flex items-center justify-between">
          <a href="/" className="text-2xl font-semibold flex items-center">
          <img src={iconWeb} alt="Icon web" className="icon"/>
            <span className="text-yellow-600 font-italic">True</span>
            <span className="text-red-500 text-3xl">Review</span>
          </a>
          <div className="flex items-center justify-center gap-8 ">
            {categories.length > 0 &&
              categories.map((item, index) => {
                if (index < 2)
                  return (
                    <a
                      className=" last-of-type:text-blue-500 hover:text-red-500"
                      href={`/category/${item.slugCategory}-${item.id}`}
                      key={index}
                      onMouseOver={(e) => (e.target.style.color = 'yellow')}
                    onMouseOut={(e) => (e.target.style.color = 'white')}>
                      {/* {item.category} */}
                    </a>
                  );
              })}
          </div>
        </div>
      </section>
    </header>
  );
};

Headers.propTypes = {
  categories: PropTypes.array.isRequired,
};
export default Header;