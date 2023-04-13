import { Link } from './../../shared/interfaces/link.model';
export interface Navigation {
  menu: NavLink[];
  viewSlots?: Link;
  logo?: string;
}

export interface NavLink extends Link {
  hide?: boolean;
}
