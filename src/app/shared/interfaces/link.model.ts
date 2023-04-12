export interface Link {
  text: string;
  url: string;
  target?: string;
}

export interface SocialMediaLink extends Link {
  logoUrl?: string;
}
