import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { format } from "date-fns";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog.objectId}`}>
      <Card className="hover:shadow-md transition-all">
        <CardHeader>
          <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
            <Image
              src={blog.thumbnail}
              alt="Blog thumbnail"
              className="object-cover"
              fill
            />
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <h2 className="font-bold text-lg">{blog.title}</h2>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {blog.description}
          </p>
          <div className="text-xs text-gray-500 flex justify-between items-center pt-2">
            <span>By {blog.author}</span>
            <span>{format(new Date(blog.created), "MMM dd, yyyy")}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
