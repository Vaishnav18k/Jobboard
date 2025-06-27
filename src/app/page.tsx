
'use client'
import Header from "./components/Header";
import Hero from "./components/Hero";
import JobList from "./components/JobList";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <JobList />
      </div>
    </>
  );
}
