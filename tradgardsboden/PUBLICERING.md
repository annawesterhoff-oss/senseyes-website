# Publicering: domän, Loopia, Cloudflare och DNS

Steg-för-steg för att koppla **tradgardsboden.se** (registrerad hos Loopia) till webbplatsen på
**Cloudflare Pages**. Webbplatsen publiceras på den riktiga domänen först när du godkänt den
(steg 4). Steg 1–3 kan göras direkt och ger en privat förhandsvisning.

> Skillnad mot Senseye: Senseye ligger på GitHub Pages och pekas dit med en CNAME hos Loopia.
> GitHub Pages får inte användas för webbutiker, därför används Cloudflare Pages här.
> Domänen ligger kvar hos Loopia (där betalar du den som vanligt) – bara DNS flyttas till Cloudflare.

---

## Steg 1 – Domänen hos Loopia

1. Logga in på **loopia.se → Kundzon**.
2. Kontrollera att **tradgardsboden.se** finns under dina domäner (annars: köp den, ca 100–250 kr/år).
3. Om domänen har **DNSSEC** påslaget hos Loopia: stäng av det innan steg 4.
4. Anteckna vilka DNS-poster som finns i dag (särskilt **MX** och **TXT** om du har e-post hos Loopia).
   Ta gärna en skärmbild.

## Steg 2 – Cloudflare-konto (gratis)

1. Gå till **dash.cloudflare.com/sign-up** och skapa ett konto. Välj gratisplanen (**Free**).
2. Aktivera tvåstegsverifiering under **My Profile → Authentication**.

## Steg 3 – Webbplatsen på Cloudflare Pages (privat förhandsvisning)

1. I Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**.
2. Logga in med GitHub och ge åtkomst till förrådet **senseyes-website**.
3. Inställningar:

| Fält | Värde |
|---|---|
| Project name | `tradgardsboden` |
| Production branch | `claude/tradgardsboden-webshop-q4dgm6` (byts till `main` vid lansering) |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory (Advanced) | `tradgardsboden` |

4. **Save and Deploy.** Efter några minuter finns sidan på **https://tradgardsboden.pages.dev**.
   Den adressen är inte indexerad av Google (`X-Robots-Tag: noindex` i `public/_headers`).
5. Varje gång Claude sparar på grenen byggs förhandsvisningen om automatiskt.

## Steg 4 – Koppla domänen (först efter ditt godkännande)

### 4a. Lägg till domänen i Cloudflare
1. **Add a domain** → skriv `tradgardsboden.se` → välj **Free**.
2. Cloudflare läser in befintliga DNS-poster från Loopia. **Jämför med din anteckning från steg 1**
   – särskilt MX- och TXT-poster för e-post – och lägg till det som saknas.
3. Cloudflare visar **två namnservrar**, t.ex. `xxxx.ns.cloudflare.com` och `yyyy.ns.cloudflare.com`
   (dina egna namn står i Cloudflare – använd exakt dem).

### 4b. Byt namnservrar hos Loopia
1. Loopia Kundzon → **tradgardsboden.se → Namnservrar / DNS-inställningar**.
2. Välj att använda **egna/externa namnservrar** och ange Cloudflares två namnservrar.
3. Spara. Bytet tar oftast 1–24 timmar. Cloudflare mejlar när domänen är aktiv.

### 4c. Koppla domänen till webbplatsen
1. Cloudflare → **Workers & Pages → tradgardsboden → Custom domains → Set up a custom domain**.
2. Lägg till `tradgardsboden.se`. Lägg sedan till `www.tradgardsboden.se`.
   Cloudflare skapar DNS-posterna automatiskt:

| Typ | Namn | Innehåll | Proxy |
|---|---|---|---|
| CNAME | `tradgardsboden.se` (@) | `tradgardsboden.pages.dev` | Proxied (orange moln) |
| CNAME | `www` | `tradgardsboden.pages.dev` | Proxied |

3. Omdirigera **www → utan www** (en enda adress är bäst för Google):
   **Rules → Redirect Rules → Create rule → mall ”Redirect from WWW to root”**, statuskod 301.
4. **SSL/TLS → Overview:** läge **Full (strict)**. **Edge Certificates:** slå på
   **Always Use HTTPS**. Certifikatet (HTTPS) är gratis och förnyas automatiskt.
5. **DNSSEC:** slå på i Cloudflare (**DNS → Settings → Enable DNSSEC**) och lägg in DS-posten
   hos Loopia om Loopia ber om det.

## E-post – välj ett alternativ

**A. Vidarebefordring (gratis, rekommenderas i början)**
`hej@tradgardsboden.se` skickas vidare till din befintliga e-post (t.ex. Outlook).
1. Cloudflare → **Email → Email Routing → Get started**.
2. Lägg till adressen `hej@tradgardsboden.se` → mål: din vanliga e-postadress → bekräfta via mejl.
3. Cloudflare lägger själv in MX-posterna (`route1/route2/route3.mx.cloudflare.net`) och en SPF-post (TXT).
Obs: du kan ta emot men inte skicka *från* adressen utan extra inställning.

**B. Behåll e-postkonto hos Loopia**
Behåll exakt de MX- och TXT-poster Loopia har i dag (se anteckningen från steg 1) och lägg in dem
i Cloudflare DNS med **DNS only** (grått moln). Gör inte A och B samtidigt.

## Kontroll efter lansering
- [ ] https://tradgardsboden.se visar sidan med hänglås (HTTPS)
- [ ] https://www.tradgardsboden.se skickas vidare till adressen utan www
- [ ] Ett testmejl till hej@tradgardsboden.se kommer fram
- [ ] Byt **Production branch** till `main` när koden slagits ihop
- [ ] Lägg till webbplatsen i **Google Search Console** (verifiera via DNS-post i Cloudflare)
      och skicka in `https://tradgardsboden.se/sitemap-index.xml`

## Miljövariabler (senare etapper)
Läggs in i Cloudflare → **tradgardsboden → Settings → Variables and Secrets** – aldrig i koden.
Exempel som tillkommer i etapp 4 och senare: `TURNSTILE_SECRET_KEY`, `RESEND_API_KEY`,
`STRIPE_SECRET_KEY` (först testnyckel), `STRIPE_WEBHOOK_SECRET`. Exakt lista skrivs när funktionerna byggs.

## Kostnader
Loopia (domän) ca 100–250 kr/år. Cloudflare (Pages, DNS, HTTPS, e-postvidarebefordring): 0 kr.
