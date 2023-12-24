// libs
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// components
import {
  IconBuddyArrowCloseIcon,
  IconBuddyLogoutIcon,
  IconBuddyMenuIcon,
} from "@/atoms/icons";

// utils
import cn from "@/utils/cn";
import { defaultProfilePic, navLinks } from "@/utils/constants";

const CommonTemplate = (props) => {
  const { children } = props;
  const router = useRouter();

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-300">
        <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto px-4 py-3">
          <div className="flex items-center">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-1 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <IconBuddyMenuIcon className={"w-[27px] h-[27px]"} />
            </button>
            <Link href="/" className="flex items-center space-x-2 ml-3">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                ExamPortal
              </span>
            </Link>
          </div>
          <img
            src={defaultProfilePic}
            className="rounded-full object-cover w-[44px] h-[44px]"
            alt="avatar"
          />
        </div>
      </nav>

      <aside className="fixed left-0 z-40 w-16 h-screen border-r border-gray-300 transition-transform -translate-x-full md:translate-x-0">
        <div className="h-full bg-white pt-24 pb-20 flex flex-col justify-between">
          <ul className="flex flex-col items-center">
            {navLinks.map((item, i) => (
              <li
                key={i}
                className={cn(
                  "flex items-center pl-3 pr-2 py-3 rounded-md mb-7",
                  {
                    "group is-selected bg-blue-600":
                      router.pathname === item.path,
                  }
                )}
              >
                <Link href={item.path}>{item.icon}</Link>
              </li>
            ))}
          </ul>
          <button type="button">
            <IconBuddyLogoutIcon />
          </button>
        </div>
      </aside>

      <div className="py-4 px-2 md:px-20">
        <div className="p-4 mt-16">{children}</div>
      </div>
    </>
  );
};

export default CommonTemplate;
