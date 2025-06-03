import { Post, FilterOption } from '../types/blog';

export const filterOptions: FilterOption[] = [
  { value: 'all', label: 'All' },
  { value: 'latest', label: 'Latest Posts' },
  { value: 'oldest', label: 'Oldest Posts' },
  { value: 'video', label: 'Videos' },
  { value: 'article', label: 'Articles' },
];

export const featuredPost: Post = {
  id: 1,
  title: "MicCom Ventures into High Voltage Cable Production:",
  title2: "Boosting Nigeria's Energy Manufacturing Capacity",
  image: "/images/Blog/img1.jpg",
  featured: true,
  date: "January 27, 2025",
  link: "https://www.vanguardngr.com/2025/01/miccom-ventures-into-high-voltage-cable-production-to-boost-nigerias-energy-manufacturing-capacity/",
  type: "article"
};

export const recentPosts: Post[] = [
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
    title: "MicCom Factory Tour 2025:",
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
