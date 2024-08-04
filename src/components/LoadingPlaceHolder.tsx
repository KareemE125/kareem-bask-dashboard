import React from "react";
import Spinner from "@/components/spinner";

export default function LoadingPlaceHolder() {
  return (
    <section className="my-8 mx-auto">
      <div className="flex gap-4 justify-center items-center">
        <Spinner />
        <p className="text-xl font-semibold">Loading . . .</p>
      </div>
    </section>
  );
}
