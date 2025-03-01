import React from "react";
import TutorialLayout from "./TutorialLayout";
import TutorialContent from "./TutorialContent";

const BankingTutorial: React.FC = () => {
  const content = (
    <>
      <p className="lead">
        Banking and finance are critical components of the Indian economy.
        Understanding the structure, functions, and recent developments in the
        banking sector is essential for government exam preparation, especially
        for banking and UPSC exams.
      </p>

      <h2>Structure of Indian Banking System</h2>

      <p>
        The Indian banking system has a well-defined structure with the Reserve
        Bank of India (RBI) at the apex:
      </p>

      <h3>Reserve Bank of India (RBI)</h3>
      <ul>
        <li>
          <strong>Establishment:</strong> April 1, 1935; Nationalized on January
          1, 1949
        </li>
        <li>
          <strong>Functions:</strong> Monetary policy, issuing currency, banker
          to government, banker&apos;s bank, regulator and supervisor of banking
          system
        </li>
        <li>
          <strong>Governance:</strong> Central Board of Directors with Governor
          (currently Shaktikanta Das) as the executive head
        </li>
      </ul>

      <h3>Commercial Banks</h3>
      <ul>
        <li>
          <strong>Public Sector Banks (PSBs):</strong> Government holds majority
          stake (e.g., SBI, PNB, Bank of Baroda)
        </li>
        <li>
          <strong>Private Sector Banks:</strong> Privately owned (e.g., HDFC
          Bank, ICICI Bank, Axis Bank)
        </li>
        <li>
          <strong>Foreign Banks:</strong> Banks headquartered outside India
          (e.g., HSBC, Citibank, Standard Chartered)
        </li>
        <li>
          <strong>Regional Rural Banks (RRBs):</strong> Established to serve
          rural areas (sponsored by PSBs)
        </li>
        <li>
          <strong>Small Finance Banks:</strong> Provide basic banking services
          to underserved sections
        </li>
        <li>
          <strong>Payments Banks:</strong> Offer limited banking services (no
          lending)
        </li>
      </ul>

      <div className="bg-accent p-4 rounded-md my-4">
        <h3 className="font-bold mb-2">Banking Sector Reforms</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Narasimham Committee I (1991):</strong> Reduced SLR and CRR,
            introduced capital adequacy norms
          </li>
          <li>
            <strong>Narasimham Committee II (1998):</strong> Strengthening
            banks, asset classification, risk management
          </li>
          <li>
            <strong>Bank Nationalization:</strong> 14 banks in 1969, 6 more in
            1980
          </li>
          <li>
            <strong>Banking Sector Liberalization:</strong> Private sector banks
            allowed in 1993
          </li>
          <li>
            <strong>Basel Norms Implementation:</strong> International standards
            for bank capital adequacy
          </li>
          <li>
            <strong>Bank Consolidation:</strong> Merger of PSBs to create
            stronger entities
          </li>
        </ul>
      </div>

      <h2>Banking Functions and Operations</h2>

      <h3>Primary Functions</h3>
      <ul>
        <li>
          <strong>Accepting Deposits:</strong> Savings, current, fixed,
          recurring deposits
        </li>
        <li>
          <strong>Lending:</strong> Loans, cash credit, overdraft, discounting
          bills
        </li>
        <li>
          <strong>Credit Creation:</strong> Multiplier effect of deposits and
          loans
        </li>
      </ul>

      <h3>Secondary Functions</h3>
      <ul>
        <li>
          <strong>Agency Functions:</strong> Fund transfers, bill payments,
          collection of cheques
        </li>
        <li>
          <strong>Utility Functions:</strong> Locker facilities, foreign
          exchange services
        </li>
        <li>
          <strong>Modern Banking Services:</strong> Internet banking, mobile
          banking, UPI
        </li>
      </ul>

      <table className="w-full border-collapse border border-gray-300 my-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Type of Account</th>
            <th className="border border-gray-300 p-2">Key Features</th>
            <th className="border border-gray-300 p-2">Suitable For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">Savings Account</td>
            <td className="border border-gray-300 p-2">
              Limited withdrawals, interest earnings, ATM access
            </td>
            <td className="border border-gray-300 p-2">
              Individuals, small savings
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Current Account</td>
            <td className="border border-gray-300 p-2">
              Unlimited transactions, no interest, overdraft facility
            </td>
            <td className="border border-gray-300 p-2">
              Businesses, high transaction volume
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Fixed Deposit</td>
            <td className="border border-gray-300 p-2">
              Higher interest rates, fixed tenure, penalty for premature
              withdrawal
            </td>
            <td className="border border-gray-300 p-2">
              Long-term savings, risk-averse investors
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Recurring Deposit</td>
            <td className="border border-gray-300 p-2">
              Regular monthly deposits, fixed tenure, compound interest
            </td>
            <td className="border border-gray-300 p-2">
              Systematic savings, salaried individuals
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Monetary Policy</h2>

      <p>
        Monetary policy refers to the RBI&apos;s actions to control money supply
        and interest rates to achieve economic objectives:
      </p>

      <h3>Objectives of Monetary Policy</h3>
      <ul>
        <li>
          <strong>Price Stability:</strong> Controlling inflation (primary
          objective)
        </li>
        <li>
          <strong>Economic Growth:</strong> Supporting sustainable growth
        </li>
        <li>
          <strong>Exchange Rate Stability:</strong> Managing currency value
        </li>
        <li>
          <strong>Financial Stability:</strong> Ensuring sound banking system
        </li>
      </ul>

      <h3>Monetary Policy Tools</h3>
      <ul>
        <li>
          <strong>Repo Rate:</strong> Rate at which RBI lends to commercial
          banks (short-term)
        </li>
        <li>
          <strong>Reverse Repo Rate:</strong> Rate at which RBI borrows from
          commercial banks
        </li>
        <li>
          <strong>Bank Rate:</strong> Long-term lending rate to commercial banks
        </li>
        <li>
          <strong>Cash Reserve Ratio (CRR):</strong> Percentage of deposits
          banks must keep with RBI
        </li>
        <li>
          <strong>Statutory Liquidity Ratio (SLR):</strong> Percentage of
          deposits banks must maintain in liquid assets
        </li>
        <li>
          <strong>Open Market Operations (OMOs):</strong> Buying/selling
          government securities
        </li>
        <li>
          <strong>Marginal Standing Facility (MSF):</strong> Emergency lending
          window for banks
        </li>
      </ul>

      <h3>Monetary Policy Committee (MPC)</h3>
      <ul>
        <li>
          <strong>Composition:</strong> 6 members (3 from RBI including
          Governor, 3 external experts)
        </li>
        <li>
          <strong>Function:</strong> Decides key policy rates, primarily the
          repo rate
        </li>
        <li>
          <strong>Meeting Frequency:</strong> Bi-monthly (six times a year)
        </li>
        <li>
          <strong>Decision Making:</strong> By majority vote, Governor has
          casting vote in case of tie
        </li>
      </ul>

      <h2>Financial Inclusion and Recent Initiatives</h2>

      <p>
        Financial inclusion aims to provide banking and financial services to
        all sections of society:
      </p>

      <h3>Major Financial Inclusion Initiatives</h3>
      <ul>
        <li>
          <strong>Pradhan Mantri Jan Dhan Yojana (PMJDY):</strong> Universal
          bank account access
        </li>
        <li>
          <strong>Direct Benefit Transfer (DBT):</strong> Direct transfer of
          subsidies to beneficiary accounts
        </li>
        <li>
          <strong>MUDRA Bank:</strong> Loans to micro enterprises
        </li>
        <li>
          <strong>Stand-Up India:</strong> Loans to SC/ST and women
          entrepreneurs
        </li>
        <li>
          <strong>Atal Pension Yojana:</strong> Pension scheme for unorganized
          sector
        </li>
        <li>
          <strong>Pradhan Mantri Suraksha Bima Yojana:</strong> Accident
          insurance
        </li>
        <li>
          <strong>Pradhan Mantri Jeevan Jyoti Bima Yojana:</strong> Life
          insurance
        </li>
      </ul>

      <div className="bg-accent p-4 rounded-md my-4">
        <h3 className="font-bold mb-2">Digital Banking Initiatives</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Unified Payments Interface (UPI):</strong> Real-time payment
            system
          </li>
          <li>
            <strong>Bharat Interface for Money (BHIM):</strong> UPI-based
            payment app
          </li>
          <li>
            <strong>RuPay:</strong> Indian card payment network
          </li>
          <li>
            <strong>Bharat Bill Payment System (BBPS):</strong> Integrated bill
            payment system
          </li>
          <li>
            <strong>National Electronic Funds Transfer (NEFT):</strong>{" "}
            Electronic funds transfer system
          </li>
          <li>
            <strong>Real Time Gross Settlement (RTGS):</strong> Large value
            funds transfer system
          </li>
        </ul>
      </div>

      <h2>Current Challenges in Banking Sector</h2>

      <ul>
        <li>
          <strong>Non-Performing Assets (NPAs):</strong> High level of bad loans
          affecting bank profitability
        </li>
        <li>
          <strong>Capital Adequacy:</strong> Need for additional capital to meet
          Basel III norms
        </li>
        <li>
          <strong>Technology Adoption:</strong> Keeping pace with digital
          transformation
        </li>
        <li>
          <strong>Cybersecurity:</strong> Protecting against increasing cyber
          threats
        </li>
        <li>
          <strong>Competition from Fintech:</strong> New players disrupting
          traditional banking
        </li>
        <li>
          <strong>Financial Inclusion Challenges:</strong> Reaching the last
          mile
        </li>
      </ul>

      <div className="bg-primary/10 p-4 rounded-md my-6">
        <h3 className="font-bold mb-2">Example Question</h3>
        <p className="mb-2">
          Which of the following is the correct ascending order of interest
          rates in the current monetary policy framework?
        </p>
        <ol className="list-decimal pl-5 mb-4">
          <li>Reverse Repo Rate &lt; Repo Rate &lt; MSF Rate &lt; Bank Rate</li>
          <li>Reverse Repo Rate &lt; Repo Rate &lt; Bank Rate &lt; MSF Rate</li>
          <li>Repo Rate &lt; Reverse Repo Rate &lt; MSF Rate &lt; Bank Rate</li>
          <li>Reverse Repo Rate &lt; MSF Rate &lt; Repo Rate &lt; Bank Rate</li>
        </ol>
        <p className="font-semibold">
          Answer: 1. Reverse Repo Rate &lt; Repo Rate &lt; MSF Rate &lt; Bank
          Rate
        </p>
        <p className="text-sm mt-2">
          Explanation: In the current monetary policy framework, the interest
          rates in ascending order are: Reverse Repo Rate (lowest) &lt; Repo
          Rate &lt; MSF Rate &lt; Bank Rate (highest). The Reverse Repo Rate is
          the rate at which RBI borrows from banks, while the Bank Rate is the
          long-term lending rate to commercial banks.
        </p>
      </div>
    </>
  );

  return (
    <TutorialLayout activeTopicId="banking">
      <TutorialContent
        title="Banking & Finance"
        content={content}
        prevTutorial={{
          title: "Budget & Fiscal Policy",
          path: "/tutorials/economy/budget",
        }}
      />
    </TutorialLayout>
  );
};

export default BankingTutorial;
