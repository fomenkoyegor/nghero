interface Powerstats {
  intelligence?: number;
  strength?: number;
  speed?: number;
  durability?: number;
  power?: number;
  combat?: number;
}

interface Biography {
  'full-name'?: string;
  'alter-egos'?: string;
  aliases?: Array<any>;
  'place-of-birth'?: string;
  'first-appearance'?: string;
  publisher?: string;
  alignment?: string;
}

interface Appearance {
  gender?: string;
  race?: string;
  height?: Array<any>;
  weight?: Array<string>;
  'eye-color'?: string;
  'hair-color'?: string;
}

interface Work {
  occupation?: string;
  base?: string;
}

interface Connections {
  'group-affiliation'?: string;
  relatives?: string;
}

interface Image {
  url?: string;
}

interface Hero {
  response: string;
  id: number;
  name: string;
  powerstats?: Powerstats;
  biography?: Biography;
  appearance?: Appearance;
  work?: Work;
  connections?: Connections;
  image?: Image;
}

export {Hero, Image, Connections, Work, Appearance, Biography, Powerstats};
