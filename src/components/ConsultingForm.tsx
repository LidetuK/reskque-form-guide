import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ConsultingForm = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 5;
  const [hasWorkedWithProvider, setHasWorkedWithProvider] = useState<string>("");
  const [urgencyLevel, setUrgencyLevel] = useState<string>("");

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

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold mb-6">Understanding Your Needs</h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <Label htmlFor="name">What's your name and organization?</Label>
                <Input id="name" placeholder="Your answer" />
              </div>

              <div className="space-y-4">
                <Label htmlFor="industry">What industry are you in?</Label>
                <Input id="industry" placeholder="Your answer" />
              </div>

              <div className="space-y-4">
                <Label htmlFor="businessTime">How long have you been in business?</Label>
                <Input id="businessTime" placeholder="Your answer" />
              </div>

              <div className="space-y-4">
                <Label htmlFor="goals">What are your current business goals?</Label>
                <Textarea 
                  id="goals" 
                  placeholder="e.g., revenue growth, market expansion, brand building, etc."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-4">
                <Label>Select the age range of your group</Label>
                <RadioGroup defaultValue="14-25">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="14-25" id="age-14-25" />
                    <Label htmlFor="age-14-25">14-25</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="26-39" id="age-26-39" />
                    <Label htmlFor="age-26-39">26-39</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="40-55" id="age-40-55" />
                    <Label htmlFor="age-40-55">40-55</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="56-71" id="age-56-71" />
                    <Label htmlFor="age-56-71">56-71</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="72+" id="age-72" />
                    <Label htmlFor="age-72">72+</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label>What service are you most interested in exploring with Resk'Que?</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="group-training">Group Training</SelectItem>
                    <SelectItem value="speaking">Speaking Engagement</SelectItem>
                    <SelectItem value="consultation">Business Consultation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label>How many people will this service impact directly?</Label>
                <RadioGroup defaultValue="less-than-10">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="less-than-10" id="impact-10" />
                    <Label htmlFor="impact-10">Less than 10</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="10-50" id="impact-10-50" />
                    <Label htmlFor="impact-10-50">10–50</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="51-100" id="impact-51-100" />
                    <Label htmlFor="impact-51-100">51–100</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="101-500" id="impact-101-500" />
                    <Label htmlFor="impact-101-500">101–500</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="500+" id="impact-500" />
                    <Label htmlFor="impact-500">More than 500</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <Button
              onClick={handleContinue}
              className="bg-black text-white px-8 py-6 text-lg rounded-full hover:bg-gray-800 transition-colors"
            >
              Continue
            </Button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold mb-6">Context and Challenges</h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <Label htmlFor="currentChallenges">
                  Can you describe the current situation or challenge you're facing?
                </Label>
                <Textarea 
                  id="currentChallenges"
                  placeholder="e.g., Our team lacks clear communication, We need a high-energy speaker for our annual conference, Our business growth has plateaued"
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-4">
                <Label htmlFor="obstacles">
                  What obstacles have prevented you from addressing this issue so far?
                </Label>
                <Textarea 
                  id="obstacles"
                  placeholder="e.g., Limited resources, Lack of expertise, Unclear direction"
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-4">
                <Label>On a scale of 1-10, how urgent is it for you to address this issue?</Label>
                <RadioGroup value={urgencyLevel} onValueChange={setUrgencyLevel}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1-3" id="urgency-1-3" />
                    <Label htmlFor="urgency-1-3">1-3 (Not very urgent)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4-6" id="urgency-4-6" />
                    <Label htmlFor="urgency-4-6">4-6 (Moderately urgent)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="7-10" id="urgency-7-10" />
                    <Label htmlFor="urgency-7-10">7-10 (Very urgent)</Label>
                  </div>
                </RadioGroup>
              </div>

              {urgencyLevel === "7-10" && (
                <div className="space-y-4">
                  <Label htmlFor="timeSensitive">
                    What makes this issue time-sensitive?
                  </Label>
                  <Textarea 
                    id="timeSensitive"
                    placeholder="Please explain why this is urgent"
                    className="min-h-[100px]"
                  />
                </div>
              )}

              <div className="space-y-4">
                <Label>Have you worked with a similar service provider before?</Label>
                <RadioGroup value={hasWorkedWithProvider} onValueChange={setHasWorkedWithProvider}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="provider-yes" />
                    <Label htmlFor="provider-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="provider-no" />
                    <Label htmlFor="provider-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {hasWorkedWithProvider === "yes" && (
                <div className="space-y-4">
                  <Label htmlFor="previousExperience">
                    What was your experience like? Did they meet your expectations?
                  </Label>
                  <Textarea 
                    id="previousExperience"
                    placeholder="Please share your previous experience"
                    className="min-h-[100px]"
                  />
                </div>
              )}

              {hasWorkedWithProvider === "no" && (
                <div className="space-y-4">
                  <Label htmlFor="whyNow">
                    What made you decide to explore working with someone now?
                  </Label>
                  <Textarea 
                    id="whyNow"
                    placeholder="Please explain your decision"
                    className="min-h-[100px]"
                  />
                </div>
              )}
            </div>

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
