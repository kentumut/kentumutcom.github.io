export interface Course {
  id: string;
  title: string;
  provider: string;
  icon: string;
  category: 'programming' | 'ml-quantum';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
}