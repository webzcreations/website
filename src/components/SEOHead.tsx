import { useEffect } from "react"

interface SEOHeadProps {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  ogUrl?: string
  canonicalUrl?: string
}

const BASE_URL = "https://webzcreations.online"
const DEFAULT_OG_IMAGE = "/og-image.jpeg"

function upsertMeta(name: string, content: string, property = false) {
  const attr = property ? "property" : "name"
  const selector = `meta[${attr}="${name}"]`
  let el = document.querySelector(selector) as HTMLElement | null
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

function removeMeta(name: string, property = false) {
  const attr = property ? "property" : "name"
  const el = document.querySelector(`meta[${attr}="${name}"]`)
  if (el) el.remove()
}

function upsertLink(rel: string, href: string) {
  const selector = `link[rel="${rel}"]`
  let el = document.querySelector(selector) as HTMLElement | null
  if (!el) {
    el = document.createElement("link")
    el.setAttribute("rel", rel)
    document.head.appendChild(el)
  }
  el.setAttribute("href", href)
}

export default function SEOHead({
  title,
  description,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  ogUrl,
  canonicalUrl,
}: SEOHeadProps) {
  useEffect(() => {
    const fullTitle = `${title} | WebZ Creations`
    const prevTitle = document.title
    document.title = fullTitle

    upsertMeta("description", description)
    if (keywords) upsertMeta("keywords", keywords)

    const url = ogUrl || `${BASE_URL}${window.location.pathname}`
    upsertMeta("og:title", fullTitle, true)
    upsertMeta("og:description", description, true)
    upsertMeta("og:url", url, true)
    upsertMeta("og:image", `${BASE_URL}${ogImage}`, true)
    upsertMeta("og:type", "website", true)

    upsertMeta("twitter:title", fullTitle)
    upsertMeta("twitter:description", description)
    upsertMeta("twitter:url", url)
    upsertMeta("twitter:image", `${BASE_URL}${ogImage}`)
    upsertMeta("twitter:card", "summary_large_image")

    if (canonicalUrl) {
      upsertLink("canonical", canonicalUrl)
    } else {
      upsertLink("canonical", `${BASE_URL}${window.location.pathname}`)
    }

    return () => {
      document.title = prevTitle
    }
  }, [title, description, keywords, ogImage, ogUrl, canonicalUrl])

  return null
}
