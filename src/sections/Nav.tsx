import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Kobodrop from "../assets/logos/kobodrop_logo.svg";
import ButtonLink from "../common/ButtonLink";

function Nav() {
  const textLinkClasses =
    " text-red-400 hover:text-red-800 active:text-red-400";

  const navLinks = [
    { href: "#features", children: "Features" },
    { href: "#partners", children: "Partnes" },
    { href: "#reviews", children: "Reviwes" },
  ];
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className=" flex h-[15vh] max-w-6xl items-center justify-between px-6 lg:px-12 xl:m-auto">
            <div className=" flex">
              <ButtonLink
                href="#"
                children={<img src={Kobodrop} alt="Kobodrop"></img>}
              ></ButtonLink>
              <div className=" ml-5 hidden items-center space-x-3 sm:ml-6 sm:flex lg:ml-8 lg:space-x-8">
                {navLinks.map((link, index) => (
                  <ButtonLink
                    key={index}
                    href={link.href}
                    children={link.children}
                    className={textLinkClasses}
                  ></ButtonLink>
                ))}
              </div>
            </div>
            <ButtonLink
              href="https://play.google.com"
              target="_blank"
              children={" Install App"}
              className="hidden rounded-xl bg-orange-600 px-4 py-2 text-white hover:bg-orange-700 active:bg-orange-950 sm:flex"
            ></ButtonLink>

            <Disclosure.Button className=" rounded-md p-3 text-blue-300 hover:bg-blue-300 hover:text-orange-600 sm:hidden">
              {open ? (
                <XMarkIcon className=" block h-4 w-4" />
              ) : (
                <Bars3Icon className=" block h-4 w-4" />
              )}
            </Disclosure.Button>
          </div>
          <Disclosure.Panel className=" space-y-1 px-3 sm:hidden">
            {navLinks.map((link, index) => (
              <Disclosure.Button
                className=" block"
                as="a"
                href="#features"
                key={index}
              >
                {link.children}
              </Disclosure.Button>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;

//1h 20min 09sec
