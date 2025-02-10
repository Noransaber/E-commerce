declare module "next/font/google" {
    import { CSSProperties } from "react";
  
    export type GoogleFontOptions = {
      subsets?: string[];
      weight?: string[];
      variable?: string;
      display?: CSSProperties["fontDisplay"];
    };
  
    export function Lato(options: GoogleFontOptions): {
      className: string;
      variable: string;
    };
  }
  interface NavLinkProps {
    href: string;
    label: string;
    className?: string;
}  
  
interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  btnLabel: string;
  imgUrl: string;
}

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
}
interface Product {
  id: number;
  category: string;
  image: string;
  name: string;
  description: string;
  price: number;
  rating: number;
}
interface Testimonial {
  name: string; // Name of the person giving the testimonial
  jobTitle: string; // Job title of the person
  description: string; // The testimonial description
  img: string; // URL of the profile image
}
interface SpecialOfferSectionProps {
  title: string;
  subtitle: string;
  btnLabel: string;
  imgUrl: string;
}
// Define an interface for the resolved value
interface ParamsResult {
  id: string; // or number, depending on the type of id
}
