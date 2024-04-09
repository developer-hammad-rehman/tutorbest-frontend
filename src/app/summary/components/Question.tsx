"use client";
import React, { Suspense, useEffect, useState } from "react";

interface MCQ {
  question: string;
  options: string[];
  answer: string;
}

interface MCQsArray {
  mcqs: MCQ[];
}

export default function Question() {
const [res, setRes] = useState<MCQsArray>();
const [userAnswer , setUserAnswer] = useState<string[]>([])
 console.log(userAnswer)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const id =
      typeof window != "undefined" ? String(localStorage.getItem("id")) : 0;

    fetch(`/api/question?id=${id}`)
      .then((val) => val.json())
      .then((val) => {
        console.log(val);
        setRes(val);
        setLoading(false);
      });

    return () => {};
  }, []);
  return (
    <div className="bg-gray-50 mx-3 px-3 py-4 rounded-2xl flex flex-col gap-4 h-80 overflow-auto">
      <h2 className="text-2xl font-bold border-b-2 border-gray-100">
        Question
      </h2>
        <div className="flex flex-col gap-3">
        {
          res?.mcqs.map((val , i) =>(
        <div className="flex flex-col gap-5" key={i}>
          <h4 className="text-2xl font-bold">{val.question}</h4>
          {val.options.map((items , i) => (
            <div className="flex gap-3" key={i}>
              <input type="radio" value={items}  onChange={(e) => setUserAnswer([...userAnswer, e.target.value])}/>
              {items}
            </div>
          ))}
          <p className="text-green-400 font-bold">Correct Answer : {val.answer}</p>
        </div>
          ))
        }
        </div>
      <button
        className="bg-purple-300 p-4 text-xl text-white"
        onClick={() => window.location.reload()}
        disabled={loading?true:false}
      >
        {loading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
}
