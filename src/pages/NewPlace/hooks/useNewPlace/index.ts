import { useState } from "react";
import { IPlace } from "../../../../types/IPlace";
import { createInitialPlace } from "../../../../utils/functions";

export function useNewPlace() {
  const [form, setForm] = useState<IPlace>(createInitialPlace());
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => (prevStep < 10 ? prevStep + 1 : prevStep));
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  function handleFormChange(key: keyof IPlace, value: any) {
    setForm((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }

  return { form,handleFormChange,currentStep, handleNextStep,handlePreviousStep };
}
