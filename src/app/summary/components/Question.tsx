"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch"


interface MCQ {
  question: string;
  options: string[];
  answer: string;
}

interface MCQsArray {
  mcqs: MCQ[];
}

export default function Question() {
const [res, setRes] = useState<MCQsArray>({mcqs:[]});
const [userAnswer , setUserAnswer] = useState<string[]>([])
const [loading, setLoading] = useState(true);
const [load , setLoad] = useState('')
const [show , setShow] = useState(false)
console.log(userAnswer)

  useEffect(() => {
    setLoading(true);

    const id = typeof window != "undefined" ? String(localStorage.getItem("id")) : 0;

    fetch(`/api/question?id=${id}`).then((val) => val.json()).then((val) => {
        console.log(val);
        setRes({
          mcqs:[
            ...res?.mcqs , ...val.mcqs
          ]
        });
        setLoading(false);
        setLoad('')
      })
    return () => {};
  }, [load]);
  return (
    <div className="bg-gray-50 mx-3 px-3 py-4 rounded-2xl flex flex-col gap-4 h-80 overflow-auto border-2 ">
      <h2 className="text-2xl font-bold py-4 border-b-2 border-gray-950 w-full flex justify-between">
        Question 🤔
        <p className="text-sm text-gray-500 flex items-center justify-center gap-5">Show Answer <Switch  onCheckedChange={(e) => show? setShow(false) : setShow(true)}/></p>
      </h2>
        <div className="flex flex-col gap-3">
        {show?res.mcqs.map((val , i) =>(
         <div className="flex flex-col gap-5 border bg-gray-50 px-3 py-3 rounded-xl" key={i}>
          <h4 className="text-base font-bold">Q{i+1}. {val.question}</h4>
          <p className="text-sm font-light">Answer : {val.answer}</p>
         </div>
        )):
          res?.mcqs.map((val , i) =>(
            userAnswer[i] ? <div className="flex flex-col gap-5 border-2 bg-gray-50 px-3 py-3 rounded-xl" key={i}>
              <h4 className="text-base font-bold">Q{i+1}. {val.question}</h4>
              <p className="text-sm font-bold">User input : {userAnswer[i] == 'Incorrect' ? <span className="text-red-300">&#10060; &#x274C;{userAnswer[i]}</span>:<span className="text-green-300">{userAnswer[i]}</span>}</p>
            </div>:<div className="flex flex-col gap-5 border bg-gray-50 px-3 py-3 rounded-xl" key={i}>
            <h4 className="text-lg font-bold">Q{i+1}. {val.question}</h4>
            {val.options.map((items , i) => (
              <div className="flex gap-3" key={i}>
                <input type="radio" value={items} name={val.question} onChange={(e) => {
                  const answer = val.answer;
                  const userinput = e.target.value
                  const cond = answer == userinput
                  cond?setUserAnswer([...userAnswer, "Correct"]):setUserAnswer([...userAnswer, "Incorrect"])
                }}/> 
                {items}
              </div>
            ))}
          </div>
          ))
}
        </div>
      <button
        className="bg-purple-300 p-4 text-xl text-white"
        onClick={() => setLoad('load')}
        disabled={loading?true:false}
      >
        {loading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
}
