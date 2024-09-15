import React from "react";

const page = () => {
  return (
    <div><figure className="md:flex bg-slate-400 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-60 h-50 rounded-full mx-auto" src="/c:\image.jpeg
    " alt="" width="354" height="502"/>
    <div className="pt-8 text-center space-y-7">
      <blockquote>
        <p className="text-lg font-large"> "
My house is a cozy and comfortable place where i live with my family . It's a two-story building with a bright red door and a beautiful garden in the front. The moment I step inside, I feel a sense of warmth and happiness.

The living room is my favorite place in the house, with its soft couches and big windows that let in plenty of sunlight. We spend most of our evenings there, watching TV or chatting together."

 
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-600 dark:text-sky-700">
          Ubaid Ullah
        </div>
        <div className="text-slate-270 dark:text-slate-400">
          From Rahim Yar khan
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page