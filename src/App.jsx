// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { motion } from 'framer-motion'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div className="relative min-h-screen bg-black text-white overflow-hidden">
//         <div className="absolute-top-0 left-0 w -[400px] h-[400px] bg-pink-500/30 blur-[150px]"></div>
//         <div className="relative-bottom-0 right-0 w -[400px] h-[400px] bg-pink-500/30 blur-[150px]"></div>
//         <motion.h1
//           className='text-center-5xl font-bold pt-20 neon-text'
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Crypto Dashboard
//         </motion.h1>
//       </div>
//     </>
//   )
// }

// export default App

import Dashboard from "./pages/Dashboard";

function App() {
  return <Dashboard />;
}
export default App;