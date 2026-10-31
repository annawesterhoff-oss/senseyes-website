# Trädgårdsboden

Webbutik för fruktträd – tradgardsboden.se (Sankt Olof, Österlen).

Projektet är helt fristående från Senseye-webbplatsen i mappen ovanför.
Inga av Senseyes filer används eller ändras.

## Teknik

- **Astro** – statisk webbplatsgenerator. Sidorna byggs till vanlig HTML.
- **Innehåll** i `src/content/` (Markdown med fält överst). Det är dessa filer som
  administrationsgränssnittet (Sveltia CMS) kommer att redigera.
- **Typsnitt** (Fraunces, Karla) ligger på egen server via Fontsource – inga anrop till Google.
- Planerad drift: Cloudflare Pages (gratis). Förfrågningar sparas i Cloudflare D1, inte i Git.

## Kom igång

```sh
npm install
npm run dev      # utvecklingsserver på http://localhost:4321
npm run build    # bygger till dist/
```

## Innehållsprinciper

- Inga uppgifter hittas på. Faktafält som inte är kontrollerade lämnas som `null`
  och visas som ”Uppgift kommer” på sidan.
- `faktagranskning.verifierad: true` sätts först när sortuppgifterna kontrollerats mot
  källor (listas under `faktagranskning.kallor`). Guiden ”Hitta rätt fruktträd” använder
  bara verifierade sorter.
- Grundstam, storlek, pris och tillgänglighet hör till ett **erbjudande** (en leverantörs
  konkreta träd), inte till sorten.
- En bild markeras `visar_sorten: true` endast om den verkligen föreställer sorten.

## Status

| Etapp | Innehåll | Status |
|---|---|---|
| 1 | Analys och plan | Klar |
| 2 | Startsida, design | Klar för granskning |
| 3 | Produktkatalog, filtrering, guide | Ej påbörjad |
| 4 | Förfrågningar + admin | Ej påbörjad |
| 5 | Informationssidor, artiklar, juridik | Ej påbörjad |
| 6 | Testning | Ej påbörjad |
| 7 | Publiceringsförberedelse | Ej påbörjad |

Sidor som ännu inte är byggda visar ”under uppbyggnad” och har `noindex`.
