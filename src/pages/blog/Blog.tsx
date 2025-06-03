import { useState } from 'react';
import { PostCard } from '../../components/blog/PostCard';
import { useBlogFilter } from '../../hooks/useBlogFilter';
import { FilterType } from '../../types/blog';
import CustomSelectReUse from '../../components/Customselect';
import CustomSearch from '../../components/CustomSearch';
import { featuredPost, recentPosts, filterOptions } from '../../data/blogData';

const BlogHomepageComponent = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useBlogFilter(recentPosts, selectedFilter, searchQuery);
  const showFeatured = useBlogFilter([featuredPost], selectedFilter, searchQuery).length > 0;

  return (
    <div className="px-[16px] py-[40px] md:px-[80px] md:py-[60px]">
      {/* Filter and Search */}
      <div className="flex flex-col md:flex-row md:gap-[60px] space-y-4 md:space-y-0 mb-[40px]  md:mb-[60px]">
        <div className="flex items-center gap-[10px] md:gap-[20px] flex-1">
          <span className="text-sm font-medium md:text-[20px] whitespace-nowrap">Filter By:</span>
          <div className="w-[275px] md:w-full">
            <CustomSelectReUse<FilterType>
              options={filterOptions}
              value={selectedFilter}
              onChange={setSelectedFilter}
              placeholder="Select category"
            />
          </div>
        </div>
        
        <div className="w-full md:w-full flex-1">
          <CustomSearch
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search"
          />
        </div>
      </div>
      
      {/* Featured Post - Only show if it matches current filter/search */}
      {showFeatured && <PostCard post={featuredPost} isFeatured />}
      
      {/* Recent Posts section */}
      <div>
        {/* Update heading based on filter */}
        <div className="flex justify-between items-center mb-[40px]">
          <h3 className="text-[20px] md:text-[22px] font-medium md:leading-[50px] text-[#001D0D]">
            {selectedFilter === 'latest' ? 'Posts from last 6 months' :
             selectedFilter === 'oldest' ? 'Older posts' :
             selectedFilter === 'video' ? 'Video content' :
             selectedFilter === 'article' ? 'Articles' :
             'All posts'}
          </h3>
          <p className="text-sm text-gray-600">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
          </p>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[20px]">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => <PostCard key={post.id} post={post} />)
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500">No posts found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogHomepageComponent;