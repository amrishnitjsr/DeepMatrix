import React, { useState } from "react";
import Form1 from "./BasicDetails";
import Form2 from "./Educational";
import Form3 from "./AddressDetails";

function App() {
  const [step, setStep] = useState(1); // State to track current step

  // Function to handle step change
  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  return (
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
              <h1 className="text-3xl font-bold text-center mb-8">Sign Up</h1>
          <div className="flex justify-center mb-8">
            <div className="flex items-center">
              {/* Step 1 */}
              <div
                className={`flex items-center justify-center w-10 h-10 ${
                  step === 1 ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600"
                } rounded-full cursor-pointer`}
                onClick={() => handleStepChange(1)}
              >
                1
              </div>
              <div className={`w-32 h-1 ${step >= 2 ? "bg-blue-600" : "bg-gray-300"}`}></div>

              {/* Step 2 */}
              <div
                className={`flex items-center justify-center w-10 h-10 ${
                  step === 2 ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600"
                } rounded-full cursor-pointer`}
                onClick={() => handleStepChange(2)}
              >
                2
              </div>
              <div className={`w-32 h-1 ${step >= 3 ? "bg-blue-600" : "bg-gray-300"}`}></div>

              {/* Step 3 */}
              <div
                className={`flex items-center justify-center w-10 h-10 ${
                  step === 3 ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600"
                } rounded-full cursor-pointer`}
                onClick={() => handleStepChange(3)}
              >
                3
              </div>
            </div>
          </div>

          {/* Step Labels */}
          <div className="flex justify-between text-sm text-gray-600 mb-8">
            <div className="text-center w-1/3">Basic Details</div>
            <div className="text-center w-1/3">Educational Details</div>
            <div className="text-center w-1/3">Address Details</div>
          </div>

          {/* Form Container */}
          <div className="form-container">
            {step === 1 && <Form1 />}
            {step === 2 && <Form2 />}
            {step === 3 && <Form3 />}
          </div>
        </div>
      </div>
  );
}

export default App;