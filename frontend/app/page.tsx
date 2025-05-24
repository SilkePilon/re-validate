import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-16 px-4 py-12 md:px-6 md:py-16 min-h-screen"> {/* Adjusted padding/min-height */}
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-3xl"> {/* Increased spacing, max-width */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary"> {/* Adjusted tracking, size */}
          Reliable Email Validation for Modern Developers
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Quickly validate email addresses, reduce bounce rates, and ensure deliverability with our simple API and OTP system.
        </p>
        <Button size="lg" className="px-8 py-3 text-lg">View API Docs</Button> {/* Custom padding/text size for CTA */}
      </section>

      {/* Features Section */}
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary/90">Easy API Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Integrate our email validation API into your application in minutes. Clear documentation and straightforward endpoints.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-primary/90">Secure OTP Verification</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Use our shadcn-based OTP system to provide a seamless and secure email verification experience for your users.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-primary/90">Webhook Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Get real-time updates on validation events by configuring webhooks to your backend systems.
            </CardDescription>
          </CardContent>
        </Card>
      </section>

      {/* How it Works Section */}
      <section className="w-full max-w-3xl space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary/90">How It Works</h2>
        <ol className="list-decimal list-inside space-y-3 text-muted-foreground bg-card p-6 rounded-lg border shadow-sm text-left"> {/* Added shadow, text-left */}
          <li>Developer calls our API with the user&apos;s email address.</li>
          <li>Our service sends a secure OTP to the provided email.</li>
          <li>User enters the OTP on your frontend, which you verify.</li>
          <li>Email address is confirmed, enhancing user data quality.</li>
        </ol>
      </section>
      
      {/* Developer Focus Section */}
      <section className="text-center space-y-4 w-full max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary/90">Built for Developers, by Developers</h2>
        <p className="text-muted-foreground">
          We prioritize a smooth developer experience with clear documentation, robust APIs, and predictable results.
        </p>
        <Button variant="outline" size="lg">Explore SDKs (Coming Soon)</Button>
      </section>
    </div>
  );
}
