"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";

export default function ImageTab() {
  const [ActiveTab, setactiveTab] = useState("unorganise");
  return (
    <section className=" border-t py-16">
      <div className="container mx-auto px-4 ">
        <div className=" max-w-6xl mx-auto">
          {/**tabs */}
          <div className="flex gap-2 justify-center mb-8">
            <Button
              onClick={(e) => setactiveTab("organise")}
              className={`transition-colors ${ActiveTab === "organise" ? "bg-black/50" : "bg-black"}`}
            >
              Organize Apllication
            </Button>
            <Button
              onClick={(e) => setactiveTab("hired")}
              className={`transition-colors ${ActiveTab === "hired" ? "bg-black/50" : "bg-black"}`}
            >
              Get Hired
            </Button>
            <Button
              onClick={(e) => setactiveTab("boards")}
              className={`transition-colors ${ActiveTab === "boards" ? "bg-black/50" : "bg-black"}`}
            >
              Manage Boards
            </Button>
          </div>
          <div className="relative mx-auto border border-gray-740 rounded-lg max-w-5xl overflow-hidden">
            {ActiveTab === "organise" && (
              <Image
                src="/hero1.png"
                alt="Organize Apllication "
                width={1200}
                height={800}
              />
            )}
            {ActiveTab === "hired" && (
              <Image
                src="/hero2.png"
                alt="Get Hired "
                width={1200}
                height={800}
              />
            )}
            {ActiveTab === "boards" && (
              <Image
                src="/hero3.png"
                alt="Manage Boards "
                width={1200}
                height={800}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
