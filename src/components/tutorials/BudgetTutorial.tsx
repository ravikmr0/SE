import React from "react";
import TutorialLayout from "./TutorialLayout";
import TutorialContent from "./TutorialContent";

const BudgetTutorial: React.FC = () => {
  const content = (
    <>
      <p className="lead">
        The Union Budget and fiscal policy are crucial aspects of India's
        economic governance. Understanding the budget process, key components,
        and fiscal policy instruments is essential for government exam
        preparation.
      </p>

      <h2>Union Budget: Overview</h2>

      <p>
        The Union Budget is the annual financial statement of the Government of
        India, presented by the Finance Minister in Parliament:
      </p>

      <ul>
        <li>
          <strong>Constitutional Basis:</strong> Article 112 (Annual Financial
          Statement)
        </li>
        <li>
          <strong>Presentation:</strong> Usually on February 1 each year
        </li>
        <li>
          <strong>Coverage:</strong> April 1 to March 31 (Financial Year)
        </li>
        <li>
          <strong>Components:</strong> Revenue Budget and Capital Budget
        </li>
      </ul>

      <div className="bg-accent p-4 rounded-md my-4">
        <h3 className="font-bold mb-2">Budget Documents</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Annual Financial Statement:</strong> Main budget document
            showing receipts and expenditures
          </li>
          <li>
            <strong>Finance Bill:</strong> Contains tax proposals
          </li>
          <li>
            <strong>Demands for Grants:</strong> Ministry-wise allocation of
            funds
          </li>
          <li>
            <strong>Appropriation Bill:</strong> Authorizes payment from
            Consolidated Fund
          </li>
          <li>
            <strong>Economic Survey:</strong> Review of economic developments
            (presented before budget)
          </li>
          <li>
            <strong>Budget at a Glance:</strong> Summary of receipts and
            expenditures
          </li>
        </ul>
      </div>

      <h2>Budget Structure</h2>

      <h3>Revenue Budget</h3>
      <p>
        The Revenue Budget consists of revenue receipts and revenue expenditure:
      </p>

      <h4>Revenue Receipts</h4>
      <ul>
        <li>
          <strong>Tax Revenue:</strong> Direct taxes (income tax, corporate tax)
          and Indirect taxes (GST, customs duty)
        </li>
        <li>
          <strong>Non-Tax Revenue:</strong> Interest receipts, dividends, fees,
          fines
        </li>
      </ul>

      <h4>Revenue Expenditure</h4>
      <ul>
        <li>
          <strong>Definition:</strong> Expenditure that does not create assets
        </li>
        <li>
          <strong>Examples:</strong> Salaries, subsidies, interest payments,
          defense revenue expenditure
        </li>
      </ul>

      <h3>Capital Budget</h3>
      <p>
        The Capital Budget consists of capital receipts and capital expenditure:
      </p>

      <h4>Capital Receipts</h4>
      <ul>
        <li>
          <strong>Non-Debt Receipts:</strong> Disinvestment proceeds, recovery
          of loans
        </li>
        <li>
          <strong>Debt Receipts:</strong> Market loans, external assistance,
          short-term borrowings
        </li>
      </ul>

      <h4>Capital Expenditure</h4>
      <ul>
        <li>
          <strong>Definition:</strong> Expenditure that creates assets or
          reduces liabilities
        </li>
        <li>
          <strong>Examples:</strong> Infrastructure development, machinery
          acquisition, loan disbursements
        </li>
      </ul>

      <table className="w-full border-collapse border border-gray-300 my-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Budget Component</th>
            <th className="border border-gray-300 p-2">Receipts</th>
            <th className="border border-gray-300 p-2">Expenditure</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">Revenue Budget</td>
            <td className="border border-gray-300 p-2">
              Tax revenue, Non-tax revenue
            </td>
            <td className="border border-gray-300 p-2">
              Salaries, Subsidies, Interest payments
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Capital Budget</td>
            <td className="border border-gray-300 p-2">
              Loans, Disinvestment proceeds
            </td>
            <td className="border border-gray-300 p-2">
              Infrastructure, Asset creation, Loan repayment
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Key Budget Concepts</h2>

      <h3>Budget Deficits</h3>
      <ul>
        <li>
          <strong>Revenue Deficit:</strong> Revenue Expenditure - Revenue
          Receipts
        </li>
        <li>
          <strong>Fiscal Deficit:</strong> Total Expenditure - Total Receipts
          excluding borrowings
        </li>
        <li>
          <strong>Primary Deficit:</strong> Fiscal Deficit - Interest Payments
        </li>
        <li>
          <strong>Effective Revenue Deficit:</strong> Revenue Deficit - Grants
          for creation of capital assets
        </li>
      </ul>

      <h3>Consolidated Fund, Contingency Fund, and Public Account</h3>
      <ul>
        <li>
          <strong>Consolidated Fund of India (Article 266):</strong> All
          revenues, loans, and receipts of the government
        </li>
        <li>
          <strong>Contingency Fund of India (Article 267):</strong> For
          unforeseen expenditures (₹500 crore)
        </li>
        <li>
          <strong>Public Account of India (Article 266):</strong> Funds held in
          trust (PPF, small savings)
        </li>
      </ul>

      <h2>Fiscal Policy</h2>

      <p>
        Fiscal policy refers to the use of government revenue and expenditure to
        influence the economy:
      </p>

      <h3>Objectives of Fiscal Policy</h3>
      <ul>
        <li>
          <strong>Economic Growth:</strong> Promoting sustainable economic
          development
        </li>
        <li>
          <strong>Price Stability:</strong> Controlling inflation
        </li>
        <li>
          <strong>Full Employment:</strong> Creating job opportunities
        </li>
        <li>
          <strong>Equitable Distribution:</strong> Reducing income inequality
        </li>
        <li>
          <strong>External Stability:</strong> Managing balance of payments
        </li>
      </ul>

      <h3>Fiscal Policy Instruments</h3>
      <ul>
        <li>
          <strong>Taxation:</strong> Direct and indirect taxes
        </li>
        <li>
          <strong>Public Expenditure:</strong> Development and non-development
          expenditure
        </li>
        <li>
          <strong>Public Debt:</strong> Internal and external borrowing
        </li>
        <li>
          <strong>Budget Management:</strong> Deficit or surplus budgeting
        </li>
      </ul>

      <div className="bg-accent p-4 rounded-md my-4">
        <h3 className="font-bold mb-2">
          Fiscal Responsibility and Budget Management (FRBM) Act, 2003
        </h3>
        <p>
          The FRBM Act aims to ensure fiscal discipline by setting targets for
          the government:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Eliminate revenue deficit and reduce fiscal deficit to 3% of GDP
          </li>
          <li>Establish transparency in fiscal operations</li>
          <li>Conduct fiscal policy in a medium-term framework</li>
          <li>Limit government guarantees and debt</li>
          <li>
            N.K. Singh Committee (2017) recommended a debt-to-GDP ratio of 60%
            (40% for Centre, 20% for States)
          </li>
        </ul>
      </div>

      <h2>Recent Budget Trends and Reforms</h2>

      <h3>Major Budget Reforms</h3>
      <ul>
        <li>
          <strong>Merger of Railway Budget:</strong> Since 2017, Railway Budget
          merged with Union Budget
        </li>
        <li>
          <strong>Advancement of Budget Date:</strong> From last working day of
          February to February 1
        </li>
        <li>
          <strong>Removal of Plan and Non-Plan Distinction:</strong>{" "}
          Post-Planning Commission dissolution
        </li>
        <li>
          <strong>Outcome Budget:</strong> Focus on measurable outcomes of
          schemes
        </li>
        <li>
          <strong>Gender Budget:</strong> Allocation for women-specific schemes
        </li>
      </ul>

      <h3>Recent Fiscal Challenges</h3>
      <ul>
        <li>
          <strong>COVID-19 Impact:</strong> Increased expenditure, reduced
          revenue
        </li>
        <li>
          <strong>GST Implementation:</strong> Revenue stabilization challenges
        </li>
        <li>
          <strong>Balancing Growth and Fiscal Consolidation:</strong>{" "}
          Maintaining fiscal discipline while supporting growth
        </li>
        <li>
          <strong>Subsidy Rationalization:</strong> Targeting subsidies
          effectively
        </li>
        <li>
          <strong>Infrastructure Financing:</strong> Finding resources for
          infrastructure development
        </li>
      </ul>

      <div className="bg-primary/10 p-4 rounded-md my-6">
        <h3 className="font-bold mb-2">Example Question</h3>
        <p className="mb-2">
          Which of the following is NOT a component of the fiscal deficit?
        </p>
        <ol className="list-decimal pl-5 mb-4">
          <li>Revenue deficit</li>
          <li>Capital expenditure minus non-debt capital receipts</li>
          <li>Market borrowings</li>
          <li>Grants to states for creating capital assets</li>
        </ol>
        <p className="font-semibold">Answer: 3. Market borrowings</p>
        <p className="text-sm mt-2">
          Explanation: Fiscal deficit is the difference between total
          expenditure and total non-borrowed receipts. It represents the
          borrowing requirement of the government. Market borrowings are a means
          to finance the fiscal deficit, not a component of it. The fiscal
          deficit includes revenue deficit and capital expenditure minus
          non-debt capital receipts.
        </p>
      </div>
    </>
  );

  return (
    <TutorialLayout activeTopicId="budget">
      <TutorialContent
        title="Budget & Fiscal Policy"
        content={content}
        prevTutorial={{
          title: "Indian Economy",
          path: "/tutorials/economy/indian-economy",
        }}
        nextTutorial={{
          title: "Banking & Finance",
          path: "/tutorials/economy/banking",
        }}
      />
    </TutorialLayout>
  );
};

export default BudgetTutorial;
