import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckIcon } from "lucide-react"; // Or a simple text checkmark '✓' if lucide-react is not installed

// Helper component for feature list items
const FeatureListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center">
    <CheckIcon className="w-4 h-4 mr-2 text-primary" /> {/* Replace with '✓' if CheckIcon is not available */}
    <span className="text-muted-foreground">{children}</span>
  </li>
);

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Pricing Plans</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Choose the plan that's right for your needs. Simple, transparent pricing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Free Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Free</CardTitle>
            <CardDescription>Perfect for getting started and personal projects.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <p className="text-4xl font-bold">$0<span className="text-sm font-normal text-muted-foreground">/month</span></p>
            <ul className="space-y-2">
              <FeatureListItem>100 validations/month</FeatureListItem>
              <FeatureListItem>Basic API Access</FeatureListItem>
              <FeatureListItem>Community Support</FeatureListItem>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Get Started</Button>
          </CardFooter>
        </Card>

        {/* Pro Plan - Highlighted */}
        <Card className="flex flex-col border-2 border-primary shadow-lg relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold rounded-full">
            Most Popular
          </div>
          <CardHeader className="pt-10"> {/* Added padding top to account for badge */}
            <CardTitle>Pro</CardTitle>
            <CardDescription>Ideal for growing businesses and applications.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <p className="text-4xl font-bold">$29<span className="text-sm font-normal text-muted-foreground">/month</span></p>
            <ul className="space-y-2">
              <FeatureListItem>5,000 validations/month</FeatureListItem>
              <FeatureListItem>Full API Access</FeatureListItem>
              <FeatureListItem>Webhook Support</FeatureListItem>
              <FeatureListItem>Email Support</FeatureListItem>
            </ul>
          </CellContent>
          <CardFooter>
            <Button className="w-full">Choose Pro</Button>
          </CardFooter>
        </Card>

        {/* Enterprise Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription>For large-scale applications and custom needs.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <p className="text-4xl font-bold">Custom</p>
            <ul className="space-y-2">
              <FeatureListItem>Unlimited validations</FeatureListItem>
              <FeatureListItem>Full API Access & Webhooks</FeatureListItem>
              <FeatureListItem>Dedicated Support & SLAs</FeatureListItem>
              <FeatureListItem>Custom Integrations</FeatureListItem>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Contact Sales</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
