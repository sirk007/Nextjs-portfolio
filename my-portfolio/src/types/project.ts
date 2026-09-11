export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  tech: string;
  featured: boolean;
  createdAt: string;
}

export interface CreateProjectData {
  title: string;
  slug: string;
  description: string;
  tech: string;
  featured?: boolean;
}
