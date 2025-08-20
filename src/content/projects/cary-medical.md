---
pubDate: 2024-01-01
viewerTitle: "CARY Medical"
viewerDescription: "Medizinische Terminplanungs-App"
pageTitle: "CARY Medical | Medizinische Terminplanungs-App | Arthur Ersosi"
pageDescription:
  "UI/UX Design und Frontend-Entwicklung einer medizinischen Terminplanungs-App für Krankenhäuser mit Angular."
images:
  [
    { src: "src/images/projects/caryMedical/caryMedical-cover.webp", alt: "CARY Medical App Coverbild" },
    { src: "src/images/projects/caryMedical/caryMedical-01.webp", alt: "Sprechstunden-Übersicht" },
    { src: "src/images/projects/caryMedical/caryMedical-02.webp", alt: "Sprechstunde bearbeiten" },
    { src: "src/images/projects/caryMedical/caryMedical-03.webp", alt: "Arzt/Therapeut bearbeiten" },
    { src: "src/images/projects/caryMedical/caryMedical-04.webp", alt: "Kunde bearbeiten" },
    { src: "src/images/projects/caryMedical/caryMedical-05.webp", alt: "Benutzer bearbeiten" },
  ]
tags: ["Professionelles Projekt", "User Experience", "User Interface", "Frontend-Entwicklung"]

repo:
  name: "GitHub"
  href: "https://github.com/"
  ariaLabel: "CARY Medical App GitHub Repository"
demo:
  name: "Clickdummy"
  href: "https://www.figma.com/proto/utA8yWI9XWm5KNJJMDAY2u/CARY-Medical-%E2%80%93-Clickdummy?node-id=3-39&t=XorI7lhwAwQGlNNj-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A39"
  ariaLabel: "CARY Medical App Live Clickdummy"

company:
  companyName: "avodaq AG, Hamburg"
  companySize: "240"
  teamSize: "4-6"
  myRole: "Design Engineer (UX-Researcher, UI-Designer, Frontend-Developer)"
---

## Projektbeschreibung

CARY Medical ist eine zertifizierte Videosprechstunden-Lösung für Medizinische Einrichtungen (z. B. Krankenhäuser), die
auf Cisco Webex basiert. Es handelt sich um eine Applikation für die Terminplanung, Durchführung und Nutzerverwaltung
medizinischer Videokonferenzen mit dem Fokus auf intuitive Bedienung und professionelle Optik.

---

## Kontext

Krankenhäuser stehen vor dem Problem, dass bestehende Telemedizin-Systeme nicht standardisiert und oft nicht
leistungsstark genug für Gruppenkonferenzen sind. Zusätzlich haben sie besondere Anforderungen hinsichtlich sensibler
Patientendaten sowie individueller technischer Gegebenheiten.

Die avodaq AG erkannte diese Lücke und entwickelte eine Lösung, die auf der bewährten Cisco-Webex-Technologie basiert,
jedoch speziell für den medizinischen Bereich optimiert ist.

---

## Meine Aufgaben

Als **Design Engineer** war ich in einem 4–6-köpfigen Team für das komplette **UI/UX-Design** sowie die **Integration
ins Frontend** verantwortlich. Im Team wurde die komplexe Business-Logik entwickelt, während mein Fokus auf spezifische
Frontend-Implementierungen lag.

In enger Zusammenarbeit mit Front- und Backend-Entwicklern, Product Owner und Stakeholdern übernahm ich:

- **UI/UX-Design:** Konzeption und Gestaltung aller Benutzeroberflächen
- **Corporate-Identity-Integration:** Anpassung von Angular Material an die avodaq-Markenidentität
- **Frontend-Implementierung:** Umsetzung der Design-Komponenten und Screens mit Angular v17
- **Informationsdesign:** Strukturierung komplexer medizinischer Daten mit klarer Informations-Hierarchie
- **Stakeholder-Abstimmung:** Kontinuierliche Kommunikation mit Entwicklern, Product Ownern, Vorgesetzten und
  medizinischen Partnern

Praktisch jedes sichtbare Element – Formen, Farben, Größen, Abständen, Gruppierung, Anordnung, visuelle Hierarchien,
Sprache, Tonalität, Animationen – wurde von mir entworfen oder angepasst und ins Frontend integriert.

---

## Arbeitsprozess

Das Projekt wurde nach **agilen Methoden** in zweiwöchigen Sprints organisiert, teilweise unterstützt durch einen
Scrum-Master:

1. Der Product Owner erstellte initiale Wireframes und dokumentierte diese als GitLab-Tickets mit detaillierten
   Anforderungen.
2. Auf Basis dieser Anforderungen entwickelte ich detaillierte **Figma-Designs** und **interaktive Prototypen**.

- Für komplexe Anwendungsfälle erstellte ich Klickdummys, die Informationshierarchien und Interaktionsmuster abbildeten.
- Kritische Komponenten testete ich zusätzlich als **Stackblitz Code-Demos** (Angular Material), um Umsetzbarkeit und
  Verhalten frühzeitig zu validieren.

3. Nach Freigabe durch Senior Developer und Product Owner implementierte ich die Designs als Komponenten in
   Feature-Branches.
4. Diese wurden als Staging-Versionen deployed, durchliefen Code-Reviews und wurden nach Approval in den Develop-Branch
   integriert.

---

## Herausforderungen & Impact

### Besondere Herausforderungen

- Aufbau eines **NX-Monorepos** mit zentralen, wiederverwendbaren Komponenten für alle avodaq-Projekte
- Entwicklung eines **Custom-Themings und Angular-Material-Komponenten**, um die Corporate Identity konsistent über alle
  Anwendungen hinweg zu integrieren

### Design Impact

- Gestaltung einer **komplexen B2B-Anwendung** mit höchsten Ansprüchen an Professionalität und Nutzerfreundlichkeit
- Integration der **Unternehmens-Identität** in ein technisches Produkt ohne Kompromisse bei der Funktionalität
- Entwicklung einer **einheitlichen Design-Sprache** für das gesamte avodaq-Produktportfolio

**Konkret:**

- **Multipurpose Status-Indicator:** Farbcodiertes Balkensystem mit Tooltips für Konferenz-Status (scheduled, ongoing,
  completed, error)
- **Responsive Double Sidebar:** Intelligentes Sidebar-System mit automatischen/manuellen Modi, das sich dynamisch an
  Bildschirmbreiten anpasst und Nutzereinstellungen speichert

### Technischer Impact

- Implementierung fortschrittlicher **Responsive-Design-Patterns** für optimale User Experience
- Schaffung effizienter **Workflows zwischen Design und Entwicklung** durch innovative Prototyping-Methoden
- Verbesserung der **Developer Experience** durch optimiertes Tooling im Monorepo-Setup

**Konkret:**

- **Fire & Forget Konzept:** Vereinfachte asynchrone Operationen ohne UI-Blockierung inkl. optimistischer
  Datenverarbeitung
- **Lokale npm-Package-Verlinkung:** Lösung für schnelle und reibungslose Monorepo-Entwicklung, die die Produktivität
  deutlich steigerte

---

## Technische Umsetzung

### Konzept

Figma Design, Material Design Kit (Figma), StackBlitz

### Projektstruktur

GitLab, NX Monorepo, Angular v17, Angular Material, Angular Material CDK

### State Management

NgRx

### Styling

Angular Material Theming, Custom Styles (SCSS), TailwindCSS

### Testing

Jest, Cypress, Testing Library

### Tools & Libraries

## RxJS, Zod, TypeScript
