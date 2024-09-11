// External Libraries
import React, { useState } from "react";
import axios from "axios"; 

// Components

// Styles
import { Flex } from "@chakra-ui/react";
import { FloatingInput } from "../../../../../../components/Input";
import { IFormAddress } from "./types";

interface Props {
  // Props
}

export const AddressForm: React.FC<Props> = ({
 
}) => {
  const [form, setForm] = useState<IFormAddress>({
    cep: "",
    address: "",
    region: "",
    complement: "",
    neighborhood: "",
    uf: "",
  });

  const handleFormChange = (field: keyof IFormAddress, value: string) => {
    setForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));

    if (field === "cep" && value.length === 8) {
      fetchAddressFromCep(value);
    }
  };

  const fetchAddressFromCep = async (cep: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;

      if (data) {
        setForm((prevForm) => ({
          ...prevForm,
          address: data.logradouro,
          neighborhood: data.bairro,
          region: data.localidade,
          uf: data.uf,
        }));
      } else {
        alert("CEP não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
      alert("Erro ao buscar o CEP.");
    }
  };

  return (
    <Flex direction={"column"} gap={"0.5rem"}>
      <FloatingInput
        label="CEP"
        mb="1.5rem"
        value={form.cep}
        onChange={(value) => handleFormChange("cep", value)}
      />

      <FloatingInput
        label="País / Região"
        value={form.region}
        onChange={(value) => handleFormChange("region", value)}
      />

      <FloatingInput
        label="Endereço"
        value={form.address}
        onChange={(value) => handleFormChange("address", value)}
      />

      <FloatingInput
        label="Apto, suíte, unidade (se aplicável)"
        value={form.complement}
        onChange={(value) => handleFormChange("complement", value)}
      />

      <FloatingInput
        label="Bairro (se aplicável)"
        value={form.neighborhood}
        onChange={(value) => handleFormChange("neighborhood", value)}
      />

      <FloatingInput
        label="Cidade / Município"
        value={form.uf}
        onChange={(value) => handleFormChange("uf", value)}
      />
    </Flex>
  );
};
