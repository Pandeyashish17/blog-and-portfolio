import HeroSection from "../components/HeroSection";
import Head from "next/head";
import Link from "next/link";
import client from "../lib/sanity";
import TimeAgo from "react-timeago";
export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Ashish - Portfolio & Blog</title>
      </Head>
      <HeroSection />

      <div className=" pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 ">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {posts &&
              posts.map((post) => (
                <div key={post._id}>
                  <p className="text-sm text-gray-500">
                    <TimeAgo date={post.publishedAt} />{" "}
                  </p>
                  <a href="#" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.excerpt}
                    </p>
                  </a>
                  <div className="mt-3">
                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Read full story
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const query = `*[_type=="frontpage"]{
    posts[]-> {
    
    ...
  }
  } `;
  const posts = await client.fetch(query);

  return {
    props: {
      posts: posts[0].posts,
    },
    revalidate: 10,
  };
}
