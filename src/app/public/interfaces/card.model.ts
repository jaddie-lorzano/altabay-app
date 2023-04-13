import { Link } from './../../shared/interfaces/link.model';
export interface LogoTextAndButtonCard {
  logo: string;
  title: string;
  description: string;
  button: Link;
}

export interface TestimonialCard {
  name: string;
  message: string;
  affiliation: string;
}
