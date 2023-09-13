/* eslint-disable @next/next/no-img-element */
import React from "react";

// next.js components
import Head from "next/head";

// @zigops-material/react components
import { Card } from "packages/zigops-material-react/src";

// page components
import Navbar from "components/layout/navbar";
import Header from "components/layout/header";
import Footer from "components/layout/footer";
 
// sections
import SectionFeatures from "components/sections/features";
import SectionButton from "components/sections/button";
import SectionColorsPalette from "components/sections/colors-palette";
import SectionShadow from "components/sections/shadow";
import SectionComponents from "components/sections/components";
import SectionFramework from "components/sections/framework";
import SectionTestimonials from "components/sections/testimonials";
import SectionCommunity from "components/sections/community";

export default function Presentation() {
  return (
    <>
      <Head>
        <title>
          ZigOps Material - Easy-to-use Tailwind CSS components library with
          Material Design
        </title>
        <link rel="canonical" href="https://www.zigops-material.com" />
        <meta
          name="description"
          content="ZigOps Material is a components library that features multiple React & HTML components, all written with Tailwind CSS classes and Material Design guidelines."
        />
        <meta
          name="keywords"
          content="tailwind css, material design, react, next, react.js, next.js, tailwind template, tailwind css theme, tailwindcss components"
        />
      </Head>
      <Navbar shadow />
      <main className="relative dark:bg-slate-900 dark:text-white">
        <Header />
        <Card
          shadow={false}
          className="mx-6 -mt-20 bg-white md:mx-12 md:-mt-48"
        >
          <div className="container z-20 mx-auto px-4">
            <SectionFeatures />
            <SectionButton />
            <SectionColorsPalette />
            <SectionShadow />
          </div>
          <img
            className="absolute bottom-0 w-full md:-bottom-40"
            src="/img/pre-footer.jpg"
            alt="bubbles"
          />
        </Card>
      </main>
      <Footer />
    </>
  );
}
