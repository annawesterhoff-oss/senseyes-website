import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import type { SchemaContext } from 'astro:content';

/*
  Innehållsmodell för Trädgårdsboden.

  Grundprincip: inga uppgifter hittas på. Alla faktafält får vara tomma (null)
  och visas då som en tydlig platshållare på sidan. Ett fält fylls först när
  uppgiften är kontrollerad mot en källa (plantskola, leverantör, SLU m.fl.).

  Sortfakta (smak, skördetid, självfertilitet …) hör till sorten.
  Grundstam, storlek, pris och tillgänglighet hör till det konkreta
  erbjudandet från en leverantör – samma sort kan finnas på flera grundstammar.
*/

const tomText = z.string().nullable().default(null);

// Bilder läggs i src/assets/bilder/ och optimeras automatiskt vid bygget.
const bild = (image: SchemaContext['image']) => z.object({
  src: image(),
  alt: z.string(),
  // Fotograf/leverantör och licens – krävs för att bilden ska få användas.
  kalla: z.string(),
  // true endast om bilden verkligen föreställer just den här sorten.
  visar_sorten: z.boolean().default(false),
});

const erbjudande = z.object({
  benamning: z.string(), // t.ex. "Barrotat, 2-årigt"
  grundstam: tomText,
  slut_hojd: tomText, // t.ex. "3–4 m"
  slut_bredd: tomText,
  tradstorlek: z.enum(['liten', 'medel', 'stor']).nullable().default(null),
  pris_sek: z.number().positive().nullable().default(null), // inkl. moms
  leveransalternativ: z
    .array(z.enum(['skane_direkt', 'avhamtning_sankt_olof', 'ovriga_sverige']))
    .default([]),
  leveranstid: tomText,
  tillganglighet: z
    .enum(['ej_kontrollerad', 'finns', 'begransad', 'slut', 'kommande'])
    .default('ej_kontrollerad'),
});

const produkter = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/produkter' }),
  schema: ({ image }) => z.object({
    namn: z.string(),
    // Fruktträd först – fler kategorier kan läggas till utan ombyggnad.
    kategori: z.enum(['fruktrad', 'barbuskar', 'perenner', 'rosor', 'hackvaxter']),
    frukttyp: z.enum(['appeltrad', 'paron', 'plommon', 'korsbar', 'persika']).nullable().default(null),
    sort: z.string(),
    publicerad: z.boolean().default(true),
    utvald: z.boolean().default(false),
    ordning: z.number().default(100),

    ingress: tomText,
    bilder: z.array(bild(image)).default([]),
    smak_och_anvandning: tomText,
    skordetid: tomText,
    skordeperiod: z.enum(['tidig', 'medel', 'sen']).nullable().default(null),
    odlingszon: tomText, // t.ex. "I–IV"
    odlingszon_max: z.number().int().min(1).max(8).nullable().default(null),
    sjalvfertil: z.enum(['ja', 'delvis', 'nej']).nullable().default(null),
    pollineringspartners: z.array(z.string()).default([]),
    planteringslage: tomText,
    solkrav: z.enum(['sol', 'halvskugga']).nullable().default(null),
    skotselrad: tomText,

    erbjudanden: z.array(erbjudande).default([]),

    // Guiden "Hitta rätt fruktträd" använder bara verifierade sorter.
    faktagranskning: z
      .object({
        verifierad: z.boolean().default(false),
        kallor: z.array(z.object({ titel: z.string(), url: z.string().url().nullable().default(null) })).default([]),
        senast_granskad: z.coerce.date().nullable().default(null),
      })
      .default({ verifierad: false, kallor: [], senast_granskad: null }),

    seo_titel: tomText,
    seo_beskrivning: tomText,
  }),
});

const kategorier = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/kategorier' }),
  schema: ({ image }) => z.object({
    namn: z.string(), // "Äppelträd"
    frukttyp: z.enum(['appeltrad', 'paron', 'plommon', 'korsbar', 'persika']),
    kort_text: z.string(),
    ordning: z.number().default(100),
    bild: bild(image).nullable().default(null),
    seo_titel: tomText,
    seo_beskrivning: tomText,
  }),
});

const artiklar = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artiklar' }),
  schema: ({ image }) => z.object({
    titel: z.string(),
    ingress: z.string(),
    publicerad: z.boolean().default(false),
    datum: z.coerce.date().nullable().default(null),
    bild: bild(image).nullable().default(null),
    seo_beskrivning: tomText,
  }),
});

export const collections = { produkter, kategorier, artiklar };
