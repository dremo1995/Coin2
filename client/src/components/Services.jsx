import React from "react";
import ServiceCard from "./ServiceCard";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
const Services = () => {
  return (
    <div className="flex w-full justify-center items-center gradient-bg-services h-screen">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className=" text-white text-3xl sm:text-5xl py-2 text-gradient">
            Services that we
            <br />
            continue to improve
          </h1>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security Guaranteed"
          subtitle="Security is Guranteed. We always maintain privacy and maintain the quality of our products"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Best Exchange Rates"
          subtitle="Rates are never better. We are always seeking out how to make rates better for customers"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest Transactions"
          subtitle="Security is Guranteed. We always maintain privacy and maintain the quality of our products"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
        />
      </div>
    </div>
  );
};

export default Services;
