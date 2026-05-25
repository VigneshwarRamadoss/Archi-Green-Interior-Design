import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

export type Project = {
  slug: string;
  title: string;
  location: string;
  year: number;
  category: "Residential" | "Commercial" | "Hospitality" | "Renovation";
  image: string;
  excerpt: string;
};

export const PROJECTS: Project[] = [
  { slug: "forest-house", title: "Forest House", location: "Lidingö, SE", year: 2025, category: "Residential", image: p1, excerpt: "A canopy-level home built around three mature oaks." },
  { slug: "atelier-noir", title: "Atelier Noir", location: "Lisbon, PT", year: 2024, category: "Hospitality", image: p2, excerpt: "Boutique hotel lobby in travertine and brass." },
  { slug: "kvarter-studio", title: "Kvarter Studio", location: "Stockholm, SE", year: 2024, category: "Commercial", image: p3, excerpt: "A biophilic workplace for a software studio." },
  { slug: "stair-house", title: "Stair House", location: "Oslo, NO", year: 2023, category: "Renovation", image: p4, excerpt: "A timber-and-steel stair as the heart of a townhouse." },
  { slug: "linen-cottage", title: "Linen Cottage", location: "Bohuslän, SE", year: 2023, category: "Residential", image: p5, excerpt: "A linen-draped retreat on the Swedish coast." },
  { slug: "vault-restaurant", title: "Vault", location: "Berlin, DE", year: 2022, category: "Hospitality", image: p6, excerpt: "Vaulted dining rooms in burnt clay and oak." },
];

export const SERVICES = [
  { title: "Residential Interior Design", desc: "Considered homes designed around the rituals of daily life — from concept to last detail." },
  { title: "Commercial Interior Design", desc: "Workplaces and retail environments that perform commercially and feel human." },
  { title: "Architecture & Space Planning", desc: "Architectural form, light and circulation — planned from first sketch to construction." },
  { title: "Hospitality Design", desc: "Restaurants, hotels and members' clubs with a distinct narrative and atmosphere." },
  { title: "Renovation & Refurbishment", desc: "Heritage buildings reimagined for contemporary life, with respect for what was there." },
  { title: "Sustainable Design Consulting", desc: "Material strategy, embodied carbon and lifecycle thinking baked into every decision." },
];

export const TEAM = [
  { name: "Elin Bergström", role: "Founder · Principal Architect", bio: "Twenty years across residential and hospitality. Trained at KTH, formerly Snøhetta." },
  { name: "Jonas Lindqvist", role: "Design Director", bio: "Leads concept and materiality across the studio. Cabinetmaker before architect." },
  { name: "Mira Okonkwo", role: "Head of Interiors", bio: "Shapes interior atmosphere, from layout to the last linen choice." },
  { name: "Sofia Almeida", role: "Senior Architect", bio: "Lisbon studio lead. Specialises in adaptive reuse of historic buildings." },
  { name: "Henrik Vinter", role: "Sustainability Lead", bio: "Material strategy and embodied-carbon analysis for every project." },
  { name: "Aiko Tanaka", role: "Project Architect", bio: "Detail-obsessed. Brings precision to every construction document we issue." },
];

export const POSTS = [
  { slug: "material-honesty", title: "On Material Honesty", excerpt: "Why we let oak look like oak, and what that means for the rooms it builds.", date: "May 2026", category: "Philosophy", image: p4 },
  { slug: "sustainable-tropics", title: "Designing Tropical Homes That Breathe", excerpt: "Passive cooling, local stone, and the case against the glass box.", date: "April 2026", category: "Sustainability", image: p5 },
  { slug: "the-art-of-the-staircase", title: "The Art of the Staircase", excerpt: "A staircase is not circulation — it is choreography.", date: "March 2026", category: "Architecture", image: p1 },
];

export const STATS = [
  { value: "120+", label: "Projects" },
  { value: "15", label: "Years" },
  { value: "8", label: "Awards" },
  { value: "6", label: "Countries" },
];
