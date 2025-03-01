import React from "react";
import TutorialLayout from "./TutorialLayout";
import TutorialContent from "./TutorialContent";

const InternationalRelationsTutorial: React.FC = () => {
  const content = (
    <>
      <p className="lead">
        International Relations is a critical component of India's foreign
        policy. Since independence, India has evolved its approach to global
        affairs while maintaining certain core principles. Understanding India's
        foreign policy and its relations with major powers and neighbors is
        essential for government exams.
      </p>

      <h2>Evolution of India's Foreign Policy</h2>

      <p>
        India's foreign policy has evolved through different phases while
        maintaining some fundamental principles:
      </p>

      <h3>Principles of India's Foreign Policy</h3>
      <ul>
        <li>
          <strong>Panchsheel (Five Principles of Peaceful Coexistence):</strong>{" "}
          Mutual respect for territorial integrity and sovereignty,
          non-aggression, non-interference, equality and mutual benefit,
          peaceful coexistence
        </li>
        <li>
          <strong>Non-Alignment:</strong> Staying independent of power blocs
          during the Cold War
        </li>
        <li>
          <strong>Anti-Colonialism and Anti-Racism:</strong> Support for
          decolonization movements and opposition to racial discrimination
        </li>
        <li>
          <strong>Peaceful Settlement of Disputes:</strong> Emphasis on dialogue
          and diplomacy
        </li>
        <li>
          <strong>Support for UN and International Law:</strong> Commitment to
          multilateralism
        </li>
      </ul>

      <div className="bg-accent p-4 rounded-md my-4">
        <h3 className="font-bold mb-2">Phases of India's Foreign Policy</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Nehru Era (1947-1964):</strong> Architect of Non-Alignment,
            emphasis on anti-colonialism, idealism in foreign policy
          </li>
          <li>
            <strong>Post-Nehru Period (1964-1991):</strong> More pragmatic
            approach, Indo-Soviet Treaty of 1971, regional focus
          </li>
          <li>
            <strong>Post-Cold War Era (1991-2014):</strong> Economic
            liberalization, Look East Policy, improved relations with US
          </li>
          <li>
            <strong>Contemporary Period (2014-Present):</strong>{" "}
            Multi-alignment, Act East Policy, Neighborhood First, emphasis on
            economic diplomacy
          </li>
        </ul>
      </div>

      <h2>India's Relations with Major Powers</h2>

      <h3>India-US Relations</h3>
      <ul>
        <li>
          <strong>Historical Context:</strong> Cold War tensions, improvement
          post-1991, significant enhancement post-2000
        </li>
        <li>
          <strong>Key Areas of Cooperation:</strong> Defense (LEMOA, COMCASA,
          BECA agreements), counter-terrorism, trade, technology, nuclear energy
          (Civil Nuclear Deal 2008)
        </li>
        <li>
          <strong>Strategic Partnerships:</strong> Quad (with Japan, Australia),
          2+2 Dialogue
        </li>
        <li>
          <strong>Challenges:</strong> Trade issues, visa regulations, divergent
          positions on some global issues
        </li>
      </ul>

      <h3>India-Russia Relations</h3>
      <ul>
        <li>
          <strong>Historical Context:</strong> Strong ties since Soviet era,
          Indo-Soviet Treaty of 1971
        </li>
        <li>
          <strong>Key Areas of Cooperation:</strong> Defense (largest supplier),
          energy, space, nuclear power
        </li>
        <li>
          <strong>Strategic Partnership:</strong> Annual summit meetings, BRICS,
          SCO
        </li>
        <li>
          <strong>Challenges:</strong> Russia-China proximity, Russia's
          relations with Pakistan
        </li>
      </ul>

      <h3>India-China Relations</h3>
      <ul>
        <li>
          <strong>Historical Context:</strong> Ancient cultural ties, 1962 war,
          gradual normalization
        </li>
        <li>
          <strong>Key Areas of Cooperation:</strong> Trade (China is India's
          largest trading partner in goods), investment
        </li>
        <li>
          <strong>Contentious Issues:</strong> Border disputes, China-Pakistan
          nexus, trade deficit, Belt and Road Initiative
        </li>
        <li>
          <strong>Recent Developments:</strong> Doklam standoff (2017), Galwan
          Valley clash (2020)
        </li>
      </ul>

      <table className="w-full border-collapse border border-gray-300 my-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Country/Region</th>
            <th className="border border-gray-300 p-2">
              Key Aspects of Relationship
            </th>
            <th className="border border-gray-300 p-2">
              Major Agreements/Forums
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">European Union</td>
            <td className="border border-gray-300 p-2">
              Trade, investment, technology, climate change
            </td>
            <td className="border border-gray-300 p-2">
              India-EU Strategic Partnership, FTA negotiations
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Japan</td>
            <td className="border border-gray-300 p-2">
              Infrastructure, technology, defense
            </td>
            <td className="border border-gray-300 p-2">
              Special Strategic Global Partnership, Quad
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">West Asia/Gulf</td>
            <td className="border border-gray-300 p-2">
              Energy security, diaspora, remittances
            </td>
            <td className="border border-gray-300 p-2">
              Strategic partnerships with UAE, Saudi Arabia
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Africa</td>
            <td className="border border-gray-300 p-2">
              Development partnership, trade, UN support
            </td>
            <td className="border border-gray-300 p-2">
              India-Africa Forum Summit
            </td>
          </tr>
        </tbody>
      </table>

      <h2>India's Relations with Neighbors</h2>

      <p>
        India's "Neighborhood First" policy emphasizes improved relations with
        immediate neighbors:
      </p>

      <h3>India-Pakistan Relations</h3>
      <ul>
        <li>
          <strong>Historical Context:</strong> Partition, wars (1947-48, 1965,
          1971, 1999), Kashmir issue
        </li>
        <li>
          <strong>Key Issues:</strong> Terrorism, Kashmir, water sharing, trade
        </li>
        <li>
          <strong>Peace Initiatives:</strong> Composite Dialogue, Lahore
          Declaration, Agra Summit
        </li>
        <li>
          <strong>Recent Developments:</strong> Pulwama attack, Balakot
          airstrike, Article 370 abrogation
        </li>
      </ul>

      <h3>Other Neighbors</h3>
      <ul>
        <li>
          <strong>Bangladesh:</strong> Land Boundary Agreement, water sharing,
          connectivity projects
        </li>
        <li>
          <strong>Nepal:</strong> Open border, hydropower cooperation,
          territorial disputes
        </li>
        <li>
          <strong>Sri Lanka:</strong> Tamil issue, fishermen disputes,
          infrastructure projects
        </li>
        <li>
          <strong>Bhutan:</strong> Hydropower cooperation, security relationship
        </li>
        <li>
          <strong>Afghanistan:</strong> Development assistance, strategic
          partnership
        </li>
        <li>
          <strong>Maldives:</strong> Maritime security, tourism, infrastructure
          development
        </li>
      </ul>

      <h2>India in Multilateral Forums</h2>

      <p>
        India actively participates in various international organizations and
        groupings:
      </p>

      <ul>
        <li>
          <strong>United Nations:</strong> Founding member, advocate for UNSC
          reforms and permanent membership
        </li>
        <li>
          <strong>BRICS:</strong> Brazil, Russia, India, China, South Africa -
          economic cooperation, New Development Bank
        </li>
        <li>
          <strong>SCO:</strong> Shanghai Cooperation Organization - security,
          counter-terrorism, economic cooperation
        </li>
        <li>
          <strong>G20:</strong> Global economic governance, sustainable
          development
        </li>
        <li>
          <strong>SAARC:</strong> South Asian Association for Regional
          Cooperation - regional integration
        </li>
        <li>
          <strong>BIMSTEC:</strong> Bay of Bengal Initiative - regional
          cooperation in Bay of Bengal region
        </li>
        <li>
          <strong>Quad:</strong> Quadrilateral Security Dialogue with US, Japan,
          Australia - Indo-Pacific strategy
        </li>
      </ul>

      <div className="bg-accent p-4 rounded-md my-4">
        <h3 className="font-bold mb-2">
          Contemporary Challenges in India's Foreign Policy
        </h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Balancing Relations:</strong> Managing relations with
            competing powers (US-China-Russia)
          </li>
          <li>
            <strong>Neighborhood Challenges:</strong> China's influence in South
            Asia, instability in some neighboring countries
          </li>
          <li>
            <strong>Economic Diplomacy:</strong> Promoting trade, investment,
            and technology partnerships
          </li>
          <li>
            <strong>Global Governance:</strong> Reforming international
            institutions to reflect contemporary realities
          </li>
          <li>
            <strong>Non-Traditional Security Threats:</strong> Climate change,
            terrorism, pandemics, cybersecurity
          </li>
        </ul>
      </div>

      <div className="bg-primary/10 p-4 rounded-md my-6">
        <h3 className="font-bold mb-2">Example Question</h3>
        <p className="mb-2">
          Which of the following is NOT one of the five principles of
          Panchsheel?
        </p>
        <ol className="list-decimal pl-5 mb-4">
          <li>Mutual respect for territorial integrity and sovereignty</li>
          <li>Non-aggression</li>
          <li>Economic cooperation for mutual benefit</li>
          <li>Peaceful coexistence</li>
        </ol>
        <p className="font-semibold">
          Answer: 3. Economic cooperation for mutual benefit
        </p>
        <p className="text-sm mt-2">
          Explanation: The five principles of Panchsheel are: (1) Mutual respect
          for territorial integrity and sovereignty, (2) Non-aggression, (3)
          Non-interference in internal affairs, (4) Equality and mutual benefit,
          and (5) Peaceful coexistence. "Economic cooperation for mutual
          benefit" is not one of the principles, although "Equality and mutual
          benefit" covers the concept of mutual benefit more broadly.
        </p>
      </div>
    </>
  );

  return (
    <TutorialLayout activeTopicId="international-relations">
      <TutorialContent
        title="International Relations"
        content={content}
        prevTutorial={{
          title: "Governance",
          path: "/tutorials/politics/governance",
        }}
      />
    </TutorialLayout>
  );
};

export default InternationalRelationsTutorial;
