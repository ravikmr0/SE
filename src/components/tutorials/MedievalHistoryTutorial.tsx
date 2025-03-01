import React from "react";
import TutorialLayout from "./TutorialLayout";
import TutorialContent from "./TutorialContent";

const MedievalHistoryTutorial: React.FC = () => {
  const content = (
    <>
      <p className="lead">
        Medieval Indian History spans from approximately 1200 CE to 1757 CE.
        This period witnessed the rise and fall of several dynasties, the
        establishment of the Delhi Sultanate, the Mughal Empire, and various
        regional kingdoms.
      </p>

      <h2>Delhi Sultanate (1206-1526 CE)</h2>

      <p>
        The Delhi Sultanate was a series of five dynasties that ruled northern
        India:
      </p>

      <table className="w-full border-collapse border border-gray-300 my-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Dynasty</th>
            <th className="border border-gray-300 p-2">Period</th>
            <th className="border border-gray-300 p-2">Notable Rulers</th>
            <th className="border border-gray-300 p-2">Key Developments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">Mamluk/Slave Dynasty</td>
            <td className="border border-gray-300 p-2">1206-1290</td>
            <td className="border border-gray-300 p-2">
              Qutb-ud-din Aibak, Iltutmish, Razia Sultana, Balban
            </td>
            <td className="border border-gray-300 p-2">
              Establishment of Sultanate, Qutub Minar construction
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Khalji Dynasty</td>
            <td className="border border-gray-300 p-2">1290-1320</td>
            <td className="border border-gray-300 p-2">Alauddin Khalji</td>
            <td className="border border-gray-300 p-2">
              Market reforms, expansion into South India
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Tughlaq Dynasty</td>
            <td className="border border-gray-300 p-2">1320-1414</td>
            <td className="border border-gray-300 p-2">
              Ghiyasuddin Tughlaq, Muhammad bin Tughlaq, Firoz Shah Tughlaq
            </td>
            <td className="border border-gray-300 p-2">
              Capital transfer to Daulatabad, token currency experiment
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Sayyid Dynasty</td>
            <td className="border border-gray-300 p-2">1414-1451</td>
            <td className="border border-gray-300 p-2">Khizr Khan</td>
            <td className="border border-gray-300 p-2">
              Decline in Sultanate's power
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Lodi Dynasty</td>
            <td className="border border-gray-300 p-2">1451-1526</td>
            <td className="border border-gray-300 p-2">
              Bahlol Lodi, Sikandar Lodi, Ibrahim Lodi
            </td>
            <td className="border border-gray-300 p-2">
              Last dynasty of Delhi Sultanate, defeated by Babur at Panipat
            </td>
          </tr>
        </tbody>
      </table>

      <div className="bg-accent p-4 rounded-md my-4">
        <h3 className="font-bold mb-2">
          Administrative System of Delhi Sultanate
        </h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Sultan:</strong> Absolute monarch, head of state and
            government
          </li>
          <li>
            <strong>Wazir:</strong> Chief minister, head of finance department
          </li>
          <li>
            <strong>Diwan-i-Arz:</strong> Military department
          </li>
          <li>
            <strong>Diwan-i-Insha:</strong> Department of correspondence
          </li>
          <li>
            <strong>Diwan-i-Risalat:</strong> Department of religious matters
          </li>
          <li>
            <strong>Iqta System:</strong> Land assignments to officials in lieu
            of salary
          </li>
        </ul>
      </div>

      <h2>Vijayanagara Empire (1336-1646 CE)</h2>

      <p>
        The Vijayanagara Empire was a powerful Hindu kingdom in South India that
        served as a bulwark against Muslim expansion:
      </p>

      <ul>
        <li>
          <strong>Founders:</strong> Harihara and Bukka Raya (with guidance from
          sage Vidyaranya)
        </li>
        <li>
          <strong>Capital:</strong> Hampi (now a UNESCO World Heritage Site)
        </li>
        <li>
          <strong>Major Dynasties:</strong> Sangama, Saluva, Tuluva, and Aravidu
        </li>
        <li>
          <strong>Greatest Ruler:</strong> Krishnadevaraya (1509-1529) of Tuluva
          dynasty
        </li>
        <li>
          <strong>Decline:</strong> Defeat at Battle of Talikota (1565) against
          alliance of Deccan Sultanates
        </li>
      </ul>

      <h3>Art and Architecture</h3>
      <p>
        The Vijayanagara period saw remarkable developments in art and
        architecture, combining various styles:
      </p>
      <ul>
        <li>
          <strong>Temples:</strong> Vitthala Temple, Hazara Rama Temple,
          Virupaksha Temple
        </li>
        <li>
          <strong>Features:</strong> Mandapas (halls), gopurams (gateway
          towers), kalyana mandapas (marriage halls)
        </li>
        <li>
          <strong>Sculptures:</strong> Detailed carvings depicting mythology,
          daily life, and foreign visitors
        </li>
      </ul>

      <h2>Mughal Empire (1526-1857 CE)</h2>

      <p>
        The Mughal Empire was one of the most powerful and richest empires in
        Indian history:
      </p>

      <h3>Major Mughal Rulers</h3>
      <ul>
        <li>
          <strong>Babur (1526-1530):</strong> Founder, defeated Ibrahim Lodi at
          First Battle of Panipat (1526), wrote autobiography Baburnama
        </li>
        <li>
          <strong>Humayun (1530-1540, 1555-1556):</strong> Lost empire to Sher
          Shah Suri, regained it with Persian help
        </li>
        <li>
          <strong>Akbar (1556-1605):</strong> Greatest Mughal emperor, expanded
          empire, introduced religious tolerance, Din-i-Ilahi, administrative
          reforms
        </li>
        <li>
          <strong>Jahangir (1605-1627):</strong> Patron of arts, married Nur
          Jahan who wielded significant influence
        </li>
        <li>
          <strong>Shah Jahan (1628-1658):</strong> Known for architectural
          achievements including Taj Mahal, Red Fort, Jama Masjid
        </li>
        <li>
          <strong>Aurangzeb (1658-1707):</strong> Expanded empire to its
          greatest extent, but religious policies and constant warfare weakened
          it
        </li>
      </ul>

      <div className="bg-accent p-4 rounded-md my-4">
        <h3 className="font-bold mb-2">Mughal Administration</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Emperor:</strong> Absolute monarch with supreme authority
          </li>
          <li>
            <strong>Mansabdari System:</strong> Ranking system for officials
            based on zat (personal rank) and sawar (cavalry maintained)
          </li>
          <li>
            <strong>Central Government:</strong> Wazir (prime minister), Diwan
            (finance), Mir Bakshi (military), Sadr (religious affairs), Qazi
            (justice)
          </li>
          <li>
            <strong>Provincial Administration:</strong> Subahs (provinces)
            headed by Subahdars, further divided into Sarkars and Parganas
          </li>
          <li>
            <strong>Revenue System:</strong> Zabti system (measurement of land)
            under Akbar, supervised by Todar Mal
          </li>
        </ul>
      </div>

      <h2>Maratha Empire (1674-1818 CE)</h2>

      <p>
        The Marathas emerged as a powerful force in the 17th century under
        Shivaji and later established a confederacy:
      </p>

      <ul>
        <li>
          <strong>Shivaji (1674-1680):</strong> Founder, crowned as Chhatrapati,
          established Hindavi Swarajya
        </li>
        <li>
          <strong>Peshwa Period:</strong> After Shahu, Peshwas (prime ministers)
          became de facto rulers
        </li>
        <li>
          <strong>Expansion:</strong> Under Bajirao I and Balaji Bajirao,
          Maratha influence extended across India
        </li>
        <li>
          <strong>Third Battle of Panipat (1761):</strong> Defeat against Ahmad
          Shah Abdali weakened Maratha power
        </li>
        <li>
          <strong>Decline:</strong> Gradual defeat by British in Anglo-Maratha
          Wars (1775-1818)
        </li>
      </ul>

      <div className="bg-primary/10 p-4 rounded-md my-6">
        <h3 className="font-bold mb-2">Example Question</h3>
        <p className="mb-2">Which Mughal emperor built the Taj Mahal?</p>
        <ol className="list-decimal pl-5 mb-4">
          <li>Akbar</li>
          <li>Jahangir</li>
          <li>Shah Jahan</li>
          <li>Aurangzeb</li>
        </ol>
        <p className="font-semibold">Answer: 3. Shah Jahan</p>
        <p className="text-sm mt-2">
          Explanation: Shah Jahan built the Taj Mahal in memory of his beloved
          wife Mumtaz Mahal, who died in 1631. Construction began in 1632 and
          was completed around 1653. The Taj Mahal is considered one of the
          finest examples of Mughal architecture and is a UNESCO World Heritage
          Site.
        </p>
      </div>
    </>
  );

  return (
    <TutorialLayout activeTopicId="medieval-history">
      <TutorialContent
        title="Medieval Indian History"
        content={content}
        prevTutorial={{
          title: "Ancient History",
          path: "/tutorials/history/ancient-history",
        }}
        nextTutorial={{
          title: "Modern History",
          path: "/tutorials/history/modern-history",
        }}
      />
    </TutorialLayout>
  );
};

export default MedievalHistoryTutorial;
