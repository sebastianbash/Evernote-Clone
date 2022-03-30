import React from "react";
import { signOut, getSession, useSession } from "next-auth/react";

const HomeLayout = () => {
  const { data: session, status } = useSession();
  return (
    <div className="homeLO h-screen w-screen">
      <div className="h-screen w-full col-span-1 flex-col-center bg-green-200">
          {session ? (
            <>
              <p>{session.user.name}</p>
              <p>{session.user.email}</p>
              <img src={session.user.image} alt="imagen de perfil" />
            </>
          ) : (
            <p>skeleton...</p>
          )}
        <button className="p-2 bg-gray-500 font-bold" onClick={() => signOut()}>
          sign out
        </button>
      </div>
      <div className="h-screen w-full col-span-5 flex justify-center items-center bg-red-200">
        app content
      </div>
    </div>
  );
};

export default HomeLayout;
