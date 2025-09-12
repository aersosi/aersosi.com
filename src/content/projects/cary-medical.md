---
pubDate: 2024-01-01
viewerTitle: "CARY Medical"
pageDescription: "Medizinische Terminplanungs-Webanwendung (Angular) mit Nutzerverwaltung"
pageTitle: "CARY Medical | Medizinische Terminplanungs-Webanwendung | Arthur Ersosi"
images:
  [
    { src: "src/images/projects/caryMedical/caryMedical-cover.webp", alt: "CARY Medical App Coverbild" },
    { src: "src/images/projects/caryMedical/0-login.webp", alt: "Lorem" },
    { src: "src/images/projects/caryMedical/1-consultations-sideClose.webp", alt: "consultations sidepannels closed" },
    { src: "src/images/projects/caryMedical/2-consultations-sideOpen.webp", alt: "consultations sidespannels open" },
    { src: "src/images/projects/caryMedical/3-consultations-infoBarOpen.webp", alt: "consultations info bar open" },
    {
      src: "src/images/projects/caryMedical/4-consultations-weekfilterOpen.webp",
      alt: "consultations week filer open",
    },
    {
      src: "src/images/projects/caryMedical/5-consultations-editConsultation.webp",
      alt: "consultations sidespannels open",
    },
    { src: "src/images/projects/caryMedical/6-consultations-filterOpen.webp", alt: "consultations filer open" },
    { src: "src/images/projects/caryMedical/7-consultations-filteractive.webp", alt: "consultations filer active" },
    { src: "src/images/projects/caryMedical/8-doctors.webp", alt: "doctors edit" },
    { src: "src/images/projects/caryMedical/9-clients.webp", alt: "clients edit" },
    { src: "src/images/projects/caryMedical/10-users.webp", alt: "users edit" },
  ]
tags: ["Professionell", "Angular", "UX (User Experience)", "UI (User Interface)", "Frontend-Entwicklung"]

repo:
  name: "Online"
  href: "https://www.avodaq.com/de/leistungen/connected-healthcare/cary-medical/"
  ariaLabel: "CARY Medical Webseite"
demo:
  name: "Figma Clickdummy"
  href: "https://www.figma.com/proto/utA8yWI9XWm5KNJJMDAY2u/CARY-Medical-%E2%80%93-Clickdummy?node-id=3-39&t=XorI7lhwAwQGlNNj-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A39"
  ariaLabel: "CARY Medical Figma Clickdummy"

company:
  companyName: "avodaq AG, Hamburg"
  teamSize: "4-6"

myRole: "Design Engineer (UI/UX-Designer, Frontend-Developer)"
---

## Projektbeschreibung

CARY Medical ist eine zertifizierte Videosprechstunden-Lösung für medizinische Einrichtungen (z. B. Kliniken, Praxen,
Apotheken etc.), die auf Cisco Webex basiert. Die Applikation ermöglicht Terminplanung, Durchführung und
Nutzerverwaltung medizinischer Videokonferenzen mit dem Fokus auf intuitive Bedienung und professionelle Optik.

## Kontext

Krankenhäuser stehen vor dem Problem, dass bestehende Telemedizin-Systeme nicht standardisiert und oft nicht
leistungsstark genug für Gruppenkonferenzen sind. Zusätzlich haben sie besondere Anforderungen hinsichtlich sensibler
Patientendaten sowie individueller technischer Gegebenheiten. Die avodaq AG erkannte diese Lücke und entwickelte eine
Lösung, die auf der bewährten Cisco-Webex-Technologie basiert, jedoch speziell für den medizinischen Bereich optimiert
ist.

## Meine Aufgaben

Als **Design Engineer** war ich in einem 4-6-köpfigen Team für das komplette UI/UX-Design sowie die Integration ins
Frontend verantwortlich. In enger Zusammenarbeit mit dem Senior Developer, der die Business-Logic implementierte, sowie
Product Owner und Stakeholdern übernahm ich:

- **UI/UX-Design:** Konzeption und Gestaltung aller Benutzeroberflächen
- **Corporate-Identity-Integration:** Anpassung von Angular Material an die avodaq-Markenidentität
- **Frontend-Implementierung:** Umsetzung der Design-Komponenten und Screens mit Angular v17
- **Informationsdesign:** Strukturierung komplexer medizinischer Daten mit klarer Informations-Hierarchie
- **Stakeholder-Abstimmung:** Kontinuierliche Kommunikation mit Entwicklern, Product Ownern, Vorgesetzten und
  medizinischen Partnern

Praktisch jedes sichtbare Element – Formen, Farben, Größen, Abstände, Gruppierung, Anordnung, visuelle Hierarchien,
Sprache, Tonalität, Animationen – wurde von mir entworfen oder angepasst und ins Frontend integriert.

## Arbeitsprozess

Das Projekt wurde nach agilen Methoden in zweiwöchigen Sprints organisiert, unterstützt durch einen Scrum-Master. Der
Workflow umfasste die Entwicklung von Figma-Designs und interaktiven Prototypen basierend auf
Product-Owner-Anforderungen, gefolgt von Stackblitz Code-Demos für kritische Komponenten und abschließender
Implementation in Feature-Branches mit Code-Reviews.

## Herausforderungen

- **NX-Monorepo-Aufbau:** Entwicklung eines zentralen Systems mit wiederverwendbaren Komponenten für alle
  avodaq-Projekte
- **Custom-Theming-Entwicklung:** Integration der Unternehmensidentität in Angular-Material-Komponenten ohne
  Funktionalitätsverlust
- **B2B-Komplexität:** Gestaltung einer professionellen Anwendung mit höchsten Anforderungen an Nutzerfreundlichkeit

## Mein Impact

**Design:**

- **Einheitliche Design-Sprache:** Entwicklung einer konsistenten visuellen Identität für das gesamte
  avodaq-Produktportfolio
- **Komplexe Datenstrukturen:** Klare Informationsarchitektur für medizinische Terminplanung und Nutzerverwaltung

**Technisch:**

- **Responsive-Design-Patterns:** Implementierung fortschrittlicher Muster für optimale User Experience
- **Developer Experience:** Verbesserung durch optimiertes Tooling und lokale npm-Package-Verlinkung

**Konkret:**

- **Multipurpose Status-Indicator:** Farbcodiertes Balkensystem mit Tooltips für Konferenz-Status (scheduled, ongoing,
  completed, error) zur klaren Visualisierung des aktuellen Zustands
- **Infobar-Drawer-System:** Aufklappbare Komponenten für Videokonferenzen mit Überblick (Teilnehmerzahl, Zeit, Dauer)
  im geschlossenen und Details (Patientenliste, ID, E-Mail-Betreff) im geöffneten Zustand
- **Responsive Double Sidebar:** Intelligentes Sidebar-System mit automatischen und manuellen Modi, das sich dynamisch
  an Bildschirmbreiten anpasst und Nutzereinstellungen speichert
- **Fire & Forget Konzept:** Vereinfachte asynchrone Operationen ohne UI-Blockierung inkl. optimistischer
  Datenverarbeitung
- **Lokale npm-Package-Verlinkung:** Lösung für schnelle und reibungslose Monorepo-Entwicklung, die die Produktivität
  deutlich steigerte

## Techstack

**Konzept:** Figma Design, Material Design Kit (Figma), StackBlitz

**Projektstruktur:** GitLab, NX Monorepo, Angular v17, Angular Material, Angular Material CDK

**State Management:** NgRx

**Styling:** Angular Material Theming, Custom Styles (SCSS), TailwindCSS

**Testing:** Jest, Cypress, Testing Library

**Tools & Libraries:** RxJS, Zod, TypeScript

## Projektergebnis

CARY Medical wurde erfolgreich als zertifizierte medizinische Lösung entwickelt und ermöglichte Krankenhäusern eine
sichere, benutzerfreundliche Durchführung von Videosprechstunden mit hohen Qualitätsstandards.

Das Projekt legte den technischen Grundstein für alle nachfolgenden avodaq-Anwendungen durch das etablierte NX-Monorepo
und die entwickelte Design-Sprache. Die wiederverwendbaren Komponenten und das Custom-Theming-System wurden zur Basis
für das gesamte Produktportfolio.
