---
pubDate: 2025-06-08
viewerTitle: "Device List"
pageDescription: "Angular Webanwendung zur Verwaltung von Hard- und Software, Servicedaten und Lizenzen von Kunden"
pageTitle: "Device List | Datenmanagement-Anwendung | Arthur Ersosi"
images:
  [
    { src: "src/images/projects/deviceList/deviceList-cover.webp", alt: "device List Coverbild" },
    { src: "src/images/projects/deviceList/0-search.webp", alt: "Order Nummer Suchen" },
    { src: "src/images/projects/deviceList/1-select.webp", alt: "Sales order Lines auswählen" },
    { src: "src/images/projects/deviceList/2-edit.webp", alt: "Daten editieren" },
  ]
tags: ["Professionell", "Angular", "UX (User Experience)", "UI (User Interface)", "Frontend-Entwicklung"]

noLinksText: "Firmeninternes Projekt"

company:
  companyName: "avodaq AG, Hamburg"
  teamSize: "3–5"

myRole: "Design Engineer (UX-Researcher, UI-Designer, Frontend-Developer)"
---

## Projektbeschreibung

Die Device List ist eine interne Webanwendung zur automatisierten Verwaltung von Hardware-, Software-, Lizenz- und
Servicedaten für Kundeninfrastrukturen. Das System ersetzt einen zeitaufwändigen Excel-basierten Workflow durch eine
moderne, API-gestützte Lösung mit Fokus auf intuitive Bedienung und effiziente Datenverarbeitung.

## Kontext

avodaq erzielte ihre Umsätze im B2B-Bereich der Videotelefonie durch den Vertrieb hochwertiger Cisco-Hard- und Software,
großer Videokonferenzsysteme und aller dazugehörigen Komponenten. Jede Einheit beim Kunden verfügte über eindeutige
Identifikatoren sowie Detailinformationen wie Firmware-Versionen, Lizenzschlüssel und Service-Vertragsdaten. Alle Daten
wurden in einer großen Excel-Datei verwaltet, die teilweise sehr lange Ladezeiten hatte. Daten wurden manuell erfasst
und über Excel-Makros in die interne Datenbank übertragen. Dieser Prozess führte zu erheblichen Verzögerungen bei der
Datenpflege und einem kritischen Rückstau, der die rechtzeitige Erneuerung von Serviceverträgen und Lizenzen gefährdete.

## Meine Aufgaben

Als **Design Engineer** war ich in einem 3-5-köpfigen Team für das komplette UI/UX-Design sowie die Frontend-Integration
verantwortlich. In enger Zusammenarbeit mit dem verantwortlichen Developer, der die spezialisierte Datagrid-Komponente
als Kernstück der Anwendung entwickelte, übernahm ich:

- **User Research:** Erste systematische User Research Initiative bei avodaq. Systematische Nutzerinterviews, Contextual
  Inquiry, Task Analysis, User Observation, Usability Testing und Persona Development mit internen Kollegen, inklusive
  Stakeholder Alignment und Entwicklung methodischer Ansätze
- **UI/UX-Design:** Wireframing, Prototyping und iterative Gestaltung der Applikation nach unserem für avodaq
  angepassten Material-Design
- **Datagrid-Styling:** Komplette visuelle Gestaltung der spezialisierten Tabellen-Komponente als Kernstück der
  Anwendung
- **Frontend-Implementierung:** Umsetzung aller UI-Komponenten und Screens mit Angular v17
- **UX-Optimierung:** Vorschläge zur Verbesserung der Datagrid-Konfiguration, Error-Handling, Layout und Nutzerführung

Praktisch jedes sichtbare Element – Formen, Farben, Größen, Abstände, Gruppierung, Anordnung, visuelle Hierarchien,
Sprache, Tonalität, Animationen – wurde von mir entworfen oder angepasst und ins Frontend integriert.

## Arbeitsprozess

Das Projekt wurde nach agilen Methoden in zweiwöchigen Sprints organisiert, wobei ich erstmals systematische
Nutzerforschung bei avodaq etablierte. Der Workflow umfasste die Entwicklung von Figma-Designs und interaktiven
Prototypen basierend auf Product-Owner-Anforderungen, ergänzt durch strukturierte Nutzerinterviews und
Stakeholder-Abstimmungen sowie die iterative Designentwicklung in enger Abstimmung mit dem Senior Developer.

## Herausforderungen

- **Komplexe Datenvisualisierung:** Übertragung bekannter Tabellen-Funktionalität in eine moderne Webanwendung mit
  editierbaren Zellen
- **Datagrid Entwicklung:** Vollständige Gestaltung und Mitentwicklung einer maßgeschneiderten Datagrid-Lösung
- **Systematische Nutzerforschung:** Erstmals strukturierte Forschungsmethoden im Unternehmen etabliert

## Mein Impact

**Design:**

- **Arbeitsablauf-Transformation:** Gestaltung einer intuitiven Benutzeroberfläche für hochkomplexe Hardware- und
  Lizenzdatenstrukturen
- **Workflow-Optimierung:** Entwicklung effizienter Arbeitsabläufe für die tägliche Nutzung

**Technisch:**

- **Prozessautomatisierung:** Beitrag zur erheblichen Reduzierung des kritischen Rückstaus und Verbesserung der
  Workflow-Effizienz
- **Monorepo-Integration:** Entwicklung wiederverwendbarer Komponenten für die zentrale Library aller avodaq-Projekte
- **Open Source Contribution:** Komplettes Styling und UX-Verbesserungen für das rescoped Datagrid

**Konkret:**

- **Editierbare Datagrid-Zellen:** Doppelklick-Editierung für direkte Datenanpassung in komplexen Tabellenstrukturen,
  die eine nahtlose Bearbeitung großer Datenmengen ermöglicht
- **API-Integration-UI:** Benutzeroberfläche für automatisierte Cisco-API-Datenabfrage statt manueller Pflege, die
  Datenqualität und Aktualität erheblich verbessert

## Techstack

**Konzept:** Figma Design, Material Design Kit (Figma), StackBlitz, User Research (User Interviews, Contextual Inquiry,
Task Analysis, User Observation, Usability Testing, Persona Development)

**Projektstruktur:** GitLab, NX Monorepo, Angular v17, Angular Material, Angular Material CDK

**State Management:** NgRx

**Styling:** Angular Material Theming, Custom Styles (SCSS), TailwindCSS

**Testing:** Jest, Cypress, Testing Library

**Tools & Libraries:** RxJS, Zod, TypeScript, rescoped Datagrid

## Projektergebnis

Die Device List war ein funktionaler Erfolg: Die Nutzer arbeiteten häufig mit der Anwendung und konnten durch den
höheren Automatisierungsgrad messbar Zeit sparen. Das System reduzierte den manuellen Aufwand erheblich und verbesserte
die Datenqualität durch automatisierte API-Integration.

Das Projekt demonstrierte erfolgreich die Machbarkeit einer modernen, webbasierten Lösung für komplexe
B2B-Datenmanagement-Herausforderungen. Die entwickelten Komponenten flossen in die zentrale Monorepo-Library ein und das
rescoped Datagrid wurde als eigenständiges Open-Source-Projekt weiterentwickelt.
