- bg-accent-600 hover:bg-accent-500 dark:bg-accent-400 dark:hover:bg-accent-300
- text-accent-700 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"

Todo:
- [ ] Active links auf dings umbauen
```javascript

const pathname = new URL(Astro.request.url).pathname;
const currentPath = pathname.slice(1);

<nav>
    <a class={currentPath === "" ? "active" : ""} href="/">Home</a>
    <a class={currentPath === "portfolio" ? "active" : ""} href="/portfolio">Portfolio</a>
    <a class={currentPath === "posts" ? "active" : ""} href="/posts">Article</a>
    <a class={currentPath === "about" ? "active" : ""} href="/about">About Me</a>
    <a class={currentPath === "contact" ? "active" : ""} href="/contact">Contact Me</a>
</nav>

```

- [ ] übertragen ion aersosi repo
- [ ] testen hosten
- [ ] SEO
- [ ] Dünnere Icons
- [ ] CV einbauen
- [ ] CV Download
- [ ] Projekte einbauen
- [ ] Dynamische Bilder
- [ ] DE/EN switch
- [ ] Echte Tooltips
- [ ] Accesibiltyq
- [ ] Checkliste
- [ ] Into Text
- [ ] 404 Text
- [ ] Impressum
- [ ] Google Font selbst hosten
- [ ] Sitemap
- [ ] Robots.txt
- [ ] design system seite raus nehmen

```plain text
My name is Rasmus Andersson. I’m a Swedish he/him living in San Francisco, California. 
Software is the medium through which I express myself.

You can call me a Designer if you want.
Interested in learning more about my work?
Read about my work →

In my spare time I enjoy tinkering with software engineering projects, 
like building compilers and designing programming languages that no 
one will ever use, ha ha. Making typefaces and tinkering with electronics is fun, too.
List of projects →

I’m an avid motoring enthusiast and try to spend time driving the various 
amazing race tracks around the SF bay area. Laguna Seca is a favorite.

Photography used to be a big part of my life, but has lately taken a 
back seat as a past time hobby. My photography has been published by 
The New York Times, The BBC, Forbes, The Economist, Wired Magazine, 
The Guardian, among others.

---
---
---

I’m a self-taught front-end developer and UI designer with a strong 
passion for building my own projects. My philosophy revolves around 
simplicity and practicality, focusing on straightforward principles 
that deliver results. I value sticking to a clear plan and executing 
it reliably, with consistency being the foundation that keeps everything on track.


```