import type { Post } from "@/types";
import { Link } from "react-router";

interface PostProps {
  posts: Post[];
}
function BlogPostList({ posts }: PostProps) {
  return (
    <div className="mx-4 mt-8 mb-8 grid grid-cols-1 gap-16 md:mx-0 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link to={`/blogs/${post.id}`} key={post.id}>
          <img
            src={post.image}
            alt="Blog Post"
            className="transation-transform mb-4 w-full rounded-xl duration-500 hover:scale-105"
          />
          <h1 className="line-clamp-1 text-xl font-extrabold">{post.title}</h1>
          <h3 className="my-4 line-clamp-3 text-base font-normal">
            {post.content}
          </h3>
          <div className="text-muted-foreground text-sm">
            <span>
              by <span className=""> {post.author}, </span>
              <span className="">on {post.updated_at} .</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogPostList;
