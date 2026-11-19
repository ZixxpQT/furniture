import type { Post } from "@/types";
import { Link } from "react-router";

interface blogPromps {
  posts: Post[];
}
function BlogCard({ posts }: blogPromps) {
  return (
    <div className="mx-4 mb-8 grid grid-cols-1 gap-4 md:mx-0 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link to={`/blogs/${post.id}`} key={post.id}>
          <img
            src={post.image}
            alt="Blog Post"
            className="transation-transform mb-4 w-full rounded-2xl duration-500 hover:scale-105"
          />
          <h1 className="text- line-clamp-1 font-semibold">{post.title}</h1>
          <div className="text-muted-foreground">
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

export default BlogCard;
