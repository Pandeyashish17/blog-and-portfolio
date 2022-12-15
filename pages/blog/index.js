import { groq } from "next-sanity";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import client from "../../lib/sanity";

const Index = (posts) => {
  return (
    <>
      <div class="space-y-16 container xl:max-w-7xl mx-auto px-4  lg:px-8 mb-10 ">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-extrabold mb-4">Latest Posts</h2>
          <h3 class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
            Think. Create. Share.
          </h3>
        </div>

        <div class="space-y-4 sm:space-y-10">
          {posts.posts.map((item, i) => {
            return (
              <div class="flex flex-col lg:flex-row items-center bg-white rounded-lg overflow-hidden shadow-sm">
                <div class="lg:w-2/5">
                  <Link
                    href={`/blog/${item.slug.current}`}
                    class="block relative group rounded-none lg:rounded-none overflow-hidden"
                  >
                    <img
                      src="https://source.unsplash.com/73F4pKoUkM0/800x600"
                      alt="Featured Image of blog post"
                    />
                    <div class="flex items-center justify-center absolute inset-0 bg-indigo-700 bg-opacity-75 opacity-0 transition ease-out duration-150 group-hover:opacity-100">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-white transform -rotate-45 hi-solid hi-arrow-right inline-block w-10 h-10"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div class="w-full lg:w-3/5 p-6 lg:py-8 lg:px-10">
                  <div class="mb-3">
                    {item.categories.map((category, i) => (
                      <div
                        class="font-semibold inline-flex px-2 py-1 leading-4 text-sm rounded-full text-indigo-700 bg-indigo-200 m-1 cursor-pointer"
                        key={i}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                  <h4 class="font-bold text-lg sm:text-xl mb-2">
                    <a class="leading-7 text-gray-800 hover:text-gray-600">
                      The 10 best hiking trails in the world you should put in
                      your bucket list
                    </a>
                  </h4>
                  <p class="text-gray-600 text-sm mb-3">
                    <a
                      href="javascript:void(0)"
                      class="font-medium text-indigo-600 hover:text-indigo-400"
                    >
                      Joe Smith
                    </a>{" "}
                    on <span class="font-medium">March 3, 2021</span> · 12 min
                    read
                  </p>
                  <p class="prose prose-indigo">
                    Integer fermentum tincidunt auctor. Vestibulum ullamcorper,
                    odio sed rhoncus imperdiet, enim elit sollicitudin orci,
                    eget dictum leo mi nec lectus.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Index;

export async function getServerSideProps(context) {
  let searchQuery = context.query.search || "ashish";
  let page = context.query.page || 1;
  let postsPerPage = page * 4;
  const query = groq`
   *[_type == "post" &&  (searchQueries match "${searchQuery}" || title match "${searchQuery}"  || excerpt match "${searchQuery}" )  ][0..${postsPerPage}] | order(_createdAt desc) {
    categories,excerpt,mainImage,slug,title,_createdAt,
    author->{
      name,image
    }
   
  }
  `;
  const posts = await client.fetch(query);

  return {
    props: {
      posts,
    },
  };
}
