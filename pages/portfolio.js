import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <>
      <div className="bg-gray-50 mb-10">
        <motion.div
          className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.75,
          }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Are you ready?</span>
            <span className="block text-indigo-600">
              To have your Own Website
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (
          <div
            className={`flex flex-col -z-30  items-stretch mb-8 sm:mb-16 container mx-auto  
            ${
              Number.isInteger(Number(i / 2))
                ? "sm:flex-row-reverse"
                : "sm:flex-row"
            }
            `}
            key={i}
          >
            <a
              // href={`/blog`}
              className="block p-2 relative group w-full sm:w-1/2  h-64 sm:h-auto rounded-none lg:rounded-none overflow-hidden cursor-pointer"
            >
              <img
                loading="lazy"
                src="/api/image?title=opengraph&subtitle=Dynamic%20image%20using%20edge%20function&height=600&width=1200"
                className="w-full object-cover absolute inset-0 object-center h-full"
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
            </a>
            <div className="w-full sm:w-1/2 py-8 sm:py-16 lg:py-32 px-6 sm:px-12 lg:px-24 bg-gray-100">
              <h3 className="text-gray-800 text-2xl mb-3 leading-normal tracking-normal font-bold">
                Education Portal
              </h3>
              <p className="text-gray-600 leading-6 font-normal tracking-normal mb-6">
                Quae fuerit causa, nollem me tamen laudandis maioribus meis
                corrupisti nec segniorem ad. Sunt autem quibusdam et harum
                quidem se oratio, tua praesertim, qui haec subtilius.
              </p>
              <button className="focus:outline-none rounded py-3 px-4 text-gray-600 border border-gray-600 flex justify-center items-center text-base hover:bg-gray-200 bg-transparent">
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
