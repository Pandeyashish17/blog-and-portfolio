import React, { useState } from "react";

const Testomonials = () => {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-20">
      <div className="flex flex-col items-center">
        <div className="text-center">
          <p>{`Don't believe me huh, that I am a good developer`}</p>
          <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-4xl xl:text-5xl cursive">
            See what my family have to say about me
          </h2>
        </div>

        <div className="relative mt-10 md:mt-24 md:order-2">
          <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
            <div
              className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
              style={{
                background:
                  "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
              }}
            ></div>
          </div>

          <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-2">
            <div className="flex flex-col overflow-hidden shadow-xl">
              <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                <div className="flex-1">
                  <blockquote className="flex-1 mt-8">
                    <p className="text-lg leading-relaxed text-gray-900 font-pj">
                     {` " He's always buried in his computer, working on some new
                      website or project. But hey, at least he's good at what he
                      does."`}
                    </p>
                  </blockquote>
                </div>

                <div className="flex items-center mt-8">
                  <img
                    className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                    alt=""
                  />
                  <div className="ml-4">
                    <p className="text-base font-bold text-gray-900 font-pj">
                      Laxmi Pandey
                    </p>
                    <p className="mt-0.5 text-sm font-pj text-gray-600">
                      CEO of the household.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden shadow-xl">
              <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                <div className="flex-1">
                  <blockquote className="flex-1 mt-8">
                    <p className="text-lg leading-relaxed text-gray-900 font-pj">
                     {` "Our son may be 18, but he's still our little tech genius.
                      He's always tinkering with his computer and building the
                      greatest websites. We're pretty sure he's going to take
                      over Silicon Valley someday."`}
                    </p>
                  </blockquote>
                </div>

                <div className="flex items-center mt-8">
                  <img
                    className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
                    alt=""
                  />
                  <div className="ml-4">
                    <p className="text-base font-bold text-gray-900 font-pj">
                      Baburam Pandey
                    </p>
                    <p className="mt-0.5 text-sm font-pj text-gray-600">
                      king of the crops.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testomonials;
