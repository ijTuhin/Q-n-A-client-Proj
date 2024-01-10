import React, { useState } from 'react'
import { BsSend } from "react-icons/bs";

export default function QuesAnswer({changeQuestion, ques}) {
  return (
    <div className="flex justify-center">
        <section className="mt-52 space-y-3.5 flex flex-col items-center">
          <p className="text-center text-sm">Answer the Question</p>
          <p className="text-gray-300 text-xl text-center"> {ques}. What's your name?</p>
          <form className="w-[20rem] flex justify-center items-end gap-x-3">
            <input
              className="px-3.5 py-2 w-full mt-12 bg-transparent text-gray-400 border-b border-gray-400 placeholder:text-gray-500"
              type="text"
              placeholder='Type your answer'
              name=""
              id=""
            />
            <button type='button' onClick={()=>changeQuestion()} className="text-2xl text-cyan-800 hover:text-cyan-600">
              <BsSend />
            </button>
          </form>
        </section>
      </div>
  )
}
