import React from "react";
import Header from "../navigation/Header";
import Footer from "../Footer";
import LegalFooter from "../LegalFooter";
import { motion } from "framer-motion";
import { FileText, CheckCircle, AlertCircle } from "lucide-react";

const TermsOfService: React.FC = () => {
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
            <FileText className="h-10 w-10 text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Please read these terms carefully before using our platform
          </motion.p>
        </div>

        {/* Last Updated */}
        <div className="mb-8 text-center">
          <p className="text-muted-foreground">Last Updated: June 15, 2024</p>
        </div>

        {/* Terms Content */}
        <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-sm p-8 mb-12">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Sigma Edify platform, you agree to be
              bound by these Terms of Service. If you do not agree to these
              terms, please do not use our services.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Sigma Edify provides an e-learning platform focused on government
              exam preparation, including but not limited to educational
              content, practice tests, study materials, and interactive learning
              tools.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              To access certain features of our platform, you may need to create
              an account. You are responsible for maintaining the
              confidentiality of your account information and for all activities
              that occur under your account. You agree to:
            </p>
            <ul>
              <li>
                Provide accurate and complete information when creating your
                account
              </li>
              <li>Update your information to keep it accurate and current</li>
              <li>Protect your password and not share it with others</li>
              <li>
                Notify us immediately of any unauthorized use of your account
              </li>
            </ul>

            <h2>4. User Conduct</h2>
            <p>When using our platform, you agree not to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>
                Share, distribute, or publish inappropriate, offensive, or
                illegal content
              </li>
              <li>
                Attempt to gain unauthorized access to any part of the platform
              </li>
              <li>Use the platform to send unsolicited communications</li>
              <li>Interfere with or disrupt the platform or servers</li>
              <li>Impersonate another person or entity</li>
              <li>Use the platform for any fraudulent or deceptive purpose</li>
            </ul>

            <h2>5. Intellectual Property Rights</h2>
            <p>
              All content on the Sigma Edify platform, including text, graphics,
              logos, images, audio, video, and software, is the property of
              Sigma Edify or its content suppliers and is protected by copyright
              and other intellectual property laws.
            </p>
            <p>
              You may access and use the content for personal, non-commercial
              educational purposes only. You may not modify, copy, distribute,
              transmit, display, perform, reproduce, publish, license, create
              derivative works from, transfer, or sell any information or
              content obtained from our platform without our prior written
              consent.
            </p>

            <h2>6. Subscription and Payment Terms</h2>
            <p>
              Some features of our platform require a paid subscription. By
              subscribing to our services, you agree to:
            </p>
            <ul>
              <li>Pay all fees associated with your subscription plan</li>
              <li>Provide accurate billing information</li>
              <li>
                Be responsible for all charges incurred under your account
              </li>
            </ul>
            <p>
              Subscription fees are non-refundable except as described in our
              Refund Policy. We reserve the right to change our subscription
              fees upon reasonable notice.
            </p>

            <h2>7. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to our
              platform at any time, with or without cause and with or without
              notice. Upon termination, your right to use the platform will
              immediately cease.
            </p>

            <h2>8. Disclaimer of Warranties</h2>
            <p>
              The platform is provided "as is" and "as available" without
              warranties of any kind, either express or implied. We do not
              guarantee that the platform will be uninterrupted, secure, or
              error-free.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Sigma Edify shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages resulting from your use of or inability to use
              the platform.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time.
              We will provide notice of significant changes by posting the
              updated terms on our platform. Your continued use of the platform
              after such changes constitutes your acceptance of the new terms.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in
              accordance with the laws of India, without regard to its conflict
              of law principles.
            </p>

            <h2>12. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at legal@sigmaedify.com.
            </p>
          </div>
        </div>

        {/* Key Points Summary */}
        <div className="max-w-4xl mx-auto bg-accent rounded-lg p-6 mb-12">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
            Key Points Summary
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>You must be at least 13 years old to use our services</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>
                You are responsible for maintaining the security of your account
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>
                Our content is protected by copyright and may not be reproduced
                without permission
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>
                Subscription fees are generally non-refundable except as
                specified in our Refund Policy
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>
                We may update these terms, and your continued use constitutes
                acceptance
              </span>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto text-center bg-primary/10 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            If you have any questions about our Terms of Service, please contact
            our legal team.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:legal@sigmaedify.com"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors inline-flex items-center"
            >
              <AlertCircle className="mr-2 h-5 w-5" />
              Contact Legal Team
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <LegalFooter />
    </div>
  );
};

export default TermsOfService;
