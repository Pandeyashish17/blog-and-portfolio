import { motion } from "framer-motion";
import { groq } from "next-sanity";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import client from "../../lib/sanity";
const Index = (posts) => {
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();
  let page = parseInt(router.query.page) || 1;
  let query = router.query.search;
  let postslength = posts.posts.length;


  useEffect(() => {
    Number.isInteger(Number(postslength / 5)) && postslength != 0
      ? setDisabled(false)
      : setDisabled(true);
  }, [posts]);

  return (
    <>
  
        <motion.div
          className="space-y-16 container xl:max-w-7xl mx-auto px-4  lg:px-8 mb-10 "
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.75,
          }}
        >
          <div className="text-center">
            <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 `}>
              Latest Posts
            </h2>
            <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
              Think. Create. Share.
            </h3>
          </div>
          <div className="space-y-4 sm:space-y-10">
            {postslength != 0 ? (
              posts.posts.map((item, i) => {
                const {
                  title,
                  categories,
                  imageTitle,
                  imageSubtitle,
                  mainImage,
                  author,
                  excerpt,
                  _createdAt,
                  slug,
                } = item;
                return (
                  <div
                    className="flex flex-col lg:flex-row items-center bg-white rounded-lg overflow-hidden shadow-sm"
                    key={item._id}
                  >
                    <div className="lg:w-2/5">
                      <Link
                        href={`/blog/${slug.current}`}
                        className="block p-2 relative group rounded-none lg:rounded-none overflow-hidden"
                      >
                        <img
                          loading="lazy"
                          src={`/api/image?title=${imageTitle}&subtitle=${imageSubtitle}&width=1200&height=900`}
                          alt={imageTitle}
                        />
                        <div className="flex items-center justify-center absolute inset-0 bg-indigo-700 bg-opacity-75 opacity-0 transition ease-out duration-150 group-hover:opacity-100">
                          <svg
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-white transform -rotate-45 hi-solid hi-arrow-right inline-block w-10 h-10"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </Link>
                    </div>
                    <div className="w-full lg:w-3/5 p-6 lg:py-8 lg:px-10">
                      <div className="mb-3">
                        {item.categories.map((category, i) => (
                          <Link href={`/blog?search=${category}`} key={i}>
                            {" "}
                            <div className="font-semibold inline-flex px-2 py-1 leading-4 text-sm rounded-full text-indigo-700 bg-indigo-200 m-1 cursor-pointer">
                              {category}
                            </div>
                          </Link>
                        ))}
                      </div>
                      <h4 className="font-bold text-lg sm:text-xl mb-2">
                        <a className="leading-7 text-gray-800 hover:text-gray-600">
                          {title}
                        </a>
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        <Link
                          href="/about"
                          className="font-medium text-indigo-600 hover:text-indigo-400"
                        >
                          {author.name}
                        </Link>{" "}
                        on <span className="font-medium">March 3, 2021</span>
                      </p>
                      <p className="prose prose-indigo">{excerpt}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex justify-center items-center text-3xl font-bold">
                No posts
              </div>
            )}
          </div>
          <div className="flex justify-center items-center">
            <button
              disabled={disabled}
              onClick={() =>
                router.push(
                  `/blog?page=${page + 1}&search=${query ? query : ""}`
                )
              }
              className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group disabled:text-white disabled:opacity-10"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative">
                {disabled ? "No  posts" : "load more"}
              </span>
            </button>
          </div>
        </motion.div>
 
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
    categories,excerpt,mainImage,slug,title,_createdAt,_id,imageSubtitle,imageTitle,
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
