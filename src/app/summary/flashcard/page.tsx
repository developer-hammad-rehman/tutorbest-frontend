'use client'
import React, { useEffect, useState } from 'react';

interface Question {
  question: string;
  answer: string;
}

interface AIQuestions {
  questions: Question[];
}

export default function Flashcard() {
  const id = typeof window !== 'undefined' ? localStorage.getItem('id') || '0' : '0';
  const [res, setRes] = useState<AIQuestions | undefined>();
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [swipe, setSwipe] = useState<boolean>(false);

  useEffect(() => {
    fetch(`/api/flashcard?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRes(data);
        setLoading(false);
      })
      .catch((error) => console.error('Fetch error:', error));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className='max-w-md mx-auto my-10 bg-white shadow-lg rounded-lg overflow-hidden'>
      <h3 className='text-xl font-semibold bg-purple-200 text-gray-800 py-4 text-center border-b'>Flashcard 📚</h3>
      <div className={`p-6 text-2xl font-semibold text-center ${swipe ? 'bg-purple-300' : 'bg-blue-300'}`}>
        {swipe ? res?.questions[count]?.answer : res?.questions[count]?.question}
      </div>
      <div className='grid grid-cols-2 gap-3 p-4'>
        <button
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded shadow-lg transition duration-200 ease-in-out'
          onClick={() => {
            const nextCount = count === (res?.questions.length ?? 0) - 1 ? 0 : count + 1;
            setCount(nextCount);
            setSwipe(false);
          }}
        >
          Next
        </button>
        <button
          className='bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 rounded shadow-lg transition duration-200 ease-in-out'
          onClick={() => setSwipe(!swipe)}
        >
          {swipe ? 'Show Question' : 'Show Answer'}
        </button>
      </div>
    </div>
  );
}
