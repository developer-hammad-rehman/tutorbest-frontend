"use client";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormInput } from "@/utiltis/type";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Chrome } from "lucide-react";
import { useCookies } from "next-client-cookies";
export default function Sigin() {
  const searchParams = useSearchParams()
    const cookies = useCookies()
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormInput>();
  const [error, setError] = useState("");
  const {push} = useRouter()
  useEffect(() => {
    const token = searchParams.get("code")
  const email = searchParams.get("email")
      if(token && email){
         cookies.set("token", token)
         cookies.set("email", email)
         push('/dashboard')
      }
  })

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    setError("");
    console.log(data);
    const fetcher = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await fetcher.json();
    if (res.detail) {
      setError(res.detail);
    }else{
      localStorage.setItem('email' , data.email)
      push('/dashboard')
     }
    reset();
  };
  return (
    <div className="w-full h-full bg-gray-900 py-9 px-10">
      <h1 className="text-4xl text-center font-bold text-gray-50 font-serif">
        Sign in
      </h1>
      <div className="bg-[#100D20] px-7 py-10 flex items-center my-6 justify-around rounded-xl">
        <div className="hidden lg:flex flex-col gap-3 items-center">
          <h5 className="text-3xl font-bold text-white">
            TutorBest sblocca il tuo potenziale
          </h5>
          <svg
            width="428"
            height="351"
            viewBox="0 0 428 351"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="428"
              height="344"
              rx="15.3957"
              fill="url(#paint0_linear_132_14509)"
              fill-opacity="0.03"
            />
            <rect
              x="0.384892"
              y="0.384892"
              width="427.23"
              height="343.23"
              rx="15.0108"
              stroke="url(#paint1_linear_132_14509)"
              stroke-opacity="0.08"
              stroke-width="0.769784"
            />
            <rect
              x="8"
              y="9"
              width="412"
              height="342"
              rx="9.23741"
              fill="url(#paint2_linear_132_14509)"
              fill-opacity="0.04"
            />
            <rect
              x="8.38489"
              y="9.38489"
              width="411.23"
              height="341.23"
              rx="8.85252"
              stroke="url(#paint3_linear_132_14509)"
              stroke-opacity="0.12"
              stroke-width="0.769784"
            />
            <line
              x1="152.802"
              y1="7.69785"
              x2="152.802"
              y2="308.683"
              stroke="url(#paint4_linear_132_14509)"
              stroke-opacity="0.12"
              stroke-width="0.769784"
            />
            <circle
              cx="26.1729"
              cy="27.7122"
              r="3.07914"
              fill="white"
              fill-opacity="0.2"
            />
            <circle
              cx="36.9493"
              cy="27.7122"
              r="3.07914"
              fill="white"
              fill-opacity="0.2"
            />
            <circle
              cx="47.7266"
              cy="27.7122"
              r="3.07914"
              fill="white"
              fill-opacity="0.2"
            />
            <rect
              x="23.0938"
              y="64.6619"
              width="110.849"
              height="23.0935"
              rx="6.15827"
              fill="white"
              fill-opacity="0.1"
            />
            <rect
              x="177.82"
              y="50.8058"
              width="67.3831"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.1"
            />
            <rect
              x="177.82"
              y="64.6619"
              width="53.9065"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.1"
            />
            <rect
              x="177.82"
              y="78.518"
              width="41.6933"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.1"
            />
            <rect
              x="249.415"
              y="50.8058"
              width="29.9013"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.1"
            />
            <rect
              x="235.096"
              y="64.6619"
              width="24.0052"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.1"
            />
            <rect
              x="222.041"
              y="78.518"
              width="18.9515"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.1"
            />
            <rect
              x="283.527"
              y="50.8058"
              width="46.3259"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.1"
            />
            <rect
              x="262.47"
              y="64.6619"
              width="37.0607"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.1"
            />
            <rect
              x="243.519"
              y="78.518"
              width="28.6378"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.1"
            />
            <rect
              x="334.064"
              y="50.8058"
              width="16.8458"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.1"
            />
            <rect
              x="302.9"
              y="64.6619"
              width="13.4766"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.1"
            />
            <rect
              x="274.684"
              y="78.518"
              width="10.5286"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.1"
            />
            <rect
              x="355.121"
              y="50.8058"
              width="32.8493"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.1"
            />
            <rect
              x="319.746"
              y="64.6619"
              width="26.5321"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.1"
            />
            <rect
              x="287.739"
              y="78.518"
              width="20.6361"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.1"
            />
            <rect
              x="177.82"
              y="103.921"
              width="67.3831"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.07"
            />
            <rect
              x="177.82"
              y="117.777"
              width="53.9065"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.07"
            />
            <rect
              x="249.415"
              y="103.921"
              width="29.9013"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.07"
            />
            <rect
              x="235.096"
              y="117.777"
              width="29.4801"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.07"
            />
            <rect
              x="283.527"
              y="103.921"
              width="33.2704"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.07"
            />
            <rect
              x="268.787"
              y="117.777"
              width="45.4836"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.07"
            />
            <rect
              x="320.167"
              y="103.921"
              width="11.792"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.07"
            />
            <rect
              x="318.482"
              y="117.777"
              width="16.8458"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.07"
            />
            <rect
              x="335.328"
              y="103.921"
              width="23.5841"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.07"
            />
            <rect
              x="339.118"
              y="117.777"
              width="32.8493"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.07"
            />
            <rect
              x="177.82"
              y="143.18"
              width="67.3831"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.03"
            />
            <rect
              x="177.82"
              y="157.036"
              width="53.9065"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.03"
            />
            <rect
              x="249.415"
              y="143.18"
              width="29.9013"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.03"
            />
            <rect
              x="235.096"
              y="157.036"
              width="24.0052"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.03"
            />
            <rect
              x="283.527"
              y="143.18"
              width="46.3259"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.03"
            />
            <rect
              x="262.47"
              y="157.036"
              width="37.0607"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.03"
            />
            <rect
              x="334.064"
              y="143.18"
              width="16.8458"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.03"
            />
            <rect
              x="302.9"
              y="157.036"
              width="13.4766"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.03"
            />
            <rect
              x="355.121"
              y="143.18"
              width="32.8493"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.03"
            />
            <rect
              x="319.746"
              y="157.036"
              width="26.5321"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.03"
            />
            <rect
              x="177.82"
              y="182.439"
              width="67.3831"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.01"
            />
            <rect
              x="177.82"
              y="196.295"
              width="53.9065"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.01"
            />
            <rect
              x="249.415"
              y="182.439"
              width="29.9013"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.01"
            />
            <rect
              x="235.096"
              y="196.295"
              width="24.0052"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.01"
            />
            <rect
              x="283.527"
              y="182.439"
              width="46.3259"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.01"
            />
            <rect
              x="262.47"
              y="196.295"
              width="37.0607"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.01"
            />
            <rect
              x="334.064"
              y="182.439"
              width="16.8458"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.01"
            />
            <rect
              x="302.9"
              y="196.295"
              width="13.4766"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.01"
            />
            <rect
              x="355.121"
              y="182.439"
              width="32.8493"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.01"
            />
            <rect
              x="319.746"
              y="196.295"
              width="26.5321"
              height="6.15827"
              rx="3.07914"
              fill="white"
              fill-opacity="0.01"
            />
            <rect
              x="23.0938"
              y="96.9928"
              width="110.849"
              height="23.0935"
              rx="6.15827"
              fill="white"
              fill-opacity="0.08"
            />
            <rect
              x="23.0938"
              y="129.324"
              width="110.849"
              height="23.0935"
              rx="6.15827"
              fill="white"
              fill-opacity="0.06"
            />
            <rect
              x="23.0938"
              y="161.655"
              width="110.849"
              height="23.0935"
              rx="6.15827"
              fill="white"
              fill-opacity="0.04"
            />
            <rect
              x="23.0938"
              y="193.986"
              width="110.849"
              height="23.0935"
              rx="6.15827"
              fill="white"
              fill-opacity="0.02"
            />
            <rect
              x="23.0938"
              y="226.317"
              width="110.849"
              height="23.0935"
              rx="6.15827"
              fill="white"
              fill-opacity="0.01"
            />
            <rect
              x="23.0938"
              y="258.647"
              width="110.849"
              height="23.0935"
              rx="6.15827"
              fill="url(#paint5_linear_132_14509)"
              fill-opacity="0.01"
            />
            <line
              x1="7.69824"
              y1="45.8022"
              x2="152.418"
              y2="45.8022"
              stroke="white"
              stroke-opacity="0.12"
              stroke-width="0.769784"
            />
            <defs>
              <linearGradient
                id="paint0_linear_132_14509"
                x1="214"
                y1="0"
                x2="214"
                y2="344"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_132_14509"
                x1="214"
                y1="0"
                x2="214"
                y2="360.193"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_132_14509"
                x1="214"
                y1="9"
                x2="214"
                y2="351"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_132_14509"
                x1="214"
                y1="9"
                x2="214"
                y2="351"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_132_14509"
                x1="152.417"
                y1="308.683"
                x2="152.417"
                y2="7.69785"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="0.703125" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_132_14509"
                x1="78.5182"
                y1="258.647"
                x2="78.5182"
                y2="281.741"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="lg:border-l-2 lg:px-10">
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="email"
              className="px-10 py-4 "
              placeholder="Invia Email"
              {...register("email", { required: "Invia Email" })}
            />
            <p className="text-red-400">{errors.email?.message}</p>
            <input
              type="password"
              className="px-10 py-4 "
              placeholder="Invia Password"
              {...register("password", { required: "Invia Password" })}
            />
            <p className="text-red-400">{errors.password?.message}</p>
            <button className="px-7 bg-[#6A37C4] py-3 font-bold text-white">
            Sottoporre
            </button>
            {error && <p className="text-red-400">{error}</p>}
            <p className="text-white">
              Utente nuovo ?{" "}
              <Link href={"/signup"} className="text-purple-300">
                Crea account
              </Link>{" "}
            </p>
            <Link href={'/api/api/google/login'} className="px-6 py-3 text-white flex gap-5 border-2 border-gray-600 hover:border-purple-700 transition-colors duration-1000 rounded-xl">
            <Chrome/> Login with google
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
