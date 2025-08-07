// import React from 'react';
// import { useAtom } from 'jotai';
// import { stepAtom } from '../../store/atoms';
// import StepOne from '../../components/StepForm/StepOne';
// import StepTwo from '../../components/StepForm/StepTwo';
// import StepThree from '../../components/StepForm/StepThree';

// const SignupForm = () => {
//   const [step] = useAtom(stepAtom);

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-10 w-full  [max-width:850px]">
//       <div className="mb-6">
//         <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
//           <span>Step {step}/3</span>
//           <div className="flex-1 h-1 bg-gray-200 mx-2">
//             <div className={`h-1 bg-blue-600 transition-all duration-300`} style={{ width: `${(step / 3) * 100}%` }}></div>
//           </div>
//         </div>
//       </div>

//       {step === 1 && <StepOne />}
//       {step === 2 && <StepTwo />}
//       {step === 3 && <StepThree />}
//     </div>
//   );
// };

// export default SignupForm;


import React from 'react';
import { useAtom } from 'jotai';
import { stepAtom } from '../../store/atoms';
import StepOne from '../../components/StepForm/StepOne';
import StepTwo from '../../components/StepForm/StepTwo';
import StepThree from '../../components/StepForm/StepThree';

const SignupForm = () => {
  const [step] = useAtom(stepAtom);
  const progress = (step / 3) * 100;

  return (
    <div className="bg-white shadow-lg rounded-lg p-10 w-full [max-width:850px]">
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span>Step {step}/3</span>
          <div className="relative flex-1  h-[10px] bg-gray-200 mx-2 overflow-visible">
            {/* Blue progress bar */}
            <div
              className="h-[10px] bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>

            {/* Truck icon */}
            <div
              className="absolute top-[-17px] [text-[#00666C]] transition-all duration-300"
              style={{ left: `calc(${progress}% - 10px)` }}
            >
               <i class="ri-truck-fill text-lg text-[#225c85] mt-[6px] text-[27px] "></i>
            </div>
          </div>
        </div>
      </div>

      {/* Step Components */}
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
    </div>
  );
};

export default SignupForm;
