import React from "react";
import { signIn, useSession, getSession } from "next-auth/react"
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaTwitter } from "react-icons/fa";

const Login = () => {

  return (
    <div>
      <div className="bg-gray-400 h-screen w-screen flex-col-center">
        <ul className="h-full w-full flex-col-center">
          <div className="bg-slate-100 shadow-lg h-3/4 w-1/4 p-8 flex flex-col items-center">
            <div className="p-4">BrandLogo</div>
            <div className="p-4"><p className="text-2xl font-bold">Evernote</p></div>
            <div className="flex-col-center space-y-3 w-full">
              <button onClick={() => signIn('google')} className="bg-slate-100 hover:bg-slate-300 text-gray-700 text-sm py-2 w-full space-x-1 border-2 border-gray-300 rounded-lg flex-row-center">
                <span>
                  <FcGoogle />
                </span>
                <span>Continuar con Google</span>
              </button>
              <button onClick={() => signIn('twitter')} className="bg-slate-100 hover:bg-slate-300 text-gray-700 text-sm py-2 w-full space-x-1 border-2 border-gray-300 rounded-lg flex-row-center">
                <span>
                  <FaTwitter />
                </span>
                <span>Continuar con Twitter</span>
              </button>
            </div>
            <div className="relative w-full flex-col-center mt-10 px-6">
              <span className="line-be"></span>
              <text>o</text>
              <span className="line-af"></span>
            </div>
            <div></div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Login;