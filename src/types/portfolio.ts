/**
 * Portfolio & Case Study Page Types
 */

export interface PortfolioCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface PortfolioClient {
  id: string;
  name: string;
  slug: string;
  logo: string; // URL to client logo
  categoryId: string;
}

export interface PortfolioMetric {
  label: string;
  value: string | number;
}

export interface PortfolioProject {
  id: string;
  title: string;
  clientId: string;
  categoryId: string;
  description: string;
  fullDescription: string;
  problem: string;
  solution: string;
  image: string; // URL to project image (16:9)
  imageAlt: string;
  year: number;
  duration: string; // e.g., "3 months"
  teamSize: number;
  metrics?: PortfolioMetric[];
  relatedArticles?: string[]; // Article IDs
  createdDate: string;
}

export interface PortfolioArticle {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  content: string;
  published: boolean;
}
