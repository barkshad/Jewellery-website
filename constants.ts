import { Product, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "The Aurora Diamond Solitaire",
    price: 4500,
    category: "Rings",
    image: "https://picsum.photos/id/119/800/800", // Metallic feel
    description: "A timeless classic featuring a 1.5 carat ethically sourced diamond set in 18k yellow gold. The band is hand-finished for a satin comfort fit.",
    materials: ["18k Yellow Gold", "1.5ct Diamond", "Satin Finish"],
    isFeatured: true
  },
  {
    id: 2,
    name: "Celestial Sapphire Pendant",
    price: 2800,
    category: "Necklaces",
    image: "https://picsum.photos/id/158/800/800", // Abstract/Performance context
    description: "Deep blue sapphire surrounded by a halo of pave diamonds, suspended on a delicate platinum chain. Inspired by the midnight sky.",
    materials: ["Platinum", "Blue Sapphire", "Pave Diamonds"],
    isFeatured: true
  },
  {
    id: 3,
    name: "Eternity Gold Cuff",
    price: 1200,
    category: "Bracelets",
    image: "https://picsum.photos/id/146/800/800", 
    description: "A bold statement piece crafted from solid 14k gold with a hammered texture that catches the light beautifully.",
    materials: ["14k Gold", "Hammered Finish"],
    isFeatured: true
  },
  {
    id: 4,
    name: "Pearl Drop Earrings",
    price: 850,
    category: "Earrings",
    image: "https://picsum.photos/id/250/800/800",
    description: "Luminous freshwater pearls dangling from a vintage-inspired gold leaf setting. Perfect for bridal or evening wear.",
    materials: ["Freshwater Pearl", "18k Gold Plated"],
    isFeatured: false
  },
  {
    id: 5,
    name: "Rose Gold Promise Band",
    price: 950,
    category: "Rings",
    image: "https://picsum.photos/id/352/800/800",
    description: "Delicate and romantic, this rose gold band features intricate filigree work and small diamond accents.",
    materials: ["14k Rose Gold", "Conflict-free Diamonds"],
    isFeatured: false
  },
  {
    id: 6,
    name: "Emerald Cut Tennis Bracelet",
    price: 5200,
    category: "Bracelets",
    image: "https://picsum.photos/id/449/800/800",
    description: "A modern take on the classic tennis bracelet featuring emerald-cut white sapphires for exceptional brilliance.",
    materials: ["White Gold", "White Sapphires"],
    isFeatured: false
  },
  {
    id: 7,
    name: "Vintage Ruby Studs",
    price: 1600,
    category: "Earrings",
    image: "https://picsum.photos/id/526/800/800",
    description: "Vibrant pigeon-blood rubies set in a secure bezel setting. A pop of color that transcends trends.",
    materials: ["18k Yellow Gold", "Ruby"],
    isFeatured: true
  },
  {
    id: 8,
    name: "Custom Heritage Locket",
    price: 3200,
    category: "Custom",
    image: "https://picsum.photos/id/628/800/800",
    description: "Work with our artisans to engrave your family crest or initials on this heir-loom quality gold locket.",
    materials: ["Solid 18k Gold", "Custom Engraving"],
    isFeatured: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Eleanor V.",
    location: "London, UK",
    quote: "The craftsmanship is simply unparalleled. My engagement ring shines as brightly today as it did five years ago."
  },
  {
    id: 2,
    name: "James C.",
    location: "New York, USA",
    quote: "Buying jewellery online can be daunting, but Aurora made it seamless. The packaging was an experience in itself."
  },
  {
    id: 3,
    name: "Sophia L.",
    location: "Paris, France",
    quote: "A true gem of a store. Their custom design team brought my grandmother's vision to life perfectly."
  }
];
