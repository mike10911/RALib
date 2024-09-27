import React from "react";
import Image from "next/image";
import { EvervaultCard, Icon } from "../ui/evervault-card";

export function BookCard() {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col col-span-3 md:col-span-2 lg:col-span-1 items-start max-w-sm my-8 p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-full w-full rounded-xl group-hover/card:shadow-xl"
            width="1000"
            height="1000"
            alt="thumbnail"
    />

      <h2 className="dark:text-white text-black mt-4 text-sm font-light">
        Title
      </h2>
      <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
        Genre
      </p>
    </div>
  );
}
