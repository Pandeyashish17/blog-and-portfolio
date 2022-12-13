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
        // <article className="max-w-screen-md mx-auto ">
        //   <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        //     {post.title}
        //   </h1>
        //   <p className="text-gray-800 dark:text-gray-400">{post.author.name}</p>
        //   <div className="relative z-0 max-w-screen-lg mx-auto overflow-hidden lg:rounded-lg aspect-video">
        //     {post?.mainImage && (
        //       <Image {...GetImage(post?.mainImage)} placeholder="blur" />
        //     )}
        //   </div>
        //   <div className="mx-auto my-3 prose prose-base dark:prose-invert prose-a:text-blue-500">
        //     {post.body && <PortableText value={post.body} />}
        //   </div>
        // </article>
        <div className="relative py-16  overflow-hidden">
          {" "}
          <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
            <div
              className="relative h-full text-lg max-w-prose mx-auto"
              aria-hidden="true"
            >
              <svg
                className="absolute top-12 left-full transform translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                />
              </svg>
              <svg
                className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                />
              </svg>
              <svg
                className="absolute bottom-12 left-full transform translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
                />
              </svg>
            </div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                  {imageTitle}
                </span>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  {title}
                </span>
              </h1>
              <img
                src={`/api/image?title=${imageTitle}&subtitle=${imageSubtitle}`}
                className="mt-4 rounded-md"
              />
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
          </div>
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
