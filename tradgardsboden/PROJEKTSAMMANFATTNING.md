# Trädgårdsboden – projektsammanfattning

*Senast uppdaterad: 3 november 2026. Status: etapp 2 (startsidans design) klar för granskning.*

Den här filen sammanfattar allt som bestämts och byggts hittills. Ladda upp den tillsammans
med `tradgardsboden.zip` när du fortsätter arbetet i en ny konversation med Claude.

---

## 1. Verksamheten

| | |
|---|---|
| Namn | Trädgårdsboden |
| Domän | tradgardsboden.se (kontrollera att den är registrerad) |
| Undertitel | Fruktträd & trädgårdsväxter för skånska trädgårdar. |
| Ort | Sankt Olof, Österlen, Skåne |
| Inriktning | Fruktträd först, senare bärbuskar, perenner, rosor, häckväxter m.m. |
| Lager | Inget eget lager – samarbete med svenska plantskolor och grossister |
| Marknadsföring | Ingen betald annonsering, Google (SEO) är huvudkanalen |
| Målgrupp | Främst kunder i Skåne, förfrågan möjlig från övriga Sverige |

### Försäljningsmodell (version 1)
1. Kunden väljer träd och skickar en **beställningsförfrågan** (ingen betalning på webbplatsen).
2. Ägaren kontrollerar tillgänglighet hos leverantören.
3. Ägaren bekräftar pris, frakt och leveranstid med kunden.
4. Kunden betalar (senare via Stripe-betalningslänk som skickas först efter bekräftelse).
5. Ägaren beställer från grossisten när betalningen är klar.
6. Leverantören skickar direkt till kunden – eller till Sankt Olof för avhämtning.

Webbplatsen ska tydligt visa att en förfrågan **inte** är en genomförd beställning eller en
garanti för tillgänglighet.

### Leveransalternativ
- Direktleverans inom Skåne (om avtal med leverantören tillåter)
- Avhämtning i Sankt Olof efter överenskommelse
- Förfrågan om leverans till övriga Sverige
- Inga leveranspriser eller leveranstider anges som fastställda innan de bekräftats.

---

## 2. Sortiment

12 sorter är upplagda som produkter. **Alla faktafält är tomma** tills de kontrollerats mot
plantskolekällor (görs i etapp 3). På webbplatsen visas de som ”Uppgift kommer”.

| Frukttyp | Sorter |
|---|---|
| Äppelträd | Aroma, Ingrid Marie, Discovery, Katja |
| Päronträd | Clara Frijs, Conference |
| Plommonträd | Victoria, Opal |
| Körsbärsträd | Stella, Lapins, Skuggmorell |
| Persikoträd | Frost |

Utvalda på startsidan: Aroma, Ingrid Marie, Victoria, Stella.

### Priser
**Inga priser är satta.** Priset visas som ”Pris bekräftas vid förfrågan” tills ett pris
inklusive moms har lagts in. Priser, grundstammar, tillgänglighet och bilder får inte hittas på.

### Produktmodell – fält per sort
Sortfakta (gäller sorten):
- Produktnamn, frukttyp, sort
- Bilder (med källa/licens och markering om bilden verkligen visar sorten)
- Ingress/beskrivning, smak och användningsområden
- Skördetid + skördeperiod (tidig/medel/sen)
- Odlingszon (text + högsta zon för filtrering)
- Självfertil (ja/delvis/nej), pollineringspartners
- Planteringsläge, solkrav (sol/halvskugga), skötselråd
- **Faktagranskning:** verifierad ja/nej, lista med källor, datum för granskning

Erbjudande (gäller leverantörens konkreta träd – en sort kan ha flera):
- Benämning (t.ex. ”Barrotat, 2-årigt”), grundstam
- Förväntad sluthöjd och bredd, trädstorlek (liten/medel/stor)
- Pris inkl. moms
- Leveransalternativ, beräknad leveranstid
- Tillgänglighet: ej kontrollerad / finns / begränsad / slut / kommande

Guiden ”Hitta rätt fruktträd” ska **bara** föreslå sorter som är markerade som verifierade.

### Webbadresser
- `/fruktrad/` – katalog
- `/fruktrad/appeltrad/`, `/fruktrad/parontrad/`, `/fruktrad/plommontrad/`,
  `/fruktrad/korsbarstrad/`, `/fruktrad/persikotrad/` – kategorier
- `/fruktrad/appeltrad/aroma/` osv. – produktsidor

---

## 3. Texter på startsidan (nuvarande utkast)

**Startbild**
- Etikett: Sankt Olof · Österlen
- Rubrik: Trädgårdsboden
- Undertitel: Fruktträd & trädgårdsväxter för skånska trädgårdar.
- Knappar: ”Se fruktträden” · ”Hitta rätt fruktträd”

**Välkommen – ”En liten trädgårdsbutik från Österlen”**
> Trädgårdsboden hjälper dig att hitta fruktträd som trivs i skånska trädgårdar. Vi väljer ut
> sorterna med omsorg, ger dig tydlig information och samarbetar med svenska plantskolor och
> grossister som levererar träden. Du får personlig service – från första frågan till planteringen.

Tre löften:
- **Noggrant utvalt** – Sorter som passar odlingsförhållandena i Skåne.
- **Tydlig information** – Vi skriver bara det vi har kunnat kontrollera.
- **Personlig service** – Liten skala, och du har alltid någon att fråga.

**Sortimentet – ”Fruktträd för skånska trädgårdar”**
- Äppelträd – Klassiska och nyare äppelsorter för skånska trädgårdar.
- Päronträd – Päron för färsk ätning, matlagning och lagring.
- Plommonträd – Plommon för trädgårdar i södra Sverige.
- Körsbärsträd – Söta körsbär och surkörsbär för svenska trädgårdar.
- Persikoträd – Persika för varma, skyddade lägen.

**Utvalda fruktträd – ”Ett första urval”**
> Sortuppgifterna kontrolleras just nu mot plantskolornas information. Uppgifter som ännu inte
> är kontrollerade står som ”uppgift kommer”.

**Så fungerar det – ”Från förfrågan till planterat träd”**
> Vi har inget eget lager. I stället beställer vi träden från leverantören först när allt är klart med dig.

1. **Välj dina träd** – Läs om sorterna och lägg de träd du är intresserad av i din förfrågan.
2. **Skicka en förfrågan** – Ange önskat leveranssätt. Förfrågan är kostnadsfri och inte bindande.
3. **Vi kontrollerar** – Vi stämmer av tillgänglighet med våra leverantörer – svenska plantskolor och grossister.
4. **Du får en bekräftelse** – Du får ett besked om pris, frakt och leveranstid. Först då tar du ställning.
5. **Leverans eller avhämtning** – När beställningen är betald skickas träden till dig – eller så hämtar du dem i Sankt Olof.

> **Bra att veta:** En förfrågan är inte en genomförd beställning och ingen garanti för att trädet
> finns tillgängligt. Ingen betalning sker förrän vi har bekräftat pris, frakt och leveranstid med dig.

**Odlingsråd – ”Inspiration och kunskap”** (artiklar planerade, ej skrivna)
- När planterar man fruktträd i Skåne?
- Vilka äppelträd pollinerar varandra?
- Vad betyder grundstam?
- Vilka fruktträd passar i små trädgårdar?
- Hur beskär man ett äppelträd?
- Hur skyddar man fruktträd mot vårfrost?

**Om Trädgårdsboden – ”Småskaligt, personligt och omsorgsfullt”**
> Trädgårdsboden är en nystartad verksamhet i Sankt Olof på Österlen. Här väljer vi ut fruktträd,
> svarar på dina frågor och tar hand om din beställning från början till slut.
>
> Träden kommer från svenska plantskolor och grossister som vi samarbetar med. På så sätt kan vi
> hålla verksamheten liten och personlig – och lägga tiden på att hjälpa dig välja rätt.

Viktigt: företaget beskrivs aldrig som en plantskola som själv odlar eller har lager.

---

## 4. Design

Inspirerad av Senseye-webbplatsen (samma lugna, eleganta känsla) men med egen palett.
Senseyes filer ändras aldrig och texter kopieras inte.

### Färger
| Roll | Färg |
|---|---|
| Bakgrund, varmvit | `#FAF7F1` |
| Sektionsbakgrund, linne | `#F1ECE2` |
| Ljus mossa | `#E7EADF` |
| Rubriker | `#22302A` |
| Brödtext | `#4E534D` |
| Skogsgrön (knappar, accentord) | `#2F4A3A` |
| Äppellöv (linjer) | `#8FA486` |
| Äppellöv, text | `#54704D` |
| Terrakotta (sparsamt) | `#A15F43` |
| Sidfot, mörk jord | `#1F2E26` |

Alla textfärger klarar kontrastkraven (WCAG AA).

### Typografi
- **Fraunces** (serif) för rubriker – ett ord i rubriken ofta kursivt i skogsgrönt
- **Karla** för brödtext, radavstånd 1,7
- Versala etiketter med extra teckenavstånd och en kort linje före
- Typsnitten ligger på egen server – inga anrop till Google

### Formspråk och komponenter
- Signaturmotiv: en tunn, handritad kvist med två blad
- Logotyp: ”Trädgårds*boden*” med kvisten framför
- Sidhuvud: fast, halvgenomskinligt med oskärpa, länk ”Förfrågan” med antal träd
- Mobilmeny: helskärm med stora serif-länkar
- Startbild: AI-genererad (ChatGPT) miljöbild i fotostil – blommande äppelträd, stenmur,
  rapsfält, vitkalkad gård och havet. Beskrivs aldrig som en bild av en verklig plats.
  Bildinstruktioner för övriga bilder finns i `BILDINSTRUKTIONER.md`
- Kategorikort med bild och mörk tonad yta, produktkort med faktarader, steg 01–05
- Mjuka animationer (startbild tonar in, text glider upp, bilder zoomar lätt vid hovring),
  avstängda för den som valt minskad rörelse i sitt system
- Alla bilder är tydligt märkta platshållare (”Foto kommer”, ”Sortbild kommer”)

### Huvudmeny
Fruktträd · Hitta rätt fruktträd · Odlingsråd · Om Trädgårdsboden · Leverans & avhämtning · Kontakt
(+ Förfrågan)

Juridiska sidor (förberedda, texter ska granskas före lansering): Köpvillkor · Ångerrätt & returer ·
Reklamationer · Integritetspolicy · Cookies · Företagsuppgifter

---

## 5. Beslut om teknik

| Del | Beslut |
|---|---|
| Plattform | **Astro** (statisk webbplatsgenerator) – inte Shopify, inte Vercel |
| Hosting | **Cloudflare Pages** (gratisnivån tillåter kommersiellt bruk; det gör inte Vercel Hobby eller GitHub Pages) |
| Innehållsadministration | **Sveltia CMS** på `/admin` – produkter, priser, bilder, artiklar, sidor. Inloggning med GitHub |
| Kundförfrågningar | Cloudflare Pages Functions + **D1-databas** – aldrig i Git eller statiska filer |
| Admin för förfrågningar | Egen enkel sida skyddad av **Cloudflare Access** (engångskod via e-post) |
| Spamskydd | Cloudflare Turnstile + dolda fällfält |
| E-post | Cloudflare Email Routing (avisering till ägaren), Resend gratisnivå (bekräftelse till kund) |
| Betalning | **Stripe**, förbereds senare. Betalningslänk skapas först efter bekräftad förfrågan. Endast testläge tills ägaren uttryckligen godkänner riktiga betalningar |
| Kod | Ligger i mappen `tradgardsboden/` i GitHub-förrådet `senseyes-website`, på grenen `claude/tradgardsboden-webshop-q4dgm6`. Kan flyttas till eget förråd senare |
| Spårning | Ingen analys eller spårningscookies från start |

### Förfrågningsstatus (planerad)
ny → kontrolleras → bekräftad → betalningslänk skickad → betald → beställd → levererad / avbruten

### Kostnader
| Post | Kostnad |
|---|---|
| Domän tradgardsboden.se | ca 100–250 kr/år – **enda fasta kostnaden** |
| Cloudflare, GitHub, Sveltia CMS, Astro | 0 kr |
| Resend | 0 kr upp till 3 000 mejl/månad |
| Egen e-postlåda (valfritt) | 0 kr för vidarebefordran, annars ca 0–70 kr/mån |
| Stripe | Ingen månadsavgift, ca 1,5 % + 1,80 kr per europeisk kortbetalning (kontrollera Stripes aktuella prislista) |

---

## 6. Leverantörer att kontakta

Uppgifterna kommer från sökresultat och företagsregister – kontrollera i samtal.

**Skåne, odlar fruktträd själva (ring först):**
- **Wallströms Plantskola** – nära Skivarp enligt företagsprofil. Ca 20 000–30 000 fruktträd/år,
  ca 200 sorter, säljer till återförsäljare, E-märkta sorter. Tel. enligt sökresultat: 0705-30 84 34
- **Stångby Plantskola** – Lund. E-plantor, inriktad på större fruktträd
- **Plantskolan i Ängelholm** – odlar över 150 sorters fruktträd, E-plantor
- **Ystad Plantskola** – har fruktträd, okänt om de säljer till återförsäljare
- **Växtkraft Rosenhagen** (Skåne Tranås) – svenskodlade E-certifierade fruktträd, troligen butik

**Grossister (endast företag):**
- **Splendor Plant** – ”Nordens största partiplantskola”, tel. 042-36 61 05
- **Säve Plantskola** – endast återförsäljare, tel. 031-96 04 02
- **Björkhaga Plantskola** – partiplantskola med E-plantor, Torslanda
- **Eriksbo Plantskola** – ren grossist, främst Mälardalen

**Frågor till leverantörerna:**
1. Säljer ni till en ny, liten återförsäljare? Villkor, minsta order, krav på org.nr/F-skatt?
2. Kan ni skicka direkt till mina kunder? Fraktkostnad inom Skåne och till övriga Sverige?
3. Vilka av de 12 sorterna har ni – på vilka grundstammar och i vilka storlekar?
4. Säsong: när levereras barrotade träd respektive krukträd? Går det att reservera?
5. Får jag använda era produktbilder och sortbeskrivningar?
6. Hur hanteras reklamationer?
7. Prislistor och rabatter för återförsäljare?

**Kontrollera med Jordbruksverket:** registrering och växtpass vid försäljning av växter,
särskilt distansförsäljning och när leverantören skickar direkt till kunden.

Tips: E-planta är ett svenskt kvalitetsmärke för friska, certifierade växter odlade i Sverige.
Enligt eplanta.com finns bl.a. Aroma och Discovery bland de E-märkta fruktträden.

---

## 7. Status och nästa steg

| Etapp | Innehåll | Status |
|---|---|---|
| 1 | Analys och plan | Klar |
| 2 | Startsida, design | **Klar för granskning** |
| 3 | Produktkatalog, produktsidor, filtrering, guide, kontroll av sortfakta | Ej påbörjad |
| 4 | Förfrågningssystem + admin för förfrågningar | Ej påbörjad |
| 5 | Informationssidor, artiklar, juridiska sidor | Ej påbörjad |
| 6 | Testning (mobil, länkar, formulär, tillgänglighet, säkerhet, SEO, prestanda) | Ej påbörjad |
| 7 | Förbered publicering (DNS, Cloudflare, miljövariabler) – publiceras inte utan godkännande | Ej påbörjad |

### Öppna frågor till ägaren
1. Färger och känsla – lagom skogsgrönt, eller varmare/ljusare?
2. Tonen – ”vi” eller ”jag” med eget namn?
3. Vilka leverantörer blir det?

### Kända problem
- Inga kända problem. (GitHub-behörigheten är fixad – allt sparas i förrådet.)

### Observationer om Senseye (inte åtgärdade, Senseye ska inte ändras utan beslut)
- Ingen meny på mobilen
- Bilder inbäddade i HTML gör sidorna mycket tunga (index.html 6 MB)
- Typsnitt från Google Fonts (GDPR-risk)
- Kontaktformuläret visar e-postadressen öppet

---

## 8. Så fortsätter du i en ny konversation

Ladda upp:
1. `PROJEKTSAMMANFATTNING.md` (den här filen)
2. `tradgardsboden.zip` (all källkod)
3. Gärna skärmbilderna av startsidan

Skriv till exempel:
> Här är projektsammanfattningen och koden för Trädgårdsboden. Läs sammanfattningen och
> fortsätt med etapp 3. Mina svar på de öppna frågorna är: …

Köra projektet lokalt (kräver Node.js): packa upp zip-filen, öppna mappen i en terminal och kör
`npm install` och sedan `npm run dev`. Sidan visas på http://localhost:4321.
