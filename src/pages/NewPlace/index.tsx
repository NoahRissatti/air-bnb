import React from "react";
import { Box, Flex } from "@chakra-ui/react";
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
import { IPlace } from "../../types/IPlace";
import axios from "axios";

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
    handleSubmit,
    form,
    handleFormChange,
    handleAddressNextStep,
    handleAmmenitiesNextStep,
  } = useNewPlace();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <Flex direction="column">
      <Box
        p={"2rem"}
        position={"absolute"}
        cursor={"pointer"}
        onClick={handleNavigate}
      >
        <HomeSVG />
      </Box>
      <Container>
        <Flex direction="column" flex={1}>
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
            {currentStep === 1 && <FirstStep handleNextStep={handleNextStep} />}
            {currentStep === 2 && (
              <SecondStep
                form={form}
                handleFormChange={handleFormChange}
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
              />
            )}
            {currentStep === 3 && (
              <ThirdComponent
                form={form}
                handleFormChange={handleFormChange}
                handleNextStep={handleAddressNextStep}
                handlePreviousStep={handlePreviousStep}
              />
            )}
            {currentStep === 4 && (
              <QuadComponent
                form={form}
                handleFormChange={handleFormChange}
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
              />
            )}
            {currentStep === 5 && (
              <FiveComponent
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
              />
            )}
            {currentStep === 6 && (
              <SixComponent
                handleNextStep={handleAmmenitiesNextStep}
                handlePreviousStep={handlePreviousStep}
              />
            )}
            {currentStep === 7 && (
              <SevenComponent
                form={form}
                handleFormChange={handleFormChange}
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
              />
            )}
            {currentStep === 8 && (
              <EightComponent
                form={form}
                handleFormChange={handleFormChange}
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
              />
            )}
            {currentStep === 9 && (
              <NineComponent
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
              />
            )}
            {currentStep === 10 && (
              <TenComponent
                form={form}
                handleFormChange={handleFormChange}
                handleSubmit={handleSubmit}
                handlePreviousStep={handlePreviousStep}
              />
            )}
          </MotionFlex>
        </Flex>
      </Container>
    </Flex>
  );
};
