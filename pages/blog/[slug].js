import Image from "next/image";
import { useRouter } from "next/router";
import client from "../../lib/sanity";
import BlockContent from "@sanity/block-content-to-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorPage from "next/error";
import GetImage from "../../utils/getImage";
import { groq } from "next-sanity";

export default function Post({ post }) {
  console.log(post);
  const {
    title,
    imageSubtitle,
    imageTitle,
    body,
    _createdAt,
    author,
    categories,
  } = post;
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const notify = (text) =>
    toast(text, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <>
      {post && (
        <div className="  px-4  lg:px-8  ">
          <div className="text-center">
            <div className="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700">
              {imageTitle}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Improve your workflow in 3 easy steps
            </h2>
            <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
              <a className="text-indigo-600 hover:text-indigo-400">John Doe</a>{" "}
              on <span className="font-semibold">March 15, 2021</span> · 8 min
              read
            </h3>
          </div>
          <article className="pt-8 ">
            <img
              src={`/api/image?title=${imageTitle}&subtitle=${imageSubtitle}`}
              className="mt-4 rounded-xl "
            />
            <div className="mt-8">
              {body && (
                <BlockContent
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                  blocks={body}
                  serializers={{
                    types: {
                      h1: (props) => (
                        <h1 className="my-5 text-3xl font-bold" {...props} />
                      ),
                      h2: (props) => (
                        <h2 className="my-5 text-xl font-bold" {...props} />
                      ),
                      p: (props) => <p className="my-5" {...props} />,
                      li: ({ children }) => (
                        <li className="ml-4 list-disc">{children}</li>
                      ),
                      link: ({ children, href }) => (
                        <a
                          href={href}
                          className="text-blue-500 hover:underline"
                        >
                          {children}
                        </a>
                      ),
                      code: (props) => (
                        <>
                          <div className="bg-[#00002c] pt-3 px-2 rounded-md">
                            <div className="flex justify-between ">
                              <div className="flex gap-1  ml-1 ">
                                <div className="bg-red-500 w-3 h-3 rounded-full "></div>{" "}
                                <div className="bg-yellow-500 w-3 h-3 rounded-full "></div>{" "}
                                <div className="bg-green-500 w-3 h-3 rounded-full "></div>{" "}
                              </div>
                              <div>
                                <button
                                  className="w-6 h-6 text-white cursor-pointer hover:scale-105"
                                  onClick={() => {
                                    navigator.clipboard.writeText(
                                      props.node.code
                                    );
                                    notify("Copied");
                                  }}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <pre
                              data-language={props.node.language}
                              className=" my-3 px-2  rounded-xl overflow-x-scroll scrollbar-hide  pb-2"
                            >
                              <code className=" text-white break-keep	 ">
                                {props.node.code}
                              </code>
                            </pre>
                          </div>
                        </>
                      ),
                    },
                  }}
                />
              )}{" "}
            </div>
          </article>
        </div>
      )}
    </>
  );
}

export async function getStaticProps({ params }) {
  const singlequery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ...,
  author->{
    name,image
  }
 ,
}
`;
  const post = await client.fetch(singlequery, {
    slug: params.slug,
  });

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const pathquery = groq`
*[_type == "post"] {
  'slug': slug.current,
}
`;
  const allPosts = await client.fetch(pathquery);
  return {
    paths:
      allPosts?.map((page) => ({
        params: {
          slug: page.slug,
        },
      })) || [],
    fallback: true,
  };
}
