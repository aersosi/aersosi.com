---
pubDate: 2025-06-08
viewerTitle: "Device List"
viewerDescription: "Angular Webanwendung zur Verwaltung von Hard- und Software, Servicedaten und Lizenzen von Kunden"
pageTitle: "Device List | Datenmanagement-Anwendung | Arthur Ersosi"
pageDescription: "Angular Webanwendung zur Verwaltung von Hard- und Software, Servicedaten und Lizenzen von Kunden"
images:
  [{ src: "src/images/projects/rescopedDatagrid/rescopedDatagrid-cover.webp", alt: "rescoped Datagrid Coverbild" }]
tags: ["Professionelles Projekt", "Angular", "UX (User Experience)", "UI (User Interface)", "Frontend-Entwicklung"]

noLinksText: "Firmeninternes Projekt"

company:
  companyName: "avodaq AG, Hamburg"
  teamSize: "3–5"

myRole: "UX/UI-Design & Frontend-Entwicklung (Angular v.18)"
---

## Projektbeschreibung

Die Device List ist eine interne Webanwendung zur automatisierten Verwaltung von Hardware-, Software-, Lizenz- und
Servicedaten für Kundeninfrastrukturen. Das System ersetzt einen zeitaufwändigen Excel-basierten Workflow durch eine
moderne, API-gestützte Lösung mit Fokus auf intuitive Bedienung und effiziente Datenverarbeitung.

---

## Kontext

avodaq erzielte ihre Umsätze im B2B-Bereich der Videotelefonie durch den Vertrieb hochwertiger Cisco-Hardware, großer
Videokonferenzsysteme und aller dazugehörigen Komponenten. Dies umfasste Hardware-Verkauf, Wartung über Serviceverträge
sowie Software-Verkauf und Lizenzierung.

Jede Hardware-Einheit beim Kunden verfügte über eindeutige Identifikatoren (Seriennummern, MAC-Adressen) sowie
Detailinformationen wie Firmware-Versionen, Lizenzschlüssel, Standortzuordnungen, Netzwerkeinstellungen und
Service-Vertragsdaten. Diese Informationen waren essenziell für korrekte Konfiguration, Wartung und Nachverfolgung der
Systeme.

**Das Problem:** Alle Daten wurden in einer großen Excel-Datei verwaltet, die teilweise sehr lange Ladezeiten hatte.
Über Excel-Makros wurden Daten manuell per Copy & Paste erfasst und in die interne Datenbank übertragen. Dieser Prozess
führte zu erheblichen Verzögerungen bei der Datenpflege und einem kritischen Rückstau, der die rechtzeitige Erneuerung
von Serviceverträgen und Lizenzen gefährdete.

---

## Meine Aufgaben

Als **Design Engineer** war ich in einem 3–5-köpfigen Team für das komplette **UI/UX-Design** sowie die
**Frontend-Integration** verantwortlich. In enger Zusammenarbeit mit dem Senior Developer, der eine spezialisierte
Datagrid-Komponente als Kernstück der Anwendung entwickelte, übernahm ich:

- **User Research:** Systematische Nutzerinterviews, Contextual Inquiry, Task Analysis, User Observation, Usability
  Testing und Persona Development mit internen Kollegen
- **UI/UX-Design:** Wireframing, Prototyping und iterative Gestaltung der Applikation nach unserem für avodaq
  angepassten Material-Design
- **Datagrid-Styling:** Komplette visuelle Gestaltung der spezialisierten Tabellen-Komponente als Kernstück der
  Anwendung
- **Frontend-Implementierung:** Umsetzung aller UI-Komponenten und Screens mit Angular v17
- **UX-Optimierung:** Vorschläge zur Verbesserung der Datagrid-Konfiguration, Error-Handling, Layout und Nutzerführung
- **Stakeholder-Abstimmung:** Kontinuierliche Kommunikation mit Product Owner und (technischen) Kollegen

Praktisch jedes sichtbare Element – Formen, Farben, Größen, Abständen, Gruppierung, Anordnung, visuelle Hierarchien,
Sprache, Tonalität, Animationen – wurde von mir entworfen oder angepasst und ins Frontend integriert.

---

## Arbeitsprozess

Das Projekt wurde nach **agilen Methoden** in zweiwöchigen Sprints organisiert, wobei ich erstmals systematische User
Research bei avodaq etablierte:

1. Der Product Owner erstellte initiale Wireframes und dokumentierte diese als GitLab-Tickets mit detaillierten
   Anforderungen.
2. Auf Basis dieser Anforderungen entwickelte ich detaillierte **Figma-Designs**, **interaktive Prototypen** und nutzte
   **User Research Methoden**:

- Für komplexe Anwendungsfälle erstellte ich Klickdummys, die Informationshierarchien und Interaktionsmuster abbildeten.
- Kritische Komponenten testete ich zusätzlich als **Stackblitz Code-Demos** (Angular Material), um Umsetzbarkeit und
  Verhalten frühzeitig zu validieren.
- Stakeholder-Abstimmungen und Erstellung von Einverständniserklärungen für Nutzerbeobachtungen
- Interviews mit drei Mitarbeitern zur Erfassung von Arbeitsweisen und Herausforderungen
- Iterative Designentwicklung in enger Abstimmung mit dem Senior Developer

3. Nach Freigabe durch Senior Developer und Product Owner implementierte ich die Designs als Komponenten in
   Feature-Branches.
4. Diese wurden als Staging-Versionen deployed, durchliefen Code-Reviews und wurden nach Approval in den Develop-Branch
   integriert.

---

## Herausforderungen & Impact

### Besondere Herausforderungen

- **Komplexe Datenvisualisierung:** Übertragung Excel-ähnlicher Funktionalität in eine moderne Webanwendung mit
  editierbaren Tabellenzellen
- **Spezialisierte Tabellen-Komponente:** Vollständige Gestaltung und Mitentwicklung einer maßgeschneiderten
  Datagrid-Lösung durch Konfigurationsoptimierung und UX-Feedback
- **User Research Etablierung:** Erste systematische Nutzerforschung im Unternehmen trotz zusätzlicher Arbeitsbelastung

### Design Impact

- **Excel-zu-Web-Transformation:** Erfolgreiche Gestaltung einer intuitiven Benutzeroberfläche für hochkomplexe
  Hardware- und Lizenzdatenstrukturen
- **Arbeitsablauf-Optimierung:** Entwicklung effizienter Workflows für die tägliche Arbeit der Benutzer
- **Datenqualität-Verbesserung:** UI-Design, das automatisierte Cisco-API-Integration unterstützt und manuelle Fehler
  reduziert

**Konkret:**

- **Editierbare Datagrid-Zellen:** Excel-ähnliche Doppelklick-Editierung für direkte Datenanpassung in komplexen
  Tabellenstrukturen
- **Hierarchische Informationsdarstellung:** Klare visuelle Strukturierung von Hardware-Komponenten, Lizenzen und
  Service-Verträgen

### Technischer Impact

- **Prozessautomatisierung:** Beitrag zur erheblichen Reduzierung des kritischen Rückstaus und Verbesserung der
  Workflow-Effizienz
- **Monorepo-Integration:** Entwicklung wiederverwendbarer Komponenten für die zentrale Library aller avodaq-Projekte
- **Open Source Contribution:** Komplettes Styling und UX-Verbesserungen für eine spezialisierte Datagrid-Komponente,
  die als eigenständiges Projekt veröffentlicht wurde

**Konkret:**

- **API-Integration-UI:** Benutzeroberfläche für automatisierte Cisco-API-Datenabfrage statt manueller Excel-Pflege
- **Monorepo-Komponenten:** Wiederverwendbare UI-Elemente, die in nachfolgenden avodaq-Projekten eingesetzt werden
  konnten

---

## Technische Umsetzung

### Konzept

Figma Design, Material Design Kit (Figma), StackBlitz, User Research (User Interviews, Contextual Inquiry, Task
Analysis, User Observation, Usability Testing, Persona Development)

### Projektstruktur

GitLab, NX Monorepo, Angular v17, Angular Material, Angular Material CDK

### State Management

NgRx

### Styling

Angular Material Theming, Custom Styles (SCSS), TailwindCSS

### Testing

Jest, Cypress, Testing Library

### Tools & Libraries

RxJS, Zod, TypeScript, Rescoped Datagrid

---

## Projektergebnis

Die Device List war ein **funktionaler Erfolg**: Die Nutzer arbeiteten häufig mit der Anwendung und konnten durch den
höheren Automatisierungsgrad messbar Zeit sparen. Das System reduzierte den manuellen Aufwand erheblich und verbesserte
die Datenqualität durch automatisierte API-Integration.

Obwohl das Projekt später aufgrund von Prioritätenverschiebungen pausiert wurde, demonstrierte es erfolgreich die
Machbarkeit einer modernen, webbasierten Lösung für komplexe B2B-Datenmanagement-Herausforderungen. Die entwickelten
Komponenten flossen in die zentrale Monorepo-Library ein und die spezialisierte Datagrid-Komponente wurde als
Open-Source-Projekt **Rescoped Datagrid** veröffentlicht.

Meine **User Research Initiative** legte trotz vorzeitiger Beendigung den Grundstein für zukünftige nutzerzentrierte
Entwicklungsansätze im Unternehmen und etablierte systematische Methoden der Nutzerforschung bei Avodaq.
