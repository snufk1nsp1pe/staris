
export type Author = {
  name: string;
  picture: string;
};

export const degrees=['3','-2','-4', '5', '2', '4']
 export const colorPalette = [
    {
      //pink
      bg: 'bg-[#f9e3e9]',
      border: 'border-[#B83555]',
      text: 'text-[#57061a]',
      meta: 'text-[#7a3d4f]',
    },
    //purple
    {
      bg: 'bg-[#f0e3f9]',
      border: 'border-[#6535B8]',
      text: 'text-[#381d62]',
      meta: 'text-[#593d7a]',
    },
    //green
    {
      bg: 'bg-[#e3f9e3]',
      border: 'border-[#35B835]',
      text: 'text-[#1d621d]',
      meta: 'text-[#2e6b2e]',
    },
    //blue
    {
      bg: 'bg-[#e3ebf9]',
      border: 'border-[#3565B8]',
      text: 'text-[#1d3862]',
      meta: 'text-[#3d507a]',
    },
    //yellow
    {
      bg: 'bg-[#f7f5e9]',
      border: 'border-[#B8A135]',
      text: 'text-[#62561d]',
      meta: 'text-[#6c664c]',
    },
  ]

export type Post = {
  slug: string;
  title?: string;
  date?: string;
  tagline?: string;
  tags?: string[];
  colSpan?: string;
  rowSpan?: string;
  palette: {
    bg: string;
    border: string;
    text: string;
    meta: string;
  };
  featured?: string;
};

export type Review = {
  slug: string;
  title?:string;
  date?: string;
  featured?: string
  id?: string;
  image?: string;
  degree?: string;
  rating?: string;
  spoiler?: boolean;
}

export type Palette={
  border: string;
  bg: string;
  text: string;
  meta: string;
}
 export type Frontmatter={
  title: string;
  date: string;
  tags: string[];
  tagline: string;
  // Optional properties for layouts
  featured?: boolean;
  // Optional properties for boxes
  boxes?: boolean;
  box1: string;
  box1Heading: string[];
  box1Content: string[];
  box2: string;
  box2Heading: string[];
  box2Content: string[];
  stickers?: Sticker[]
 }

export interface TMDBMovie {
  backdrop_path: string | null
  poster_path: string | null
  title: string
  overview: string
  release_date: string
}

 export type ReviewFrontmatter={
  title: string;
  rating: string;
  id: string;
  image: string;
  spoiler: boolean;
 }

 export type Sticker = {
  src: string;
  x: number;
  y: number;
  size: number;
};
export type ActiveLinkProps = {
  href: string;
  children: React.ReactNode;
  tab?: string; 
};