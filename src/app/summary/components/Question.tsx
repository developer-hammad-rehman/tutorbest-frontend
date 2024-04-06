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

  const [val1, setVal1] = useState<string>();
  const [val2, setVal2] = useState<string>();
  const [val3, setVal3] = useState<string>();
  const [val4, setVal4] = useState<string>();
  const [val5, setVal5] = useState<string>();
  const [val6, setVal6] = useState<string>();
  const [val7, setVal7] = useState<string>();
  const [val8, setVal8] = useState<string>();
  const [val9, setVal9] = useState<string>();
  const [val10, setVal10] = useState<string>();

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
    <div className="bg-gray-50 mx-3 px-3 py-4 rounded-2xl flex flex-col gap-4 h-40 overflow-auto">
      <h2 className="text-2xl font-bold border-b-2 border-gray-100">
        Question
      </h2>
      <Suspense fallback={<div>loading...</div>}>
        {val1 ? (
          val1 == res?.mcqs[0].answer ? (
            <div className="text-green-500">&#x2713;Correct</div>
          ) : (
            <div className="text-red-400">&#10060;Incorrect</div>
          )
        ) : (
          <div className="flex flex-col">
            <h4 className="text-xl font-bold">{res?.mcqs[0].question}</h4>
            {res?.mcqs[0].options.map((val, i) => (
              <div className="flex gap-2" key={i}>
                <input
                  type="radio"
                  value={val}
                  onChange={(e) => setVal1(e.target.value)}
                />
                {val}
              </div>
            ))}
          </div>
        )}
        {val2 ? (
          val2 == res?.mcqs[1].answer ? (
            <div className="text-green-500">&#x2713;Correct</div>
          ) : (
            <div className="text-red-400">&#10060; Incorrect</div>
          )
        ) : (
          <div className="flex flex-col">
            <h4 className="text-xl font-bold">{res?.mcqs[1].question}</h4>
            {res?.mcqs[1].options.map((val, i) => (
              <div className="flex gap-2" key={i}>
                <input
                  type="radio"
                  value={val}
                  onChange={(e) => setVal2(e.target.value)}
                />
                {val}
              </div>
            ))}
          </div>
        )}
        {val3 ? (
          val3 == res?.mcqs[2].answer ? (
            <div className="text-green-500">&#x2713;Correct</div>
          ) : (
            <div className="text-red-400">&#10060;Incorrect</div>
          )
        ) : (
          <div className="flex flex-col">
            <h4 className="text-xl font-bold">{res?.mcqs[2].question}</h4>
            {res?.mcqs[2].options.map((val, i) => (
              <div className="flex gap-2" key={i}>
                <input
                  type="radio"
                  value={val}
                  onChange={(e) => setVal3(e.target.value)}
                />
                {val}
              </div>
            ))}
          </div>
        )}
        {val4 ? (
          val4 == res?.mcqs[3].answer ? (
            <div className="text-green-500">&#x2713;Correct</div>
          ) : (
            <div className="text-red-400">&#10060;Incorrect</div>
          )
        ) : (
          <div className="flex flex-col">
            <h4 className="text-xl font-bold">{res?.mcqs[3].question}</h4>
            {res?.mcqs[3].options.map((val, i) => (
              <div className="flex gap-2" key={i}>
                <input
                  type="radio"
                  value={val}
                  onChange={(e) => setVal4(e.target.value)}
                />
                {val}
              </div>
            ))}
          </div>
        )}
        {val5 ? (
          val5 == res?.mcqs[4].answer ? (
            <div className="text-green-500">&#x2713;Correct</div>
          ) : (
            <div className="text-red-400">&#10060;Incorrect</div>
          )
        ) : (
          <div className="flex flex-col">
            <h4 className="text-xl font-bold">{res?.mcqs[4].question}</h4>
            {res?.mcqs[4].options.map((val, i) => (
              <div className="flex gap-2" key={i}>
                <input
                  type="radio"
                  value={val}
                  onChange={(e) => setVal5(e.target.value)}
                />
                {val}
              </div>
            ))}
          </div>
        )}
        {val6 ? (
          val6 == res?.mcqs[5].answer ? (
            <div className="text-green-500">&#x2713;Correct</div>
          ) : (
            <div className="text-red-400">&#10060;Incorrect</div>
          )
        ) : (
          <div className="flex flex-col">
            <h4 className="text-xl font-bold">{res?.mcqs[5].question}</h4>
            {res?.mcqs[5].options.map((val, i) => (
              <div className="flex gap-2" key={i}>
                <input
                  type="radio"
                  value={val}
                  onChange={(e) => setVal6(e.target.value)}
                />
                {val}
              </div>
            ))}
          </div>
        )}
        {val7 ? (
          val7 == res?.mcqs[6].answer ? (
            <div className="text-green-500">&#x2713;Correct</div>
          ) : (
            <div className="text-red-400">&#10060;Incorrect</div>
          )
        ) : (
          <div className="flex flex-col">
            <h4 className="text-xl font-bold">{res?.mcqs[6].question}</h4>
            {res?.mcqs[6].options.map((val, i) => (
              <div className="flex gap-2" key={i}>
                <input
                  type="radio"
                  value={val}
                  onChange={(e) => setVal7(e.target.value)}
                />
                {val}
              </div>
            ))}
          </div>
        )}
        {val8 ? (
          val8 == res?.mcqs[7].answer ? (
            <div className="text-green-500">&#x2713;Correct</div>
          ) : (
            <div className="text-red-400">&#10060;Incorrect</div>
          )
        ) : (
          <div className="flex flex-col">
            <h4 className="text-xl font-bold">{res?.mcqs[7].question}</h4>
            {res?.mcqs[7].options.map((val, i) => (
              <div className="flex gap-2" key={i}>
                <input
                  type="radio"
                  value={val}
                  onChange={(e) => setVal8(e.target.value)}
                />
                {val}
              </div>
            ))}
          </div>
        )}
        {val9 ? (
          val9 == res?.mcqs[8].answer ? (
            <div className="text-green-500">&#x2713;Correct</div>
          ) : (
            <div className="text-red-400">&#10060;Incorrect</div>
          )
        ) : (
          <div className="flex flex-col">
            <h4 className="text-xl font-bold">{res?.mcqs[8].question}</h4>
            {res?.mcqs[8].options.map((val, i) => (
              <div className="flex gap-2" key={i}>
                <input
                  type="radio"
                  value={val}
                  onChange={(e) => setVal9(e.target.value)}
                />
                {val}
              </div>
            ))}
          </div>
        )}
        {val10 ? (
          val10 == res?.mcqs[9].answer ? (
            <div className="text-green-500">&#x2713;Correct</div>
          ) : (
            <div className="text-red-400">&#10060;Incorrect</div>
          )
        ) : (
          <div className="flex flex-col">
            <h4 className="text-xl font-bold">{res?.mcqs[9].question}</h4>
            {res?.mcqs[9].options.map((val, i) => (
              <div className="flex gap-2" key={i}>
                <input
                  type="radio"
                  value={val}
                  onChange={(e) => setVal10(e.target.value)}
                />
                {val}
              </div>
            ))}
          </div>
        )}
      </Suspense>
      <button
        className="bg-purple-300 p-4 text-xl text-white"
        onClick={() => window.location.reload()}
      >
        {loading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
}
