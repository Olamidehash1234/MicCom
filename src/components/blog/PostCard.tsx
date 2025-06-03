import { Post } from '../../types/blog';

interface PostCardProps {
  post: Post;
  isFeatured?: boolean;
}

export const PostCard = ({ post, isFeatured = false }: PostCardProps) => {
  const cardClasses = isFeatured 
    ? "w-full h-[300px] md:h-[500px] mb-[40px] md:mb-[40px] relative md:rounded-[6px]"
    : "rounded-lg overflow-hidden bg-white relative h-[200px] md:h-[400px] group";

  return (
    <a href={post.link} target="_blank" rel="noopener noreferrer" className="block">
      <div className={cardClasses}>
        <img 
          src={post.image} 
          alt={post.title}
          className={`w-full h-full object-cover brightness-90 ${!isFeatured && 'transition-all duration-300 group-hover:scale-105'} ${isFeatured && 'md:rounded-[6px] rounded-[4px]'}`}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src !== post.fallbackImage && post.fallbackImage) {
              target.src = post.fallbackImage;
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
          {post.type === 'video' && !isFeatured && (
            <div className="absolute top-4 right-4">
              <svg className="w-8 h-8 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          )}
          <div className="absolute bottom-0 left-0 w-full p-4 md:px-[20px] md:py-[40px]">
            {isFeatured && (
              <span className="text-xs md:text-[16px] bg-white/5 backdrop-blur-[5px] px-[20px] py-1 rounded-[17px] mb-[10px] inline-block md:leading-[24px] text-white border-[0.2px] border-[#fff]">Featured</span>
            )}
            <p className="text-xs md:text-[16px] md:leading-[24px] text-[#F3F3F3] mb-1">{post.date}</p>
            <h3 className={`font-medium ${isFeatured ? 'text-xl md:text-2xl' : 'text-sm md:text-[16px]'} leading-tight text-[#F3F3F3] md:leading-[36px]`}>{post.title}</h3>
            <h3 className={`font-medium ${isFeatured ? 'text-xl md:text-2xl' : 'text-sm md:text-[16px]'} leading-tight text-[#F3F3F3] md:leading-[26px]`}>{post.title2}</h3>
          </div>
        </div>
      </div>
    </a>
  );
};
