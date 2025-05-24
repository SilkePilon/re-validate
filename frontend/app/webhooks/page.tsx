export default function WebhooksPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12"> {/* Added md:py-12 for more vertical space on larger screens */}
      <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-8">Webhooks Integration</h1>

      <section id="introduction" className="mb-12 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-primary/90">Introduction to Webhooks</h2>
        <p className="text-muted-foreground">
          Webhooks allow your application to receive real-time notifications about events that happen in our email validation service. 
          Instead of polling our API, you can subscribe to events and we'll send an HTTP POST payload to your configured webhook URL when an event occurs.
        </p>
        <p className="text-muted-foreground">
          Common use cases include updating your local database when an email is successfully validated, or triggering custom workflows based on validation outcomes.
        </p>
      </section>

      <section id="setup" className="mb-12 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-primary/90">Setting Up a Webhook</h2>
        <p className="text-muted-foreground">
          1. Go to your account dashboard (link to be added).
        </p>
        <p className="text-muted-foreground">
          2. Navigate to the 'Webhooks' section in your settings.
        </p>
        <p className="text-muted-foreground">
          3. Click 'Add Endpoint' and provide your HTTPS webhook URL.
        </p>
        <p className="text-muted-foreground">
          <strong>Security:</strong> We sign each webhook event we send using a unique secret key for each endpoint. This signature is passed in the <code className="bg-muted px-1 py-0.5 rounded">X-Webhook-Signature</code> HTTP header. Verify this signature to ensure the request came from us and was not tampered with. Your endpoint secrets are available in your dashboard.
        </p>
      </section>

      <section id="event-types" className="mb-12 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-primary/90">Event Types</h2>
        <p className="text-muted-foreground">We currently support the following event types:</p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
          <li><code className="bg-muted px-1 py-0.5 rounded">email.validation.succeeded</code>: Triggered when an email is successfully validated via OTP.</li>
          <li><code className="bg-muted px-1 py-0.5 rounded">email.validation.failed</code>: Triggered if an email cannot be validated (e.g., invalid format, OTP expired, too many attempts).</li>
          <li><code className="bg-muted px-1 py-0.5 rounded">otp.requested</code>: Triggered when an OTP has been generated and sent for an email.</li>
          {/* Add more placeholder events as needed */}
        </ul>
      </section>

      <section id="payload-structure" className="mb-12 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-primary/90">Payload Structure</h2>
        <p className="text-muted-foreground">All webhook events follow a similar JSON structure:</p>
        <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto"><code>
{`{
  "event_id": "evt_123abc456def",
  "event_type": "email.validation.succeeded",
  "api_version": "v1",
  "created_at": 1678886400,
  "data": {
    "object": {
      // Event-specific data will be here
      "email": "user@example.com",
      "status": "verified",
      // ... other relevant fields
    }
  }
}`}
        </code></pre>
        <p className="text-muted-foreground mt-4">
          The <code className="bg-muted px-1 py-0.5 rounded">data.object</code> will contain the details specific to the event type. For example, for <code className="bg-muted px-1 py-0.5 rounded">email.validation.succeeded</code>, it might include the validated email address and any associated metadata.
        </p>
      </section>

      <section id="best-practices" className="mb-12 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-primary/90">Best Practices</h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
          <li><strong>Respond quickly:</strong> Your endpoint should acknowledge receipt of the event by returning a 2xx HTTP status code within a few seconds. If we don't receive a timely success response, we may consider the delivery failed and retry.</li>
          <li><strong>Verify signatures:</strong> Always verify the webhook signature to ensure the request is legitimate.</li>
          <li><strong>Handle retries:</strong> Our system may send the same event more than once if acknowledgement fails. Design your endpoint to be idempotent.</li>
          <li><strong>Use HTTPS:</strong> Always use an HTTPS URL for your webhook endpoint to ensure data is encrypted in transit.</li>
        </ul>
      </section>
    </div>
  );
}
