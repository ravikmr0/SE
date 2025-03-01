import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import MockTestList from "./components/mock-tests/MockTestList";
import MockTestPage from "./components/mock-tests/MockTestPage";
import SpecificTest from "./components/mock-tests/SpecificTest";
import TutorialHome from "./components/tutorials/TutorialHome";
import TutorialExample from "./components/tutorials/TutorialExample";
import HistoryTutorial from "./components/tutorials/HistoryTutorial";
import EconomyTutorial from "./components/tutorials/EconomyTutorial";
import AncientHistoryTutorial from "./components/tutorials/AncientHistoryTutorial";
import MedievalHistoryTutorial from "./components/tutorials/MedievalHistoryTutorial";
import FreedomStruggleTutorial from "./components/tutorials/FreedomStruggleTutorial";
import GovernanceTutorial from "./components/tutorials/GovernanceTutorial";
import InternationalRelationsTutorial from "./components/tutorials/InternationalRelationsTutorial";
import EconomicBasicsTutorial from "./components/tutorials/EconomicBasicsTutorial";
import BudgetTutorial from "./components/tutorials/BudgetTutorial";
import BankingTutorial from "./components/tutorials/BankingTutorial";
import CategoryPage from "./components/tutorials/CategoryPage";
import AboutUs from "./components/pages/AboutUs";
import Courses from "./components/pages/Courses";
import SuccessStories from "./components/pages/SuccessStories";
import LatestNews from "./components/pages/LatestNews";
import CareerGuide from "./components/pages/CareerGuide";
import HelpCenter from "./components/pages/HelpCenter";
import TermsOfService from "./components/pages/TermsOfService";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import CookiePolicy from "./components/pages/CookiePolicy";
import RefundPolicy from "./components/pages/RefundPolicy";
import NotesLibrary from "./components/pages/NotesLibrary";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="min-h-screen">
        {import.meta.env.VITE_TEMPO === "true" ? useRoutes(routes) : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mock-tests" element={<MockTestList />} />
          <Route path="/mock-test/:testId" element={<MockTestPage />} />
          <Route path="/mock-test/specific" element={<SpecificTest />} />
          <Route path="/tutorials" element={<TutorialHome />} />
          <Route path="/tutorials/:categoryId" element={<CategoryPage />} />
          <Route
            path="/tutorials/politics/indian-constitution"
            element={<TutorialExample />}
          />
          <Route
            path="/tutorials/history/modern-history"
            element={<HistoryTutorial />}
          />
          <Route
            path="/tutorials/history/ancient-history"
            element={<AncientHistoryTutorial />}
          />
          <Route
            path="/tutorials/history/medieval-history"
            element={<MedievalHistoryTutorial />}
          />
          <Route
            path="/tutorials/history/freedom-struggle"
            element={<FreedomStruggleTutorial />}
          />
          <Route
            path="/tutorials/politics/governance"
            element={<GovernanceTutorial />}
          />
          <Route
            path="/tutorials/politics/international-relations"
            element={<InternationalRelationsTutorial />}
          />
          <Route
            path="/tutorials/economy/indian-economy"
            element={<EconomyTutorial />}
          />
          <Route
            path="/tutorials/economy/basics"
            element={<EconomicBasicsTutorial />}
          />
          <Route
            path="/tutorials/economy/budget"
            element={<BudgetTutorial />}
          />
          <Route
            path="/tutorials/economy/banking"
            element={<BankingTutorial />}
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/latest-news" element={<LatestNews />} />
          <Route path="/career-guide" element={<CareerGuide />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/notes-library" element={<NotesLibrary />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
