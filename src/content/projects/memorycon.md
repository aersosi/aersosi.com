---
pubDate: 2024-01-01
viewerTitle: "memorycon"
pageDescription: "Der Klassiker Memory als moderne Next.js Webanwendung"
pageTitle: "memorycon | Memory-Spiel Webanwendung | Arthur Ersosi"
images:
  [
    { src: "src/images/projects/memorycon/memorycon-cover.webp", alt: "Coverbild" },
    { src: "src/images/projects/memorycon/memorycon-01.webp", alt: "Willkommen" },
    { src: "src/images/projects/memorycon/memorycon-02.webp", alt: "Spielstart" },
    { src: "src/images/projects/memorycon/memorycon-03.webp", alt: "Spielverlauf" },
    { src: "src/images/projects/memorycon/memorycon-04.webp", alt: "Spielende" },
  ]
tags: ["Privat", "Spiel", "Next.js", "React", "Frontend-Entwicklung"]

repo:
  name: "GitHub"
  href: "https://github.com/aersosi/memorycon"
  ariaLabel: "memorycon GitHub Repository"
demo:
  name: "Live Demo"
  href: "https://memorycon-arthur-ersosis-projects.vercel.app/"
  ariaLabel: "memorycon Live Demo"

myRole: "Design Engineer (Full-Stack)"
---

## Projektbeschreibung

**memorycon** ist eine Next.js-Webanwendung des klassischen Memory-Spiels mit Computer-Gegner. Das Spiel bietet
verschiedene Schwierigkeitsgrade, heuristische Computer-Logik und verwaltet Sessions mit Punktestand und
Spielauswertung. Im Gegensatz zur traditionellen Memory-Regel wechselt der Zug nach einem gefundenem Paar zum anderen
Spieler, was ausgeglichenere Partien bedeutet.

## Kontext

Das Projekt entstand zur praktischen Vertiefung von React und Next.js mit Fokus auf Spiellogik-Implementierung. Memory
bot sich als geeignetes Lernprojekt an, da es interessante Herausforderungen wie turn-basierte Logik, State Management
und Computer-Verhalten kombiniert.

## Meine Aufgaben

Als **Design Engineer** wurde das komplette Projekt eigenverantwortlich entwickelt:

- **Spielarchitektur:** Turn-basiertes System mit Computer-Gegner und verschiedenen Schwierigkeitsgraden
- **State Management:** Reducer-basierte Architektur mit React Context für strukturierte Zustandsverwaltung
- **Spiellogik:** Karten-Matching, Punktesystem, Preview-Timer und Spielende-Erkennung
- **Frontend:** UI/UX-Design mit Next.js 15, TypeScript und Tailwind CSS
- **Hook-System:** Spezialisierte Custom Hooks für modulare und testbare Spiellogik
- **Computer-Verhalten:** Heuristisches System mit schwierigkeitsgradabhängigen Zufälligkeitsfaktoren

Praktisch jedes sichtbare Element — Formen, Farben, Größen, Abstände, Gruppierung, Anordnung, visuelle Hierarchien,
Sprache, Tonalität, Animationen — wurde eigenständig entwickelt oder angepasst.

## Arbeitsprozess

Nach dem initialen Brainstorming wurden die MVP-Features definiert und eine strukturierte Architektur mit React Context
entwickelt. Die Entwicklung erfolgte iterativ: zunächst das Grundspiel mit Karten-Grid, dann das Turn-System, die
Computer-Logik und abschließend die UI-Details. Dabei wurde konsequent auf wiederverwendbare Custom Hooks und Type
Safety gesetzt.

## Herausforderungen

- **State Management:** Turn-basierte Spiellogik mit Computer-Verhalten, Match-Detection und Spielende-Erkennung
  erforderte durchdachte Reducer-Patterns
- **Computer-Balance:** Entwicklung einer Heuristik, die strategisches Verhalten zeigt, aber dennoch schlagbar bleibt
  durch 50% Zufälligkeit und Easy-Mode-Varianten
- **Hook-Koordination:** Koordination mehrerer spezialisierter Hooks ohne Race Conditions oder inkonsistente States

## Techstack

**Framework:** Next.js 15, React 19, TypeScript

**State Management:** React Context API, useReducer Pattern

**UI:** Tailwind CSS v4, Radix UI Primitives

**Testing:** Jest, React Testing Library

**Architektur:** Custom Hooks, Context Splitting, Hook-basierte Modularchitektur

## Projektergebnis

**memorycon** demonstriert eine strukturierte React-Architektur mit klarer Trennung zwischen Spiellogik und
UI-Komponenten. Das Projekt diente als Playground für moderne Next.js-Entwicklung mit TypeScript und durchdachtem State
Management. Die hook-basierte Architektur gewährleistet Testbarkeit und Erweiterbarkeit des Systems.
