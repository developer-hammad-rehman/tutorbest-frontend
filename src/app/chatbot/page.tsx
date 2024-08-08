"use client";
import { ArrowBigRight, ArrowUpFromDot, LoaderCircle } from "lucide-react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IInput {
  message: string;
}

interface IMessages {
  question: string;
  answer: string;
}

export default function Chatbot() {
  const { handleSubmit, register, reset } = useForm<IInput>();
  const [messages, setMessages] = React.useState<IMessages[]>([]);
  const [loading , setLoading] = React.useState<boolean>(false)
  const onSumbit: SubmitHandler<IInput> = async (data) => {
    setLoading(true)
    const fetcher = await fetch("/api/chatbot", {
      method: "POST",
      body: data.message,
    });
    const response = await fetcher.json();
    setMessages([
      ...messages,
      { question: data.message, answer: response.message },
    ]);
    setLoading(false)
    reset()
  };
  return (
    <div className="w-full h-full flex flex-col justify-between items-center px-10 py-10 bg-gradient-to-tr from-purple-800 to-black">
      <div className="flex flex-col gap-5">
        {messages.map((val, i) => (
          <>
            <div
              key={i}
              className="w-fit bg-gradient-to-t from-purple-500 to-pink-500 rounded-xl py-3 px-6 text-center"
            >
              {val.question}
            </div>
            <div
              key={i}
              className="w-fit bg-gradient-to-t from-purple-500 to-lime-400 rounded-xl py-3 px-6 text-center"
            >
              {val.answer}
            </div>
          </>
        ))}
      </div>
      <form
        className="sticky bottom-0 py-2 flex gap-3"
        onSubmit={handleSubmit(onSumbit)}
      >
        <textarea
          placeholder="Message Chat bot"
          className="text-black relative  h-16 -z-30 py-5 px-6 sm:px-24 md:px-28"
          {...register("message", { required: true })}
        />
        <button className="font-bold absolute z-50 right-3 p-3 rounded-full bg-black top-3  text-white" disabled={loading}>
          {loading ?<LoaderCircle className="animate-spin" size={30}/> :<ArrowBigRight size={30}/>}
        </button>
      </form>
    </div>
  );
}
