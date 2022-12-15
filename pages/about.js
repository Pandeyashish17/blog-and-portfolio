import Link from "next/link";
import React from "react";
import Gradient from "../components/Gradient";
import { Services, Socials } from "../Socials";

const About = () => {
  return (
    <>
      <section className=" py-10  sm:py-16 lg:py-24 ">
        <Gradient />
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
            <div className="pr-12 sm:pr-0">
              <div className="relative max-w-xs mb-12">
                <img
                  className="object-bottom rounded-md"
                  src="abou1.jpg"
                  alt=""
                />

                <img
                  className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12"
                  src="coat.jpg"
                  alt=""
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Transforming ideas into digital experiences.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                As a web developer with over 5 years of experience, I am
                passionate about creating intuitive, user-friendly websites and
                applications that deliver exceptional experiences to clients and
                their customers.
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
            <div>
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-indigo-600 mb-5 hi-outline hi-code inline-block w-24 h-24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                I am <span className="font-light">ashish</span>
              </h2>
              <h3 className="text-lg md:text-xl md:leading-relaxed font-medium lg:w-1/2 text-gray-600">
                A web developer and freelancer.
              </h3>
            </div>

            <div className="flex space-x-2">
              <div>
                <img
                  src="https://source.unsplash.com/gMsnXqILjp4/1280x800"
                  alt="Featured Image"
                  className="rounded-lg"
                />
              </div>
              <div>
                <img
                  src="https://source.unsplash.com/c3tNiAb098I/600x800"
                  alt="Featured Image"
                  className="rounded-lg"
                />
              </div>
            </div>
            <p className="leading-relaxed text-gray-600">
              I have been working in the field of web development for the past 5
              years and have had the opportunity to work on a wide range of
              projects for clients from various industries. I specialize in Full
              Stack web and App development. I am skilled in using a variety of
              technologies, including MERN stack ,Svelte, Python, React Native .
              I am always looking to learn new technologies and stay up-to-date
              with the latest trends in the field. Whether you are looking to
              create a new website, redesign an existing one, or add new
              features and functionality to your site, I am here to help. I
              would love the opportunity to discuss your project and see how I
              can assist you in achieving your online goals. Please feel free to
              contact me to learn more about my services and to discuss your
              project in more detail. I look forward to working with you!
            </p>
            <div className="flex justify-center items-center mt-2 ">
              <div className=" p-2 flex gap-4 rounded-lg justify-center items-center">
                {Socials.map((item, i) => (
                  <a href={item.link} target="_blank" key={i} rel="noreferrer">
                    <img
                      src={item.icon.src}
                      className="h-8 w-8"
                      alt={item.name}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
