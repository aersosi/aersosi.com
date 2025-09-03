---
pubDate: 2024-01-01
viewerTitle: "Pulse Radio"
pageDescription: "Moderne Next.js Radio-Webanwendung"
pageTitle: "Pulse Radio | Audio-Streaming Webanwendung | Arthur Ersosi"
images:
  [
    { src: "src/images/projects/pulseRadio/pulseRadio-cover.webp", alt: "Pulse Radio App Coverbild" },
    { src: "src/images/projects/pulseRadio/pulseRadio-01.webp", alt: "Pulse Radio Player" },
    { src: "src/images/projects/pulseRadio/pulseRadio-02.webp", alt: "Pulse Radio Stationsauswahl" },
    { src: "src/images/projects/pulseRadio/pulseRadio-03.webp", alt: "Pulse Radio Einstellungen" },
  ]
tags: ["Privat", "Audio Streaming", "Full-Stack", "Next.js", "React", "Frontend-Entwicklung"]

repo:
  name: "GitHub"
  href: "https://github.com/aersosi/pulse-radio"
  ariaLabel: "Pulse Radio GitHub Repository"
demo:
  name: "Live Demo"
  href: "https://pulse-radio-one.vercel.app/"
  ariaLabel: "Pulse Radio Live Demo"

company:
  companyName: ""
  teamSize: ""

myRole: "Full-Stack Design Engineer"
---

## Projektbeschreibung

**Pulse Radio** ist eine Web-Anwendung für Online-Radio-Streaming mit tausenden Radiosendern weltweit. Die App nutzt
eine externe Radio-API und bietet eine strukturierte Oberfläche für das Durchsuchen und Abspielen von Radiosendern. Mit
Suchfunktion, optimierter Performance und responsivem Design ermöglicht sie Radio-Streaming auf verschiedenen Geräten.

## Kontext

Das Projekt entstand zur praktischen Vertiefung von API-Integration und Next.js-Entwicklung. Eine öffentliche
Radio-Stationen-API bot die Möglichkeit, eine Webradio-Webapp zu entwickeln, die diese Daten für Nutzer strukturiert
zugänglich macht. Das Projekt kombinierte moderne Web-Technologien mit Audio-Streaming-Funktionalität.

## Meine Aufgaben

Als **Full-Stack Design Engineer** wurden alle Aspekte des Projekts eigenverantwortlich entwickelt:

- **Architektur:** Next.js App Router mit Server-Side Rendering und strukturierter API-Route-Architektur
- **API-Integration:** Externe Radio-API-Anbindung mit Caching-Strategien und Rate Limiting (10 Requests/Minute)
- **Media Player:** Audio-Player mit HLS-Stream-Unterstützung und automatischem Volume-Fade-in
- **Frontend:** UI/UX-Design mit Next.js 15, React 19, TypeScript und Tailwind CSS
- **State Management:** Custom Hook-System für Player-Logik und Suchhistorie mit LocalStorage
- **Theme-System:** Dark/Light-Mode-Integration mit next-themes und SSR-Kompatibilität

Praktisch jedes sichtbare Element — Formen, Farben, Größen, Abstände, Gruppierung, Anordnung, visuelle Hierarchien,
Sprache, Tonalität, Animationen — wurde eigenständig entwickelt oder angepasst.

## Arbeitsprozess

Nach der initialen Recherche zu Radio-Apps wurden die MVP-Features definiert. Die Entwicklung erfolgte iterativ:
zunächst die API-Integration, dann das Audio-Player-System mit HLS-Unterstützung, die Suchfunktionalität und
abschließend die UI-Details mit Dark-Mode und responsivem Design. Durch kontinuierliches Refactoring wurde der
MVP-Standard erreicht.

## Herausforderungen

- **Dual Audio Player System:** Implementation von normalen Audio-Streams und HLS-Streams mit automatischer Erkennung
  und Fallback-Mechanismen
- **Performance-Optimierung:** Verschiedene Caching-Strategien (1 Stunde für Suche, 1 Tag für Sender, 7 Tage für
  Details) bei gleichzeitigem Rate Limiting
- **Cross-Browser Audio:** HLS.js-Integration mit nativer Safari-Unterstützung und fehlerresistente Audio-Wiedergabe
- **API-Route-Design:** Strukturierung der Next.js API Routes für optimierte Performance mit Zod-Validation und
  Error-Handling

## Techstack

**Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS

**Audio:** HLS.js, Custom Player Hooks, Volume-Fade-System

**API:** Next.js API Routes, Zod Validation, Rate Limiting (limiter)

**State Management:** React Context API, Custom Hooks, LocalStorage

**UI:** Shadcn UI, Lucide Icons, next-themes, Sonner Toasts

**Deployment:** Vercel, Docker, Environment Variables

## Projektergebnis

Pulse Radio bietet eine strukturierte Plattform mit Zugang zu über 23.000 Sendern weltweit. Die App demonstriert moderne
Full-Stack-Entwicklung mit Next.js und zeigt die Integration externer APIs in eine funktionale Webanwendung. Das Projekt
diente als praktisches Lernfeld für API-Integration, Audio-Streaming und moderne React-Entwicklung.
