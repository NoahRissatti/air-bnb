import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import { Flex } from "@chakra-ui/react";
import { FloatingInput } from "../../../../../../components/Input";
import { IAddress, IPlace } from "../../../../../../types/IPlace";

interface Props {
  form: IPlace;
  localAddress: IAddress;
  setLocalAddress: Dispatch<SetStateAction<IAddress>>;
}

export const AddressForm: React.FC<Props> = ({
  form,
  localAddress,
  setLocalAddress,
}) => {
  const [cep, setCep] = useState<string>(form.address.cep || "");

  useEffect(() => {
    // Fetch address when CEP has exactly 8 digits
    if (cep.length === 8) {
      const fetchAddressFromCep = async (cep: string) => {
        try {
          const response = await axios.get(
            `https://viacep.com.br/ws/${cep}/json/`
          );
          const data = response.data;

          if (data && !data.erro) {
            setLocalAddress((prev) => ({
              ...prev,
              address: data.logradouro,
              neighborhood: data.bairro,
              city: data.localidade,
              cep: data.cep,
            }));
          } else {
            alert("CEP não encontrado.");
          }
        } catch (error) {
          console.error("Erro ao buscar o CEP:", error);
          alert("Erro ao buscar o CEP.");
        }
      };

      fetchAddressFromCep(cep);
    }
  }, [cep]);

  const handleInputChange = (key: keyof IPlace["address"], value: string) => {
    setLocalAddress((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <Flex direction={"column"} gap={"0.5rem"}>
      <FloatingInput
        label="CEP"
        mb="1.5rem"
        value={cep}
        onChange={(value) => setCep(value)}
      />

      <FloatingInput
        label="País / Região"
        value={localAddress.country || ""}
        onChange={(value) => handleInputChange("country", value)}
      />

      <FloatingInput
        label="Endereço"
        value={localAddress.address || ""}
        onChange={(value) => handleInputChange("address", value)}
      />

      <FloatingInput
        label="Apto, suíte, unidade (se aplicável)"
        value={localAddress.complement || ""}
        onChange={(value) => handleInputChange("complement", value)}
      />

      <FloatingInput
        label="Bairro (se aplicável)"
        value={localAddress.neighborhood || ""}
        onChange={(value) => handleInputChange("neighborhood", value)}
      />

      <FloatingInput
        label="Cidade / Município"
        value={localAddress.city || ""}
        onChange={(value) => handleInputChange("city", value)}
      />
    </Flex>
  );
};
