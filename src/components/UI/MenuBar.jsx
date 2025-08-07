
import { motion as Motion } from "framer-motion";
const MenuBar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-pink-500/40 to-black-500/50 backdrop-blur-lg bg-opacity-10 p-6">
      <div className="max-w-7xl mx-0 px-4 sm:px-6 lg:px-8">
        <span className="font-[montserrat] font-bold text-4xl">
        cryptx.</span>
         <div className="flex items-center space-x-4">
                <Motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                   Sign In
                </Motion.div>
                <Motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  
                >
                  <div className="flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-600 to-white-600 text-black rounded-lg font-medium hover:shadow-md transition-all duration-200">
                  Sign Up 
                  </div>
                 
                </Motion.div>
      </div>
       </div>
    </nav>
  );
};

export default MenuBar;
