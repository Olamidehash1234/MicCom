export interface Post {
  id: number;
  title: string;
  title2: string;
  date: string;
  image: string;
  link: string;
  type: 'video' | 'article';
  fallbackImage?: string;
  featured?: boolean;
}

export type FilterType = 'all' | 'latest' | 'oldest' | 'video' | 'article';

export interface FilterOption {
  value: FilterType;
  label: string;
}
