import React from 'react';
import { SparklesCore } from './ui/sparkles';

function LandingPage(): JSX.Element {
  return (
    <div className="flex items-center justify-center w-full flex-col px-8 pt-20 mt-20 mb-10">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Welcome to the <br /> Douglassport Library.
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Checkout and borrow books from all diffeeent genres, from mystery to romance, from science fiction to fantasy. And do it all from the comfort of your own dorm community.
      </p>
    </div>

  );
}

export default LandingPage;