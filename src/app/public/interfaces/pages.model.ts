import {
  AboutContent, ContactContent, DataSectionContent,
  ServicesContent, TestimonialsContent, TopHeroContent
} from "./section.content.model";
export interface LandingPage {
  topHero: TopHeroContent,
  services: ServicesContent,
  data: DataSectionContent,
  about: AboutContent,
  testimonials: TestimonialsContent,
  cta: ContactContent,
}
