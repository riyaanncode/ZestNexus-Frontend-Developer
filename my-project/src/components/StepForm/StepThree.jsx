// import React from 'react';
// import { useAtom } from 'jotai';
// import { formDataAtom, stepAtom } from '../../store/atoms';

// const StepThree = () => {
//   const [, setStep] = useAtom(stepAtom);
//   const [formData, setFormData] = useAtom(formDataAtom);

//   const roles = ['Sales Manager', 'Super admin', 'Admin', 'Marketing Manager', 'Customer Support', 'Data Analyst', 'Others'];

//   const handleSelect = (role) => {
//     setFormData({ ...formData, role });
//   };

//   const handleConfirm = () => {
//     alert('✅ Form submitted:\n' + JSON.stringify(formData, null, 2));
//   };

//   return (
//     <div className="space-y-4">
//       <h2 className="text-xl font-semibold">User Role</h2>

//       <div className="grid grid-cols-2 gap-3">
//         {roles.map((role) => (
//           <button
//             key={role}
//             onClick={() => handleSelect(role)}
//             className={`border rounded px-4 py-2 ${formData.role === role ? 'bg-blue-500 text-white' : 'bg-white'}`}
//           >
//             {role}
//           </button>
//         ))}
//       </div>

//       <div className="flex justify-between">
//         <button onClick={() => setStep(2)} className="bg-gray-300 px-4 py-2 rounded">Back</button>
//         <button onClick={handleConfirm} className="bg-blue-600 text-white px-4 py-2 rounded">Confirm</button>
//       </div>
//     </div>
//   );
// };

// export default StepThree;


// import React from 'react';
// import { useAtom } from 'jotai';
// import { formDataAtom, stepAtom } from '../../store/atoms';
// import { Check, User, Building2 } from 'lucide-react';

// const StepThree = () => {
//   const [, setStep] = useAtom(stepAtom);
//   const [formData, setFormData] = useAtom(formDataAtom);

//   const roles = [
//     'Sales Manager',
//     'Super admin',
//     'Admin',
//     'Marketing Manager',
//     'Customer Support',
//     'Data Analyst',
//     'Others',
//   ];

//   const handleSelect = (role) => {
//     setFormData({ ...formData, role });
//   };

//   const handleConfirm = () => {
//     alert('✅ Form submitted:\n' + JSON.stringify(formData, null, 2));
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* Left Sidebar */}
//       <div className="w-1/3 bg-blue-700 text-white p-8 flex flex-col justify-between rounded-r-3xl">
//         <div>
//           <h1 className="text-2xl font-semibold mb-8">🔗 Convertico</h1>

//           <div className="space-y-8">
//             {/* Step 1 - Completed */}
//             <div className="flex items-start gap-4">
//               <div className="w-6 h-6 rounded-full bg-blue-300 flex items-center justify-center text-sm font-bold text-blue-900">
//                 <Check size={14} />
//               </div>
//               <div>
//                 <p className="font-semibold">Your personal details</p>
//                 <p className="text-sm text-blue-200">Personal details of user</p>
//               </div>
//             </div>

//             {/* Step 2 - Completed */}
//             <div className="flex items-start gap-4">
//               <div className="w-6 h-6 rounded-full bg-blue-300 flex items-center justify-center text-sm font-bold text-blue-900">
//                 <Check size={14} />
//               </div>
//               <div>
//                 <p className="font-semibold">Your company details</p>
//                 <p className="text-sm text-blue-200">Company's basic information</p>
//               </div>
//             </div>

//             {/* Step 3 - Active */}
//             <div className="flex items-start gap-4">
//               <div className="w-6 h-6 rounded-full bg-white text-blue-700 font-bold flex items-center justify-center">3</div>
//               <div>
//                 <p className="font-semibold">Your role</p>
//                 <p className="text-sm text-blue-200">User role in the platform</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <p className="text-sm text-blue-200">All rights reserved @Convertico</p>
//       </div>

//       {/* Right Content */}
//       <div className="w-2/3 bg-white p-16 rounded-l-3xl">
//         <p className="text-sm text-gray-500 mb-2">Step 3/3</p>
//         <h2 className="text-2xl font-bold mb-2">User role</h2>
//         <p className="text-gray-500 mb-8">Define your role within the organization to access the right tools.</p>

//         {/* Role selection grid */}
//         <div className="grid grid-cols-2 gap-4 mb-10">
//           {roles.map((role) => (
//             <button
//               key={role}
//               onClick={() => handleSelect(role)}
//               className={`flex items-center justify-center gap-2 p-3 rounded-lg border transition ${
//                 formData.role === role
//                   ? 'bg-blue-100 border-blue-500 text-blue-700'
//                   : 'bg-white hover:border-blue-300'
//               }`}
//             >
//               {/* Optional: icons can go here */}
//               <span>{role}</span>
//             </button>
//           ))}
//         </div>

//         {/* Action Buttons */}
//         <div className="flex justify-between">
//           <button
//             onClick={() => setStep(2)}
//             className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700"
//           >
//             ←
//           </button>

//           <button
//             onClick={handleConfirm}
//             className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
//           >
//             Confirm
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StepThree;


import React from 'react';
import { useAtom } from 'jotai';
import { formDataAtom, stepAtom } from '../../store/atoms';
import { Check } from 'lucide-react';
import formJson from '../FormJsonData/AllFormData.json';

const StepThree = () => {
  const [, setStep] = useAtom(stepAtom);
  const [formData, setFormData] = useAtom(formDataAtom);

  const handleSelect = (role) => {
    setFormData({ ...formData, role });
  };

  const handleConfirm = () => {
    alert('✅ Form submitted:\n' + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Sidebar */}
      <div className="w-1/3 [background-color:#00666C] text-white p-8 flex flex-col justify-between rounded-r-3xl">
        <div>
          <h1 className="text-2xl font-semibold mb-8">{formJson.brand}</h1>

          <div className="space-y-8">
            {formJson.sidebar.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className={`w-6 h-6 rounded-full ${
                  idx < 2
                    ? 'bg-blue-300 text-blue-900'
                    : 'bg-white text-blue-700'
                } flex items-center justify-center text-sm font-bold`}>
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

      {/* Right Content */}
      <div className="w-2/3 bg-white p-16 rounded-l-3xl pl-[29px]">
        <p className="text-sm text-gray-500 mb-2">{formJson.stepIndicator}</p>
        <h2 className="text-2xl font-bold mb-2">{formJson.heading}</h2>
        <p className="text-gray-500 mb-8">{formJson.subHeading}</p>

        {/* Role selection grid */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {formJson.roles.map((role) => (
            <button
              key={role}
              onClick={() => handleSelect(role)}
              className={`flex items-center justify-center gap-2 p-3 rounded-lg border transition ${
                formData.role === role
                  ? 'bg-blue-100 border-blue-500 text-blue-700'
                  : 'bg-white hover:border-blue-300'
              }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
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
      </div>
    </div>
  );
};

export default StepThree;

