import Link from "next/link";
// import { Separator } from "@/components/ui/separator"; // No longer needed
import { SidebarTrigger } from "@/components/ui/sidebar"; // Assuming this is for a mobile nav
import { Button } from "@/components/ui/button"; // For styling links

export function SiteHeader() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/api-docs", label: "API Docs" },
    { href: "/validate-email", label: "Demo" },
    { href: "/webhooks", label: "Webhooks" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear px-4 lg:px-6">
      {/* Mobile Nav Trigger */}
      <div className="lg:hidden"> {/* Show trigger only on smaller screens */}
        <SidebarTrigger className="-ml-1" />
      </div>
      
      {/* Site Title/Logo Area */}
      <div className="flex items-center">
        <Link href="/" className="text-lg font-semibold text-primary">
          EmailValidator Inc. {/* Placeholder service name */}
        </Link>
      </div>

      {/* Desktop Navigation Links - Placed after title, hidden on small screens */}
      <nav className="hidden lg:flex items-center gap-1 ml-auto"> {/* Reduced gap-4 to gap-1 for more links */}
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            passHref
            legacyBehavior // Required if Button is the child for Next.js 13+ Link with custom component
          >
            <Button variant="ghost" asChild size="sm"> {/* Added size="sm" for smaller buttons */}
              {/* asChild allows Button to get props from Link, like href */}
              <a>{link.label}</a>
            </Button>
          </Link>
        ))}
      </nav>
      
      {/* Original Separator and "Documents" title removed */}
    </header>
  );
}
