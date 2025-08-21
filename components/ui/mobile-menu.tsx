"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Dropdown from "@/components/utils/dropdown";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-900"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2 divide-y">
            <li>
              <Link
                href="/aboutus"
                className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center"
                onClick={() => setMobileNavOpen(false)}
              >
                About Us
              </Link>
            </li>

            <li>
              <ul className="px-5 py-2">
                <Link
                  href="#"
                  className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Themes
                </Link>
                <li>
                  <Link
                    href="/themes/agriTech"
                    className="flex font-small w-full text-gray-600 hover:text-gray-900 py-2 justify-center"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    1. Agri-Tech Revolution
                  </Link>
                </li>
                <li>
                  <Link
                    href="/themes/manufacturingRev"
                    className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    2. Manufacturing Revolution
                  </Link>
                </li>
                <li>
                  <Link
                    href="/themes/techTitans"
                    className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    3. Tech Titans Showcase
                  </Link>
                </li>
                <li>
                  <Link
                    href="/themes/servicesInnovation"
                    className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    4. Services Innovation Hub
                  </Link>
                </li>
                <li>
                  <Link
                    href="/themes/crossSector"
                    className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    5. Cross Sector Collaborations
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href="/mentors"
                className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center"
                onClick={() => setMobileNavOpen(false)}
              >
                Mentors
              </Link>
            </li>
            <li>
              <Link
                href="/partners"
                className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center"
                onClick={() => setMobileNavOpen(false)}
              >
                Partners
              </Link>
            </li>

            <li>
              <Link
                href="/contactus"
                className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center"
                onClick={() => setMobileNavOpen(false)}
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                href="/register"
                className="btn-sm text-white bg-gradient1 w-full my-2"
                onClick={() => setMobileNavOpen(false)}
              >
                <span>Register</span>
                <svg
                  className="w-3 h-3 fill-current text-white shrink-0 ml-2 -mr-1"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                    fillRule="nonzero"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  );
}
