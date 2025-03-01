import React from "react";
import TutorialLayout from "./TutorialLayout";
import TutorialContent from "./TutorialContent";

const HistoryTutorial: React.FC = () => {
  const content = (
    <>
      <p className="lead">
        Modern Indian History (1757-1947) is a crucial period that covers
        India's transition from traditional kingdoms to colonial rule and
        finally to independence. This period saw significant social, political,
        and economic changes that shaped modern India.
      </p>

      <h2>British Conquest of India</h2>

      <p>
        The British established their rule in India through a combination of
        military conquests, diplomatic alliances, and administrative policies:
      </p>

      <ul>
        <li>
          <strong>Battle of Plassey (1757):</strong> Marked the beginning of
          British political influence in India when the East India Company
          defeated Siraj-ud-Daulah, the Nawab of Bengal.
        </li>
        <li>
          <strong>Battle of Buxar (1764):</strong> Consolidated British power in
          Bengal and Bihar after defeating the combined forces of the Nawab of
          Bengal, the Nawab of Awadh, and the Mughal Emperor.
        </li>
        <li>
          <strong>Subsidiary Alliance System:</strong> Introduced by Lord
          Wellesley to bring Indian states under British control through
          treaties.
        </li>
        <li>
          <strong>Doctrine of Lapse:</strong> Implemented by Lord Dalhousie to
          annex states where the ruler died without a natural heir.
        </li>
      </ul>

      <div className="bg-accent p-4 rounded-md my-4">
        <h3 className="font-bold mb-2">Important British Governors-General</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Warren Hastings (1772-1785):</strong> First Governor-General
            of Bengal, established civil service and judiciary
          </li>
          <li>
            <strong>Lord Cornwallis (1786-1793):</strong> Introduced Permanent
            Settlement in Bengal
          </li>
          <li>
            <strong>Lord Wellesley (1798-1805):</strong> Implemented Subsidiary
            Alliance system
          </li>
          <li>
            <strong>Lord William Bentinck (1828-1835):</strong> Social reformer,
            abolished Sati and suppressed Thuggee
          </li>
          <li>
            <strong>Lord Dalhousie (1848-1856):</strong> Introduced Doctrine of
            Lapse, railways, telegraph, postal system
          </li>
          <li>
            <strong>Lord Canning (1856-1862):</strong> First Viceroy of India,
            handled the Revolt of 1857
          </li>
        </ul>
      </div>

      <h2>The Revolt of 1857</h2>

      <p>
        Often called the First War of Independence, the Revolt of 1857 was a
        significant uprising against British rule:
      </p>

      <ul>
        <li>
          <strong>Immediate Cause:</strong> Introduction of the Enfield rifle
          with cartridges greased with animal fat
        </li>
        <li>
          <strong>Leaders:</strong> Bahadur Shah Zafar, Rani Lakshmibai, Tantia
          Tope, Nana Sahib, Kunwar Singh
        </li>
        <li>
          <strong>Centers of Revolt:</strong> Meerut, Delhi, Kanpur, Lucknow,
          Jhansi, Bareilly
        </li>
        <li>
          <strong>Aftermath:</strong> End of East India Company rule, direct
          control by British Crown
        </li>
      </ul>

      <h2>Socio-Religious Reform Movements</h2>

      <p>
        The 19th century saw numerous reform movements aimed at modernizing
        Indian society:
      </p>

      <table className="w-full border-collapse border border-gray-300 my-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Reform Movement</th>
            <th className="border border-gray-300 p-2">Founder</th>
            <th className="border border-gray-300 p-2">Key Contributions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">Brahmo Samaj</td>
            <td className="border border-gray-300 p-2">Raja Ram Mohan Roy</td>
            <td className="border border-gray-300 p-2">
              Opposed idol worship, fought against Sati, promoted widow
              remarriage
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Arya Samaj</td>
            <td className="border border-gray-300 p-2">
              Swami Dayanand Saraswati
            </td>
            <td className="border border-gray-300 p-2">
              Promoted Vedic learning, opposed child marriage, advocated for
              women's education
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Ramakrishna Mission</td>
            <td className="border border-gray-300 p-2">Swami Vivekananda</td>
            <td className="border border-gray-300 p-2">
              Promoted spiritual nationalism, service to humanity
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Theosophical Society</td>
            <td className="border border-gray-300 p-2">
              Madame Blavatsky, Colonel Olcott
            </td>
            <td className="border border-gray-300 p-2">
              Revived interest in ancient Indian texts, promoted universal
              brotherhood
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Indian National Movement</h2>

      <p>The struggle for independence evolved through different phases:</p>

      <h3>Moderate Phase (1885-1905)</h3>
      <ul>
        <li>
          <strong>Leaders:</strong> Dadabhai Naoroji, Gopal Krishna Gokhale,
          Surendranath Banerjee
        </li>
        <li>
          <strong>Methods:</strong> Constitutional agitation, petitions,
          meetings
        </li>
        <li>
          <strong>Demands:</strong> Civil rights, administrative reforms,
          representation in councils
        </li>
      </ul>

      <h3>Extremist Phase (1905-1919)</h3>
      <ul>
        <li>
          <strong>Leaders:</strong> Bal Gangadhar Tilak, Lala Lajpat Rai, Bipin
          Chandra Pal
        </li>
        <li>
          <strong>Methods:</strong> Swadeshi movement, boycott of foreign goods,
          passive resistance
        </li>
        <li>
          <strong>Trigger:</strong> Partition of Bengal (1905)
        </li>
      </ul>

      <h3>Gandhian Era (1919-1947)</h3>
      <ul>
        <li>
          <strong>Major Movements:</strong> Non-Cooperation Movement (1920-22),
          Civil Disobedience Movement (1930-34), Quit India Movement (1942)
        </li>
        <li>
          <strong>Principles:</strong> Satyagraha, non-violence, truth,
          self-reliance
        </li>
        <li>
          <strong>Other Leaders:</strong> Jawaharlal Nehru, Sardar Patel, Subhas
          Chandra Bose, Maulana Azad
        </li>
      </ul>

      <div className="bg-primary/10 p-4 rounded-md my-6">
        <h3 className="font-bold mb-2">Example Question</h3>
        <p className="mb-2">
          Who among the following gave the slogan "Swaraj is my birthright and I
          shall have it"?
        </p>
        <ol className="list-decimal pl-5 mb-4">
          <li>Mahatma Gandhi</li>
          <li>Bal Gangadhar Tilak</li>
          <li>Jawaharlal Nehru</li>
          <li>Bhagat Singh</li>
        </ol>
        <p className="font-semibold">Answer: 2. Bal Gangadhar Tilak</p>
        <p className="text-sm mt-2">
          Explanation: Bal Gangadhar Tilak, known as 'Lokmanya', was a prominent
          nationalist leader during the extremist phase of the Indian freedom
          struggle. He gave this famous slogan to inspire Indians to fight for
          complete independence.
        </p>
      </div>
    </>
  );

  return (
    <TutorialLayout activeTopicId="modern-history">
      <TutorialContent
        title="Modern Indian History (1757-1947)"
        content={content}
        prevTutorial={{
          title: "Medieval History",
          path: "/tutorials/history/medieval-history",
        }}
        nextTutorial={{
          title: "Indian Freedom Struggle",
          path: "/tutorials/history/freedom-struggle",
        }}
      />
    </TutorialLayout>
  );
};

export default HistoryTutorial;
