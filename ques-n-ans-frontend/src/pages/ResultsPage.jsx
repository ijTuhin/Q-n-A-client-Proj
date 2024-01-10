import React from "react";

export default function ResultsPage() {
  return (
    <div className="px-32 pt-28 grid grid-cols-6 gap-x-5 bg-black text-gray-500 h-screen">
      <section className="pt-12 col-span-2">
        {/* <p>User: email@email.com</p> */}
        <div className="text-center">
          <p>Most People Think Like You.</p>
          <p className="text-lg text-gray-300">You are in the UPPER category</p>
          <p className="text-4xl text-gray-400 mt-28">78%</p>
        </div>
      </section>
      <section className="col-span-4">
        <p className="border-b border-gray-500 pr-20 pb-2.5 mb-2.5 w-full">
          Questions that you have answered.
        </p>
        <p className="text-gray-400">
          <span>1. Question is?</span>{" "}
          <span className="mx-2 text-gray-500 text-sm">Ans:</span>Answer
        </p>
        <p className="text-gray-400">
          <span>1. Question is?</span>{" "}
          <span className="mx-2 text-gray-500 text-sm">Ans:</span>Answer
        </p>
        <p className="text-gray-400">
          <span>1. Question is?</span>{" "}
          <span className="mx-2 text-gray-500 text-sm">Ans:</span>Answer
        </p>
        <p className="text-gray-400">
          <span>1. Question is?</span>{" "}
          <span className="mx-2 text-gray-500 text-sm">Ans:</span>Answer
        </p>
        <p className="text-gray-400">
          <span>1. Question is?</span>{" "}
          <span className="mx-2 text-gray-500 text-sm">Ans:</span>Answer
        </p>
        <p className="text-gray-400">
          <span>1. Question is?</span>{" "}
          <span className="mx-2 text-gray-500 text-sm">Ans:</span>Answer
        </p>
      </section>
    </div>
  );
}
