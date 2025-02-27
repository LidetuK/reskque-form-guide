import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ConsultingForm = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const totalSteps = 6;
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    industry: "",
    businessTime: "",
    goals: "",
    ageRange: "",
    service: "",
    impactSize: "",
    challenges: "",
    obstacles: "",
    urgencyLevel: "",
    timeSensitive: "",
    hasWorkedWithProvider: "",
    previousExperience: "",
    whyNow: "",
    successVision: "",
    focusArea: "",
    deliveryType: "",
    venue: "",
    format: "",
    budget: "",
    additionalInfo: "",
    needsFollowUp: "",
    preferredTime: "",
    timezone: "",
    trainingFormat: "",
    intendedFor: "",
    otherServiceDescription: "",
    measureImpact: "",
    keyTakeaways: "",
    timeframe: "",
    eventDate: "",
    presentationType: "",
    specificTopics: "",
    eventRequirements: "",
    currentRevenue: "",
    idealTimeframe: "",
    customizationNeeded: "",
  });

  const validateStep = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        return true;
      case 2:
        return (
          formData.name?.trim() !== "" &&
          formData.organization?.trim() !== "" &&
          formData.industry?.trim() !== "" &&
          formData.businessTime?.trim() !== "" &&
          formData.goals?.trim() !== "" &&
          formData.trainingFormat !== "" &&
          formData.service !== "" &&
          formData.ageRange !== "" &&
          formData.impactSize !== "" &&
          formData.intendedFor !== ""
        );
      case 3:
        return (
          formData.challenges?.trim() !== "" &&
          formData.obstacles?.trim() !== "" &&
          formData.urgencyLevel !== "" &&
          (formData.urgencyLevel !== "7-10" || formData.timeSensitive?.trim() !== "") &&
          formData.hasWorkedWithProvider !== "" &&
          ((formData.hasWorkedWithProvider === "yes" && formData.previousExperience?.trim() !== "") ||
          (formData.hasWorkedWithProvider === "no" && formData.whyNow?.trim() !== ""))
        );
      case 4:
        return (
          formData.successVision?.trim() !== "" &&
          formData.focusArea !== "" &&
          formData.measureImpact?.trim() !== "" &&
          formData.keyTakeaways?.trim() !== "" &&
          formData.timeframe !== "" &&
          formData.deliveryType !== "" &&
          formData.format !== "" &&
          formData.budget !== ""
        );
      case 5:
        return true;
      default:
        return false;
    }
  };

  const handleContinue = () => {
    if (!validateStep(step)) {
      let missingFields = [];
      switch (step) {
        case 2:
          if (!formData.name?.trim()) missingFields.push("Name");
          if (!formData.organization?.trim()) missingFields.push("Organization");
          if (!formData.industry?.trim()) missingFields.push("Industry");
          if (!formData.businessTime?.trim()) missingFields.push("Business Time");
          if (!formData.goals?.trim()) missingFields.push("Goals");
          if (!formData.trainingFormat) missingFields.push("Training Format");
          if (!formData.service) missingFields.push("Service");
          if (!formData.ageRange) missingFields.push("Age Range");
          if (!formData.impactSize) missingFields.push("Impact Size");
          if (!formData.intendedFor) missingFields.push("Intended For");
          break;
        case 3:
          if (!formData.challenges?.trim()) missingFields.push("Current Challenges");
          if (!formData.urgencyLevel) missingFields.push("Urgency Level");
          break;
        case 4:
          if (!formData.successVision?.trim()) missingFields.push("Success Vision");
          if (!formData.focusArea) missingFields.push("Focus Area");
          if (!formData.measureImpact?.trim()) missingFields.push("Measure Impact");
          if (!formData.keyTakeaways?.trim()) missingFields.push("Key Takeaways");
          if (!formData.timeframe) missingFields.push("Timeframe");
          if (!formData.deliveryType) missingFields.push("Delivery Type");
          if (!formData.format) missingFields.push("Format");
          if (!formData.budget) missingFields.push("Budget Range");
          break;
      }

      toast({
        variant: "destructive",
        title: "Required Fields Missing",
        description: `Please fill in the following fields: ${missingFields.join(", ")}`,
      });
      return;
    }

    if (step < totalSteps) {
      setStep((prev) => prev + 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "8e945660-1127-4981-a429-708507e05eda",
          from_name: "Consulting Form Submission",
          to: "thee.lifeguide+speaker@gmail.com",
          subject: `New Consulting Form Submission from ${formData.name}`,
          message: JSON.stringify(formData, null, 2),
        }),
      });

      if (response.ok) {
        setStep(6);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit form. Please try again later.",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-3xl px-4 md:px-6 mb-6 md:mb-8">
        <div className="h-1 bg-gray-200 rounded-full">
          <div
            className="h-full bg-black rounded-full transition-all duration-500"
            style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
          />
        </div>
        <div className="mt-2 text-sm text-gray-500">
          {step < 6 ? `STEP ${step} OF ${totalSteps - 1}` : "COMPLETED"}
        </div>
      </div>

      <div className="w-full max-w-3xl px-4 md:px-6">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 tracking-tight">
              SPEAKER / CONSULTING FORM
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto">
              Thank you for reaching out to Resk'Que's team! Whether you're looking
              to empower your team through group training, host an inspiring
              speaking engagement, or seek expert business consultation, we're here
              to help. This short questionnaire will guide us in understanding your
              unique needs and crafting a solution that aligns with your vision.
              Let's get started!
            </p>
            <Button
              onClick={handleContinue}
              className="bg-black text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full hover:bg-gray-800 transition-colors"
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
            className="space-y-6 md:space-y-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Basic Information</h2>
            
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-4">
                <Label htmlFor="name">What's your name and organization?</Label>
                <Input 
                  id="name" 
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)} 
                />
                <Input 
                  id="organization" 
                  placeholder="Your organization"
                  value={formData.organization}
                  onChange={(e) => handleInputChange('organization', e.target.value)}
                />
              </div>

              <div className="space-y-4">
                <Label htmlFor="industry">What industry are you in?</Label>
                <Input 
                  id="industry" 
                  placeholder="Your industry"
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                />
              </div>

              <div className="space-y-4">
                <Label htmlFor="businessTime">How long have you been in business?</Label>
                <Input 
                  id="businessTime" 
                  placeholder="e.g., 5 years"
                  value={formData.businessTime}
                  onChange={(e) => handleInputChange('businessTime', e.target.value)}
                />
              </div>

              <div className="space-y-4">
                <Label htmlFor="goals">What are your current business goals?</Label>
                <Textarea 
                  id="goals" 
                  placeholder="e.g., revenue growth, market expansion, brand building, etc."
                  className="min-h-[100px]"
                  value={formData.goals}
                  onChange={(e) => handleInputChange('goals', e.target.value)}
                />
              </div>

              <div className="space-y-4">
                <Label>Select the age range of your group</Label>
                <RadioGroup 
                  value={formData.ageRange} 
                  onValueChange={(value) => handleInputChange('ageRange', value)}
                >
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
                <Select 
                  value={formData.service}
                  onValueChange={(value) => handleInputChange('service', value)}
                >
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

              {formData.service === "other" && (
                <div className="space-y-4">
                  <Label htmlFor="otherService">Can you elaborate on the type of service you're seeking?</Label>
                  <Textarea 
                    id="otherService"
                    placeholder="Please describe the service you need"
                    value={formData.otherServiceDescription}
                    onChange={(e) => handleInputChange('otherServiceDescription', e.target.value)}
                  />
                </div>
              )}

              <div className="space-y-4">
                <Label>Who is this service intended for?</Label>
                <Select 
                  value={formData.intendedFor}
                  onValueChange={(value) => handleInputChange('intendedFor', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select intended audience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="organization">My organization/company</SelectItem>
                    <SelectItem value="department">A specific department/team</SelectItem>
                    <SelectItem value="external">External audience/event attendees</SelectItem>
                    <SelectItem value="community">Community/nonprofit initiative</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label>Do you have a preferred training format?</Label>
                <Select 
                  value={formData.trainingFormat}
                  onValueChange={(value) => handleInputChange('trainingFormat', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="in-person">In-person workshop</SelectItem>
                    <SelectItem value="virtual">Virtual sessions</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label>How many people will this service impact directly?</Label>
                <RadioGroup 
                  value={formData.impactSize}
                  onValueChange={(value) => handleInputChange('impactSize', value)}
                >
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
              className="w-full md:w-auto bg-black text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full hover:bg-gray-800 transition-colors"
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
                <Label htmlFor="challenges">
                  What are the biggest challenges your group is currently facing?
                </Label>
                <Textarea 
                  id="challenges"
                  placeholder="e.g., Our team lacks clear communication, We need a high-energy speaker for our annual conference"
                  className="min-h-[120px]"
                  value={formData.challenges}
                  onChange={(e) => handleInputChange('challenges', e.target.value)}
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
                  value={formData.obstacles}
                  onChange={(e) => handleInputChange('obstacles', e.target.value)}
                />
              </div>

              <div className="space-y-4">
                <Label>How urgent is it for you to address this issue?</Label>
                <RadioGroup 
                  value={formData.urgencyLevel}
                  onValueChange={(value) => handleInputChange('urgencyLevel', value)}
                >
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

              {formData.urgencyLevel === "7-10" && (
                <div className="space-y-4">
                  <Label htmlFor="timeSensitive">What makes this issue time-sensitive?</Label>
                  <Textarea 
                    id="timeSensitive"
                    placeholder="Please explain why this is urgent"
                    value={formData.timeSensitive}
                    onChange={(e) => handleInputChange('timeSensitive', e.target.value)}
                  />
                </div>
              )}

              <div className="space-y-4">
                <Label>Have you worked with a similar service provider before?</Label>
                <RadioGroup 
                  value={formData.hasWorkedWithProvider}
                  onValueChange={(value) => handleInputChange('hasWorkedWithProvider', value)}
                >
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

              {formData.hasWorkedWithProvider === "yes" && (
                <div className="space-y-4">
                  <Label htmlFor="previousExperience">
                    What was your experience like? What worked well, and what could be improved?
                  </Label>
                  <Textarea 
                    id="previousExperience"
                    placeholder="Please share your previous experience"
                    value={formData.previousExperience}
                    onChange={(e) => handleInputChange('previousExperience', e.target.value)}
                  />
                </div>
              )}

              {formData.hasWorkedWithProvider === "no" && (
                <div className="space-y-4">
                  <Label htmlFor="whyNow">
                    What made you decide to explore working with someone now?
                  </Label>
                  <Textarea 
                    id="whyNow"
                    placeholder="Please explain your decision"
                    value={formData.whyNow}
                    onChange={(e) => handleInputChange('whyNow', e.target.value)}
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
                <Label htmlFor="successVision">
                  What does success look like for you after engaging with Resk'Que's services?
                </Label>
                <Textarea 
                  id="successVision"
                  placeholder="e.g., A more cohesive team, Increased employee morale, Higher event attendance/engagement"
                  className="min-h-[100px]"
                  value={formData.successVision}
                  onChange={(e) => handleInputChange('successVision', e.target.value)}
                />
              </div>

              <div className="space-y-4">
                <Label>Which area do you want to focus on improving FIRST?</Label>
                <Select 
                  value={formData.focusArea}
                  onValueChange={(value) => handleInputChange('focusArea', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select focus area" />
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
                <Label htmlFor="measureImpact">How do you envision measuring the impact of this service?</Label>
                <Textarea 
                  id="measureImpact"
                  placeholder="e.g., Through feedback surveys, By tracking performance metrics"
                  value={formData.measureImpact}
                  onChange={(e) => handleInputChange('measureImpact', e.target.value)}
                />
              </div>

              <div className="space-y-4">
                <Label htmlFor="keyTakeaways">
                  What are the key takeaways you want your audience to gain?
                </Label>
                <Textarea 
                  id="keyTakeaways"
                  placeholder="Please describe the desired takeaways"
                  value={formData.keyTakeaways}
                  onChange={(e) => handleInputChange('keyTakeaways', e.target.value)}
                />
              </div>

              <div className="space-y-4">
                <Label>When would you like this service to take place?</Label>
                <Select 
                  value={formData.timeframe}
                  onValueChange={(value) => handleInputChange('timeframe', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">As soon as possible</SelectItem>
                    <SelectItem value="1-3-months">Within the next 1-3 months</SelectItem>
                    <SelectItem value="3-6-months">In 3-6 months</SelectItem>
                    <SelectItem value="6-plus-months">Beyond 6 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label>Where will this service be delivered?</Label>
                <RadioGroup 
                  value={formData.deliveryType}
                  onValueChange={(value) => handleInputChange('deliveryType', value)}
                >
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

              {formData.deliveryType === "in-person" && (
                <div className="space-y-4">
                  <Label htmlFor="venue">Please provide the venue/location details:</Label>
                  <Input 
                    id="venue"
                    placeholder="Enter venue details"
                    value={formData.venue}
                    onChange={(e) => handleInputChange('venue', e.target.value)}
                  />
                </div>
              )}

              <div className="space-y-4">
                <Label>What's your preferred format for delivery?</Label>
                <Select 
                  value={formData.format}
                  onValueChange={(value) => handleInputChange('format', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select format" />
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
                <Label htmlFor="currentRevenue">What's your current annual revenue? (Optional)</Label>
                <Input 
                  id="currentRevenue"
                  placeholder="Optional"
                  value={formData.currentRevenue}
                  onChange={(e) => handleInputChange('currentRevenue', e.target.value)}
                />
              </div>

              <div className="space-y-4">
                <Label>Do you have a budget range in mind for this service?</Label>
                <Select 
                  value={formData.budget}
                  onValueChange={(value) => handleInputChange('budget', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-1k">Under $1,000</SelectItem>
                    <SelectItem value="1k-5k">$1,000–$5,000</SelectItem>
                    <SelectItem value="5k-10k">$5,000–$10,000</SelectItem>
                    <SelectItem value="over-10k">Over $10,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {formData.budget === "over-10k" && (
                <div className="space-y-4">
                  <Label>Would you like to discuss additional customization options?</Label>
                  <RadioGroup 
                    value={formData.customizationNeeded}
                    onValueChange={(value) => handleInputChange('customizationNeeded', value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="customization-yes" />
                      <Label htmlFor="customization-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="customization-no" />
                      <Label htmlFor="customization-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              <div className="space-y-4">
                <Label htmlFor="idealTimeframe">
                  What's your ideal timeframe for seeing results?
                </Label>
                <Input 
                  id="idealTimeframe"
                  placeholder="e.g., 3 months, 6 months"
                  value={formData.idealTimeframe}
                  onChange={(e) => handleInputChange('idealTimeframe', e.target.value)}
                />
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
            <h2 className="text-3xl font-bold mb-6">Almost Done!</h2>
            <p className="text-lg text-gray-700 mb-8">
              Thank you for providing all the details. Please review your information and click submit when ready.
            </p>
            <Button
              onClick={handleSubmit}
              className="w-full md:w-auto bg-black text-white px-8 py-6 text-lg rounded-full hover:bg-gray-800 transition-colors"
            >
              Submit Form
            </Button>
          </motion.div>
        )}

        {step === 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl font-bold text-green-600">Thank You!</h2>
            <p className="text-lg text-gray-700">
              Your form has been successfully submitted. We'll be in touch with you shortly.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
