import React from "react";
import TutorialLayout from "./TutorialLayout";
import TutorialContent from "./TutorialContent";

const FreedomStruggleTutorial: React.FC = () => {
  const content = (
    <>
      <p className="lead">
        The Indian Freedom Struggle (1857-1947) was a long and complex movement
        that ultimately led to India's independence from British colonial rule.
        It involved various phases, strategies, and leaders who contributed to
        the nationalist cause.
      </p>

      <h2>The Revolt of 1857</h2>

      <p>
        Often called the First War of Independence, the Revolt of 1857 was the
        first major uprising against British rule:
      </p>

      <ul>
        <li>
          <strong>Immediate Cause:</strong> Introduction of the Enfield rifle
          with cartridges greased with animal fat
        </li>
        <li>
          <strong>Leaders:</strong> Bahadur Shah Zafar, Rani Lakshmibai, Tantia
          Tope, Nana Sahib, Kunwar Singh, Begum Hazrat Mahal
        </li>
        <li>
          <strong>Centers of Revolt:</strong> Meerut, Delhi, Kanpur, Lucknow,
          Jhansi, Bareilly, Arrah
        </li>
        <li>
          <strong>Aftermath:</strong> End of East India Company rule, direct
          control by British Crown through Government of India Act, 1858
        </li>
      </ul>

      <div className="bg-accent p-4 rounded-md my-4">
        <h3 className="font-bold mb-2">Causes of the Revolt of 1857</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Political:</strong> Doctrine of Lapse, annexation of Awadh
          </li>
          <li>
            <strong>Economic:</strong> Drain of wealth, destruction of
            traditional industries
          </li>
          <li>
            <strong>Social and Religious:</strong> Interference with customs,
            missionary activities
          </li>
          <li>
            <strong>Military:</strong> Discrimination against Indian soldiers,
            General Service Enlistment Act
          </li>
        </ul>
      </div>

      <h2>Formation of Indian National Congress (1885)</h2>

      <p>
        The Indian National Congress was founded by A.O. Hume, a retired British
        civil servant, along with prominent Indian leaders:
      </p>

      <ul>
        <li>
          <strong>First Session:</strong> Held in Bombay in December 1885,
          presided by W.C. Bonnerjee
        </li>
        <li>
          <strong>Early Leaders:</strong> Dadabhai Naoroji, Surendranath
          Banerjee, Gopal Krishna Gokhale
        </li>
        <li>
          <strong>Objectives:</strong> Promote national unity, develop national
          feeling, formulate popular demands and present them before the
          government
        </li>
      </ul>

      <h3>Moderate Phase (1885-1905)</h3>
      <ul>
        <li>
          <strong>Leaders:</strong> Dadabhai Naoroji, Gopal Krishna Gokhale,
          Surendranath Banerjee
        </li>
        <li>
          <strong>Methods:</strong> Constitutional agitation, petitions,
          meetings, resolutions
        </li>
        <li>
          <strong>Demands:</strong> Civil rights, administrative reforms,
          representation in councils, economic reforms
        </li>
        <li>
          <strong>Achievements:</strong> Political education, national
          awakening, exposure of British exploitation
        </li>
      </ul>

      <h2>Swadeshi Movement and Extremist Phase (1905-1919)</h2>

      <p>
        The partition of Bengal in 1905 by Lord Curzon triggered widespread
        protests and gave rise to more radical nationalist politics:
      </p>

      <h3>Swadeshi Movement</h3>
      <ul>
        <li>
          <strong>Cause:</strong> Partition of Bengal (1905) by Lord Curzon
        </li>
        <li>
          <strong>Leaders:</strong> Aurobindo Ghosh, Lala Lajpat Rai, Bal
          Gangadhar Tilak, Bipin Chandra Pal
        </li>
        <li>
          <strong>Methods:</strong> Boycott of British goods, promotion of
          indigenous products, national education
        </li>
        <li>
          <strong>Significance:</strong> First mass movement, economic
          nationalism, cultural resurgence
        </li>
      </ul>

      <h3>Split in Congress (1907)</h3>
      <ul>
        <li>
          <strong>Surat Session:</strong> Congress split into Moderates and
          Extremists
        </li>
        <li>
          <strong>Extremist Leaders:</strong> Bal Gangadhar Tilak ("Swaraj is my
          birthright"), Lala Lajpat Rai, Bipin Chandra Pal (Lal-Bal-Pal trio)
        </li>
        <li>
          <strong>Reunification:</strong> Occurred in 1916 at Lucknow Session
        </li>
      </ul>

      <h2>Gandhian Era (1919-1947)</h2>

      <p>
        Mahatma Gandhi transformed the Indian freedom struggle with his
        philosophy of non-violence and mass mobilization:
      </p>

      <h3>Major Movements</h3>
      <table className="w-full border-collapse border border-gray-300 my-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Movement</th>
            <th className="border border-gray-300 p-2">Period</th>
            <th className="border border-gray-300 p-2">Cause</th>
            <th className="border border-gray-300 p-2">Outcome</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">Rowlatt Satyagraha</td>
            <td className="border border-gray-300 p-2">1919</td>
            <td className="border border-gray-300 p-2">
              Rowlatt Acts extending emergency powers
            </td>
            <td className="border border-gray-300 p-2">
              Jallianwala Bagh Massacre, withdrawal of movement
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              Non-Cooperation Movement
            </td>
            <td className="border border-gray-300 p-2">1920-22</td>
            <td className="border border-gray-300 p-2">
              Khilafat issue, Punjab wrongs
            </td>
            <td className="border border-gray-300 p-2">
              Suspended after Chauri Chaura incident
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              Civil Disobedience Movement
            </td>
            <td className="border border-gray-300 p-2">1930-34</td>
            <td className="border border-gray-300 p-2">
              Failure of Simon Commission, Nehru Report
            </td>
            <td className="border border-gray-300 p-2">
              Gandhi-Irwin Pact, participation in Round Table Conferences
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Quit India Movement</td>
            <td className="border border-gray-300 p-2">1942</td>
            <td className="border border-gray-300 p-2">
              Failure of Cripps Mission, World War II
            </td>
            <td className="border border-gray-300 p-2">
              Massive repression, underground activities
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Revolutionary Movement</h3>
      <p>
        Alongside the mainstream nationalist movement, revolutionary activities
        aimed at overthrowing British rule through armed resistance:
      </p>
      <ul>
        <li>
          <strong>Early Phase:</strong> Anushilan Samiti, Jugantar group in
          Bengal
        </li>
        <li>
          <strong>Notable Revolutionaries:</strong> Bhagat Singh, Chandrashekhar
          Azad, Surya Sen, V.D. Savarkar
        </li>
        <li>
          <strong>Major Actions:</strong> Kakori Conspiracy (1925), Lahore
          Conspiracy Case (1929), Chittagong Armoury Raid (1930)
        </li>
      </ul>

      <h2>Towards Independence (1939-1947)</h2>

      <p>
        The final phase of the freedom struggle was shaped by World War II and
        post-war developments:
      </p>

      <ul>
        <li>
          <strong>August Offer (1940):</strong> Rejected by Congress
        </li>
        <li>
          <strong>Cripps Mission (1942):</strong> Failed to satisfy Indian
          demands
        </li>
        <li>
          <strong>Cabinet Mission Plan (1946):</strong> Proposed a federal
          structure
        </li>
        <li>
          <strong>Direct Action Day (1946):</strong> Called by Muslim League,
          led to communal violence
        </li>
        <li>
          <strong>Mountbatten Plan (June 1947):</strong> Announced partition and
          independence
        </li>
        <li>
          <strong>Indian Independence Act (July 1947):</strong> Passed by
          British Parliament
        </li>
        <li>
          <strong>Independence (August 15, 1947):</strong> India became
          independent with Jawaharlal Nehru as first Prime Minister
        </li>
      </ul>

      <div className="bg-primary/10 p-4 rounded-md my-6">
        <h3 className="font-bold mb-2">Example Question</h3>
        <p className="mb-2">
          Which of the following movements was launched by Mahatma Gandhi to
          support the Khilafat Movement?
        </p>
        <ol className="list-decimal pl-5 mb-4">
          <li>Civil Disobedience Movement</li>
          <li>Non-Cooperation Movement</li>
          <li>Quit India Movement</li>
          <li>Swadeshi Movement</li>
        </ol>
        <p className="font-semibold">Answer: 2. Non-Cooperation Movement</p>
        <p className="text-sm mt-2">
          Explanation: The Non-Cooperation Movement (1920-22) was launched by
          Mahatma Gandhi to support the Khilafat Movement and to protest against
          the Jallianwala Bagh Massacre and other injustices. It involved
          boycotting British institutions, surrendering titles, and promoting
          swadeshi. The movement was called off after the violent incident at
          Chauri Chaura in February 1922.
        </p>
      </div>
    </>
  );

  return (
    <TutorialLayout activeTopicId="freedom-struggle">
      <TutorialContent
        title="Indian Freedom Struggle (1857-1947)"
        content={content}
        prevTutorial={{
          title: "Modern History",
          path: "/tutorials/history/modern-history",
        }}
      />
    </TutorialLayout>
  );
};

export default FreedomStruggleTutorial;
