import React from "react";
import Header from "../navigation/Header";
import Footer from "../Footer";
import LegalFooter from "../LegalFooter";
import { motion } from "framer-motion";
import { Shield, CheckCircle, AlertCircle, Lock } from "lucide-react";

const PrivacyPolicy: React.FC = () => {
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
            <Shield className="h-10 w-10 text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            How we collect, use, and protect your personal information
          </motion.p>
        </div>

        {/* Last Updated */}
        <div className="mb-8 text-center">
          <p className="text-muted-foreground">Last Updated: June 15, 2024</p>
        </div>

        {/* Privacy Policy Content */}
        <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-sm p-8 mb-12">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2>1. Introduction</h2>
            <p>
              At Sigma Edify, we respect your privacy and are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you use our platform.
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using
              our platform, you acknowledge that you have read, understood, and
              agree to be bound by this Privacy Policy.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We collect several types of information from and about users of
              our platform, including:
            </p>
            <h3>2.1 Personal Information</h3>
            <ul>
              <li>Contact information (name, email address, phone number)</li>
              <li>Account credentials (username, password)</li>
              <li>
                Profile information (educational background, career goals)
              </li>
              <li>
                Payment information (credit card details, billing address)
              </li>
              <li>Demographic information (age, gender, location)</li>
            </ul>

            <h3>2.2 Usage Information</h3>
            <ul>
              <li>Interaction with courses and content</li>
              <li>Test scores and performance data</li>
              <li>Learning preferences and study habits</li>
              <li>Time spent on different sections of the platform</li>
            </ul>

            <h3>2.3 Technical Information</h3>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Operating system</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2>3. How We Collect Information</h2>
            <p>We collect information through:</p>
            <ul>
              <li>
                Direct interactions (when you create an account, purchase a
                course, or contact us)
              </li>
              <li>
                Automated technologies (cookies, server logs, analytics tools)
              </li>
              <li>
                Third-party sources (payment processors, social media platforms
                if you connect your account)
              </li>
            </ul>

            <h2>4. How We Use Your Information</h2>
            <p>We use your information for various purposes, including to:</p>
            <ul>
              <li>Provide, maintain, and improve our platform</li>
              <li>Process transactions and send related information</li>
              <li>Personalize your experience and deliver tailored content</li>
              <li>Analyze usage patterns and optimize our services</li>
              <li>
                Communicate with you about updates, promotions, and events
              </li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Protect the security and integrity of our platform</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>5. Information Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>
                Service providers (hosting, payment processing, analytics)
              </li>
              <li>Business partners (for joint offerings or promotions)</li>
              <li>
                Legal authorities (when required by law or to protect our
                rights)
              </li>
              <li>Affiliated companies (as part of our corporate family)</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>

            <h2>6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information from unauthorized access,
              disclosure, alteration, or destruction. However, no method of
              transmission over the Internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>

            <h2>7. Your Rights and Choices</h2>
            <p>
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>
            <ul>
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction or objection to processing</li>
              <li>Data portability</li>
              <li>Withdrawal of consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information
              provided at the end of this policy.
            </p>

            <h2>8. Children's Privacy</h2>
            <p>
              Our platform is not intended for children under 13 years of age.
              We do not knowingly collect personal information from children
              under 13. If you are a parent or guardian and believe your child
              has provided us with personal information, please contact us, and
              we will delete such information.
            </p>

            <h2>9. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries
              other than your country of residence. These countries may have
              different data protection laws. We will take appropriate measures
              to ensure that your personal information remains protected in
              accordance with this Privacy Policy.
            </p>

            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last Updated" date. You are advised to
              review this Privacy Policy periodically for any changes.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
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

        {/* Data Protection Highlights */}
        <div className="max-w-4xl mx-auto bg-accent rounded-lg p-6 mb-12">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Lock className="mr-2 h-5 w-5 text-green-500" />
            Data Protection Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-background rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                Data Encryption
              </h4>
              <p className="text-sm text-muted-foreground">
                We use industry-standard encryption to protect your personal and
                payment information during transmission.
              </p>
            </div>
            <div className="bg-background rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                Access Controls
              </h4>
              <p className="text-sm text-muted-foreground">
                We restrict access to personal information to authorized
                employees who need it to perform their job functions.
              </p>
            </div>
            <div className="bg-background rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                Regular Audits
              </h4>
              <p className="text-sm text-muted-foreground">
                We conduct regular security audits and vulnerability assessments
                to ensure our systems remain secure.
              </p>
            </div>
            <div className="bg-background rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                Data Minimization
              </h4>
              <p className="text-sm text-muted-foreground">
                We collect only the information necessary to provide our
                services and delete it when no longer needed.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto text-center bg-primary/10 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Privacy Concerns?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            If you have any questions or concerns about our privacy practices,
            please don't hesitate to contact us.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:privacy@sigmaedify.com"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors inline-flex items-center"
            >
              <AlertCircle className="mr-2 h-5 w-5" />
              Contact Privacy Team
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <LegalFooter />
    </div>
  );
};

export default PrivacyPolicy;
