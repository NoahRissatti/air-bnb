import React, { useState } from "react";
import { Button, Flex, useBreakpointValue } from "@chakra-ui/react";
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

// Criação de um componente MotionFlex separado
const MotionFlex = motion(Flex);

const stepVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

export const NewPlace: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => (prevStep < 10 ? prevStep + 1 : prevStep));
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  const paddingValue = useBreakpointValue({ base: "1rem", md: "5rem 10rem" });

  return (
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
          {currentStep === 2 && <SecondStep />}
          {currentStep === 3 && <ThirdComponent />}
          {currentStep === 4 && <QuadComponent />}
          {currentStep === 5 && <FiveComponent />}
          {currentStep === 6 && <SixComponent />}
          {currentStep === 7 && <SevenComponent />}
          {currentStep === 8 && <EightComponent />}
          {currentStep === 9 && <NineComponent />}
          {currentStep === 10 && <TenComponent />}
        </MotionFlex>
      </Flex>

      <Flex
        align="center"
        justifyContent="space-between"
        w="100%"
        p="1rem 3rem"
        borderTop="1px solid gray"
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
    </Container>
  );
};