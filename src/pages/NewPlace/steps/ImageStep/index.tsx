import React, { useState, useRef } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../firebase";
import { Flex, Heading, Image, IconButton, HStack } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Footer } from "../../components/Footer";
import { IPlace } from "../../../../types/IPlace";
import { Container } from "./styles";

interface Props {
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  handleFormChange: (key: keyof IPlace, value: any) => void;
}

export const ImageStep: React.FC<Props> = ({
  handleNextStep,
  handlePreviousStep,
  handleFormChange,
}) => {
  const [img, setImg] = useState<string>(""); // URL da imagem carregada
  const [preview, setPreview] = useState<string | null>(null); // Preview da imagem
  const [isUploading, setIsUploading] = useState<boolean>(false); // Controle do upload
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Atualiza o preview ao selecionar a imagem
  function handleFileChange() {
    const file = fileInputRef.current?.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  }

  // Envia a imagem para o Firebase antes de avançar
  async function handleUploadAndNext() {
    if (!fileInputRef.current?.files?.[0]) {
      alert("Por favor, selecione uma imagem antes de prosseguir.");
      return;
    }

    const file = fileInputRef.current.files[0];
    setIsUploading(true);

    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise<void>((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          console.error("Erro no upload:", error);
          alert("Erro ao enviar o arquivo.");
          setIsUploading(false);
          reject(error);
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          setImg(url);
          handleFormChange("image", url); // Atualiza o formulário com a URL
          setIsUploading(false);
          resolve();
        }
      );
    });
  }

  // Combina o upload com o próximo passo
  async function handleNextStepWithUpload() {
    if (!img) {
      await handleUploadAndNext();
    }
    handleNextStep();
  }

  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Container>
        <HStack w={"100%"} justifyContent={"space-between"}>
          <Heading fontWeight={500} fontSize="28px">
            Escolha uma foto
          </Heading>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />

          <IconButton
            icon={<AddIcon />}
            aria-label="Selecionar imagem"
            borderRadius="50%"
            size="lg"
            onClick={() => fileInputRef.current?.click()}
            bg="gray.200"
            _hover={{ bg: "gray.300" }}
            mt={4}
          />
        </HStack>

        {preview && (
          <Image
            src={preview}
            alt="Preview da imagem"
            maxWidth="100%"
            maxHeight="300px"
            mt={4}
            borderRadius={12}
          />
        )}
      </Container>

      <Footer
        handleNextStep={handleNextStepWithUpload}
        handlePreviousStep={handlePreviousStep}
        isNextStepDisabled={isUploading}
      />
    </Flex>
  );
};
