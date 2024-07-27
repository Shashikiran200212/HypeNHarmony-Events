"use"

import About from "@/components/About";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import RecentWorks from "@/components/RecentWorks";
import Services from "@/components/Services";
import Location from "@/components/Location";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto  bg-white">
        <Hero/>
        <About/>
        <div className="md:block hidden ">
          <Process/>
        </div>
        <RecentWorks/>
        <Services/>
        <Location/>
    </main>
  );
}
