import { useState } from "react";
import { IAddress, IPlace } from "../../../../types/IPlace";
import { createInitialPlace } from "../../../../utils/functions";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export function useNewPlace() {
  const [form, setForm] = useState<IPlace>(createInitialPlace());
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleNextStep = () => {
    setCurrentStep((prevStep) => (prevStep < 11 ? prevStep + 1 : prevStep));
  };

  const handleAddressNextStep = (address: IAddress) => {
    if (!address.address || !address.cep || !address.city || !address.country) {
      Swal.fire({
        title: "Atenção!",
        text: "Por favor, preencha todos os campos obrigatórios antes de continuar.",
        icon: "warning",
        confirmButtonText: "Ok",
        confirmButtonColor: "#3085d6",
      });
    } else {
      setCurrentStep((prevStep) => (prevStep < 11 ? prevStep + 1 : prevStep));
      handleFormChange("address", address);
    }
  };

  const handleAmmenitiesNextStep = (amenities: number[]) => {
    setCurrentStep((prevStep) => (prevStep < 11 ? prevStep + 1 : prevStep));
    handleFormChange("amenities", amenities);
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

  const handleSubmit = async () => {
    try {
      const result = await axios.post("http://localhost:3001/api/places", form);

      navigate("/");
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  return {
    form,
    handleFormChange,
    currentStep,
    handleSubmit,
    handleNextStep,
    handlePreviousStep,
    handleAddressNextStep,
    handleAmmenitiesNextStep,
  };
}
