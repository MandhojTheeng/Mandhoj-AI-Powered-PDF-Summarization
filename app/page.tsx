import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button variant={"ghost"}>Mandhoj Theeng Button</Button>
      <Button variant={"destructive"}>Button</Button>
      <Button variant={"outline"}>Button</Button>
      <Button variant={"secondary"}>Button</Button>
      <Button variant={"link"}>Button</Button>
    </div>
  );
}
