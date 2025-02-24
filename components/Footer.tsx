"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-black-100" id="footer">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="https://flowbite.com" className="flex items-center">
              <Image
                src="https://flowbite.com/docs/images/logo.svg"
                width={32}
                height={32}
                alt="FlowBite Logo"
                className="mr-3 h-8"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <FooterColumn title="Resources">
              <FooterLink href="https://flowbite.com">Flowbite</FooterLink>
              <FooterLink href="https://tailwindcss.com/">
                Tailwind CSS
              </FooterLink>
            </FooterColumn>
            <FooterColumn title="Follow us">
              <FooterLink href="https://github.com/themesberg/flowbite">
                Github
              </FooterLink>
              <FooterLink href="https://discord.gg/4eeurUVvTy">
                Discord
              </FooterLink>
            </FooterColumn>
            <FooterColumn title="Legal">
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms & Conditions</FooterLink>
            </FooterColumn>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <Link href="https://flowbite.com" className="hover:underline">
              Flowbite™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        {title}
      </h2>
      <ul className="text-gray-600 dark:text-gray-400">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li className="mb-4">
      <Link href={href} className="hover:underline">
        {children}
      </Link>
    </li>
  );
}
