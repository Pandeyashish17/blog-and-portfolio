import Link from "next/link";
import React from "react";
import Gradient from "../components/Gradient";
import { Socials } from "../Socials";
const About = () => {
  return (
    <>
      <section className="py-10  sm:py-16 lg:py-24">
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

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/business.jpg"
                />
              </div>
            </div>
            <section class="text-gray-600 ">
              <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                  <img
                    alt="feature"
                    class="object-cover object-center h-full w-full"
                    src="/man.jpg"
                  />
                </div>
                <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                  <p className="leading-relaxed text-lg mb-4 ">
                    Hi there! My name is Ashish and I am a web developer and
                    freelancer. I have been working in the field of web
                    development for the past 5 years and have had the
                    opportunity to work on a wide range of projects for clients
                    from various industries.
                  </p>
                  <p className="leading-relaxed text-lg mb-4">
                    I specialize in Full Stack web and App development. I am
                    skilled in using a variety of technologies, including MERN
                    stack ,Svelte, Python, React Native . I am always looking to
                    learn new technologies and stay up-to-date with the latest
                    trends in the field.
                  </p>
                  <p className="leading-relaxed text-lg mb-4">
                    Whether you are looking to create a new website, redesign an
                    existing one, or add new features and functionality to your
                    site, I am here to help. I would love the opportunity to
                    discuss your project and see how I can assist you in
                    achieving your online goals. Please feel free to contact me
                    to learn more about my services and to discuss your project
                    in more detail. I look forward to working with you!
                  </p>
                </div>
              </div>
            </section>
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
        </section>
      </section>
    </>
  );
};

export default About;
