import { motion as Motion } from "framer-motion";

const MenuBar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-pink-500/40 to-black-500/50 backdrop-blur-lg bg-opacity-10 px-6 py-8">
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <span className="font-[montserrat] font-bold text-4xl text-white">
          cryptx.
        </span>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <Motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <span className="text-white">Sign In</span>
          </Motion.div>
          <Motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <div className="flex items-center justify-center py-2 px-4 bg-white text-black rounded-xl font-medium hover:shadow-md transition-all duration-200">
              Sign Up
            </div>
          </Motion.div>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
