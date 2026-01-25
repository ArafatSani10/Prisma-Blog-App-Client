import BlogCard from "@/components/modules/homePage/BlogCard";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";

export default async function Home() {
  const { data: posts } = await blogService.getBlogPosts({
    isFeatured: false,
    // search: "hello arafat",
  }, {
    cache: "no-store"
  });

  // console.log(posts);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl  mx-auto px-4 gap-6 py-10">
      {posts && posts.length > 0 ? (
        posts.map((post: BlogPost) => (
          <BlogCard key={post.id || post._id} post={post} />
        ))
      ) : (
        <div className="col-span-full text-center py-20">
          <p className="text-gray-500">No blog posts found.</p>
        </div>
      )}
    </div>
  );
}