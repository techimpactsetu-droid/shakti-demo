import { Hero } from "@/components/home/Hero";
import { ImpactCounter } from "@/components/home/ImpactCounter";
import { Programs } from "@/components/home/Programs";
import { SuccessStories } from "@/components/home/SuccessStories";
import { CurrentProjects } from "@/components/home/CurrentProjects";
import { CSR } from "@/components/home/CSR";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactCounter />
      <Programs />
      <SuccessStories />
      <CurrentProjects />
      <CSR />
    </>
  );
}
