export type PageId = 'home' | 'services' | 'about' | 'contact' | 'cases';

export interface ServiceCard {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tagline: string;
}
