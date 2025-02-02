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
  const [needsFollowUp, setNeedsFollowUp] = useState<string>("");
  const [deliveryType, setDeliveryType] = useState<string>("");

  const handleContinue = () => {
    if (step < totalSteps) {
      setStep((prev) => prev + 1);
    }
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

        {step === 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold mb-6">Goals and Expectations</h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <Label htmlFor="success">
                  What does success look like for you after engaging with Resk'Que's services?
                </Label>
                <Textarea 
                  id="success"
                  placeholder="e.g., A more cohesive team, Increased employee morale, Higher event attendance/engagement"
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-4">
                <Label>Which of these areas do you want to focus on improving FIRST?</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="leadership">Leadership skills</SelectItem>
                    <SelectItem value="team">Team dynamics/collaboration</SelectItem>
                    <SelectItem value="communication">Communication effectiveness</SelectItem>
                    <SelectItem value="motivation">Motivation and inspiration</SelectItem>
                    <SelectItem value="strategy">Strategic planning</SelectItem>
                    <SelectItem value="operations">Operational efficiency</SelectItem>
                    <SelectItem value="other">Something Else</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label>Where will this service be delivered?</Label>
                <RadioGroup value={deliveryType} onValueChange={setDeliveryType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="in-person" id="delivery-in-person" />
                    <Label htmlFor="delivery-in-person">In-person at a physical location</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="virtual" id="delivery-virtual" />
                    <Label htmlFor="delivery-virtual">Virtually (online platform)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hybrid" id="delivery-hybrid" />
                    <Label htmlFor="delivery-hybrid">Hybrid (combination of in-person and virtual)</Label>
                  </div>
                </RadioGroup>
              </div>

              {deliveryType === "in-person" && (
                <div className="space-y-4">
                  <Label htmlFor="venue">Please provide the venue/location details:</Label>
                  <Input id="venue" placeholder="Enter venue details" />
                </div>
              )}

              <div className="space-y-4">
                <Label>What's your preferred format for delivery?</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="workshop">Workshop-style interactive session</SelectItem>
                    <SelectItem value="keynote">Keynote presentation</SelectItem>
                    <SelectItem value="consultation">One-on-one consultation sessions</SelectItem>
                    <SelectItem value="panel">Panel discussion/moderated Q&A</SelectItem>
                    <SelectItem value="custom">Customized program tailored to your needs</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label>Do you have a budget range in mind for this service?</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-1k">Under $1,000</SelectItem>
                    <SelectItem value="1k-5k">$1,000–$5,000</SelectItem>
                    <SelectItem value="5k-10k">$5,000–$10,000</SelectItem>
                    <SelectItem value="over-10k">Over $10,000</SelectItem>
                  </SelectContent>
                </Select>
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

        {step === 5 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold mb-6">Final Thoughts</h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <Label htmlFor="additional-info">
                  Is there anything else you'd like Resk'Que to know about your organization, event, or project before moving forward?
                </Label>
                <Textarea 
                  id="additional-info"
                  placeholder="Share any additional information"
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-4">
                <Label>Would you like to schedule a follow-up call with Resk'Que or his team to discuss your requirements further?</Label>
                <RadioGroup value={needsFollowUp} onValueChange={setNeedsFollowUp}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="followup-yes" />
                    <Label htmlFor="followup-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="followup-no" />
                    <Label htmlFor="followup-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {needsFollowUp === "yes" && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Label htmlFor="preferred-time">When would be the best time for the follow-up call?</Label>
                    <Input type="datetime-local" id="preferred-time" />
                  </div>

                  <div className="space-y-4">
                    <Label>What time zone are you located in?</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="est">Eastern Time (ET)</SelectItem>
                        <SelectItem value="cst">Central Time (CT)</SelectItem>
                        <SelectItem value="mst">Mountain Time (MT)</SelectItem>
                        <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
            </div>

            <div className="text-center space-y-6">
              <Button
                type="submit"
                className="bg-black text-white px-8 py-6 text-lg rounded-full hover:bg-gray-800 transition-colors"
              >
                Submit
              </Button>

              {step === totalSteps && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-lg text-gray-700 mt-8 leading-relaxed"
                >
                  Thank you for sharing your thoughts and insights! We truly appreciate your honesty and openness. 
                  Based on your responses, we'll prepare personalized recommendations to ensure Resk'Que delivers 
                  exceptional value to you and your audience. If you opted for a follow-up call, expect to hear 
                  from us shortly to finalize everything. Have a great day ahead!
                </motion.p>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
