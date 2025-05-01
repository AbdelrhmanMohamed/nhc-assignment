import Logo from "@/components/logo";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About NHC | National Housing Company",
  description:
    "Explore NHC’s journey in transforming Saudi Arabia’s real estate sector through innovative housing strategies and partnerships.",
  keywords: [
    "NHC",
    "National Housing Company",
    "Saudi Arabia Real Estate",
    "Housing Development",
    "Urban Planning",
    "Affordable Housing",
  ],
};

export default function AboutUs() {
  return (
    <div className="px-44 pt-16">
      <div className="text-center mb-8">
        <Logo width={242} height={250} className="inline-block" />
      </div>
      <article>
        <h1 className="text-lg text-primary mb-2 font-semibold">
          About NHC National Housing Company
        </h1>
        <p className="mb-6 leading-8">
          NHC was established in 2016 under Royal Decree No. 7262, on 8/2/1437
          AH to be the investment arm of the initiatives and programs of the
          Ministry of Municipal and Rural Affairs and Housing in the real
          estate, residential and commercial sectors. Then the Company came
          under state ownership in May of the year 2020, after which it entered
          a new stage in its journey and became an effective enabler of
          solutions for the Saudi real estate market. To become a leader in the
          real estate development sector and enable the public and private
          sectors to develop strategic partnerships with them. NHC is also keen
          to provide quality projects across urban communities with modern
          designs and various housing solutions at reasonable prices that keep
          pace with the aspirations of the future generation and achieve quality
          of life, in partnership with experienced and efficient real estate
          developers.
        </p>
        <h1 className="text-lg font-semibold text-primary mb-2">
          National Housing Strategy
        </h1>
        <p className="mb-48 leading-8">
          The NHC Strategy aims for the Company to be an enabler of the real
          estate supply system by empowering the private sector to develop the
          real estate market and improve the professionalism of the services
          provided in it, thus offering broader horizons for the Company in
          enhancing the sustainability of its business and the work of the real
          estate supply system.
        </p>
      </article>
    </div>
  );
}
