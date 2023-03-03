import { useContext } from "react";
import { FormContext } from "../context/FormContext";

const Confirm = ({ prevStep, nextStep }) => {
  const { formState } = useContext(FormContext);
  const addOnDisplayNames = {
    largerStorageChecked: "Larger storage",
    customizableProfileChecked: "Customizable profile",
    onlineServiceChecked: "Online service",
  };
  const addOnPrices = {
    largerStorageChecked: 2,
    customizableProfileChecked: 2,
    onlineServiceChecked: 1,
  };

  const trueAddOns = Object.keys(formState.addOns).filter(
    (key) => formState.addOns[key]
  );
  

  const calculateTotal = () => {
    let total = formState.plan.amount;
    const billingMultiplier = formState.plan.billing === "yearly" ? 10 : 1;
    Object.keys(formState.addOns).forEach((key) => {
      if (formState.addOns[key]) {
        total += addOnPrices[key] * billingMultiplier;
      }
    });
    return total;
  };

  return (
    <div className="relative flex flex-col w-[22rem] h-[28rem] rounded-md relative -top-28 p-6 bg-white z-4 md:w-[32rem] md:h-[36rem] md:top-0 md:ml-16 md:mr-8 md:p-4 text-left">
      <h1 className="font-ubuntu-bold  font-bold text-3xl text-marine-blue text-left mt-8">
        Finishing up
      </h1>
      <p className="font-ubuntu-regular font-semi-bold text-sm text-cool-gray my-4 w-3/4">
        Double-check everything looks OK before confirming.
      </p>
      <div className="flex flex-col h-4/5">
        <div>
          <div className="flex flex-row bg-magnolia justify-between items-center py-4 px-4 border-b border-b-light-gray">
            <div className="flex flex-col">
              <span className="font-ubuntu-bold  font-bold text-md text-marine-blue text-left">
                {formState.plan.type}{" "}
              </span>
              <span className="font-ubuntu-bold  font-bold text-md text-marine-blue text-left">
                ({formState.plan.billing})
              </span>
              <span className="underline underline-offset-2 text-cool-gray hover:text-purplish-blue cursor-pointer">Change</span>
              {/*confused about what to change here.Whole of the plan or yearly /monthly.
              ***Offer to change here or go back to step 2?
              */}
            </div>

            <span className="font-ubuntu-bold font-bold text-md text-marine-blue ">
              ${formState.plan.amount}
              {formState.plan.billing === "yearly" ? "/yr" : "/mo"}
            </span>
          </div>
          {trueAddOns.map((addOn) => (
            <div
              key={addOn}
              className="flex flex-row bg-magnolia justify-between items-center py-4 px-4 border-b border-b-light-gray"
            >
              <span className="font-ubuntu-regular font-semi-bold text-md text-cool-gray">
                {addOnDisplayNames[addOn]}
              </span>
              <span className="font-ubuntu-regular font-semi-bold text-md text-marine-blue">
                {formState.plan.billing === "yearly"
                  ? ` $+${addOnPrices[addOn] * 10}/yr`
                  : `$+${addOnPrices[addOn]}/mo`}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-row justify-between items-center py-4 px-4">
          <span className="font-ubuntu-regular font-semi-bold text-md text-cool-gray">
            Total{" "}
            {formState.plan.billing === "yearly" ? "(per year)" : "(per month)"}
          </span>
          <span className="font-ubuntu-regular font-bold text-lg text-purplish-blue">
            {formState.plan.billing === "yearly"
              ? ` $+${calculateTotal()}/yr`
              : `$+${calculateTotal()}/mo`}
          </span>
        </div>
      </div>

      <div className="absolute flex flex-row bg-white justify-between w-screen px-4 py-4 -left-2 md:w-full md:p-6 -bottom-28 md:bottom-2 md:left-0">
        <button
          className="font-ubuntu-regular font-bold text-md text-cool-gray hover:text-marine-blue active:text-marine-blue"
          type="button"
          onClick={prevStep}
        >
          Go Back{" "}
        </button>
        <button
          className="bg-purplish-blue rounded-md font-ubuntu-regular font-bold text-md text-white py-2 px-[1.75rem] hover:bg-pastel-blue active:bg-pastel-blue"
          type="button"
          onClick={nextStep}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Confirm;
