import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

function Form3() {
  return (
  <div className="w-full max-w-3xl bg-white p-8 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Address Details</h2>

      {/* Education Section */}
      <div className="bg-[#E9EAF4] p-6 rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Degree/Qualification</label>
            <select className="w-full p-2 border border-gray-300 rounded bg-[#FFFFFF]">
              <option value="">--select--</option>
              <option value="btech">BTech</option>
              <option value="mtech">MTech</option>
              <option value="mba">MBA</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Institute Name</label>
            <select className="w-full p-2 border border-gray-300 rounded bg-[#FFFFFF]">
              <option value="">--select--</option>
              <option value="institute1">Institute 1</option>
              <option value="institute2">Institute 2</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Year of graduation</label>
            <select className="w-full p-2 border border-gray-300 rounded bg-[#FFFFFF]">
              <option value="">Year</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Field of study</label>
            <select className="w-full p-2 border border-gray-300 rounded bg-[#FFFFFF]">
              <option value="">--select--</option>
              <option value="cs">Computer Science</option>
              <option value="mech">Mechanical Engineering</option>
              <option value="ece">Electronics and Communication</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button className="text-blue-500">Cancel</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        </div>
      </div>

      <button className="text-blue-500 mb-6">+ Add Another Education</button>

      {/* Save and Continue Button */}
      <div className="flex justify-center">
        <button className="bg-blue-500 text-white px-6 py-2 rounded">Save and Continue</button>
      </div>
    </div>
  );
}

export default Form3; // Correct export
