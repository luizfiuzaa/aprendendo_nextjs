import Link from "next/link";

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const revalidate = 60;

export interface ResponseProps {
  posts: PostProps[];
}

export default async function PostsPage() {
  const response = await fetch("https://dummyjson.com/posts",{cache: 'force-cache', next: {revalidate: 60}});
  const data: ResponseProps = await response.json();

  async function handleFetchPosts() {
    "use server";
    const response = await fetch("https://dummyjson.com/posts");
    const data: ResponseProps = await response.json();
    console.log(data.posts);
  }

  async function handleSearchUser(formData: FormData) {
    "use server";
    const userID = formData.get("userID");

    const response = await fetch(`https://dummyjson.com/user/${userID}`);
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <h1 className="text-center mt-5 mb-2 font-bold text-3xl">
        Todos os posts
      </h1>

      <button onClick={handleFetchPosts}>Buscar Posts</button>

      <form action={handleSearchUser} className="flex gap-2 my-4">
        <input
          type="text"
          name="userID"
          placeholder="ID do usuário"
          className="border border-gray-200 p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Buscar Usuário{" "}
        </button>
      </form>

      <div className="flex flex-col gap-4 mx-2">
        {data.posts.map((post) => (
          <div className="bg-gray-200 p-4 rounded-md" key={post.id}>
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
            <Link href={`/posts/${post.id}`} className="text-blue-500">Acessar detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
