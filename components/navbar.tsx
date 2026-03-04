import { Briefcase, Ghost } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 fixed w-full z-10 bg-green-700 ">
      <div className="flex justify-between items-center borer mx-auto h-12 px-4">
        <Link
          href="/"
          className="flex items-center text-orange-400 font-semibold text-xl gap-1"
        >
          <Briefcase />
          TODOLIST
        </Link>

        <div className="flex gap-3 items-center ">
          <Link href="#">
            <Button variant="ghost">Log in</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign for free</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
