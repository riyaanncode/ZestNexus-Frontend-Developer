import React from "react";
import { useForm } from "react-hook-form";
import { useAtom } from "jotai";
import { formDataAtom, stepAtom } from "../../store/atoms";
import InputField from "../common/InputField";
import stepOneContent from "../FormJsonData/AllFormData.json"; // ✅ Importing JSON

const StepOne = () => {
  const [, setStep] = useAtom(stepAtom);
  const [formData, setFormData] = useAtom(formDataAtom);
  const { register, handleSubmit } = useForm({ defaultValues: formData });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    setStep(2);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Sidebar */}
      <div className="w-1/2 [background-color:oklch(0.46_0.09_200.5)] text-white p-8 flex flex-col justify-between rounded-r-3xl">
        <div>
          <h1 className="text-2xl font-semibold mb-8">
            {stepOneContent.brand}
          </h1>
          <div className="space-y-8">
            {stepOneContent.sidebar.map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-3">
                  <i className={`${item.icon} text-xl`} />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-blue-200">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-blue-200">{stepOneContent.rights}</p>
      </div>

      {/* Right Form Section */}
      <div className="w-full bg-white pl-[29px] ">
        <p className="text-sm text-gray-500 mb-2">
          {stepOneContent.stepIndicator}
        </p>
        <h2 className="text-2xl font-bold mb-2">{stepOneContent.heading}</h2>
        <p className="text-gray-500 mb-8">{stepOneContent.subHeading}</p>

        {/* <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex gap-4">
            <InputField
              type='text'
              name={stepOneContent.firstName}
              placeholder={stepOneContent.firstName}
              register={register}
              required
              className="w-full"
            />
            <InputField
            type='text'
              name={stepOneContent.lastName}
              placeholder={stepOneContent.lastName}
              register={register}
              required
              className="w-full"
            />
          </div>

          <InputField
          type='text'
            name={stepOneContent.email}
            placeholder={stepOneContent.email}
            register={register}
            required
          />

          <div className="flex gap-2 items-center">
            <InputField
            type='text'
              name="countryCode"
              placeholder={stepOneContent.countryCode}
              register={() => ({})}
              disabled
              value={stepOneContent.countryCode}
              className="w-20 bg-gray-100 text-center"
            />
            <InputField
            type='number'
              name="phone"
              placeholder="Mobile number"
              register={register}
              required
              className="flex-1"
            />
          </div>

          <button
            type="submit"
            className="[background-color:#00666C] hover:[background-color:#00666C] text-white px-6 py-3 rounded-md"
          >
            {stepOneContent.nextButton}
          </button>
        </form> */}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex gap-4">
            <InputField
              type="text"
              name={stepOneContent.firstName}
              placeholder={stepOneContent.firstName}
              register={register(stepOneContent.firstName, {
                required: "First name is required",
                maxLength: {
                  value: 30,
                  message: "First name cannot exceed 30 characters",
                },
              })}
              required
              className="w-full"
            />
            <InputField
              type="text"
              name={stepOneContent.lastName}
              placeholder={stepOneContent.lastName}
              register={register(stepOneContent.lastName, {
                required: "Last name is required",
                maxLength: {
                  value: 30,
                  message: "Last name cannot exceed 30 characters",
                },
              })}
              required
              className="w-full"
            />
          </div>

          <InputField
            type="email"
            name={stepOneContent.email}
            placeholder={stepOneContent.email}
            register={register(stepOneContent.email, {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            required
          />

          <div className="flex gap-2 items-center">
            <InputField
              type="text"
              name="countryCode"
              placeholder={stepOneContent.countryCode}
              register={() => ({})}
              disabled
              value={stepOneContent.countryCode}
              className="w-20 bg-gray-100 text-center"
            />
            <InputField
              type="number"
              name="phone"
              placeholder="Mobile number"
              register={register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
              required
              className="flex-1"
            />
          </div>

          <button
            type="submit"
            className="[background-color:#00666C] hover:[background-color:#00666C] text-white px-6 py-3 rounded-md"
          >
            {stepOneContent.nextButton}
          </button>
        </form>
      </div>
    </div>
  );
};

export default StepOne;
