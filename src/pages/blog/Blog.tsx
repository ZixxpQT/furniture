import BlogPostList from "@/components/blog/BlogPostList";
import { posts } from "@/data/posts";

function Blog() {
  return (
    <div className="container mx-auto">
      <h2 className="mt-8 text-center text-2xl font-bold md:text-left">
        Latest Blog Post
      </h2>
      <BlogPostList posts={posts} />
    </div>
  );
}

export default Blog;
