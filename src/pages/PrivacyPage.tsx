import React from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import SEOHead from "../components/SEOHead"
import PrivacyPolicy from "../components/PrivacyPolicy"
import Footer from "../components/Footer"

export default function PrivacyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Privacy Policy for WebZ Creations. Learn how we collect, use, and protect your personal information when you use our services."
        keywords="privacy policy, data protection, WebZ Creations privacy"
      />
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans selection:text-white" style={{ '--tw-selection-color': '#5711C5' } as React.CSSProperties}>
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 text-sm font-semibold text-black/60 dark:text-white/60 hover:text-[#5711C5] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <Link to="/">
            <img src="/logoWithBackground.svg" alt="webZ Creations" className="h-10 w-auto" />
          </Link>
        </div>
      </div>
      <PrivacyPolicy />
      <Footer />
      </div>
    </>
  )
}
