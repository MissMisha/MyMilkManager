import { useState } from "react";
import { motion } from "framer-motion";
import { User, Lock, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Here you would normally handle the login response
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.5, 
        when: "beforeChildren", 
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className={`flex flex-col justify-center items-center w-full h-screen ${darkMode ? "bg-gray-900" : "bg-gray-100"} px-5 transition-colors duration-300`}>
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-end justify-start overflow-hidden mb-2 xl:max-w-lg w-full"
      >
        <div className="flex items-center">
          <h3 className={`${darkMode ? "text-white" : "text-gray-800"}`}>Dark Mode:</h3>
          <label className="inline-flex relative items-center ml-2 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkMode}
              readOnly
            />
            <motion.div
              whileTap={{ scale: 0.95 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-6 rounded-full peer peer-focus:ring-blue-300 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${
                darkMode 
                  ? "bg-blue-500 after:translate-x-6" 
                  : "bg-gray-300"
              }`}
            />
          </label>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`xl:max-w-lg w-full p-8 rounded-lg shadow-xl ${
          darkMode ? "bg-gray-800" : "bg-white"
        } transition-colors duration-300`}
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <h1 className={`text-2xl sm:text-3xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
            Welcome Back!
          </h1>
          <p className={`mt-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Log in to access your account
          </p>
        </motion.div>

        <motion.form
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onSubmit={handleLogin}
          className="space-y-6"
        >
          <motion.div variants={itemVariants} className="relative">
            <User className={`absolute left-3 top-3 h-5 w-5 ${darkMode ? "text-gray-400" : "text-gray-500"}`} />
            <input
              className={`w-full pl-10 pr-3 py-3 rounded-lg font-medium border ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600 focus:border-indigo-500"
                  : "bg-gray-50 text-gray-800 border-gray-300 focus:border-indigo-500"
              } placeholder-gray-500 text-sm focus:outline-none transition-colors duration-200`}
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </motion.div>
          
          <motion.div variants={itemVariants} className="relative">
            <Lock className={`absolute left-3 top-3 h-5 w-5 ${darkMode ? "text-gray-400" : "text-gray-500"}`} />
            <input
              className={`w-full pl-10 pr-12 py-3 rounded-lg font-medium border ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600 focus:border-blue-400"
                  : "bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500"
              } placeholder-gray-500 text-sm focus:outline-none transition-colors duration-200`}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3"
            >
              {showPassword ? (
                <EyeOff className={`h-5 w-5 ${darkMode ? "text-gray-400" : "text-gray-500"}`} />
              ) : (
                <Eye className={`h-5 w-5 ${darkMode ? "text-gray-400" : "text-gray-500"}`} />
              )}
            </button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-between"
          >
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className={`h-4 w-4 rounded border-gray-300 ${darkMode ? "bg-gray-700" : ""} text-indigo-600 focus:ring-blue-500`}
              />
              <label htmlFor="remember-me" className={`ml-2 block text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className={`font-medium ${darkMode ? "text-indigo-400 hover:text-indigo-300" : "text-indigo-600 hover:text-blue-500"}`}>
                Forgot password?
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={isLoading}
              className={`relative w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center ${isLoading ? "bg-blue-400 cursor-not-allowed" : ""}`}
            >
              {isLoading && (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              <span>{isLoading ? "Logging in..." : "Log in"}</span>
            </motion.button>
          </motion.div>

          

          
        </motion.form>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className={`mt-8 text-sm text-center ${darkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          Don't have an account?{" "}
          <a href="#" className={`${darkMode ? "text-indigo-400" : "text-indigo-600"} font-semibold hover:underline transition-all duration-200`}>
           <Link to="/signup"> Register now</Link>
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
}