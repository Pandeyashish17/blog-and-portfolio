import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { PhoneIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { Socials } from "../Socials";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  const navigation = [
    {
      name: "Home",
      path: "/",
      icon: HomeIcon,
    },
    {
      name: "about",
      path: "/about",
      icon: UserCircleIcon,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: PhoneIcon,
    },
    {
      name: "billing",
      path: "/billing",
      icon: UserIcon,
    },
  ];
  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <Link href="/">
            {" "}
            <img className="w-32 h-auto" src="/logo2.png" alt="ashish" />
          </Link>{" "}
        </picture>
      </div>

      <div className="flex flex-col">
        {navigation.map((item, i) => (
          <Link href={item.path} key={i}>
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors capitalize ${
                router.pathname == item.path
                  ? "bg-orange-100 text-orange-500"
                  : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
            >
              <div className="mr-2">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <p>{item.name}</p>
              </div>
            </div>
          </Link>
        ))}
        <div className="flex mt-5  justify-center items-center gap-2">
          {Socials.map((item, i) => (
            <a href={item.link} target="_blank" key={i} rel="noreferrer">
              <img src={item.icon.src} alt="" className="w-8 h-8" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
