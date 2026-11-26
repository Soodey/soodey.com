export type GalleryCategory = 'tools' | 'toys' | 'kitchen';

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  category: GalleryCategory;
  categoryLabel: string;
  preview: 'kitchen' | 'meme' | 'dvd' | 'clock' | 'ascii' | 'baby' | 'storm';
  image?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'recipes',
    title: 'Recipes',
    subtitle: 'Tested recipes with gram and US toggles, step tracking, and screen-awake cook mode.',
    href: '/recipes/',
    category: 'kitchen',
    categoryLabel: 'Kitchen',
    preview: 'kitchen',
    image: '/recipes/thanksgiving-mac-and-cheese/thanksgiving-mac-and-cheese.jpg',
  },
  {
    id: 'baby-names',
    title: 'Baby Name Generator',
    subtitle: 'Over 3,600 weighted US baby names with popularity filters, middle names, and a shortlist.',
    href: '/toys/baby-names/',
    category: 'tools',
    categoryLabel: 'Tool',
    preview: 'baby',
  },
  {
    id: 'please-god',
    title: 'Source Tells Me',
    subtitle: 'Tim Pool tweet meme generator with light and dark mode and instant PNG export.',
    href: '/please_god/',
    category: 'toys',
    categoryLabel: 'Meme',
    preview: 'meme',
  },
  {
    id: 'dvd-corner',
    title: 'DVD Bounce',
    subtitle: 'Bouncing DVD screensaver with corner-hit tracking, logo collisions, and multi-logo mode.',
    href: '/toys/dvd/',
    category: 'toys',
    categoryLabel: 'Toy',
    preview: 'dvd',
  },
  {
    id: 'ascii-lab',
    title: 'ASCII Converter',
    subtitle: 'Drop any image to turn it into high-contrast ASCII art in the browser. Copy text or export PNG.',
    href: '/toys/ascii/',
    category: 'tools',
    categoryLabel: 'Tool',
    preview: 'ascii',
  },
  {
    id: 'sweep-clock',
    title: 'Analog Clock',
    subtitle: 'Full-screen sweeping analog clock with Obsidian, Swiss White, and Phosphor dial themes.',
    href: '/toys/clock/',
    category: 'tools',
    categoryLabel: 'Tool',
    preview: 'clock',
  },
  {
    id: 'karl',
    title: 'Unspeakable Evil',
    subtitle: 'Rain, branching lightning, thunder audio, and Karl looming in the storm.',
    href: '/karl/',
    category: 'toys',
    categoryLabel: 'Classic',
    preview: 'storm',
    image: '/karl/karl_evil.png',
  },
];
