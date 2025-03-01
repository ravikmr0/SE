import React from "react";
import Header from "../navigation/Header";
import Footer from "../Footer";
import LegalFooter from "../LegalFooter";
import { motion } from "framer-motion";
import { RefreshCcw, CheckCircle, AlertCircle, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const RefundPolicy: React.FC = () => {
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
            <RefreshCcw className="h-10 w-10 text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Refund Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Our commitment to fair and transparent refund practices
          </motion.p>
        </div>

        {/* Last Updated */}
        <div className="mb-8 text-center">
          <p className="text-muted-foreground">Last Updated: June 15, 2024</p>
        </div>

        {/* Refund Policy Content */}
        <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-sm p-8 mb-12">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2>1. Introduction</h2>
            <p>
              At Sigma Edify, we strive to provide high-quality educational
              content and services. We understand that circumstances may arise
              where you need to request a refund. This Refund Policy outlines
              the conditions under which we process refund requests.
            </p>

            <h2>2. Eligibility for Refunds</h2>
            <p>
              You may be eligible for a refund under the following
              circumstances:
            </p>

            <h3>2.1 Course Purchases</h3>
            <ul>
              <li>
                <strong>7-Day Cooling Period:</strong> You may request a full
                refund within 7 days of purchasing a course if you have not
                accessed more than 20% of the course content.
              </li>
              <li>
                <strong>Technical Issues:</strong> If you experience persistent
                technical issues that prevent you from accessing the course
                content, and our support team is unable to resolve these issues
                within a reasonable timeframe.
              </li>
              <li>
                <strong>Course Content Discrepancy:</strong> If the course
                content significantly differs from the description provided at
                the time of purchase.
              </li>
            </ul>

            <h3>2.2 Subscription Plans</h3>
            <ul>
              <li>
                <strong>3-Day Trial Period:</strong> For subscription plans, you
                may request a full refund within 3 days of initial subscription
                if you have not accessed more than 10% of the available content.
              </li>
              <li>
                <strong>Pro-rated Refunds:</strong> We do not offer pro-rated
                refunds for partial use of subscription periods. However, you
                can cancel your subscription at any time to prevent future
                billing.
              </li>
            </ul>

            <h3>2.3 Mock Tests and Assessments</h3>
            <ul>
              <li>
                <strong>Unused Tests:</strong> Refunds for mock tests are
                available only if you have not attempted the test.
              </li>
              <li>
                <strong>Technical Failures:</strong> If a technical failure on
                our part prevents you from completing a test, you may be
                eligible for a refund or a replacement test.
              </li>
            </ul>

            <h2>3. Non-Refundable Items</h2>
            <p>The following purchases are generally non-refundable:</p>
            <ul>
              <li>Downloadable study materials once accessed or downloaded</li>
              <li>Live webinar or coaching sessions that you have attended</li>
              <li>Personalized mentorship sessions that have been conducted</li>
              <li>
                Courses or subscriptions purchased during special promotional
                offers clearly marked as non-refundable
              </li>
              <li>Administrative fees associated with any purchase</li>
            </ul>

            <h2>4. How to Request a Refund</h2>
            <p>To request a refund, please follow these steps:</p>
            <ol>
              <li>Log in to your Sigma Edify account</li>
              <li>Navigate to "My Purchases" or "Order History"</li>
              <li>Select the item for which you want to request a refund</li>
              <li>
                Click on "Request Refund" and complete the refund request form
              </li>
              <li>
                Alternatively, you can email our support team at
                support@sigmaedify.com with your order details and reason for
                the refund request
              </li>
            </ol>

            <h2>5. Refund Processing</h2>
            <p>Once your refund request is submitted:</p>
            <ul>
              <li>Our team will review your request within 3 business days</li>
              <li>
                If approved, refunds will be processed to the original payment
                method used for the purchase
              </li>
              <li>
                Depending on your payment provider, it may take 5-10 business
                days for the refund to appear in your account
              </li>
              <li>
                You will receive email notifications regarding the status of
                your refund request
              </li>
            </ul>

            <h2>6. Special Circumstances</h2>
            <p>
              We understand that exceptional circumstances may arise. In cases
              of:
            </p>
            <ul>
              <li>
                <strong>Medical Emergencies:</strong> With appropriate
                documentation, we may consider refund requests outside the
                standard eligibility period
              </li>
              <li>
                <strong>Service Outages:</strong> Extended platform outages may
                qualify for partial or full refunds depending on the duration
                and impact
              </li>
              <li>
                <strong>Account Compromises:</strong> Unauthorized purchases
                will be refunded after security verification
              </li>
            </ul>

            <h2>7. Discretionary Refunds</h2>
            <p>
              Sigma Edify reserves the right to evaluate refund requests on a
              case-by-case basis and may, at its sole discretion, issue refunds
              that fall outside the scope of this policy. Such exceptions do not
              constitute a waiver of this policy for future transactions.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Refund Policy from time to time. Any changes
              will be posted on this page with an updated "Last Updated" date.
              Refund requests will be processed according to the policy in
              effect at the time of purchase.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about our Refund Policy, please contact
              us at:
            </p>
            <p>
              Email: support@sigmaedify.com
              <br />
              Address: 123 Education Street, Learning Hub, New Delhi - 110001
              <br />
              Phone: +91 98765 43210
            </p>
          </div>
        </div>

        {/* Refund Process Steps */}
        <div className="max-w-4xl mx-auto bg-accent rounded-lg p-6 mb-12">
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <RefreshCcw className="mr-2 h-5 w-5 text-primary" />
            Refund Process Steps
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-background rounded-lg p-4 relative">
              <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                1
              </div>
              <h4 className="font-semibold mb-2 mt-4">Submit Request</h4>
              <p className="text-sm text-muted-foreground">
                Fill out the refund request form in your account or contact our
                support team.
              </p>
            </div>
            <div className="bg-background rounded-lg p-4 relative">
              <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                2
              </div>
              <h4 className="font-semibold mb-2 mt-4">Review Process</h4>
              <p className="text-sm text-muted-foreground">
                Our team reviews your request within 3 business days and
                determines eligibility.
              </p>
            </div>
            <div className="bg-background rounded-lg p-4 relative">
              <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                3
              </div>
              <h4 className="font-semibold mb-2 mt-4">Refund Processing</h4>
              <p className="text-sm text-muted-foreground">
                If approved, the refund is processed to your original payment
                method within 5-10 business days.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Can I get a refund after the 7-day cooling period?
              </AccordionTrigger>
              <AccordionContent>
                Generally, refunds are not available after the 7-day cooling
                period. However, we evaluate exceptional circumstances on a
                case-by-case basis. Please contact our support team with details
                of your situation for consideration.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How long does it take to process a refund?
              </AccordionTrigger>
              <AccordionContent>
                We review refund requests within 3 business days. If approved,
                the refund is processed to your original payment method, which
                may take an additional 5-10 business days to appear in your
                account, depending on your payment provider.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I get a refund if I don't like the course content?
              </AccordionTrigger>
              <AccordionContent>
                If you're within the 7-day cooling period and have accessed less
                than 20% of the course content, you can request a refund
                regardless of the reason. Beyond this period, refunds based on
                personal preference are generally not provided, but we welcome
                your feedback to help us improve our courses.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What happens to my access if I request a refund?
              </AccordionTrigger>
              <AccordionContent>
                Once a refund is approved and processed, your access to the
                course or subscription will be revoked. For partial refunds, you
                may retain access to specific components that were not refunded.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Can I transfer my purchase to another course instead of getting
                a refund?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer course transfers as an alternative to refunds in
                many cases. If you'd like to switch to a different course,
                please contact our support team, and they can help you with the
                transfer process. If there's a price difference, it will be
                either charged or refunded accordingly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto text-center bg-primary/10 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Need Help With a Refund?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Our support team is here to assist you with any questions or
            concerns about our refund process.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:support@sigmaedify.com"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors inline-flex items-center"
            >
              <HelpCircle className="mr-2 h-5 w-5" />
              Contact Support Team
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <LegalFooter />
    </div>
  );
};

export default RefundPolicy;
