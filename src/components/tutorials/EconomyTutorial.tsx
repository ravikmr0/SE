import React from "react";
import TutorialLayout from "./TutorialLayout";
import TutorialContent from "./TutorialContent";

const EconomyTutorial: React.FC = () => {
  const content = (
    <>
      <p className="lead">
        The Indian Economy is one of the fastest-growing major economies in the
        world. Understanding its structure, key sectors, policies, and
        challenges is essential for government exam preparation.
      </p>

      <h2>Structure of Indian Economy</h2>

      <p>
        The Indian economy has a mixed structure with both public and private
        sectors playing important roles:
      </p>

      <h3>Key Sectors</h3>
      <ul>
        <li>
          <strong>Agriculture:</strong> Employs about 42% of the workforce but
          contributes only around 18% to GDP
        </li>
        <li>
          <strong>Industry:</strong> Contributes about 26% to GDP, includes
          manufacturing, mining, construction
        </li>
        <li>
          <strong>Services:</strong> Largest sector contributing about 56% to
          GDP, includes IT, finance, trade, tourism
        </li>
      </ul>

      <div className="bg-accent p-4 rounded-md my-4">
        <h3 className="font-bold mb-2">Economic Reforms of 1991</h3>
        <p>
          In 1991, India faced a severe balance of payments crisis, which led to
          the introduction of major economic reforms:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Liberalization:</strong> Removing licensing requirements,
            reducing trade barriers
          </li>
          <li>
            <strong>Privatization:</strong> Disinvestment of public sector
            units, allowing private sector in more industries
          </li>
          <li>
            <strong>Globalization:</strong> Opening up to foreign investment,
            reducing import tariffs
          </li>
        </ul>
        <p className="mt-2">
          These reforms, often called LPG reforms, transformed India from a
          closed, socialist economy to a market-driven one.
        </p>
      </div>

      <h2>Key Economic Indicators</h2>

      <table className="w-full border-collapse border border-gray-300 my-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Indicator</th>
            <th className="border border-gray-300 p-2">Description</th>
            <th className="border border-gray-300 p-2">Current Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">GDP Growth Rate</td>
            <td className="border border-gray-300 p-2">
              Annual percentage growth in GDP
            </td>
            <td className="border border-gray-300 p-2">
              Around 7% (pre-COVID)
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Inflation</td>
            <td className="border border-gray-300 p-2">
              Rate at which prices increase
            </td>
            <td className="border border-gray-300 p-2">Targeted at 4% (±2%)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Fiscal Deficit</td>
            <td className="border border-gray-300 p-2">
              Gap between government revenue and expenditure
            </td>
            <td className="border border-gray-300 p-2">Target of 3% of GDP</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              Current Account Deficit
            </td>
            <td className="border border-gray-300 p-2">
              Difference between imports and exports of goods and services
            </td>
            <td className="border border-gray-300 p-2">Around 2% of GDP</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              Foreign Exchange Reserves
            </td>
            <td className="border border-gray-300 p-2">
              Foreign currency held by RBI
            </td>
            <td className="border border-gray-300 p-2">Over $500 billion</td>
          </tr>
        </tbody>
      </table>

      <h2>Major Economic Policies and Programs</h2>

      <h3>Five-Year Plans (1951-2017)</h3>
      <p>
        India followed centralized planning through Five-Year Plans from 1951
        until 2017, when they were replaced by the NITI Aayog's three-year
        action plans.
      </p>

      <h3>Recent Economic Initiatives</h3>
      <ul>
        <li>
          <strong>Make in India:</strong> Initiative to boost manufacturing
          sector
        </li>
        <li>
          <strong>Digital India:</strong> Transform India into a digitally
          empowered society
        </li>
        <li>
          <strong>Startup India:</strong> Promote entrepreneurship and
          innovation
        </li>
        <li>
          <strong>Goods and Services Tax (GST):</strong> Unified indirect tax
          system implemented in 2017
        </li>
        <li>
          <strong>Atmanirbhar Bharat:</strong> Self-reliant India campaign
          launched in 2020
        </li>
      </ul>

      <h2>Banking and Financial System</h2>

      <p>
        India has a well-developed banking system with the Reserve Bank of India
        (RBI) as the central bank:
      </p>

      <h3>Structure of Banking System</h3>
      <ul>
        <li>
          <strong>Central Bank:</strong> Reserve Bank of India (RBI)
        </li>
        <li>
          <strong>Commercial Banks:</strong> Public sector banks, private banks,
          foreign banks
        </li>
        <li>
          <strong>Cooperative Banks:</strong> Urban and rural cooperative banks
        </li>
        <li>
          <strong>Regional Rural Banks:</strong> Serve rural areas and
          agriculture
        </li>
        <li>
          <strong>Small Finance Banks and Payment Banks:</strong> New categories
          to promote financial inclusion
        </li>
      </ul>

      <h3>Financial Regulators</h3>
      <ul>
        <li>
          <strong>RBI:</strong> Regulates banks and monetary policy
        </li>
        <li>
          <strong>SEBI:</strong> Regulates securities market
        </li>
        <li>
          <strong>IRDAI:</strong> Regulates insurance sector
        </li>
        <li>
          <strong>PFRDA:</strong> Regulates pension funds
        </li>
      </ul>

      <div className="bg-primary/10 p-4 rounded-md my-6">
        <h3 className="font-bold mb-2">Example Question</h3>
        <p className="mb-2">
          Which of the following is NOT a function of the Reserve Bank of India?
        </p>
        <ol className="list-decimal pl-5 mb-4">
          <li>Issuing currency notes</li>
          <li>Regulating the securities market</li>
          <li>Banker to the government</li>
          <li>Formulating monetary policy</li>
        </ol>
        <p className="font-semibold">
          Answer: 2. Regulating the securities market
        </p>
        <p className="text-sm mt-2">
          Explanation: The Securities and Exchange Board of India (SEBI)
          regulates the securities market, not the RBI. The RBI is responsible
          for issuing currency, acting as banker to the government, and
          formulating monetary policy.
        </p>
      </div>
    </>
  );

  return (
    <TutorialLayout activeTopicId="indian-economy">
      <TutorialContent
        title="Indian Economy: Structure and Key Concepts"
        content={content}
        prevTutorial={{
          title: "Economic Basics",
          path: "/tutorials/economy/basics",
        }}
        nextTutorial={{
          title: "Budget & Fiscal Policy",
          path: "/tutorials/economy/budget",
        }}
      />
    </TutorialLayout>
  );
};

export default EconomyTutorial;
