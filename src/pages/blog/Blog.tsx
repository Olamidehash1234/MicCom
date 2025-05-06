import { useState } from 'react';
import CustomSelectReUse from '../../components/Customselect';
import CustomSearch from '../../components/CustomSearch';

const BlogHomepageComponent = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'events', label: 'Events' },
    { value: 'products', label: 'Products' },
    { value: 'technology', label: 'Technology' },
  ];

  const featuredPost = {
    id: 1,
    title: "Powering Progress: ",
    title2: "How MicCom Cables Support Infrastructure Across Africa",
    email: "sales@miccomcables.com",
    image: "/images/Blog/poll.png", // Replace with your actual image
    featured: true,
    date: "April 29, 2025"
  };
  
  const recentPosts = [
    {
      id: 2,
      title: "From Copper to Innovation:",
      title2: " What Makes Our Cables Industry-Leading",
      date: "April 29, 2025",
      image: "/images/Blog/poll-small.png", 
    },
    {
      id: 3,
      title: "Event Recap:",
      title2: "MicCom at the Africa Energy Expo 2025",
      date: "April 29, 2025",
      image: "/images/Blog/poll-small.png", 
    },
    {
      id: 4,
      title: "ISO 45001:2018 -",
      title2: " What This Certification Means for You",
      date: "April 29, 2025",
      image: "/images/Blog/poll-small.png", 
    }
  ];

  return (
    <div className="px-[16px] py-[40px] md:p-[80px]">
      {/* Filter and Search */}
      <div className="flex flex-col md:flex-row justify-between mb-[60px] md:mb-[80px] space-y-4 md:space-y-0">
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium md:text-[20px]">Filter By:</span>
          <div className="w-[275px] md:w-[550px]">
            <CustomSelectReUse
              options={filterOptions}
              value={selectedFilter}
              onChange={setSelectedFilter}
              placeholder="Select category"
            />
          </div>
        </div>
        
        <div className="w-full md:w-[550px]">
          <CustomSearch
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search"
          />
        </div>
      </div>
      
      {/* Featured Post */}
      <div className="w-full h-[300px] md:h-[500px] mb-[40px] md:mb-[40px] relative md:rounded-[6px]">
        <img 
          src={featuredPost.image} 
          alt={featuredPost.title}
          className="w-full h-full object-cover md:rounded-[6px] rounded-[4px]"
        />
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-[40px]">
          <div className="text-white">
            <span className="text-xs md:text-[16px] rounded-sm mb-[10px] inline- md:leading-[24px]">Featured</span>
            <h2 className="text-xl md:text-2xl font-medium leading-tight md:leading-[42px] mb-1">{featuredPost.title}</h2>
            <h2 className="text-xl md:text-2xl font-medium leading-tight md:leading-[42px] mb-1">{featuredPost.title2}</h2>
            <p className="text-[14px] md:text-[16px] md:leading-[24px]">{featuredPost.email}</p>
          </div>
        </div>
      </div>
      
      {/* Recent Posts Heading */}
      <h3 className="text-[20px] md:text-[22px] font-medium mb-[40px] md:mb-[40px] md:leading-[50px] text-[#001D0D]">Recent blog posts</h3>
      
      {/* Recent Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[20px]">
        {recentPosts.map(post => (
          <div key={post.id} className="rounded-lg overflow-hidden bg-white relative h-[200px] md:h-[400px]">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 md:px-[20px] md:py-[40px] ">
              <p className="text-xs md:text-[16px] md:leading-[24px] text-[#F3F3F3] mb-1">{post.date}</p>
              <h3 className="font-medium text-sm md:text-[16px] leading-tight text-[#F3F3F3] md:leading-[26px]">{post.title}</h3>
              <h3 className="font-medium text-sm md:text-[16px] leading-tight text-[#F3F3F3] md:leading-[26px]">{post.title2}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogHomepageComponent;