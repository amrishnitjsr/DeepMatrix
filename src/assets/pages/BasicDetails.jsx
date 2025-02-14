
import React from "react";
function Form1() {
    return (
        <div className="bg-[#E9EAF4] p-8 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Basic Details</h2>
        <form>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input type="text" placeholder="Enter Full Name" className="w-full p-2 border border-gray-300 rounded bg-[#FFFFFF]" />
            </div>
            <div>
              <label className="block text-gray-700">Email address</label>
              <input type="email" placeholder="example@gmail.com" className="w-full p-2 border border-gray-300 rounded bg-[#FFFFFF]" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">Date of birth</label>
              <div className="relative">
                <input type="text" placeholder="DD/MM/YYYY" className="w-full p-2 border border-gray-300 rounded bg-[#FFFFFF]" />
                <i className="fas fa-calendar-alt absolute right-3 top-3 text-gray-400"></i>
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Gender</label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>--select--</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">Country code</label>
              <select className="w-full p-2 border border-gray-300 rounded bg-[#FFFFFF]">
                <option>--select--</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Phone number</label>
              <input type="text" placeholder="Enter Phone Number" className="w-full p-2 border border-gray-300 rounded bg-[#FFFFFF]" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">Nationality</label>
              <select className="w-full p-2 border border-gray-300 rounded bg-[#FFFFFF]">
                <option>--select--</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Race</label>
              <select className="w-full p-2 border border-gray-300 rounded bg-[#FFFFFF]">
                <option>--select--</option>
              </select>
            </div>
          </div>
        </form>
        <div className="flex justify-center">
        <button className="bg-blue-500 text-white px-6 py-2 rounded">Save and Continue</button>
      </div>
      </div>
    );
  }
export default Form1