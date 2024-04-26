import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Image src='/banner.jpg' width={1920} height={900} className="max-h-full max-w-full" />

        <div className=" absolute top-auto right-auto">
          <SignUp path="/sign-up" />
        </div>
      </div>
    </>
  );
}