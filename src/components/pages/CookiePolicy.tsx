import React from "react";
import Header from "../navigation/Header";
import Footer from "../Footer";
import LegalFooter from "../LegalFooter";
import { motion } from "framer-motion";
import { Cookie, CheckCircle, AlertCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="container mx-auto py-12 px-4 flex-grow">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center p-4 rounded-full mb-6 bg-primary/10"
          >
            <Cookie className="h-10 w-10 text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Cookie Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            How we use cookies and similar technologies on our platform
          </motion.p>
        </div>

        {/* Last Updated */}
        <div className="mb-8 text-center">
          <p className="text-muted-foreground">Last Updated: June 15, 2024</p>
        </div>

        {/* Cookie Policy Content */}
        <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-sm p-8 mb-12">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2>1. Introduction</h2>
            <p>
              This Cookie Policy explains how Sigma Edify ("we", "us", or "our")
              uses cookies and similar technologies on our website and platform.
              It explains what these technologies are and why we use them, as
              well as your rights to control our use of them.
            </p>

            <h2>2. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or
              mobile device when you visit a website. They are widely used to
              make websites work more efficiently and provide information to the
              website owners. Cookies enhance user experience by:
            </p>
            <ul>
              <li>Remembering your preferences and settings</li>
              <li>Keeping you signed in to your account</li>
              <li>Understanding how you use our platform</li>
              <li>Improving the relevance of the content you see</li>
            </ul>

            <h2>3. Types of Cookies We Use</h2>
            <p>We use different types of cookies for various purposes:</p>

            <h3>3.1 Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly.
              They enable core functionality such as security, network
              management, and account access. You cannot opt out of these
              cookies.
            </p>

            <h3>3.2 Performance and Analytics Cookies</h3>
            <p>
              These cookies help us understand how visitors interact with our
              website by collecting and reporting information anonymously. They
              help us improve the performance and user experience of our site.
            </p>

            <h3>3.3 Functionality Cookies</h3>
            <p>
              These cookies enable enhanced functionality and personalization.
              They may be set by us or by third-party providers whose services
              we have added to our pages.
            </p>

            <h3>3.4 Targeting and Advertising Cookies</h3>
            <p>
              These cookies are used to deliver advertisements more relevant to
              you and your interests. They are also used to limit the number of
              times you see an advertisement and help measure the effectiveness
              of advertising campaigns.
            </p>

            <h2>4. Third-Party Cookies</h2>
            <p>
              Some cookies are placed by third parties on our behalf. These
              third parties may include:
            </p>
            <ul>
              <li>Analytics providers (such as Google Analytics)</li>
              <li>Advertising networks</li>
              <li>Social media platforms</li>
              <li>Payment processors</li>
            </ul>
            <p>
              These third parties may use cookies, web beacons, and similar
              technologies to collect information about your use of our website
              and other websites. This information may be used to provide
              analytics and personalized advertisements.
            </p>

            <h2>5. Cookie Management</h2>
            <p>
              Most web browsers allow you to manage your cookie preferences. You
              can set your browser to refuse cookies or delete certain cookies.
              Generally, you can also set your browser to notify you when you
              receive a cookie, giving you the chance to decide whether to
              accept it.
            </p>
            <p>
              You can manage your cookies in your browser settings. Here are
              links to instructions for common browsers:
            </p>
            <ul>
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apple Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
            <p>
              Please note that if you choose to block or delete cookies, certain
              features of our website may not work correctly.
            </p>

            <h2>6. Similar Technologies</h2>
            <p>
              In addition to cookies, we may use other similar technologies on
              our platform:
            </p>
            <ul>
              <li>
                <strong>Web Beacons:</strong> Small graphic images (also known
                as "pixel tags" or "clear GIFs") that may be included on our
                website and emails to measure engagement
              </li>
              <li>
                <strong>Local Storage:</strong> Browser web storage that allows
                websites to store data locally on your device
              </li>
              <li>
                <strong>Session Replay:</strong> Technologies that help us
                understand how users interact with our website by recreating
                user sessions
              </li>
            </ul>

            <h2>7. Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect
              changes in technology, regulation, or our business practices. Any
              changes will become effective when we post the revised policy on
              our website. We encourage you to periodically review this page for
              the latest information on our cookie practices.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or this Cookie
              Policy, please contact us at:
            </p>
            <p>
              Email: privacy@sigmaedify.com
              <br />
              Address: 123 Education Street, Learning Hub, New Delhi - 110001
              <br />
              Phone: +91 98765 43210
            </p>
          </div>
        </div>

        {/* Cookie Types Summary */}
        <div className="max-w-4xl mx-auto bg-accent rounded-lg p-6 mb-12">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Info className="mr-2 h-5 w-5 text-blue-500" />
            Cookie Types at a Glance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-background rounded-lg p-4">
              <h4 className="font-semibold mb-2">Essential Cookies</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Required for basic website functionality
              </p>
              <div className="flex items-center">
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  Always Active
                </span>
              </div>
            </div>
            <div className="bg-background rounded-lg p-4">
              <h4 className="font-semibold mb-2">Analytics Cookies</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Help us improve our website by collecting anonymous usage data
              </p>
              <div className="flex items-center">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  Optional
                </span>
              </div>
            </div>
            <div className="bg-background rounded-lg p-4">
              <h4 className="font-semibold mb-2">Functionality Cookies</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Remember your preferences and personalize your experience
              </p>
              <div className="flex items-center">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  Optional
                </span>
              </div>
            </div>
            <div className="bg-background rounded-lg p-4">
              <h4 className="font-semibold mb-2">Advertising Cookies</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Used to show you relevant ads based on your interests
              </p>
              <div className="flex items-center">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  Optional
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Cookie Preferences */}
        <div className="max-w-4xl mx-auto text-center bg-primary/10 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">
            Manage Your Cookie Preferences
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            You can customize which cookies you allow us to use. Essential
            cookies cannot be disabled as they are necessary for the website to
            function properly.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline">
              <CheckCircle className="mr-2 h-5 w-5" />
              Accept All Cookies
            </Button>
            <Button>
              <Cookie className="mr-2 h-5 w-5" />
              Cookie Settings
            </Button>
          </div>
        </div>
      </div>

      <Footer />
      <LegalFooter />
    </div>
  );
};

export default CookiePolicy;
