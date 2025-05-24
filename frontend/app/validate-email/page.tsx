"use client"; 

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"; // Verify this path

export default function ValidateEmailPage() {
  const [step, setStep] = useState<"email" | "otp">("email");
  const [email, setEmail] = useState<string>("");
  const [otp, setOtp] = useState<string>("");

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("OTP requested for:", email);
    setStep("otp"); 
  };

  const handleOtpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("OTP submitted:", otp, "for email:", email);
    alert(`OTP ${otp} submitted for ${email}! (This is a demo)`);
    // Potentially reset state here or redirect
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-10rem)] p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary text-center">
            {step === "email" ? "Validate Your Email" : "Enter Verification Code"}
          </CardTitle>
          <CardDescription className="text-center">
            {step === "email"
              ? "Enter your email address to receive a one-time password."
              : `A 6-digit code has been sent to ${email}.`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === "email" && (
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-muted-foreground">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-base"
                />
              </div>
              <Button type="submit" className="w-full text-base py-3">Send OTP</Button>
            </form>
          )}

          {step === "otp" && (
            <form onSubmit={handleOtpSubmit} className="space-y-8 flex flex-col items-center">
              <div className="space-y-2 flex flex-col items-center">
                <Label htmlFor="otp-input" className="text-muted-foreground">Verification Code</Label>
                <InputOTP 
                  id="otp-input"
                  maxLength={6} 
                  value={otp} 
                  onChange={(value) => setOtp(value)}
                  name="otp" // Added name attribute
                  autoComplete="one-time-code" // Added autocomplete attribute
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  {/* No separator for a continuous 6-digit code as per common practice, unless specifically requested */}
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                <p className="text-xs text-muted-foreground pt-1">Enter the 6-digit code sent to your email.</p>
              </div>
              
              <Button type="submit" className="w-full text-base py-3">Validate Email</Button>
              
              <div className="flex flex-col sm:flex-row justify-between items-center w-full space-y-2 sm:space-y-0 sm:space-x-2">
                <Button 
                  variant="link" 
                  size="sm" 
                  onClick={() => {
                    console.log("Resend OTP for:", email); 
                    alert("Resend OTP clicked (demo)");
                  }}
                  className="text-primary hover:text-primary/80 p-0"
                >
                  Resend OTP
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => {
                    setStep("email");
                    setOtp(""); 
                  }}
                  className="w-full sm:w-auto"
                >
                  Change Email
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
