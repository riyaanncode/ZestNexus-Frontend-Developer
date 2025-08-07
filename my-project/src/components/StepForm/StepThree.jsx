import React, { useState } from "react";
import { useAtom } from "jotai";
import { formDataAtom, stepAtom } from "../../store/atoms";
import { Check } from "lucide-react";
import formJson from "../FormJsonData/AllFormData.json";
const StepThree = () => {
  const [, setStep] = useAtom(stepAtom);
  const [formData, setFormData] = useAtom(formDataAtom);
  const [showData, setShowData] = useState(false);

  const handleSelect = (role) => {
    setFormData({ ...formData, role });
  };

  const handleConfirm = () => {
    setShowData(true);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      {!showData && (
        <div className="w-1/3 [background-color:#00666C] text-white p-8 flex flex-col justify-between rounded-r-3xl h-auto">
          <div>
            <h1 className="text-2xl font-semibold mb-8">{formJson.brand}</h1>

            <div className="space-y-8">
              {formJson.sidebar.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div
                    className={`w-6 h-6 rounded-full ${
                      idx < 2
                        ? "bg-blue-300 text-blue-900"
                        : "bg-white text-blue-700"
                    } flex items-center justify-center text-sm font-bold`}
                  >
                    {idx < 2 ? <Check size={14} /> : idx + 1}
                  </div>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-blue-200">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-blue-200">{formJson.rights}</p>
        </div>
      )}

      {/* Right Side Content */}
      <div className="flex-1 bg-white p-16 rounded-l-3xl pl-[29px]">
        <p className="text-sm text-gray-500 mb-2">{formJson.stepIndicator}</p>
        <h2 className="text-2xl font-bold mb-2">{formJson.heading}</h2>
        <p className="text-gray-500 mb-8">{formJson.subHeading}</p>

        {!showData ? (
          <>
            {/* Role selection */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {formJson.roles.map((role) => (
                <button
                  key={role}
                  onClick={() => handleSelect(role)}
                  className={`flex items-center justify-center gap-2 p-3 rounded-lg border transition ${
                    formData.role === role
                      ? "bg-blue-100 border-blue-500 text-blue-700"
                      : "bg-white hover:border-blue-300"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700"
              >
                {formJson.backButton}
              </button>

              <button
                onClick={handleConfirm}
                className="px-6 py-2 [background-color:#00666C] hover:[background-color:#00666C] text-white rounded-md"
              >
                {formJson.confirmButton}
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-xl font-semibold mb-4">🎉 Submitted Data</h3>

            <table className="w-full border border-gray-200 text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border-b">Field</th>
                  <th className="p-3 border-b">Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(formData).map(([key, value]) => (
                  <tr key={key} className="border-t">
                    <td className="p-3 font-medium capitalize">{key}</td>
                    <td className="p-3">
                      {value || (
                        <span className="text-gray-400 italic">
                          Not provided
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6">
              <button
                onClick={() => setShowData(false)}
                className="text-blue-600 hover:underline"
              >
                ← Go back
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StepThree;
