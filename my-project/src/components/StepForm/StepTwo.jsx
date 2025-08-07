// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useAtom } from 'jotai';
// import { formDataAtom, stepAtom } from '../../store/atoms';
// import InputField from '../common/InputField';
// import stepOneContent from '../FormJsonData/AllFormData.json';

// const StepTwo = () => {
//   const [, setStep] = useAtom(stepAtom);
//   const [formData, setFormData] = useAtom(formDataAtom);
//   const { register, handleSubmit } = useForm({ defaultValues: formData });

//   const onSubmit = (data) => {
//     setFormData({ ...formData, ...data });
//     setStep(3);
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* Sidebar */}
//       <div className="w-1/3 [background-color:#00666C] text-white p-8 flex flex-col justify-between rounded-r-3xl">
//         <div>
//           <h1 className="text-2xl font-semibold mb-8">{stepOneContent.brand}</h1>

//           <div className="space-y-8">
//             {stepOneContent.sidebar.map((item, index) => {
//               let indicator;
//               if (index === 0) {
//                 indicator = (
//                   <div className="w-6 h-6 rounded-full bg-blue-300 flex items-center justify-center text-sm font-bold text-blue-900">
//                     ✓
//                   </div>
//                 );
//               } else if (index === 1) {
//                 indicator = (
//                   <div className="w-6 h-6 rounded-full bg-white text-blue-700 font-bold flex items-center justify-center">
//                     2
//                   </div>
//                 );
//               } else {
//                 indicator = (
//                   <div className="w-6 h-6 rounded-full border-2 border-blue-300 text-blue-300 flex items-center justify-center">
//                     3
//                   </div>
//                 );
//               }

//               return (
//                 <div key={index} className="flex items-start gap-4">
//                   {indicator}
//                   <div>
//                     <p className="font-semibold">{item.title}</p>
//                     <p className="text-sm text-blue-200">{item.description}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <p className="text-sm text-blue-200">{stepOneContent.rights}</p>
//       </div>

//       {/* Right Form Section */}
//       <div className="w-2/3 bg-white pl-[29px] ">
//         <p className="text-sm text-gray-500 mb-2">Step 2/3</p>
//         <h2 className="text-2xl font-bold mb-2">Company details</h2>
//         <p className="text-gray-500 mb-8">
//           Tell us about your organization. It helps us tailor your CRM experience.
//         </p>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           {/* Company Name */}
//           <InputField
//             name="company"
//             placeholder="Company name"
//             register={register}
//             required
//           />

//           {/* Company Size */}
//           <div>
//             <label className="block text-sm mb-2">Company size</label>
//             <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
//               {['Small', 'Medium', 'Large'].map((size) => (
//                 <label key={size} className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     value={size}
//                     {...register('size')}
//                     className="accent-blue-600"
//                   />
//                   {size}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Industry Dropdown */}
//           <div>
//             <label className="block text-sm mb-2">Industry</label>
//             <select
//               {...register('industry')}
//               className="w-full border p-3 rounded-md outline-blue-500"
//               defaultValue=""
//             >
//               <option value="" disabled>Select industry</option>
//               <option value="Agriculture and Farming">Agriculture and Farming</option>
//               <option value="Technology">Technology</option>
//               <option value="Finance">Finance</option>
//               <option value="Education">Education</option>
//             </select>
//           </div>

//           {/* Navigation Buttons */}
//           <div className="flex justify-between pt-6">
//             <button
//               onClick={() => setStep(1)}
//               type="button"
//               className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
//             >
//               ← Back
//             </button>

//             <button
//               type="submit"
//               className="px-6 py-2 [background-color:#00666C] text-white rounded-md hover:[background-color:#00666C]"
//             >
//               {stepOneContent.nextButton} →
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default StepTwo;

import React from "react";
import { useForm } from "react-hook-form";
import { useAtom } from "jotai";
import { formDataAtom, stepAtom } from "../../store/atoms";
import InputField from "../common/InputField";
import stepOneContent from "../FormJsonData/AllFormData.json";

const StepTwo = () => {
  const [, setStep] = useAtom(stepAtom);
  const [formData, setFormData] = useAtom(formDataAtom);
  const { register, handleSubmit } = useForm({ defaultValues: formData });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    setStep(3);
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-1/3 [background-color:#00666C] text-white p-8 flex flex-col justify-between rounded-r-3xl">
        <div>
          <h1 className="text-2xl font-semibold mb-8">
            {stepOneContent.brand}
          </h1>

          <div className="space-y-8">
            {stepOneContent.sidebar.map((item, index) => {
              let indicator;
              if (index === 0) {
                indicator = (
                  <div className="w-6 h-6 rounded-full bg-blue-300 flex items-center justify-center text-sm font-bold text-blue-900">
                    ✓
                  </div>
                );
              } else if (index === 1) {
                indicator = (
                  <div className="w-6 h-6 rounded-full bg-white text-blue-700 font-bold flex items-center justify-center">
                    2
                  </div>
                );
              } else {
                indicator = (
                  <div className="w-6 h-6 rounded-full border-2 border-blue-300 text-blue-300 flex items-center justify-center">
                    3
                  </div>
                );
              }

              return (
                <div key={index} className="flex items-start gap-4">
                  {indicator}
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-blue-200">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-sm text-blue-200">{stepOneContent.rights}</p>
      </div>

      {/* Right Form Section */}
      <div className="w-2/3 bg-white pl-[29px]">
        <p className="text-sm text-gray-500 mb-2">Step 2/3</p>
        <h2 className="text-2xl font-bold mb-2">
          {stepOneContent.sidebar[1].title}
        </h2>
        <p className="text-gray-500 mb-8">
          {stepOneContent.sidebar[1].description}
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Company Name */}
          <InputField
            name="company"
            placeholder="Company name"
            register={register}
            required
          />

          {/* Company Size */}
          <div>
            <label className="block text-sm mb-2">Company size</label>
            <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
              {["Small", "Medium", "Large"].map((size) => (
                <label key={size} className="flex items-center gap-2">
                  <input
                    type="radio"
                    value={size}
                    {...register("size")}
                    className="accent-blue-600"
                  />
                  {size}
                </label>
              ))}
            </div>
          </div>

          {/* Industry Dropdown */}
          <div>
            <label className="block text-sm mb-2">Industry</label>
            <select
              {...register("industry")}
              className="w-full border p-3 rounded-md outline-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select industry
              </option>
              <option value="Agriculture and Farming">
                Agriculture and Farming
              </option>
              <option value="Technology">Technology</option>
              <option value="Finance">Finance</option>
              <option value="Education">Education</option>
            </select>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <button
              onClick={() => setStep(1)}
              type="button"
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              {stepOneContent.backButton}
            </button>

            <button
              type="submit"
              className="px-6 py-2 [background-color:#00666C] text-white rounded-md hover:[background-color:#00666C]"
            >
              {stepOneContent.nextButton} →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StepTwo;
