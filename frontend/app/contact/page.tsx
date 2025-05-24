"use client"; // For form handling

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link"; // For Next.js links

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Message sent! (This is a demo)");
    // Reset form (optional)
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Get In Touch</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Have questions or feedback? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help?" required />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Your message..." rows={5} required />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        {/* Alternative Contact Methods */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Other Ways to Reach Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h3 className="font-semibold">Email Us Directly</h3>
                <p className="text-muted-foreground">
                  For general inquiries or support, you can email us at:
                  <br />
                  <a href="mailto:support@example-validation.com" className="text-primary hover:underline">
                    support@example-validation.com 
                  </a> {/* Placeholder email */}
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Frequently Asked Questions</h3>
                <p className="text-muted-foreground">
                  Check out our <Link href="/faq" className="text-primary hover:underline">FAQ page</Link> for answers to common questions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">API Documentation</h3>
                <p className="text-muted-foreground">
                  Need help with integration? Visit our <Link href="/api-docs" className="text-primary hover:underline">API Documentation</Link>.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
