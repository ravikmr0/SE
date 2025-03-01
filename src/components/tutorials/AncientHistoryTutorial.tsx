import React from "react";
import TutorialLayout from "./TutorialLayout";
import TutorialContent from "./TutorialContent";

const AncientHistoryTutorial: React.FC = () => {
  const content = (
    <>
      <p className="lead">
        Ancient Indian History spans from the prehistoric era to around 1200 CE.
        This period saw the rise and fall of several civilizations, empires, and
        dynasties that laid the foundation for Indian culture, religion, and
        society.
      </p>

      <h2>Indus Valley Civilization (3300-1300 BCE)</h2>

      <p>
        The Indus Valley Civilization, also known as the Harappan Civilization,
        was one of the world's earliest urban civilizations:
      </p>

      <ul>
        <li>
          <strong>Major Sites:</strong> Harappa, Mohenjo-daro, Lothal,
          Dholavira, Kalibangan, Rakhigarhi
        </li>
        <li>
          <strong>Urban Planning:</strong> Grid-pattern streets, advanced
          drainage systems, public baths
        </li>
        <li>
          <strong>Economy:</strong> Agriculture, crafts, trade with Mesopotamia
        </li>
        <li>
          <strong>Script:</strong> Indus script (undeciphered pictographic
          writing)
        </li>
        <li>
          <strong>Notable Artifacts:</strong> Great Bath, Dancing Girl,
          Priest-King statue, seals with unicorn motifs
        </li>
      </ul>

      <div className="bg-accent p-4 rounded-md my-4">
        <h3 className="font-bold mb-2">
          Key Features of Indus Valley Civilization
        </h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Planned urban centers with grid layout</li>
          <li>Advanced drainage and sanitation systems</li>
          <li>Standardized weights and measures</li>
          <li>Burnt brick buildings</li>
          <li>Evidence of trade with Mesopotamia</li>
          <li>Absence of monumental structures like temples or palaces</li>
          <li>
            Decline around 1900-1700 BCE (possible causes: climate change,
            floods, invasion)
          </li>
        </ul>
      </div>

      <h2>Vedic Period (1500-600 BCE)</h2>

      <p>
        The Vedic Period is characterized by the composition of the Vedas and
        the migration of Indo-Aryan peoples into the Indian subcontinent:
      </p>

      <h3>Early Vedic Period (1500-1000 BCE)</h3>
      <ul>
        <li>
          <strong>Society:</strong> Tribal, pastoral, semi-nomadic
        </li>
        <li>
          <strong>Economy:</strong> Cattle rearing, limited agriculture
        </li>
        <li>
          <strong>Political Organization:</strong> Tribal kingdoms led by chiefs
          (Rajan)
        </li>
        <li>
          <strong>Religion:</strong> Worship of natural forces, fire sacrifices
        </li>
        <li>
          <strong>Literature:</strong> Rigveda
        </li>
      </ul>

      <h3>Later Vedic Period (1000-600 BCE)</h3>
      <ul>
        <li>
          <strong>Society:</strong> Settled agricultural, emergence of varna
          system
        </li>
        <li>
          <strong>Economy:</strong> Agriculture, crafts, trade
        </li>
        <li>
          <strong>Political Organization:</strong> Territorial kingdoms,
          emergence of Mahajanapadas
        </li>
        <li>
          <strong>Religion:</strong> Complex rituals, emergence of Upanishadic
          philosophy
        </li>
        <li>
          <strong>Literature:</strong> Later Vedas (Sama, Yajur, Atharva),
          Brahmanas, Aranyakas, Upanishads
        </li>
      </ul>

      <table className="w-full border-collapse border border-gray-300 my-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Vedic Text</th>
            <th className="border border-gray-300 p-2">Content</th>
            <th className="border border-gray-300 p-2">Significance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">Rigveda</td>
            <td className="border border-gray-300 p-2">
              1028 hymns to deities
            </td>
            <td className="border border-gray-300 p-2">
              Oldest Vedic text, historical insights into early Vedic society
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Samaveda</td>
            <td className="border border-gray-300 p-2">Melodies and chants</td>
            <td className="border border-gray-300 p-2">
              Musical arrangements of Rigvedic hymns for rituals
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Yajurveda</td>
            <td className="border border-gray-300 p-2">Ritual formulas</td>
            <td className="border border-gray-300 p-2">
              Instructions for performing religious ceremonies
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Atharvaveda</td>
            <td className="border border-gray-300 p-2">
              Spells, charms, speculative hymns
            </td>
            <td className="border border-gray-300 p-2">
              Insights into daily life, medicine, and philosophy
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Upanishads</td>
            <td className="border border-gray-300 p-2">
              Philosophical discussions
            </td>
            <td className="border border-gray-300 p-2">
              Concepts of Brahman, Atman, karma, moksha
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Mahajanapadas and Rise of Buddhism and Jainism (600-325 BCE)</h2>

      <p>
        This period saw the emergence of 16 major kingdoms (Mahajanapadas) and
        the rise of heterodox religious movements:
      </p>

      <h3>Major Mahajanapadas</h3>
      <ul>
        <li>
          <strong>Magadha:</strong> Most powerful, ruled by Bimbisara and
          Ajatashatru
        </li>
        <li>
          <strong>Kosala:</strong> Rival of Magadha, capital at Shravasti
        </li>
        <li>
          <strong>Vajji:</strong> Republican confederation with capital at
          Vaishali
        </li>
        <li>
          <strong>Avanti:</strong> Important kingdom with capital at Ujjain
        </li>
      </ul>

      <h3>Rise of Buddhism and Jainism</h3>
      <ul>
        <li>
          <strong>Buddhism:</strong> Founded by Gautama Buddha (563-483 BCE),
          emphasized Middle Path, Four Noble Truths, Eightfold Path
        </li>
        <li>
          <strong>Jainism:</strong> Revived by Mahavira (539-467 BCE),
          emphasized non-violence (ahimsa), truth (satya), non-stealing
          (asteya), celibacy (brahmacharya), and non-possession (aparigraha)
        </li>
      </ul>

      <h2>Mauryan Empire (322-185 BCE)</h2>

      <p>The first major empire to unify most of the Indian subcontinent:</p>

      <ul>
        <li>
          <strong>Chandragupta Maurya (322-298 BCE):</strong> Founder,
          established empire with help of Chanakya (Kautilya)
        </li>
        <li>
          <strong>Bindusara (298-272 BCE):</strong> Expanded empire southward
        </li>
        <li>
          <strong>Ashoka (272-232 BCE):</strong> Greatest Mauryan ruler,
          converted to Buddhism after Kalinga War, promoted Dhamma
        </li>
      </ul>

      <div className="bg-primary/10 p-4 rounded-md my-6">
        <h3 className="font-bold mb-2">Example Question</h3>
        <p className="mb-2">
          Which of the following is NOT a major site of the Indus Valley
          Civilization?
        </p>
        <ol className="list-decimal pl-5 mb-4">
          <li>Harappa</li>
          <li>Pataliputra</li>
          <li>Mohenjo-daro</li>
          <li>Lothal</li>
        </ol>
        <p className="font-semibold">Answer: 2. Pataliputra</p>
        <p className="text-sm mt-2">
          Explanation: Pataliputra (modern-day Patna) was the capital of the
          Magadha kingdom and later the Mauryan Empire. It was not a site of the
          Indus Valley Civilization. Harappa, Mohenjo-daro, and Lothal are all
          important archaeological sites of the Indus Valley Civilization.
        </p>
      </div>
    </>
  );

  return (
    <TutorialLayout activeTopicId="ancient-history">
      <TutorialContent
        title="Ancient Indian History"
        content={content}
        nextTutorial={{
          title: "Medieval History",
          path: "/tutorials/history/medieval-history",
        }}
      />
    </TutorialLayout>
  );
};

export default AncientHistoryTutorial;
