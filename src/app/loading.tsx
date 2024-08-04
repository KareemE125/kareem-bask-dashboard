import Image from "next/image";
import LogeSquare from "@/assets/images/logo-square.png";
import LoadingPlaceHolder from "@/components/LoadingPlaceHolder";

export default function Loading() {
  return (
    <main className="h-screen pb-20 flex flex-col items-center justify-center gap-4">
      <Image
        className="bg-black dark:bg-transparent rounded-t-full rounded-b-[1999px] mb-3"
        src={LogeSquare}
        alt="Bask Logo"
        width={250}
        height={250}
      />
      <div className="-mt-8">
        <LoadingPlaceHolder />
      </div>
    </main>
  );
}
