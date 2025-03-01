import React from "react";
import { useNavigate } from "react-router-dom";

const LegalFooter: React.FC = () => {
  const navigate = useNavigate();

  const legalLinks = [
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Refund Policy", href: "/refund-policy" },
  ];

  return (
    <div className="w-full bg-[#0a0e1a] py-4">
      <div className="container mx-auto flex justify-center space-x-8">
        {legalLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              navigate(link.href);
            }}
            className="text-[#a0b0d0] hover:text-white transition-colors text-sm"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LegalFooter;
