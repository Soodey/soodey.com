export type GalleryCategory = 'toys' | 'tools' | 'kitchen';

export interface GalleryItem {
  id: string;
  episode: string;
  title: string;
  subtitle: string;
  href: string;
  category: GalleryCategory;
  categoryLabel: string;
  year: string;
  tag: string;
  preview: 'kitchen' | 'meme' | 'dvd' | 'clock' | 'ascii' | 'hero' | 'storm';
  image?: string;
  featured?: boolean;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'please-god',
    episode: '01',
    title: 'Source Tells Me',
    subtitle: 'HiDPI Tim Pool tweet meme generator. Type whatever, flip dark/light, export crisp PNG.',
    href: '/please_god/',
    category: 'tools',
    categoryLabel: 'Meme Tool',
    year: '2026',
    tag: 'Canvas · PNG',
    preview: 'meme',
    featured: true,
  },
  {
    id: 'dvd-corner',
    episode: '02',
    title: 'DVD Corner Lab',
    subtitle: 'Rebuilt from the 2019 marquee gag. 60fps bounce physics, corner-hit counter, near-miss telemetry, multi-DVD chaos.',
    href: '/toys/dvd/',
    category: 'toys',
    categoryLabel: 'Toy',
    year: '2019 → 2026',
    tag: 'Physics · Chaos',
    preview: 'dvd',
    featured: true,
  },
  {
    id: 'recipes',
    episode: '03',
    title: 'Recipes',
    subtitle: 'Zero-story recipe cards with gram/US unit toggles, checkable steps, Screen Awake cook mode, and clean printouts.',
    href: '/recipes/',
    category: 'kitchen',
    categoryLabel: 'Useful',
    year: '2026',
    tag: 'Cook Mode',
    preview: 'kitchen',
    image: '/recipes/thanksgiving-mac-and-cheese/thanksgiving-mac-and-cheese.jpg',
  },
  {
    id: 'baby-names',
    episode: '04',
    title: 'Baby Name Roulette',
    subtitle: 'All four legacy baby-name generators consolidated into one: 1,200 weighted SSA names, 124 Dota 2 heroes, chaos mashups, custom last names & shareable links.',
    href: '/toys/baby-names/',
    category: 'toys',
    categoryLabel: 'Joke · Consolidated',
    year: '2019 → 2026',
    tag: 'SSA + Dota · Confetti',
    preview: 'hero',
  },
  {
    id: 'ascii-lab',
    episode: '05',
    title: 'ASCII Machine',
    subtitle: 'Inspired by a 94KB 2019 portrait gag. Drop any image to render live high-contrast ASCII art and export text or PNG.',
    href: '/toys/ascii/',
    category: 'tools',
    categoryLabel: 'Tool',
    year: '2019 → 2026',
    tag: 'Image → Text',
    preview: 'ascii',
  },
  {
    id: 'sweep-clock',
    episode: '06',
    title: 'Sweep Chronometer',
    subtitle: 'Modernized from the 2019 canvas clock. Buttery 60fps sweeping second hand, switchable dials, fullscreen desk mode.',
    href: '/toys/clock/',
    category: 'tools',
    categoryLabel: 'Tool',
    year: '2019 → 2026',
    tag: '60fps · Fullscreen',
    preview: 'clock',
  },
  {
    id: 'villain-storm',
    episode: '07',
    title: 'Villain Storm Studio',
    subtitle: 'Rebuilt from a 2015 lightning gag. Drop any portrait into procedural rain, branching lightning & synth thunder, then snapshot PNG.',
    href: '/toys/storm/',
    category: 'toys',
    categoryLabel: 'Toy · Rebuilt from 2015',
    year: '2015 → 2026',
    tag: 'Rain · Lightning · Audio',
    preview: 'storm',
  },
];
