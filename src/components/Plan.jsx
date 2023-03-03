import React, { useState, useContext } from "react";
import { set } from "react-hook-form";
import { FormContext } from "../context/FormContext";

const Plan = ({ prevStep, nextStep }) => {
  const [isYearly, setIsYearly] = useState(false);
  const [plan, setPlan] = useState("");
  const [hasError, setHasError] = useState(false);

  const { dispatch } = useContext(FormContext);
  const prices = {
    Arcade: 9,
    Advanced: 12,
    Pro: 15,
  };

  const handleSwitchChange = (e) => {
    e.stopPropagation();
    setIsYearly((prevIsYearly) => !prevIsYearly);
  };
  const handlePlanSelection = (item) => {
    setPlan(item);
    setHasError(false)
  };

  const handleSubmitPlan = () => {
    if (!plan) {
      setHasError(true);
      return;
    }
    const amount = isYearly ? prices[plan] * 10 : prices[plan];
    dispatch({
      type: "SET_PLAN",
      payload: { type: plan, billing: isYearly ? "yearly" : "monthly", amount },
    });
    nextStep();
  };

  return (
    <div className="relative flex flex-col w-[22rem] h-[28rem] rounded-md relative -top-28 p-6 bg-white z-4 md:w-[32rem] md:h-[36rem] md:top-0 md:ml-16 md:mr-8 md:p-4 text-left">
      <h1 className="font-ubuntu-bold  font-bold text-2xl md:text-3xl text-marine-blue mt-2">
        Select your plan
      </h1>
      <p className="font-ubuntu-regular font-semi-bold text-md text-cool-gray py-2">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex flex-col items-center md:flex-row md:h-60 md:justify-evenly md:py-6">
        <div
          className={`flex flex-row md:flex-col items-start  md:justify-between w-full md:w-36 md:h-40 my-1 md:my-0 px-2 py-4 md:py-6 border-2 rounded-md border-light-gray 
        active:border-purplish-blue hover:border-purplish-blue focus:border-purplish-blue cursor-pointer active:bg-magnolia 
        focus:bg-magnolia hover:bg-magnolia ${
          plan === "Arcade" ? "border-purplish-blue" : ""
        }`}
          onClick={(e) => {
            e.stopPropagation();
            handlePlanSelection("Arcade");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <g fill="none" fillRule="evenodd">
              <circle cx="20" cy="20" r="20" fill="#FFAF7E" />
              <path
                fill="#FFF"
                fillRule="nonzero"
                d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"
              />
            </g>
          </svg>
          <div className="flex flex-col px-3 md:p-0">
            <span className="font-bold text-md text-marine-blue">Arcade</span>
            <span className="font-semi-bold text-sm text-cool-gray">
              {isYearly ? "$90/yr" : "$9/mo"}
            </span>
            {isYearly && (
              <span className="font-semi-bold text-md text-marine-blue">
                2 months free
              </span>
            )}
          </div>
        </div>
        <div
          className={`flex flex-row md:flex-col items-start md:justify-between border-2 px-2 py-4 md:py-6 w-full md:w-36 md:h-40 my-1 md:my-0
        rounded-md border-light-gray active:border-purplish-blue hover:border-purplish-blue 
        focus:border-purplish-blue cursor-pointer active:bg-magnolia 
        focus:bg-magnolia hover:bg-magnolia ${
          plan === "Advanced" ? "border-purplish-blue" : ""
        }`}
          onClick={(e) => {
            e.stopPropagation();
            handlePlanSelection("Advanced");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <g fill="none" fillRule="evenodd">
              <circle cx="20" cy="20" r="20" fill="#F9818E" />
              <path
                fill="#FFF"
                fillRule="nonzero"
                d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"
              />
            </g>
          </svg>
          <div className="flex flex-col px-3 md:p-0">
            <span className="font-bold text-md text-marine-blue">Advanced</span>
            <span className="font-semi-bold text-sm text-cool-gray">
              {isYearly ? "$120/yr" : "$12/mo"}
            </span>
            {isYearly && (
              <span className="font-semi-bold text-md text-marine-blue">
                2 months free
              </span>
            )}
          </div>
        </div>
        <div
          className={`flex flex-row md:flex-col items-start md:justify-between border-2 px-2 py-4 md:py-6 w-full md:w-36 md:h-40 my-1 md:my-0 rounded-md border-light-gray 
        active:border-purplish-blue hover:border-purplish-blue 
        focus:border-purplish-blue cursor-pointer active:bg-magnolia focus:bg-magnolia hover:bg-magnolia ${
          plan === "Pro" ? "border-purplish-blue" : ""
        }`}
          onClick={(e) => {
            e.stopPropagation();
            handlePlanSelection("Pro");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <g fill="none" fillRule="evenodd">
              <circle cx="20" cy="20" r="20" fill="#483EFF" />
              <path
                fill="#FFF"
                fillRule="nonzero"
                d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"
              />
            </g>
          </svg>
          <div className="flex flex-col px-3 md:p-0">
            <span className="font-bold text-md text-marine-blue">Pro</span>
            <span className="font-semi-bold text-sm text-cool-gray">
              {isYearly ? "$150/yr" : "$15/mo"}
            </span>
            {isYearly && (
              <span className="font-semi-bold text-md text-marine-blue">
                2 months free
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center rounded-md relative w-3/4 bg-alabaster-dark left-10 p-2">
        <label
          className={`inline-block mx-4 hover:cursor-pointer ${
            isYearly
              ? "font-ubuntu-medium font-bold text-md text-cool-gray"
              : "font-ubuntu-medium font-bold text-md text-marine-blue"
          }`}
          htmlFor="flexSwitchCheckDefault"
        >
          Monthly
        </label>
        <input
          className="mr-2 h-5 w-9  appearance-none rounded-full bg-marine-blue outline-none
             before:pointer-events-none before:absolute before:h-3 before:w-3   before:mt-[0.200rem] before:rounded-full before:bg-transparent before:content-['']
             after:absolute after:z-[2] after:mt-[0.250rem] after:ml-[0.200rem] after:h-3 after:w-3 after:rounded-full after:border-none after:bg-white after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-['']
              checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:mt-[0.250rem] checked:after:ml-[1.25rem] checked:after:h-3 checked:after:w-3 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] 
              focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
              focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-3 focus:after:w-3 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={isYearly}
          onChange={handleSwitchChange}
        />
        <label
          className={`inline-block mx-4 hover:cursor-pointer ${
            isYearly
              ? "font-ubuntu-medium font-bold text-md text-marine-blue"
              : "font-ubuntu-medium font-bold text-md text-cool-gray"
          }`}
          htmlFor="flexSwitchCheckDefault"
        >
          Yearly
        </label>
      </div>
      {hasError && (
          <span className="text-strawberry-red relative left-10 md:left-24">
            Please select a plan to continue
          </span>
        )}
      <div className="absolute flex flex-row bg-white justify-between w-screen md:w-full -left-2 py-4 px-4 md:p-6 -bottom-28 md:bottom-2 md:p-0 md:left-0">

        <button
          className="font-ubuntu-regular font-bold text-md text-cool-gray hover:text-marine-blue active:text-marine-blue"
          type="button"
          onClick={prevStep}
        >
          Go Back{" "}
        </button>
        <button
          type="button"
          className="bg-marine-blue rounded-md font-ubuntu-regular font-bold text-md text-white py-2 px-[1.75rem] hover:bg-marine-blue-light"
          onClick={handleSubmitPlan}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Plan;
