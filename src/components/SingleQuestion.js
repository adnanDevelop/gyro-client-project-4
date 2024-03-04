import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { TiMessages } from "react-icons/ti";

export default function SingleQuestion({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div className="border border-gray-400 rounded-lg bg-white">
        {/* <article className="flex items-center justify-between p-4 lg:p-6">
          <span>
            <TiMessages />
          </span>
          <h2
            className="cursor-pointer"
            onClick={() => {
              setShowAnswer(!showAnswer);
              setShowAnswer(!showAnswer);
            }}
          >
            {question}{" "}
            <span>
              {setShowAnswer ? (
                <MdOutlineKeyboardArrowRight />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </span>
          </h2>
          <ul>
            {!showAnswer && (
              <li>
                <button onClick={() => setShowAnswer(true)}>
                  <MdOutlineKeyboardArrowRight />
                </button>
              </li>
            )}
            {showAnswer && (
              <li>
                <button onClick={() => setShowAnswer(false)}>
                  <MdOutlineKeyboardArrowDown />
                </button>
              </li>
            )}
          </ul>
        </article>
        <article
          className={`${showAnswer && "border-t border-gray-400 p-4 lg:p-6"}`}
        >
          {showAnswer && <p>{answer}</p>}
        </article> */}

        <div className="accordin">
          <h2
            onClick={() => {
              setShowAnswer(!showAnswer);
              setShowAnswer(!showAnswer);
            }}
          >
            <span className="accordin-icon-one"> 
              <TiMessages />
            </span>
            {question}{" "}
            <span className="accordin-icon-two">
              {showAnswer ? (
                <MdOutlineKeyboardArrowDown />
              ) : (
                <MdOutlineKeyboardArrowRight />
              )}
            </span>
          </h2>
          {showAnswer && <p className="accordin_answer">{answer}</p>}
        </div>
      </div>
    </>
  );
}
