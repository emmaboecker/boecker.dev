import Blob from "@/components/static/blob";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function BlogPage() {
  return (
    <div className="flex w-full h-full justify-center">
      <div className="container mt-28 z-20 px-5">
        <Link
          href={"/"}
          className="flex flex-row font-extralight align-middle items-center"
        >
          <IoIosArrowRoundBack size={28} className="my-auto" />
          <span className="my-auto">Home</span>
        </Link>
        <h1 className="text-5xl font-semibold">Blog</h1>
        <div className="mt-10">
            
        </div>
      </div>
      <div className="fixed h-full w-full">
        <div className="flex flex-col gap-4 2xl:container w-[90%] mx-auto justify-center h-full select-none">
          <Blob />
        </div>
      </div>
    </div>
  );
}
