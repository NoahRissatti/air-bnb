import React from "react";
import { Box, Button, Flex, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FirstStep } from "./steps/FirstStep";
import { SecondStep } from "./steps/SecondStep";
import { ThirdComponent } from "./steps/ThirdComponent";
import { QuadComponent } from "./steps/QuadComponent";
import { Container } from "./styles";
import { FiveComponent } from "./steps/FiveComponent";
import { SixComponent } from "./steps/SixComponent";
import { SevenComponent } from "./steps/SevenComponent";
import { EightComponent } from "./steps/EightComponent";
import { NineComponent } from "./steps/NineComponent";
import { TenComponent } from "./steps/TenComponent";
import { useNewPlace } from "./hooks/useNewPlace";
import { HomeSVG } from "../../assets/icons/NewPlace/Home";
import { useNavigate } from "react-router-dom";

// Criação de um componente MotionFlex separado
const MotionFlex = motion(Flex);

const stepVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

export const NewPlace: React.FC = () => {
  const {
    currentStep,
    handleNextStep,
    handlePreviousStep,
    form,
    handleFormChange,
  } = useNewPlace();
  const navigate = useNavigate();

  const paddingValue = useBreakpointValue({ base: "1rem", md: "5rem 10rem" });

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <Flex direction="column" minHeight="100vh">
      <Box
        p={"2rem"}
        position={"absolute"}
        cursor={"pointer"}
        onClick={handleNavigate}
      >
        <HomeSVG />
      </Box>
      <Container>
        <Flex
          direction="column"
          flex={1}
          justifyContent="center"
          alignItems="center"
          p={paddingValue}
        >
          <MotionFlex
            key={currentStep}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={stepVariants}
            transition={{ duration: 0.5 }}
            alignItems="center"
            justifyContent="center"
          >
            {currentStep === 1 && <FirstStep />}
            {currentStep === 2 && (
              <SecondStep form={form} handleFormChange={handleFormChange} />
            )}
            {currentStep === 3 && (
              <ThirdComponent form={form} handleFormChange={handleFormChange} />
            )}
            {currentStep === 4 && (
              <QuadComponent form={form} handleFormChange={handleFormChange} />
            )}
            {currentStep === 5 && <FiveComponent />}
            {currentStep === 6 && <SixComponent />}
            {currentStep === 7 && (
              <SevenComponent form={form} handleFormChange={handleFormChange} />
            )}
            {currentStep === 8 && (
              <EightComponent form={form} handleFormChange={handleFormChange} />
            )}
            {currentStep === 9 && <NineComponent />}
            {currentStep === 10 && (
              <TenComponent form={form} handleFormChange={handleFormChange} />
            )}
          </MotionFlex>
        </Flex>
      </Container>

      <Flex
        as="footer"
        align="center"
        justifyContent="space-between"
        w="100%"
        p="1rem 3rem"
        borderTop="1px solid gray"
        bg="white"
        position="fixed"
        bottom={0}
      >
        <Button
          variant="link"
          size="lg"
          color="black"
          _hover={{ textDecoration: "none" }}
          sx={{
            textDecoration: "underline",
            textDecorationColor: "black",
            textDecorationThickness: "2px",
          }}
          onClick={handlePreviousStep}
          isDisabled={currentStep === 1}
        >
          Voltar
        </Button>

        <Button
          bg="black"
          color="white"
          _hover={{ bg: "gray.700" }}
          size="lg"
          onClick={handleNextStep}
        >
          Avançar
        </Button>
      </Flex>
    </Flex>
  );
};
