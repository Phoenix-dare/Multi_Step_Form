import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import Plan from "./components/Plan";
import Steps from "./components/Steps";
import Summary from "./components/Summary";
import AddOns from "./components/AddOns";
import Confirm from "./components/Confirm";
import { FormDataProvider } from "./context/FormContext"

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo nextStep={nextStep} />;
      case 2:
        return <Plan nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <AddOns nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <Confirm nextStep={nextStep} prevStep={prevStep} />;
      case 5:
        return <Summary prevStep={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <FormDataProvider>
      <main className="relative flex  flex-col md:flex-row items-center md:justify-center h-full  bg-magnolia md:bg-white md:p-4 md:h-fit md:w-fit rounded-xl">
        <Steps currentStep={currentStep}/>
        {renderStep()}
      </main>
    </FormDataProvider>
  );
}


export default App;
