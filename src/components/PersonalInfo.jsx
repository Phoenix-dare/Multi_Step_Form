import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "../context/FormContext";

const PersonalInfo = ({ nextStep }) => {
  const { formState, dispatch } = useContext(FormContext);
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm()

  const handleFormSubmit = (data) => {
    dispatch({ type: "SET_PERSONAL_INFO", payload: data });
    nextStep();
  };

  return (
    <div className="flex flex-col w-[22rem] rounded-md relative -top-28 p-6 bg-white z-4 md:w-[32rem] md:h-[36rem] md:ml-16 md:mr-8 md:mt-8 md:p-4 md:top-0 text-left">
      <h1 className="font-ubuntu-bold  font-bold text-2xl md:text-3xl text-marine-blue">
        Personal info
      </h1>
      <p className="font-ubuntu-regular my-2 font-semi-bold text-sm text-cool-gray">
        Please provide your name, email address, and phone number.
      </p>
      <form
        className="relative flex flex-col justify-evenly h-[16rem] md:h-4/5"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="flex flex-col relative">
          <label
            htmlFor="name"
            className="font-ubuntu-regular font-semi-bold text-sm text-marine-blue my-2 md:m-0"
          >
            Name
          </label>
          {errors.name && (
            <span className="text-strawberry-red text-xs absolute right-0">
              {errors.name.message}
            </span>
          )}
          <input
            id="name"
            type="text"
            placeholder="e.g. Stephen King"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters long",
              },
              maxLength: {
                value: 30,
                message: "Name must not exceed 30 characters",
              },
              pattern: {
                value: /^[a-zA-Z\s]*$/,
                message: "Name should contain only letters and spaces",
              },
            })}
            className={`appearance-none  focus:outline-none rounded-md p-2 bg-white border-2 border-light-gray
            focus:border-1 focus:border-pastel-blue  focus-visible:border-1 focus-visible:border-pastel-blue
            ${
              errors.name?.type === "required" ||
              errors.name?.type === "pattern" ||
              errors.name?.type === "minLength" ||
              errors.name?.type === "maxLength"
                ? "border-strawberry-red focus:border-2 focus:border-strawberry-red  focus-visible:border-2 focus-visible:border-strawberry-red"
                : ""
            }`}
          />
        </div>
        <div className="flex flex-col relative">
          <label
            htmlFor="email"
            className="font-ubuntu-regular font-semi-bold text-sm text-marine-blue my-2 md:m-0"
          >
            Email Address
          </label>
          {errors.email && (
            <span className="text-strawberry-red text-xs absolute right-0">
              {errors.email.message}
            </span>
          )}
          <input
            id="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalid email address",
              },
            })}
            className={`appearance-none  focus:outline-none rounded-md p-2 bg-white border-2 border-light-gray 
            focus:border-1 focus:border-pastel-blue  focus-visible:border-1 focus-visible:border-pastel-blue
            ${
              errors.email?.type === "required" ||
              errors.email?.type === "pattern"
                ? "border-strawberry-red focus:border-2 focus:border-strawberry-red  focus-visible:border-2 focus-visible:border-strawberry-red"
                : ""
            }`}
            onBlur={() => {
              trigger("email");
            }}
          />
        </div>
        <div className="flex flex-col relative">
          <label
            htmlFor="phone"
            className="font-ubuntu-regular font-semi-bold text-sm text-marine-blue my-2 md:m-0"
          >
            Phone Number
          </label>
          {errors.phone && (
            <span className="text-strawberry-red text-xs absolute right-0">
              {errors.phone.message}
            </span>
          )}
          <input
            id="phone"
            type="tel"
            placeholder="e.g. +1 234 567 890"
            {...register("phone", { required: "Phone Number is required" ,
            //Can be complex! but for simplicity used this
            pattern: {
              value: /^[+0-9-]+$/,
              message: "Invalid Phone Number"
            },
            minLength: {
              value: 10,
              message: "Phone Number should be at least 10 digits"
            },
            maxLength: {
              value: 12,
              message: "Phone Number should not exceed 12 digits"
            }})}
            className={`appearance-none  focus:outline-none rounded-md p-2 bg-white border-2 border-light-gray
             focus:border-1 focus:border-pastel-blue  focus-visible:border-1 focus-visible:border-pastel-blue
             ${
               errors.phone?.type === "required" || errors.phone?.type === "pattern"
                 ? "border-strawberry-red focus:border-2 focus:border-strawberry-red  focus-visible:border-2 focus-visible:border-strawberry-red"
                 : ""
             }`}
          />
        </div>

        <button
          type="submit"
          className="absolute bg-marine-blue rounded-md font-ubuntu-regular font-bold text-md text-white py-2 px-[1.75rem] self-end -bottom-[11.5rem] -right-6 md:right:0 md:-bottom-[2.75rem] md:-right-[1rem] hover:bg-marine-blue-light"
        >
          Next Step
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;
