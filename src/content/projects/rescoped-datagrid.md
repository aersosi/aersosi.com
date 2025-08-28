---
pubDate: 2024-01-01
viewerTitle: "rescoped Datagrid"
pageDescription: "Angular CDK basiertes und performantes Open-Source-Datagrid mit intuitivem Setup"
pageTitle: "rescoped Datagrid | Open-Source-Projekt | Arthur Ersosi"
images:
  [
    { src: "src/images/projects/rescopedDatagrid/rescopedDatagrid-cover.webp", alt: "rescoped Datagrid Coverbild" },
    { src: "src/images/projects/rescopedDatagrid/rescopedDatagrid-01.webp", alt: "rescoped Datagrid" },
  ]
tags: ["Professionell", "Open Source", "Developer Experience", "Frontend-Entwicklung"]

demo:
  name: "Live Demo"
  href: "https://rescoped.io/skygrid-app/"
  ariaLabel: "rescoped Datagrid Live Demo"

company:
  companyName: "avodaq AG, Hamburg"
  teamSize: "2-3"

myRole: "Design Engineer (UI/UX-Designer, Frontend-Developer)"
---

## Projektbeschreibung

Das Rescoped Datagrid ist eine spezialisierte Open-Source-Tabellen-Komponente, entwickelt als leichtgewichtige
Alternative zu komplexen Lösungen wie AG-Grid. Die Komponente basiert auf Angular CDK und Angular Material Table und
wurde für Anwendungen entwickelt, die Excel-ähnliche Funktionalität mit direkter Inline-Editierung, regel-basierter
Konfiguration und dynamischen Datenstrukturen benötigen.

## Kern-Features

- **Virtual Scrolling**: Performance-optimiert für große Datenmengen mit CDK Virtual Scroll Viewport (erforderlich
  bei >1000 Zeilen)
- **Regel-basiertes System**: Flexible Konfiguration über fünf Regeltypen: placeholder, validate, disable, render,
  action
- **Row-Types**: Drei Zeilentypen für hierarchische Strukturen - Global-row, Group-row, Single-row
- **Inline Editing**: Direkte Doppelklick-Bearbeitung in Tabellenzellen
- **Batch Operations**: Gruppenweise Datenbearbeitung über Global-row und Group-row
- **Collapsible Groups**: Akkordeon-ähnliche Gruppierung mit DOM-Optimierung für Performance
- **Core Components**: Drei spezialisierte Eingabe-Komponenten - mat-datagrid-input, mat-datagrid-combobox,
  mat-datagrid-datepicker

## Kontext

Für die Device List App benötigten wir eine komplexe, dynamische und editierbare Tabellen-Komponente, die umfangreiche
Datenstrukturen ähnlich wie Excel darstellen kann. Einzelne Felder sollten direkt per Doppelklick editierbar sein, eine
Kernfunktionalität für effiziente Datenpflege. Verfügbare Lösungen wie AG-Grid wurden evaluiert, jedoch aufgrund der
Komplexität wurde die Entwicklung einer maßgeschneiderten Lösung entschieden. So entstand das rescoped Datagrid, benannt
nach unserem Label für alle Open-Source Projekte, das als wiederverwendbare Lösung konzipiert wurde.

## Meine Aufgaben

Als **Design Engineer** war ich für das komplette UI/UX-Design und die Styling-Integration der Datagrid-Komponente
verantwortlich. In enger Zusammenarbeit mit dem verantwortlichen Developer übernahm ich:

- **UI/UX-Design:** Komplette visuelle Gestaltung der Tabellen-Komponente nach unserem avodaq Material-Design
- **Interaction Design:** Konzeption intuitiver Editier-Workflows und Nutzerinteraktionen für alle Row-Types und
  Regel-Konfigurationen
- **Developer Experience:** Optimierung der Komponenten-API und Konfigurationsmöglichkeiten für einfache Integration
- **Frontend-Implementierung:** Styling und UI-Logik mit Angular v17, Angular Material und TypeScript
- **Publikations-Vorbereitung:** Gestaltung einer konsistenten, dokumentierbaren Benutzeroberfläche für die
  Veröffentlichung

Praktisch jedes sichtbare Element – Formen, Farben, Größen, Abstände, Gruppierung, Anordnung, visuelle Hierarchien,
Sprache, Tonalität, Animationen – wurde von mir entworfen oder angepasst und ins Frontend integriert.

## Arbeitsprozess

Das Projekt wurde nach agilen Methoden entwickelt, wobei die Komponente parallel zur Device List App entstanden ist. Der
Workflow umfasste iterative Design-Entwicklung in Figma, kontinuierliche Abstimmung mit dem Developer über API-Design
und Funktionalität, sowie die Vorbereitung für die Open-Source-Veröffentlichung mit umfassender Dokumentation und
Live-Demo.

## Herausforderungen

- **Komplexe Tabelleninteraktionen:** Übertragung vertrauter Bedienkonzepte (Doppelklick-Editierung,
  Keyboard-Navigation) in eine moderne Web-Komponente
- **Virtual Scrolling UI-Design:** Gestaltung flüssiger Scroll-Interaktionen und visueller Übergänge für große
  Datenmengen mit CDK Virtual Scroll Viewport
- **Hierarchische Datenstrukturen:** Global-row, Group-row und Single-row Interaktionen mit Batch-Editing-Funktionalität
- **Flexible Konfiguration:** Einfacher Nutzung oder bei Bedarf umfangreichen Anpassungsmöglichkeiten über das
  Regel-System

## Mein Impact

**Design:**

- **Einfache Theming-Konfiguration:** Entwicklung flexibler SCSS-basierter Anpassungsoptionen für verschiedene
  Design-Systeme
- **Material Design Integration:** Nahtlose Einbindung in Angular Material Projekte
- **Hierarchische Visualisierung:** Intuitive Darstellung von Global-row, Group-row und Single-row Strukturen

**Technisch:**

- **Community Contribution:** Bereitstellung einer leichtgewichtigen Alternative zu überkomplexen Enterprise-Lösungen
- **API-Vereinfachung:** Reduzierung der Konfigurationskomplexität für bessere Developer Experience

**Konkret:**

- **Scroll-Performance-Design:** Visuell flüssige Übergänge beim Virtual Scrolling bei großen Datenmengen, die auch bei
  tausenden von Datensätzen eine ruckelfreie Navigation ermöglichen
- **Modulares Styling:** Konfigurierbare Theming-Optionen für verschiedene Design-Systeme mit flexiblen SCSS-basierten
  Anpassungsoptionen für nahtlose Integration in bestehende Projekte
- **Batch-Editing-Design:** Intuitive Benutzeroberfläche für gruppenweise Datenbearbeitung über Global-row und Group-row
  mit visueller Feedback-Gestaltung
- **Collapsible Groups Design:** Akkordeon-ähnliche Gruppierung mit Chevron-Icons und DOM-optimierter
  Performance-Gestaltung

## Techstack

**Konzept:** Figma Design, Material Design Kit

**Projektstruktur:** GitHub Repository, Angular v17, Angular CDK, Angular Material

**State Management:** RxJS

**Styling:** Angular Material Theming, Custom Styles (SCSS)

**Testing:** TypeScript, ESLint, Prettier

**Tools & Libraries:** RxJS, Zod, TypeScript, rescoped Datagrid

## Projektergebnis

Das rescoped Datagrid wurde erfolgreich als spezialisierte Komponente veröffentlicht und als Kernkomponente in der
Device List App eingesetzt. Die Komponente bewährte sich in der Praxis durch Virtual Scrolling-Performance bei extrem
großen Datasets und intuitive Bedienung.

Die Live Demo unter **rescoped.io** demonstriert die wichtigsten Features und dient als Showcase für die Komponente.
Durch die modulare Architektur konnte das Datagrid auch in weiteren avodaq-Projekten wiederverwendet werden und
etablierte das rescoped-Label als Marke für hochwertige Komponenten im Angular-Ökosystem.
