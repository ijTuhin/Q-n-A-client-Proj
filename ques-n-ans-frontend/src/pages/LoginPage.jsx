import React from "react";

export default function LoginPage() {
  return (
    <div className="bg-black text-gray-500 h-screen w-full">
      <section className="flex justify-center">
        <form className="mt-40 border border-gray-700 px-5 pt-7 pb-10 rounded-md flex flex-col gap-2">
          <input
            className="p-1.5 bg-transparent outline-none border-b border-gray-800 font-mono w-[25rem]"
            type="email"
            name=""
            id=""
          />
          <input
            className="p-1.5 bg-transparent outline-none border-b border-gray-800 font-mono w-[25rem]"
            type="password"
            name=""
            id=""
          />
          <button className="hover:border-gray-600 hover:text-gray-400 mt-3 border border-gray-700 p-2.5 text-sm">
            Login
          </button>
          <p className="flex w-full justify-center text-sm">or</p>
          <div className="w-full grid grid-cols-2 gap-2 text-sm">
            <button className="hover:border-gray-600 hover:text-gray-400 border border-gray-700 text-center p-2.5">
              Create new account
            </button>
            <button className="hover:border-gray-600 hover:text-gray-400 border border-gray-700 text-center p-2.5">
              Continue with Google
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
