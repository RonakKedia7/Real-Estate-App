import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-10 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row md:items-start justify-between gap-10">
        {/* Logo & Description */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <img src={assets.logo_dark} alt="Logo" className="w-40" />
          <p className="text-gray-400 mt-4 leading-relaxed max-w-md">
            We turn ideas into reality through thoughtful design and seamless
            development. Explore our work and discover how we build impactful
            digital experiences.
          </p>
        </div>

        {/* Company Links */}
        <div className="w-full md:w-1/2 lg:w-1/5">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li>
              <a href="#Header" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="hover:text-white transition">
                About us
              </a>
            </li>
            <li>
              <a href="#Contact" className="hover:text-white transition">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full md:w-full lg:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-md">
            Stay updated with the latest articles, tips, and project insights —
            delivered weekly to your inbox.
          </p>
          <div className="flex flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none w-full sm:flex-1"
            />
            <button className="py-3 px-5 rounded bg-blue-600 hover:bg-blue-700 text-white transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500 text-sm">
        &copy; 2024 RonakKedia. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
