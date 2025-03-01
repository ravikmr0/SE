import React from "react";
import TutorialLayout from "./TutorialLayout";
import TutorialContent from "./TutorialContent";

const TutorialExample: React.FC = () => {
  const content = (
    <>
      <p className="lead">
        The Indian Constitution is the supreme law of India. It lays down the
        framework defining fundamental political principles, establishes the
        structure, procedures, powers and duties of government institutions, and
        sets out fundamental rights, directive principles, and the duties of
        citizens.
      </p>

      <h2>Key Features of the Indian Constitution</h2>

      <p>
        The Indian Constitution has several distinctive features that make it
        unique:
      </p>

      <ul>
        <li>
          <strong>Lengthiest Written Constitution:</strong> The Indian
          Constitution is one of the longest written constitutions in the world.
        </li>
        <li>
          <strong>Drawn from Various Sources:</strong> It has borrowed features
          from constitutions of various countries.
        </li>
        <li>
          <strong>Blend of Rigidity and Flexibility:</strong> Some provisions
          can be amended by a simple majority while others require a special
          majority.
        </li>
        <li>
          <strong>Federal System with Unitary Bias:</strong> It establishes a
          federal structure with a strong central government.
        </li>
        <li>
          <strong>Fundamental Rights:</strong> It guarantees fundamental rights
          to all citizens.
        </li>
        <li>
          <strong>Directive Principles of State Policy:</strong> It includes
          non-justiciable guidelines for the government.
        </li>
        <li>
          <strong>Secular State:</strong> It establishes India as a secular
          state with no state religion.
        </li>
        <li>
          <strong>Universal Adult Franchise:</strong> It grants voting rights to
          all adult citizens.
        </li>
        <li>
          <strong>Independent Judiciary:</strong> It establishes an independent
          judiciary to protect the constitution.
        </li>
      </ul>

      <h2>Sources of the Indian Constitution</h2>

      <p>The Indian Constitution has drawn inspiration from various sources:</p>

      <table className="w-full border-collapse border border-gray-300 my-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Source</th>
            <th className="border border-gray-300 p-2">Features Borrowed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">British Constitution</td>
            <td className="border border-gray-300 p-2">
              Parliamentary form of government, Rule of Law, Legislative
              procedure, Single citizenship
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">US Constitution</td>
            <td className="border border-gray-300 p-2">
              Fundamental Rights, Independence of Judiciary, Judicial review,
              Impeachment of president
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Irish Constitution</td>
            <td className="border border-gray-300 p-2">
              Directive Principles of State Policy, Method of election of
              president
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              Canadian Constitution
            </td>
            <td className="border border-gray-300 p-2">
              Federal system with strong centre, Residuary powers with the
              centre
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Important Articles of the Constitution</h2>

      <p>
        Some of the most important articles of the Indian Constitution include:
      </p>

      <div className="bg-accent p-4 rounded-md my-4">
        <h3 className="font-bold mb-2">Fundamental Rights (Articles 12-35)</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Article 14:</strong> Right to Equality
          </li>
          <li>
            <strong>Article 15:</strong> Prohibition of discrimination
          </li>
          <li>
            <strong>Article 19:</strong> Six freedoms (speech, assembly,
            association, movement, residence, profession)
          </li>
          <li>
            <strong>Article 21:</strong> Right to Life and Personal Liberty
          </li>
          <li>
            <strong>Article 25:</strong> Freedom of Religion
          </li>
        </ul>
      </div>

      <div className="bg-accent p-4 rounded-md my-4">
        <h3 className="font-bold mb-2">
          Directive Principles (Articles 36-51)
        </h3>
        <p>
          These are guidelines for the government to create conditions for
          social, economic, and political justice. Though not enforceable by
          courts, they are fundamental in governance.
        </p>
      </div>

      <h2>Constitutional Amendments</h2>

      <p>
        The Constitution can be amended through Article 368. Some important
        amendments include:
      </p>

      <ul>
        <li>
          <strong>1st Amendment (1951):</strong> Added Ninth Schedule to protect
          land reform laws
        </li>
        <li>
          <strong>42nd Amendment (1976):</strong> Added words 'socialist',
          'secular' and 'integrity' to the Preamble
        </li>
        <li>
          <strong>73rd and 74th Amendments (1992):</strong> Gave constitutional
          status to Panchayati Raj institutions
        </li>
        <li>
          <strong>86th Amendment (2002):</strong> Made education a fundamental
          right for children aged 6-14
        </li>
      </ul>

      <div className="bg-primary/10 p-4 rounded-md my-6">
        <h3 className="font-bold mb-2">Example Question</h3>
        <p className="mb-2">
          Which of the following is NOT a Fundamental Right guaranteed by the
          Indian Constitution?
        </p>
        <ol className="list-decimal pl-5 mb-4">
          <li>Right to Equality</li>
          <li>Right to Property</li>
          <li>Right to Freedom of Religion</li>
          <li>Right to Constitutional Remedies</li>
        </ol>
        <p className="font-semibold">Answer: 2. Right to Property</p>
        <p className="text-sm mt-2">
          Explanation: Right to Property was originally a Fundamental Right
          under Article 31, but it was removed by the 44th Amendment in 1978. It
          is now a legal right under Article 300A.
        </p>
      </div>
    </>
  );

  return (
    <TutorialLayout activeTopicId="indian-constitution">
      <TutorialContent
        title="Indian Constitution: Structure and Key Features"
        content={content}
        prevTutorial={{
          title: "Introduction to Politics",
          path: "/tutorials/politics/introduction",
        }}
        nextTutorial={{
          title: "Fundamental Rights",
          path: "/tutorials/politics/fundamental-rights",
        }}
      />
    </TutorialLayout>
  );
};

export default TutorialExample;
