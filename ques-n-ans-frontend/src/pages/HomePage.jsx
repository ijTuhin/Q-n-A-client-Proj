import React, { useState } from "react";
import { HiUserCircle } from "react-icons/hi2";
import { IoMdReturnRight } from "react-icons/io";
import QuesAnswer from "../components/QuesAnswer";
import { Link } from "react-router-dom";
function HomePage() {
  const [ques, setQues] = useState(0);
  const changeQuestion = () => {
    setQues(ques + 1);
  };
  return (
    <div className="bg-black text-gray-500 h-screen">
      <QuesAnswer changeQuestion={changeQuestion} ques={ques} />
      <div>
        <button
          onClick={() => changeQuestion()}
          className="flex justify-center items-center gap-x-2 font-mono absolute bottom-28 right-32"
        >
          <IoMdReturnRight /> Next
        </button>
        <button className="font-mono absolute top-28 right-32">Category</button>
        <Link to="./result" className="flex justify-center items-center gap-x-2 font-mono absolute top-28 left-32">
          <span className="text-2xl">
            <HiUserCircle />
          </span>
          Profile
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
