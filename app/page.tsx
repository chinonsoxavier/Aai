import Hero from "@/components/Hero";
import Layout from "@/components/layouts/Layout";
import {
  HeroBg,
  ServicesBg,
  ServicesBg2,
  Features as FeaturesBg,
  Awards as AwardsBg,
  CtaBg,
} from "@/constants/exports";
import Image from "next/image";
import WritingStep from ".././components/home/WritingStep";
import AaiServices from "@/components/home/AaiServices";
import AaiServices2 from "@/components/home/AaiServices2";
import AaiServices3 from "@/components/home/AaiServices3";
import Features from "@/components/home/Features";
import Awards from "@/components/home/Awards";
import Clients from "@/components/home/Clients";
import Plans from "@/components/home/Plans";
import Questions from "@/components/home/Questions";
import FuturePlans from "@/components/home/FuturePlans";
import WritingSteps2 from "@/components/home/WritingSteps2";
import Menu from "@/components/layouts/Menu";
import { useStore } from "@/components/zustand/zustand";

export default function Home() {

  return (
    <main className="w-full overflow-hidden">
      <Layout>
      <Menu/>
        <section
          className="w-full h-full"
          style={{
            backgroundImage: `url(${HeroBg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Hero />
        </section>

        <section className="b bg-interface py-20 tablet:py-10">
          {/* <WritingStep /> */}
          <WritingSteps2 />
        </section>

        <section
          className="w-full h-full  py-20 tablet:py-10"
          style={{
            backgroundImage: `url(${ServicesBg.src})`,
            backgroundSize: "cover",
          }}
        >
          <AaiServices />
        </section>

        <section
          className="w-full h-full  py-20 tablet:py-10"
          style={{
            backgroundImage: `url(${ServicesBg2.src})`,
            backgroundSize: "cover",
          }}
        >
          <AaiServices2 />
        </section>

        <section
          className="w-full h-full  py-20 tablet:py-10"
          style={{
            backgroundImage: `url(${ServicesBg.src})`,
            backgroundSize: "cover",
          }}
        >
          <AaiServices3 />
        </section>

        <section
          className="w-full h-full  py-20 tablet:py-10"
          style={{
            backgroundImage: `url(${FeaturesBg.src})`,
            backgroundSize: "cover",
          }}
        >
          <Features />
        </section>

        <section
          className="w-full h-full  py-20 tablet:py-10"
          style={{
            backgroundImage: `url(${AwardsBg.src})`,
            backgroundSize: "cover",
          }}
        >
          <Awards />
        </section>
        <section
          className="w-full h-full  py-20 tablet:py-10"
          style={{
            backgroundImage: `url(${ServicesBg.src})`,
            backgroundSize: "cover",
          }}
        >
          <Clients />
        </section>
        <section
          className="w-full h-full  py-20 tablet:py-10"
          style={{
            backgroundImage: `url(${ServicesBg.src})`,
            backgroundSize: "cover",
          }}
        >
          <Plans />
        </section>
        <section
          className="w-full h-full  py-20 tablet:py-10"
          style={{
            backgroundImage: `url(${ServicesBg.src})`,
            backgroundSize: "cover",
          }}
        >
          <Questions />
        </section>
        <section
          className="w-full h-full  py-20 tablet:py-10"
          style={{
            backgroundImage: `url(${CtaBg.src})`,
            backgroundSize: "cover",
          }}
        >
          <FuturePlans />
        </section>
      </Layout>
    </main>
  );
}
