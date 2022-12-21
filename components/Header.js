import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import {
  MagnifyingGlassIcon,
  Bars3Icon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

import { useSession, signIn, signOut } from "next-auth/react";

import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const items = useSelector(selectItems);

  // console.log(session);

  // session.user.name
  return (
    <header>
      {/* top nav  */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            alt="logo"
            src="https://links.papareact.com/f90"
            width={100}
            height={40}
            //   objectFit="contain",
            className="object-contain cursor-pointer px-2 "
          />
        </div>

        {/* search */}
        <div className="bg-yellow-400 hover:bg-yellow-500 hidden sm:flex items-center rounded-md h-10 flex-grow cursor-pointer">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <MagnifyingGlassIcon className="h-12 p-4 " />
        </div>

        {/* right */}
        <div className="text-white flex items-center text-xs gap-x-6 mx-6 whitespace-nowrap">
          <div
            className="link"
            onClick={() => (session ? signOut() : signIn())}
          >
            <p className="hover:underline">
              {session ? `Hello, ${session.user.name}` : "Sign In"}
            </p>
            <p className="font-extrabold md:text-sm">Accounts & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="link relative flex items-center"
          >
            <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-yellow-400 text-center  font-bold text-black md:right-10 ">
              {items.length}
            </span>

            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden md:inline mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* bottom nav  */}
      <div className="flex items-center gap-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today&apos;s deal</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
