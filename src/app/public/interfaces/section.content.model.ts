import { LogoTextAndButtonCard, TestimonialCard } from './card.model';
import { NumberData } from './data.model';
import { Link, SocialMediaLink } from './../../shared/interfaces/link.model';

export interface TopHeroContent {
  id: string;
  title: string;
  subtitle: string;
  button: Link;
  bgImage: string;
}

export interface ServicesContent {
  id: string;
  header: string;
  title: string;
  cards: LogoTextAndButtonCard[];
}

export interface DataSectionContent {
  id: string;
  title: string;
  numbers: NumberData[];
  bgImage: string;
}

export interface AboutContent {
  id: string;
  header: string;
  title: string;
  description: string[];
}

export interface TestimonialsContent {
  id: string;
  header: string;
  entries: TestimonialCard[];
}

export interface TextWithImageContent {
  id: string;
  header: string;
}

export interface ContactContent {
  id: string;
  header: string;
  title: string;
  address: string;
  email: string;
  socialMedia: Record<string, SocialMediaLink>;
  bgImage: string;
}
