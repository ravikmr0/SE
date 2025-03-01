import React from "react";
import TutorialLayout from "./TutorialLayout";
import TutorialContent from "./TutorialContent";

const GovernanceTutorial: React.FC = () => {
  const content = (
    <>
      <p className="lead">
        Governance in India refers to the process of decision-making and
        implementation by the government. The Indian governance system is based
        on the principles of democracy, federalism, secularism, and rule of law
        as enshrined in the Constitution.
      </p>

      <h2>Structure of Indian Governance</h2>

      <p>
        India has a federal structure with a strong central government. Power is
        distributed between the Union (Central) Government and the State
        Governments:
      </p>

      <h3>Three Branches of Government</h3>
      <ul>
        <li>
          <strong>Legislature:</strong> Makes laws (Parliament at the center,
          Legislative Assemblies in states)
        </li>
        <li>
          <strong>Executive:</strong> Implements laws (President, Prime
          Minister, Council of Ministers at center; Governor, Chief Minister,
          Council of Ministers in states)
        </li>
        <li>
          <strong>Judiciary:</strong> Interprets laws (Supreme Court, High
          Courts, District Courts)
        </li>
      </ul>

      <div className="bg-accent p-4 rounded-md my-4">
        <h3 className="font-bold mb-2">Parliament of India</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Lok Sabha (House of the People):</strong> Lower house,
            directly elected, 545 members, term of 5 years
          </li>
          <li>
            <strong>Rajya Sabha (Council of States):</strong> Upper house,
            indirectly elected, 245 members, permanent body with one-third
            members retiring every two years
          </li>
          <li>
            <strong>Functions:</strong> Legislation, control over executive,
            financial control, constitutional amendments, electoral functions
          </li>
        </ul>
      </div>

      <h2>Union Executive</h2>

      <h3>President of India</h3>
      <ul>
        <li>
          <strong>Election:</strong> Elected indirectly by an electoral college
          consisting of elected members of Parliament and State Legislatures
        </li>
        <li>
          <strong>Term:</strong> 5 years, eligible for re-election
        </li>
        <li>
          <strong>Powers:</strong> Constitutional head, executive powers,
          legislative powers, judicial powers, emergency powers
        </li>
        <li>
          <strong>Impeachment:</strong> Can be removed for violation of the
          Constitution
        </li>
      </ul>

      <h3>Prime Minister and Council of Ministers</h3>
      <ul>
        <li>
          <strong>Appointment:</strong> Prime Minister appointed by President;
          other ministers appointed on PM's advice
        </li>
        <li>
          <strong>Collective Responsibility:</strong> Council of Ministers
          collectively responsible to Lok Sabha
        </li>
        <li>
          <strong>Functions:</strong> Policy formulation, legislation,
          administrative leadership, crisis management
        </li>
      </ul>

      <table className="w-full border-collapse border border-gray-300 my-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Type of Ministers</th>
            <th className="border border-gray-300 p-2">Role</th>
            <th className="border border-gray-300 p-2">Position</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">Cabinet Ministers</td>
            <td className="border border-gray-300 p-2">
              Head important ministries, attend cabinet meetings
            </td>
            <td className="border border-gray-300 p-2">Highest rank</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              Ministers of State (Independent Charge)
            </td>
            <td className="border border-gray-300 p-2">
              Independent charge of ministries, don't attend cabinet meetings
              unless invited
            </td>
            <td className="border border-gray-300 p-2">Second rank</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Ministers of State</td>
            <td className="border border-gray-300 p-2">
              Assist Cabinet Ministers
            </td>
            <td className="border border-gray-300 p-2">Third rank</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Deputy Ministers</td>
            <td className="border border-gray-300 p-2">
              Assist Ministers of State or Cabinet Ministers
            </td>
            <td className="border border-gray-300 p-2">Lowest rank</td>
          </tr>
        </tbody>
      </table>

      <h2>State Government</h2>

      <p>
        The structure of state governments mirrors that of the Union government:
      </p>

      <h3>Governor</h3>
      <ul>
        <li>
          <strong>Appointment:</strong> Appointed by the President
        </li>
        <li>
          <strong>Term:</strong> 5 years, serves at the pleasure of the
          President
        </li>
        <li>
          <strong>Powers:</strong> Executive powers, legislative powers,
          discretionary powers
        </li>
      </ul>

      <h3>Chief Minister and Council of Ministers</h3>
      <ul>
        <li>
          <strong>Appointment:</strong> Chief Minister appointed by Governor;
          other ministers appointed on CM's advice
        </li>
        <li>
          <strong>Collective Responsibility:</strong> Council of Ministers
          collectively responsible to Legislative Assembly
        </li>
        <li>
          <strong>Functions:</strong> State policy formulation, legislation,
          administration
        </li>
      </ul>

      <h2>Local Governance</h2>

      <p>
        The 73rd and 74th Constitutional Amendments (1992) gave constitutional
        status to local self-government institutions:
      </p>

      <h3>Rural Local Bodies (Panchayati Raj)</h3>
      <ul>
        <li>
          <strong>Gram Panchayat:</strong> Village level
        </li>
        <li>
          <strong>Panchayat Samiti/Block Panchayat:</strong> Block level
        </li>
        <li>
          <strong>Zila Parishad:</strong> District level
        </li>
      </ul>

      <h3>Urban Local Bodies</h3>
      <ul>
        <li>
          <strong>Municipal Corporations:</strong> For large urban areas
        </li>
        <li>
          <strong>Municipal Councils:</strong> For smaller urban areas
        </li>
        <li>
          <strong>Nagar Panchayats:</strong> For transitional areas (rural to
          urban)
        </li>
      </ul>

      <h2>Civil Services in India</h2>

      <p>
        The civil services form the permanent executive and play a crucial role
        in governance:
      </p>

      <ul>
        <li>
          <strong>All India Services:</strong> IAS (Indian Administrative
          Service), IPS (Indian Police Service), IFoS (Indian Forest Service)
        </li>
        <li>
          <strong>Central Services:</strong> IRS, IFS (Foreign Service), etc.
        </li>
        <li>
          <strong>State Services:</strong> State Civil Services, State Police
          Service, etc.
        </li>
      </ul>

      <div className="bg-accent p-4 rounded-md my-4">
        <h3 className="font-bold mb-2">Key Governance Reforms in India</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Right to Information Act (2005):</strong> Promotes
            transparency and accountability
          </li>
          <li>
            <strong>E-Governance Initiatives:</strong> Digital India,
            e-services, online portals
          </li>
          <li>
            <strong>Citizen's Charters:</strong> Commitment to standards in
            public services
          </li>
          <li>
            <strong>Lokpal and Lokayuktas:</strong> Anti-corruption ombudsman
            institutions
          </li>
          <li>
            <strong>Public Private Partnerships:</strong> Collaborative approach
            to infrastructure development
          </li>
        </ul>
      </div>

      <h2>Challenges in Indian Governance</h2>

      <ul>
        <li>
          <strong>Corruption:</strong> Misuse of public office for private gain
        </li>
        <li>
          <strong>Red Tapism:</strong> Excessive bureaucracy and procedural
          delays
        </li>
        <li>
          <strong>Political Interference:</strong> In administrative functioning
        </li>
        <li>
          <strong>Implementation Gaps:</strong> Between policy formulation and
          execution
        </li>
        <li>
          <strong>Regional Disparities:</strong> Uneven development across
          states
        </li>
        <li>
          <strong>Lack of Accountability:</strong> In public service delivery
        </li>
      </ul>

      <div className="bg-primary/10 p-4 rounded-md my-6">
        <h3 className="font-bold mb-2">Example Question</h3>
        <p className="mb-2">
          Which of the following is NOT a function of the Union Public Service
          Commission (UPSC)?
        </p>
        <ol className="list-decimal pl-5 mb-4">
          <li>
            Conducting examinations for appointments to All India Services
          </li>
          <li>
            Advising on matters related to methods of recruitment to civil
            services
          </li>
          <li>
            Serving as a disciplinary authority for All India Service officers
          </li>
          <li>Advising on promotions and transfers of officials</li>
        </ol>
        <p className="font-semibold">
          Answer: 3. Serving as a disciplinary authority for All India Service
          officers
        </p>
        <p className="text-sm mt-2">
          Explanation: UPSC is not a disciplinary authority for All India
          Service officers. Disciplinary matters for these officers are handled
          by the respective cadre controlling authorities. UPSC's main functions
          include conducting civil service examinations, advising the government
          on recruitment methods, and providing consultation on promotions and
          transfers.
        </p>
      </div>
    </>
  );

  return (
    <TutorialLayout activeTopicId="governance">
      <TutorialContent
        title="Governance in India"
        content={content}
        prevTutorial={{
          title: "Indian Constitution",
          path: "/tutorials/politics/indian-constitution",
        }}
        nextTutorial={{
          title: "International Relations",
          path: "/tutorials/politics/international-relations",
        }}
      />
    </TutorialLayout>
  );
};

export default GovernanceTutorial;
