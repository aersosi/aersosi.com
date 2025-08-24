---
pubDate: 2024-01-01
viewerTitle: "rescoped Datagrid"
viewerDescription: "Angular CDK basiertes und performantes Open-Source-Datagrid mit intuitivem Setup"
pageTitle: "rescoped Datagrid | Open-Source-Projekt | Arthur Ersosi"
pageDescription: "Angular CDK basiertes und performantes Open-Source-Datagrid mit intuitivem Setup"
images:
  [
    { src: "src/images/projects/rescopedDatagrid/rescopedDatagrid-cover.webp", alt: "rescoped Datagrid Coverbild" },
    { src: "src/images/projects/rescopedDatagrid/rescopedDatagrid-01.webp", alt: "rescoped Datagrid" },
  ]
tags: ["Professionelles Projekt", "Open Source", "Developer Experience", "Frontend-Entwicklung"]

demo:
  name: "Live Demo"
  href: "https://rescoped.io/skygrid-app/"
  ariaLabel: "rescoped Datagrid Live Demo"

company:
  companyName: "avodaq AG, Hamburg"
  teamSize: "2-3"

myRole: "Design Engineer (UX-Researcher, UI-Designer, Frontend-Developer)"
---

## Projektbeschreibung

Das Rescoped Datagrid ist eine spezialisierte Open-Source-Tabellen-Komponente, entwickelt als leichtgewichtige
Alternative zu komplexen Lösungen wie AG-Grid. Die Komponente basiert auf Angular CDK und wurde für Anwendungen
entwickelt, die Excel-ähnliche Funktionalität mit direkter Inline-Editierung und dynamischen Datenstrukturen benötigen.

---

## Kontext

Für die Device List App benötigten wir eine komplexe, dynamische und editierbare Tabellen-Komponente, die umfangreiche
Datenstrukturen ähnlich wie Excel darstellen kann. Einzelne Felder sollten direkt per Doppelklick editierbar sein, eine
Kernfunktionalität für effiziente Datenpflege.

Es wurden verfügbare Lösungen wie AG-Grid evaluiert, jedoch aufgrund der Komplexität für die Entwicklung einer
maßgeschneiderten Lösung entschieden, die speziell auf unsere Anforderungen passt. So entstand das **Rescoped
Datagrid**, benannt nach unserem Label für alle Open-Source-Projekte.

Die Komponente wurde als Kernstück der Device List entwickelt, sollte jedoch von Anfang an als wiederverwendbare
Open-Source-Lösung konzipiert werden.

---

## Meine Aufgaben

Als **Design Engineer** war ich für das komplette **UI/UX-Design** und die **Styling-Integration** der
Datagrid-Komponente verantwortlich. In enger Zusammenarbeit mit dem verantwortlichen Developer übernahm ich:

- **UI/UX-Design:** Komplette visuelle Gestaltung der Tabellen-Komponente nach unserem avodaq Material-Design
- **Interaction Design:** Konzeption intuitiver Editier-Workflows und Nutzerinteraktionen für Excel-ähnliche
  Funktionalität
- **Developer Experience:** Optimierung der Komponenten-API und Konfigurationsmöglichkeiten für einfache Integration
- **Frontend-Implementierung:** Styling und UI-Logik mit Angular v17, Angular Material und TypeScript
- **UX-Optimierung:** Kritisches Hinterfragen und Verbesserungsvorschläge für Konfiguration, Error-Handling, Layout,
  Nutzerführung und Lesbarkeit
- **Open Source Vorbereitung:** Gestaltung einer konsistenten, dokumentierbaren Benutzeroberfläche für die
  Veröffentlichung

---

## Herausforderungen & Impact

### Besondere Herausforderungen

- **Komplexe Tabelleninteraktionen:** Übertragung vertrauter Bedienkonzepte (Doppelklick-Editierung,
  Keyboard-Navigation) in eine moderne Web-Komponente
- **Virtual Scrolling UI-Design:** Gestaltung flüssiger Scroll-Interaktionen und visueller Übergänge für große
  Datenmengen
- **Hierarchische Datenstrukturen:** Design für gruppierbare Zeilen mit Batch-Edit-Funktionalität über Global-Rows und
  Group-Rows
- **Flexible Konfiguration:** Balance zwischen einfacher Nutzung und umfangreichen Anpassungsmöglichkeiten

### Design Impact

- **Intuitive Bedienung:** Gestaltung einer Benutzeroberfläche, die ohne Lernkurve verwendet werden kann
- **Einfache Theming-Konfiguration:** Entwicklung flexibler SCSS-basierter Anpassungsoptionen für verschiedene
  Design-Systeme
- **Material Design Integration:** Nahtlose Einbindung in Angular Material Projekte

**Konkret:**

- **Scroll-Performance-Design:** Visuell flüssige Übergänge beim Virtual Scrolling bei großen Datenmengen
- **Responsive Grid-Layout:** Adaptive Spaltenbreiten und Scroll-Verhalten für unterschiedliche Bildschirmgrößen
- **Modulares Styling:** Konfigurierbare Theming-Optionen für verschiedene Design-Systeme

### Technischer Impact

- **Open Source Contribution:** Bereitstellung einer leichtgewichtigen Alternative zu überkomplexen Enterprise-Lösungen
- **Wiederverwendbarkeit:** Einsatz in mehreren avodaq-Projekten durch modulare Architektur
- **Community Building:** Grundlage für weitere Open-Source-Entwicklungen unter dem Rescoped-Label

**Konkret:**

- **API-Vereinfachung:** Kontinuierliches Feedback zur Reduzierung der Konfigurationskomplexität für bessere Developer
  Experience
- **Angular CDK Foundation:** Nutzung bewährter Angular-Patterns für stabile, wartbare Komponenten-Architektur

---

## Technische Umsetzung

### Konzept

Figma Design, Material Design Kit

### Framework

Angular v17, Angular CDK, Angular Material

### Styling

Angular Material Theming, SCSS

### State Management

RxJS

### Developer Tools

TypeScript, ESLint, Prettier

### Open Source

GitHub Repository, NPM Package, Live Demo, Live Dokumentation

---

## Projektergebnis

Das Rescoped Datagrid wurde erfolgreich als **Open-Source-Projekt** veröffentlicht und als Kernkomponente in der Device
List App eingesetzt. Die Komponente bewährte sich in der Praxis durch **Virtual Scrolling-Performance** bei extrem
großen Datasets und intuitive Excel-ähnliche Bedienung.

Die **Live Demo** unter rescoped.io demonstriert die wichtigsten Features und dient als Showcase für die Komponente.
Durch die modulare Architektur konnte das Datagrid auch in weiteren avodaq-Projekten wiederverwendet werden.

Das Projekt etablierte das **Rescoped-Label** als Marke für hochwertige Open-Source-Komponenten und legte den Grundstein
für weitere Community-Projekte im Angular-Ökosystem.
