import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const ConsultingForm = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const handleContinue = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white">
      {/* Progress bar */}
      <div className="w-full max-w-3xl mb-8">
        <div className="h-1 bg-gray-200 rounded-full">
          <div
            className="h-full bg-black rounded-full transition-all duration-500"
            style={{ width: `${((step - 1) / totalSteps) * 100}%` }}
          />
        </div>
        <div className="mt-2 text-sm text-gray-500">
          STEP {step} OF {totalSteps}
        </div>
      </div>

      {/* Form content */}
      <div className="w-full max-w-3xl">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              SPEAKER / CONSULTING FORM
            </h1>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-2xl mx-auto">
              Thank you for reaching out to Resk'Que's team! Whether you're looking
              to empower your team through group training, host an inspiring
              speaking engagement, or seek expert business consultation, we're here
              to help. This short questionnaire will guide us in understanding your
              unique needs and crafting a solution that aligns with your vision.
              Let's get started!
            </p>
            <Button
              onClick={handleContinue}
              className="bg-black text-white px-8 py-6 text-lg rounded-full hover:bg-gray-800 transition-colors"
            >
              Continue
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};