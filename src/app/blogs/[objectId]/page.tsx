import Loading from "@/components/Loading";
import { Suspense } from "react";
import BlogBody from "./_components/BlogBody";
import BlogHeader from "./_components/BlogHeader";

const BlogDetail = async ({
  params,
}: {
  params: Promise<{ objectId: string }>;
}) => {
  const objectId = (await params).objectId;

  return (
    <main className="container mx-auto px-6 md:px-20 py-20 space-y-20">
      <Suspense fallback={<Loading />}>
        <BlogHeader objectId={objectId} />
        <BlogBody objectId={objectId} />
      </Suspense>
    </main>
  );
};

export default BlogDetail;
