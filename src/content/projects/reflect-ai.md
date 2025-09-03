---
pubDate: 2024-01-01
viewerTitle: "reflectAI"
pageDescription: "Modernes Claude AI Chatinterface als React Webanwendung"
pageTitle: "reflectAI | KI-basierte Webanwendung | Arthur Ersosi"
images:
  [
    { src: "src/images/projects/reflectAI/reflectAI-cover.webp", alt: "reflectAI App Coverbild" },
    { src: "src/images/projects/reflectAI/reflectAI-01.webp", alt: "Chat Interaktion" },
    { src: "src/images/projects/reflectAI/reflectAI-02.webp", alt: "Session Übersicht" },
    { src: "src/images/projects/reflectAI/reflectAI-03.webp", alt: "Session Settings" },
  ]
tags: ["Privat", "Künstliche Intelligenz", "React", "Frontend-Entwicklung"]

repo:
  name: "GitHub"
  href: "https://github.com/aersosi/reflectAI"
  ariaLabel: "reflectAI GitHub Repository"
demo:
  name: "Live Demo"
  href: "https://reflect-ai-six.vercel.app/"
  ariaLabel: "reflectAI Live Demo"

company:
  companyName: ""
  teamSize: ""

myRole: "Design Engineer (Full-Stack)"
---

## Projektbeschreibung

**reflectAI** ist eine Webanwendung für Prompt-Engineering mit Claude AI. Sie bildet das Variablen-Feature der Claude
Workbench nach und erweitert es um ein eigenes Session-Management. Man kann darin Prompts mit
`{{ variable_name }}`-Platzhaltern erstellen und die Variablen über eine Sidebar verwalten. Die Anwendung bietet
automatische Variablenerkennung, Real-time Streaming für Live-Chat-Updates und Token-Counting mit Kostenberechnung. Alle
Sessions, Prompts und Variablen lassen sich dauerhaft speichern, was bei der Workbench so nicht möglich ist.

## Kontext

Ich nutze die Claude Workbench oft und fand vor allem das Variablen-Feature praktisch, weil es das Entwickeln von
Prompts flexibler macht. Man schreibt einen allgemeinen Prompt und kann dann spezifische Teile über Variablen
austauschen, ohne den ganzen Text neu zu schreiben. Leider konnte man diese Sessions bzw. Chatverläufe nicht speichern.
Deswegen habe ich **reflectAI** entwickelt. Weiterhin wollte ich meine Kenntnisse im React-Ökosystem (mit Tools wie
shadcn/ui) vertiefen, und herausfinden wie ich das Inline-Button-Feature der Workbench selbst realisieren kann.

## Meine Aufgaben

Als **Design Engineer** habe ich alle Aspekte des Projekts vollständig entwickelt:

- **Architektur:** Session-Management mit URL-Navigation und Speicherung im LocalStorage
- **Frontend:** UI mit React 19, TypeScript und Tailwind CSS und shadcn/ui
- **API:** Dual-API-Architektur mit Browser- und Node.js-SDK für Claude AI, Streaming-Support und Token-Counting
- **State Management:** Context API mit immutable Updates und pfadbasierter Session-Manipulation
- **Variablen-System:** Automatische Erkennung und Ersetzung von Variablen mit Regex plus Auto-Detection aus Prompt-Text
- **UX:** Sidebar-UI mit responsivem Layout

Praktisch jedes sichtbare Element – Formen, Farben, Größen, Abstände, Gruppierung, Anordnung, visuelle Hierarchien,
Sprache, Tonalität, Animationen – wurde von mir entwickelt oder angepasst.

## Arbeitsprozess

Nach dem initialen Brainstorming habe ich die MVP-Features definiert und eine saubere Architektur mit React Context
geplant. Die Entwicklung erfolgte iterativ: erst das Kernsystem für Sessions, danach das Variablen-System, die
API-Anbindung und die restlichen UI-Komponenten. Ich habe dabei iterativ gearbeitet bis das Projekt den MVP-Status
erreicht hatte.

## Herausforderungen

- Ein Session-Management zu bauen, das mit URL, LocalStorage und App-State zusammen funktioniert
- Die Datenstruktur so anzupassen, dass sie eine gute DX gewährleistete (leicht zu nutzen und zu pflegen)
- Das Variablen-System so einzubauen, dass es sich nahtlos in die UI/UX einfügt
- Dual-API-Implementierung für browser-safe und server-side Funktionalität zu koordinieren
- Real-time Streaming-Integration mit Live-Updates und automatischer Token-Berechnung

## Techstack

**Frontend:** React 19, TypeScript, Vite, React Router DOM v7

**UI:** Tailwind CSS, Radix UI Components (shadcn/ui)

**State Management:** React Context API, LocalStorage

**API:** Anthropic SDK (Browser + Node.js), Streaming, Token-Counting

**Tools:** TypeScript Strict Mode, Vite

## Projektergebnis

reflectAI löst das Problem, dass Daten in der Workbench nicht dauerhaft gespeichert werden, und bringt eigene Features
wie automatische Variablenerkennung, Session-Cloning und Kostenberechnung mit rein. Es ist ein Werkzeug, das die
Workbench-Features erweitert und meine eigenen Workflows verbessert. Gleichzeitig war es ein gutes Übungsprojekt für
moderne React-Entwicklung mit shadcn/ui und dafür, komplexe Zustände sauber zu verwalten.
