"use client"

import About from "@/components/About";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import RecentWorks from "@/components/RecentWorks";
import Services from "@/components/Services";
import Location from "@/components/Location";
import Whatwedo from "@/components/Whatwedo";
import Enquiry from "@/components/Enquiry";





export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto  bg-white">
        <Hero/>
        <About/>
        <Process/>
        <Whatwedo/>
        <Services/>
        <RecentWorks/>
        <Enquiry/>
        <Location/>


    </main>
  );
}
