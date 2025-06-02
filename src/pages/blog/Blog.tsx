import { useState, useMemo } from 'react';
import CustomSelectReUse from '../../components/Customselect';
import CustomSearch from '../../components/CustomSearch';

const BlogHomepageComponent = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'latest', label: 'Latest First' },
    { value: 'oldest', label: 'Oldest First' },
  ];

  const featuredPost = {
    id: 1,
    title: "MicCom Ventures into High Voltage Cable Production:",
    title2: "Boosting Nigeria's Energy Manufacturing Capacity",
    image: "/images/Blog/img1.jpg",
    featured: true,
    date: "January 27, 2025",
    link: "https://www.vanguardngr.com/2025/01/miccom-ventures-into-high-voltage-cable-production-to-boost-nigerias-energy-manufacturing-capacity/",
    type: "article"
  };
  
  const recentPosts = [
    {
      id: 2,
      title: "The Scoper Media:",
      title2: "MicCom's High Voltage Cable Production Initiative",
      date: "January 27, 2025",
      image: "/images/Blog/img1.jpg",
      link: "https://thescopermedia.com/miccom-ventures-into-high-voltage-cable-production-to-boost-nigerias-energy-manufacturing-capacity-the-scoper-media/",
      type: "article"
    },
    {
      id: 3,
      title: "MicCom CEO Adubi:",
      title2: "Strategic Partnerships with OAU and UI",
      date: "March 29, 2025",
      image: "/images/Blog/img3.jpeg",
      link: "https://www.energyfocusreport.com/miccom-ceo-adubi-forges-strategic-ties-with-oau-and-ui/",
      type: "article"
    },
    {
      id: 4,
      title: "MicCom Factory Tour 2025",
      title2: "Behind the Scenes of Cable Manufacturing",
      date: "March 27, 2025",
      image: "https://img.youtube.com/vi/auIwyTEO2dc/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=auIwyTEO2dc",
      type: "video"
    },
    {
      id: 5,
      title: "Corporate Overview:",
      title2: "MicCom Cables & Wires",
      date: "April 14, 2023",
      // Using hqdefault instead of maxresdefault for more reliable loading
      image: "https://img.youtube.com/vi/dzYu__Fe5_A/hqdefault.jpg",
      fallbackImage: "/images/Blog/video-thumbnail-default.jpg",
      link: "https://www.youtube.com/watch?v=dzYu__Fe5_A",
      type: "video"
    },
    {
      id: 6,
      title: "Quality Control Process",
      title2: "MicCom's Manufacturing Excellence",
      date: "June 22, 2022",
      image: "https://img.youtube.com/vi/eZn6otaxBfI/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=eZn6otaxBfI",
      type: "video"
    }
  ];

  const shouldShowFeatured = useMemo(() => {
    if (!searchQuery.trim()) return true;
    
    const query = searchQuery.toLowerCase();
    return featuredPost.title.toLowerCase().includes(query) || 
           featuredPost.title2.toLowerCase().includes(query);
  }, [searchQuery]);

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = [...recentPosts];

    // Search functionality
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.title2.toLowerCase().includes(query)
      );
    }

    // Date filtering
    switch (selectedFilter) {
      case 'latest':
        return filtered.sort((a, b) => 
          new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      case 'oldest':
        return filtered.sort((a, b) => 
          new Date(a.date).getTime() - new Date(b.date).getTime()
        );
      default:
        return filtered;
    }
  }, [recentPosts, selectedFilter, searchQuery]);

  return (
    <div className="px-[16px] py-[40px] md:px-[80px] md:py-[60px]">
      {/* Filter and Search */}
      <div className="flex flex-col md:flex-row md:gap-[60px] space-y-4 md:space-y-0 mb-[40px]  md:mb-[60px]">
        <div className="flex items-center gap-[10px] md:gap-[20px] flex-1">
          <span className="text-sm font-medium md:text-[20px] whitespace-nowrap">Filter By:</span>
          <div className="w-[275px] md:w-full">
            <CustomSelectReUse
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
      
      {/* Featured Post */}
      {shouldShowFeatured && (
        <a href={featuredPost.link} target="_blank" rel="noopener noreferrer" className="block">
          <div className="w-full h-[300px] md:h-[500px] mb-[40px] md:mb-[40px] relative md:rounded-[6px]">
            <img 
              src={featuredPost.image} 
              alt={featuredPost.title}
              className="w-full h-full object-cover brightness-90 md:rounded-[6px] rounded-[4px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-[40px]">
                <div className="text-white">
                  <span className="text-xs md:text-[16px] rounded-sm mb-[10px] inline-block md:leading-[24px]">Featured</span>
                  <h2 className="text-xl md:text-2xl font-medium leading-tight md:leading-[42px] mb-1">{featuredPost.title}</h2>
                  <h2 className="text-xl md:text-2xl font-medium leading-tight md:leading-[42px] mb-1">{featuredPost.title2}</h2>
                </div>
              </div>
            </div>
          </div>
        </a>
      )}
      
      {/* Recent Posts section */}
      <div>
        {/* Recent Posts Heading */}
        <div className="flex justify-between items-center mb-[40px]">
          <h3 className="text-[20px] md:text-[22px] font-medium md:leading-[50px] text-[#001D0D]">
            Recent blog posts
          </h3>
          <p className="text-sm text-gray-600">
            {filteredAndSortedPosts.length} {filteredAndSortedPosts.length === 1 ? 'post' : 'posts'} found
          </p>
        </div>
        
        {/* Recent Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[20px]">
          {filteredAndSortedPosts.length > 0 ? (
            filteredAndSortedPosts.map(post => (
              <a key={post.id} 
                 href={post.link} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="block">
                <div className="rounded-lg overflow-hidden bg-white relative h-[200px] md:h-[400px] group">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover brightness-90 transition-all duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== post.fallbackImage && post.fallbackImage) {
                        target.src = post.fallbackImage;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                    {post.type === 'video' && (
                      <div className="absolute top-4 right-4">
                        <svg className="w-8 h-8 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 w-full p-4 md:px-[20px] md:py-[40px]">
                      <p className="text-xs md:text-[16px] md:leading-[24px] text-[#F3F3F3] mb-1">{post.date}</p>
                      <h3 className="font-medium text-sm md:text-[16px] leading-tight text-[#F3F3F3] md:leading-[26px]">{post.title}</h3>
                      <h3 className="font-medium text-sm md:text-[16px] leading-tight text-[#F3F3F3] md:leading-[26px]">{post.title2}</h3>
                    </div>
                  </div>
                </div>
              </a>
            ))
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