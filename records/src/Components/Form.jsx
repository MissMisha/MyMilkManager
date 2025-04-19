import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Coffee, MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";


export default function RegistrationForm() {
  
  const [darkMode, setDarkMode] = useState(false);
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    milkType: "",
    address: "",
    city: "",
    state: "",
  });
//-------------------------------------------------
  async function doSave() {
    alert(JSON.stringify(formData.name));
    const url = "http://localhost:2001/saveUser";
   
    try {
        const resp = await axios.post(url, formData);  // 👈 Sending data as POST

        if (resp.data.status === true) {
            alert("Registered Successfully");
            alert(resp.data.msg);
        } else {
            alert("Registration Failed");
            alert(resp.data.msg);
        }
    } catch (err) {
        console.error("Error during registration:", err);
        alert(err);
    }
}
//------------------------------------------------------

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => {
    if (formStep < 2) setFormStep(formStep + 1);
  };

  const prevStep = () => {
    if (formStep > 0) setFormStep(formStep - 1);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 }
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
        className="flex flex-col items-end justify-start overflow-hidden mb-2 xl:max-w-3xl w-full"
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
                  ? "bg-indigo-600 after:translate-x-6" 
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
        className={`xl:max-w-3xl w-full p-8 rounded-lg shadow-xl ${
          darkMode ? "bg-gray-800" : "bg-white"
        } transition-colors duration-300`}
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`text-center text-2xl sm:text-3xl font-bold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Register for a free account
        </motion.h1>

        <div className="w-full mt-8">
          <div className="mx-auto max-w-lg">
            {/* Progress Bar */}
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-6"
            >
              <div className="flex justify-between mb-1">
                <span className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Step {formStep + 1} of 3
                </span>
                <span className={`text-sm font-medium ${darkMode ? "text-blue-400" : "text-indigo-600"}`}>
                  {Math.floor((formStep / 2) * 100)}%
                </span>
              </div>
              <div className={`w-full h-2 bg-gray-200 rounded-full ${darkMode ? "bg-gray-700" : ""}`}>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(formStep / 2) * 100}%` }}
                  transition={{ duration: 0.3 }}
                  className="h-2 rounded-full bg-indigo-600"
                />
              </div>
            </motion.div>

            {/* Form Steps */}
            {formStep === 0 && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative w-full">
                    <User className={`absolute left-3 top-3 h-5 w-5 ${darkMode ? "text-gray-400" : "text-gray-500"}`} />
                    <input
                      className={`w-full pl-10 pr-3 py-3 rounded-lg font-medium border ${
                        darkMode
                          ? "bg-gray-700 text-white border-gray-600 focus:border-blue-400"
                          : "bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500"
                      } placeholder-gray-500 text-sm focus:outline-none transition-colors duration-200`}
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                  </div>
                  <div className="relative w-full">
                    <Phone className={`absolute left-3 top-3 h-5 w-5 ${darkMode ? "text-gray-400" : "text-gray-500"}`} />
                    <input
                      className={`w-full pl-10 pr-3 py-3 rounded-lg font-medium border ${
                        darkMode
                          ? "bg-gray-700 text-white border-gray-600 focus:border-blue-400"
                          : "bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500"
                      } placeholder-gray-500 text-sm focus:outline-none transition-colors duration-200`}
                      type="tel"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="relative">
                  <Coffee className={`absolute left-3 top-3 h-5 w-5 ${darkMode ? "text-gray-400" : "text-gray-500"}`} />
                  <ChevronDown className={`absolute right-3 top-3 h-5 w-5 ${darkMode ? "text-gray-400" : "text-gray-500"}`} />
                  <select
                    className={`w-full pl-10 pr-10 py-3 rounded-lg font-medium border appearance-none ${
                      darkMode
                        ? "bg-gray-700 text-white border-gray-600 focus:border-blue-400"
                        : "bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500"
                    } placeholder-gray-500 text-sm focus:outline-none transition-colors duration-200`}
                    value={formData.milkType}
                    onChange={(e) => handleInputChange("milkType", e.target.value)}
                  >
                    <option value="" disabled>Select your milk type</option>
                    <option value="Cow">Cow</option>
                    <option value="Buffalo">Buffalo</option>
                    <option value="Goat">Goat</option>
                    <option value="Almond">Almond</option>
                    <option value="Soy">Soy</option>
                  </select>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="mt-6"
                >
                  <button 
                    onClick={nextStep}
                    className="w-full py-3 px-4 bg-indigo-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center"
                  >
                    <span>Next Step</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            )}

            {formStep === 1 && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                <motion.div variants={itemVariants} className="relative">
                  <MapPin className={`absolute left-3 top-3 h-5 w-5 ${darkMode ? "text-gray-400" : "text-gray-500"}`} />
                  <input
                    className={`w-full pl-10 pr-3 py-3 rounded-lg font-medium border ${
                      darkMode
                        ? "bg-gray-700 text-white border-gray-600 focus:border-blue-400"
                        : "bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500"
                    } placeholder-gray-500 text-sm focus:outline-none transition-colors duration-200`}
                    type="text"
                    placeholder="Enter your address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants} className="relative">
                  <MapPin className={`absolute left-3 top-3 h-5 w-5 ${darkMode ? "text-gray-400" : "text-gray-500"}`} />
                  <input
                    className={`w-full pl-10 pr-3 py-3 rounded-lg font-medium border ${
                      darkMode
                        ? "bg-gray-700 text-white border-gray-600 focus:border-blue-400"
                        : "bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500"
                    } placeholder-gray-500 text-sm focus:outline-none transition-colors duration-200`}
                    type="text"
                    placeholder="Enter your city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants} className="relative">
                  <MapPin className={`absolute left-3 top-3 h-5 w-5 ${darkMode ? "text-gray-400" : "text-gray-500"}`} />
                  <input
                    className={`w-full pl-10 pr-3 py-3 rounded-lg font-medium border ${
                      darkMode
                        ? "bg-gray-700 text-white border-gray-600 focus:border-blue-400"
                        : "bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500"
                    } placeholder-gray-500 text-sm focus:outline-none transition-colors duration-200`}
                    type="text"
                    placeholder="Enter your state"
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                  />
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex gap-3 mt-6"
                >
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={prevStep}
                    className="w-1/3 py-3 px-4 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Back</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={nextStep}
                    className="w-2/3 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center"
                  >
                    <span>Review & Submit</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />  
                    </svg>
                  </motion.button>
                </motion.div>
              </motion.div>
            )}

            {formStep === 2 && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                <motion.div 
                  variants={itemVariants}
                  className={`p-5 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}
                >
                  <h3 className={`text-lg font-semibold mb-3 ${darkMode ? "text-white" : "text-gray-800"}`}>Review Your Information</h3>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>Full Name:</span>
                      <span className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>{formData.name || "Not provided"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>Phone:</span>
                      <span className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>{formData.phone || "Not provided"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>Milk Type:</span>
                      <span className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>
                        {formData.milkType ? formData.milkType.charAt(0).toUpperCase() + formData.milkType.slice(1) : "Not selected"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>Address:</span>
                      <span className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>{formData.address || "Not provided"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>City:</span>
                      <span className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>{formData.city || "Not provided"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>State:</span>
                      <span className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>{formData.state || "Not provided"}</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex gap-3 mt-6"
                >
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={prevStep}
                    className="w-1/3 py-3 px-4 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Edit</span>
                  </motion.button>
                  
                  <motion.button
                  onClick={doSave}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-2/3 py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Complete Registration</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            )}

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className={`mt-6 text-sm text-center ${darkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              Already have an account?{" "}
              <a className={`${darkMode ? "text-blue-400" : "text-indigo-600"} font-semibold hover:underline transition-all duration-200`} href="#">
                <Link to="/login">Log in</Link>
              </a>
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}