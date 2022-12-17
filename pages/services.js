import React from "react";
import { Services } from "../Socials";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import Gradient from "../components/Gradient";
import Head from "next/head";
import { motion } from "framer-motion";

const services = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <Head>
        <title>Services | Ashish Pandey </title>
      </Head>
      <div className="max-w-7xl mx-auto  px-4 mb-10 sm:px-6 lg:px-8">
        <Gradient />
        <motion.div
          className="max-w-3xl mx-auto divide-y-2 divide-gray-200"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.75,
          }}
        >
          <h3 className="text-center text-xl font-extrabold text-gray-900 sm:text-4xl">
            Services{" "}
          </h3>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {Services.map((service) => (
              <Disclosure as="div" key={service.name} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">
                          {service.name}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">
                        {service.details}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </motion.div>
      </div>
    </>
  );
};

export default services;
