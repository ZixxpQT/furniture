import { Button } from "@/components/ui/button";
import { posts } from "@/data/posts";
import { icons } from "@/components/Icons";
import { Link, useParams } from "react-router";
import RichTextRenderer from "@/components/blog/RichTextRenderer";

function BlogDetails() {
  const { postId } = useParams();
  const post = posts.find((post) => post.id === postId);

  return (
    <div className="container mx-auto px-4 lg:px-0">
      <section className="mb-4 flex flex-col lg:flex-row">
        <section className="mt-8 w-full lg:mr-4 lg:w-3/4">
          <Button variant="outline" className="my-4">
            <icons.arrowFeft />
            <Link to="/blogs">Details</Link>
          </Button>
          {post ? (
            <>
              <h2 className="mb-3 text-2xl font-semibold">{post.title}</h2>
              <div className="my-3 text-sm">
                <span>
                  by <span className=""> {post.author}, </span>
                  <span className="">on {post.updated_at} .</span>
                </span>
              </div>
              <h3 className=""></h3>
              <img
                src={post.image}
                alt="post title"
                className="w-full rounded-xl"
              />
              <RichTextRenderer content={post.body} className="my-8" />
              <div className="mb-8 space-x-4">
                {post.tags.map((tag) => (
                  <Button variant="secondary" className="space-x-4">
                    {tag}
                  </Button>
                ))}
              </div>
            </>
          ) : (
            <p className="text-center text-2xl font-bold">no post found</p>
          )}
        </section>
        <section className="w-full lg:mt-24 lg:w-1/4">
          <div className="mb-8 flex items-center gap-2">
            <icons.layer />
            <h3 className="font-bold">Other Blog Posts</h3>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
            {posts.map((post) => (
              <Link to={`/blogs/${post.id}`} className="flex items-start gap-4">
                <img src={post.image} alt={post.title} className="w-1/4" />

                <div className="w-3/4">
                  <p className="line-clamp-2 text-sm font-normal">
                    {post.content}
                  </p>
                  <i className="text-sm">.... see more</i>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export default BlogDetails;
