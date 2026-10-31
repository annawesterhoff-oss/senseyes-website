import type { CollectionEntry } from 'astro:content';

type Frukttyp = NonNullable<CollectionEntry<'produkter'>['data']['frukttyp']>;

export const frukttypNamn: Record<Frukttyp, { singular: string; plural: string; slug: string }> = {
  appeltrad: { singular: 'Äppelträd', plural: 'Äppelträd', slug: 'appeltrad' },
  paron: { singular: 'Päronträd', plural: 'Päronträd', slug: 'parontrad' },
  plommon: { singular: 'Plommonträd', plural: 'Plommonträd', slug: 'plommontrad' },
  korsbar: { singular: 'Körsbärsträd', plural: 'Körsbärsträd', slug: 'korsbarstrad' },
  persika: { singular: 'Persikoträd', plural: 'Persikoträd', slug: 'persikotrad' },
};

export const kategoriUrl = (frukttyp: Frukttyp) => `/fruktrad/${frukttypNamn[frukttyp].slug}/`;

export function produktUrl(p: CollectionEntry<'produkter'>) {
  const typ = p.data.frukttyp ? frukttypNamn[p.data.frukttyp].slug : p.data.kategori;
  return `/fruktrad/${typ}/${p.id}/`;
}

const kr = new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK', maximumFractionDigits: 0 });

/** Lägsta kända pris bland erbjudandena – annars en ärlig platshållartext. */
export function prisText(p: CollectionEntry<'produkter'>) {
  const priser = p.data.erbjudanden.map((e) => e.pris_sek).filter((x): x is number => x !== null);
  if (priser.length === 0) return 'Pris bekräftas vid förfrågan';
  const min = Math.min(...priser);
  return `${priser.length > 1 ? 'Från ' : ''}${kr.format(min)} inkl. moms`;
}
