export default function ApiDocsPage() {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "authentication", title: "Authentication" },
    { id: "endpoints", title: "API Endpoints" },
    { id: "errors", title: "Error Codes" },
    { id: "rate-limiting", title: "Rate Limiting" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
      {/* Sidebar Navigation */}
      <nav className="lg:w-1/4 lg:sticky lg:top-20 lg:max-h-[calc(100vh-10rem)] lg:overflow-y-auto mb-8 lg:mb-0"> {/* Adjusted height/overflow for mobile, added margin for mobile */}
        <h2 className="text-xl font-semibold text-primary mb-4">On this page</h2>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a 
                href={`#${section.id}`} 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="lg:w-3/4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-10 lg:mb-12">API Documentation</h1>

        <section id="introduction" className="mb-12 space-y-4 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary/90 border-b pb-2">Introduction</h2>
          <p className="text-muted-foreground">
            Welcome to the [Your Service Name] API! Our API allows you to easily integrate email validation into your applications.
          </p>
          <p className="text-muted-foreground">
            The base URL for all API requests is: <code className="bg-muted px-1.5 py-1 rounded text-sm">https://api.yourdomain.com/v1</code>
          </p>
        </section>

        <section id="authentication" className="mb-12 space-y-4 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary/90 border-b pb-2">Authentication</h2>
          <p className="text-muted-foreground">
            API requests are authenticated using API keys. Include your API key in the <code className="bg-muted px-1.5 py-1 rounded text-sm">Authorization</code> header as a Bearer token.
          </p>
          <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto shadow-sm"><code>{`Authorization: Bearer YOUR_API_KEY`}</code></pre>
        </section>

        <section id="endpoints" className="mb-12 space-y-8 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary/90 border-b pb-2">API Endpoints</h2>
          
          <div id="validate-email" className="p-6 bg-card rounded-lg border shadow-md scroll-mt-20">
            <h3 className="text-lg sm:text-xl font-medium text-primary/80 mb-3">POST /validate</h3> {/* Responsive h3 */}
            <p className="text-muted-foreground mb-3">Validates an email address and sends an OTP if the email format is correct.</p>
            <h4 className="font-semibold mt-4 mb-2 text-muted-foreground/90">Request Body:</h4>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto shadow-sm"><code>{`{
  "email": "user@example.com"
}`}</code></pre>
            <h4 className="font-semibold mt-4 mb-2 text-muted-foreground/90">Example Success Response (200 OK):</h4>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto shadow-sm"><code>{`{
  "status": "otp_sent",
  "message": "OTP has been sent to the email address."
}`}</code></pre>
          </div>

          <div id="verify-otp" className="p-6 bg-card rounded-lg border shadow-md scroll-mt-20">
            <h3 className="text-lg sm:text-xl font-medium text-primary/80 mb-3">POST /verify-otp</h3> {/* Responsive h3 */}
            <p className="text-muted-foreground mb-3">Verifies the OTP sent to an email address.</p>
            <h4 className="font-semibold mt-4 mb-2 text-muted-foreground/90">Request Body:</h4>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto shadow-sm"><code>{`{
  "email": "user@example.com",
  "otp": "123456"
}`}</code></pre>
            <h4 className="font-semibold mt-4 mb-2 text-muted-foreground/90">Example Success Response (200 OK):</h4>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto shadow-sm"><code>{`{
  "status": "verified",
  "message": "Email address successfully verified."
}`}</code></pre>
          </div>
        </section>

        <section id="errors" className="mb-12 space-y-4 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary/90 border-b pb-2">Error Codes</h2>
          <p className="text-muted-foreground">Our API uses standard HTTP status codes to indicate the success or failure of a request:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
            <li><code className="bg-muted px-1.5 py-1 rounded text-sm">200 OK</code> - Request successful.</li>
            <li><code className="bg-muted px-1.5 py-1 rounded text-sm">400 Bad Request</code> - Invalid request payload.</li>
            <li><code className="bg-muted px-1.5 py-1 rounded text-sm">401 Unauthorized</code> - Missing or invalid API key.</li>
            <li><code className="bg-muted px-1.5 py-1 rounded text-sm">403 Forbidden</code> - You do not have permission to access this resource.</li>
            <li><code className="bg-muted px-1.5 py-1 rounded text-sm">429 Too Many Requests</code> - Rate limit exceeded.</li>
            <li><code className="bg-muted px-1.5 py-1 rounded text-sm">500 Internal Server Error</code> - Something went wrong on our end.</li>
          </ul>
          <p className="text-muted-foreground mt-2">Error responses will include a JSON body with more details:</p>
          <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto shadow-sm"><code>{`{
  "error": {
    "type": "invalid_request_error",
    "message": "The email address is invalid."
  }
}`}</code></pre>
        </section>

        <section id="rate-limiting" className="mb-12 space-y-4 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary/90 border-b pb-2">Rate Limiting</h2>
          <p className="text-muted-foreground">
            Our API has rate limits to ensure fair usage. If you exceed these limits, you will receive a <code className="bg-muted px-1.5 py-1 rounded text-sm">429 Too Many Requests</code> error. 
            Please check the response headers for details on your current rate limit status. Contact us if you need higher limits.
          </p>
        </section>
      </main>
    </div>
  );
}
