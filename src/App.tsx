import { Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
import ScrollToTopButton from "./components/ScrollToTopButton"
import HomePage from "./pages/HomePage"
import ServicesPage from "./pages/ServicesPage"
import WebsiteDevelopmentPage from "./pages/WebsiteDevelopmentPage"
import SEOOptimizationPage from "./pages/SEOOptimizationPage"
import AppEngineeringPage from "./pages/AppEngineeringPage"
import CRMAutomationsPage from "./pages/CRMAutomationsPage"
import UIUXStrategyPage from "./pages/UIUXStrategyPage"
import PrivacyPage from "./pages/PrivacyPage"
import TermsPage from "./pages/TermsPage"

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/website-development" element={<WebsiteDevelopmentPage />} />
        <Route path="/services/seo-optimization" element={<SEOOptimizationPage />} />
        <Route path="/services/app-engineering" element={<AppEngineeringPage />} />
        <Route path="/services/crm-automations" element={<CRMAutomationsPage />} />
        <Route path="/services/ui-ux-strategy" element={<UIUXStrategyPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </>
  )
}
