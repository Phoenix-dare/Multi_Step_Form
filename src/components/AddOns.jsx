import { useState, useContext } from "react";
import { FormContext } from "../context/FormContext";

const AddOns = ({ nextStep, prevStep }) => {
  const { formState, dispatch } = useContext(FormContext);
  const [onlineServiceChecked, setOnlineServiceChecked] = useState(false);
  const [largerStorageChecked, setLargerStorageChecked] = useState(false);
  const [customizableProfileChecked, setCustomizableProfileChecked] =
    useState(false);

  const handleAddonSelect = () => {
    dispatch({
      type: "SET_ADD_ONS",
      payload: {
        onlineServiceChecked,
        largerStorageChecked,
        customizableProfileChecked,
      },
    });
    nextStep();
  };
  return (
    <div className="relative flex flex-col w-[22rem] h-[26rem] rounded-md relative -top-28 p-6 bg-white z-4 md:w-[32rem] md:h-[36rem] md:top-0 md:ml-16 md:mr-8 md:p-4 text-left">
      <h1 className="font-ubuntu-bold  font-bold text-2xl md:text-3xl text-marine-blue">
        Pick add-ons
      </h1>
      <p className="font-ubuntu-regular font-semi-bold text-sm text-cool-gray pr-4 md:pr-0">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="relative flex flex-col justify-evenly md:h-2/3 w-full md:px-4 mt-8 md:mt-0">
        <div
          className={`flex flex-row border-2 py-2 md:py-4 px-2 my-2 md:my-0 rounded-md items-center ${
            onlineServiceChecked ? "border-purplish-blue" : "border-light gray"
          }`}
        >
          <input
            type="checkbox"
            className="border-1 border-light-gray h-4 w-4 rounded-sm accent-purplish-blue mx-1 md:mx-4"
            checked={onlineServiceChecked}
            onChange={() => setOnlineServiceChecked(!onlineServiceChecked)}
          />
          <div className="flex flex-col ml-2 md:mx-4 md:ml-0 relative">
            <span className="font-ubuntu-bold  font-bold text-lg text-marine-blue">
              Online service
            </span>
            <span className="font-ubuntu-regular font-semi-bold text-sm text-cool-gray">
              Access to multiplayer games
            </span>
          </div>
          <span className="absolute  right-3 md:right-12 text-purplish-blue">
            {formState.plan?.billing === "yearly" ? "+$10/yr" : "+$1/mo"}
          </span>
        </div>
        <div
          className={`flex flex-row border-2 py-2 md:py-4 px-2 my-2 md:my-0 rounded-md items-center ${
            largerStorageChecked ? "border-purplish-blue" : "border-light gray"
          }`}
        >
          <input
            type="checkbox"
            className="border-1 border-light-gray h-4 w-4 mx-4 rounded-sm accent-purplish-blue mx-1 md:mx-4"
            checked={largerStorageChecked}
            onChange={() => setLargerStorageChecked(!largerStorageChecked)}
          />
          <div className="flex flex-col ml-2 md:mx-4 md:ml-0 relative">
            <span className="font-ubuntu-bold  font-bold text-lg text-marine-blue">
              Larger storage
            </span>
            <span className="font-ubuntu-regular font-semi-bold text-sm text-cool-gray">
              Extra 1TB of cloud save
            </span>
          </div>
          <span className="absolute right-3 md:right-12 text-purplish-blue">
            {formState.plan?.billing === "yearly" ? "+$20/yr" : "+$2/mo"}
          </span>
        </div>
        <div
          className={`flex flex-row border-2 py-2 md:py-4 px-2  my-2 md:my-0 rounded-md items-center ${
            customizableProfileChecked
              ? "border-purplish-blue"
              : "border-light gray"
          }`}
        >
          <input
            type="checkbox"
            className="border-1 border-light-gray h-4 w-4 rounded-sm accent-purplish-blue mx-1 md:mx-4"
            checked={customizableProfileChecked}
            onChange={() =>
              setCustomizableProfileChecked(!customizableProfileChecked)
            }
          />
          <div className="flex flex-col ml-2 md:mx-4 md:ml-0 relative">
            <span className="font-ubuntu-bold  font-bold text-lg text-marine-blue">
              Customizable Profile
            </span>
            <span className="font-ubuntu-regular font-semi-bold text-sm text-cool-gray">
              Custom theme on your profile
            </span>
          </div>

          <span className="absolute right-3 md:right-12 text-purplish-blue">
            {formState.plan?.billing === "yearly" ? "+$20/yr" : "+$2/mo"}
          </span>
        </div>
      </div>
      <div className="absolute flex flex-row bg-white justify-between w-screen px-4 py-4 -left-2 md:w-full md:p-6 -bottom-36 md:bottom-2 md:left-0">
        <button
          className="font-ubuntu-regular font-bold text-md text-cool-gray hover:text-marine-blue active:text-marine-blue"
          type="button"
          onClick={prevStep}
        >
          Go Back
        </button>
        <button
          className="bg-marine-blue rounded-md font-ubuntu-regular font-bold text-md text-white py-2 px-[1.75rem] hover:bg-marine-blue-light"
          type="button"
          onClick={handleAddonSelect}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default AddOns;
