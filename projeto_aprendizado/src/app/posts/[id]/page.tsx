import { Suspense } from "react";
import { PostInfo } from "./_components/post";
import Loading from "./loading";

export default async function DetailPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="">
      <h1 className="text-4xl font-bold">Detalhes do Post: {id}</h1>
      <Suspense fallback={Loading()}>
        <PostInfo id={id} />
      </Suspense>
    </div>
  );
}
