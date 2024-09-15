import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div><figure className="md:flex bg-slate-400 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-60 h-50 rounded-full mx-auto" src="/ubaid.jfif" alt="" width="354" height="502"/>
    <div className="pt-8 text-center space-y-7">
      <blockquote>
        <p className="text-lg font-large">
          “"Meet me  I am  Ubaid, a curious  and ambitious student of Artificial Intelligence! With a pasion for learning and a drive to innovate, i am dedicated to exploring the vast possibilities of AI and its potential to transform industries and improve lives. Through diligent study and hands-on experimentation,   ii am gaining a deep understanding of AI concepts, tools, and techniques, and is well on their way to becoming a skilled AI practitioner Mian Asif Langrah .”
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