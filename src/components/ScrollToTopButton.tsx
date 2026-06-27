import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 text-white shadow-lg transition-all duration-300 md:hidden ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ backgroundColor: "#5711C5" }}
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  )
}
