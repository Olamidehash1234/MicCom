import { useMemo } from 'react';
import { Post, FilterType } from '../types/blog';

export const useBlogFilter = (
  posts: Post[],
  selectedFilter: FilterType,
  searchQuery: string
) => {
  return useMemo(() => {
    let filtered = [...posts];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.title2.toLowerCase().includes(query)
      );
    }

    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    switch (selectedFilter) {
      case 'video':
        return filtered.filter(post => post.type === 'video');
      case 'article':
        return filtered.filter(post => post.type === 'article');
      case 'latest':
        return filtered
          .filter(post => new Date(post.date) >= sixMonthsAgo)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      case 'oldest':
        return filtered
          .filter(post => new Date(post.date) < sixMonthsAgo)
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      default:
        return filtered;
    }
  }, [posts, selectedFilter, searchQuery]);
};
