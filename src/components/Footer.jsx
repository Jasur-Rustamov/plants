import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between md:items-center text-center md:text-left">
          {/* Левая секция (авторские права и т.п.) */}
          <div className="mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <p>©</p>
              <p>2022</p>
              <a href="#" className="hover:underline">GitHub</a>
            </div>
          </div>

          {/* Центральная секция (Rolling Scopes School) */}
          <div className="mb-4 md:mb-0">
            <p>Rolling Scopes School</p>
          </div>

          {/* Правая секция (социальные сети) */}
          <div className="flex justify-center md:justify-end space-x-4 text-xl">
            <a href="#" className="hover:text-gray-500"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="hover:text-gray-500"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="hover:text-gray-500"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="hover:text-gray-500"><i className="fa-brands fa-pinterest"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
