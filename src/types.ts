export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Social Media' | 'Email Marketing' | 'Web Design' | 'App Design' | 'Personal Projects';
  image: string;
  description: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}
