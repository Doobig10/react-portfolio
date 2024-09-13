"use client";

import Image from "next/image";
import AboutComponent from "@/app/components/about/AboutComponent";

export default function AboutContainerComponent() {
    return (
        <section
            id={"about"}
        >
            <div
                className={`
                flex
                lg:grid lg:grid-cols-2
                gap-16
                items-center
                py-8 px-0 sm:py-16 sm:px-4
                `}
            >
                <Image
                    className={`container hidden lg:block w-full h-full`}
                    src={"/images/vercel.svg"}
                    alt={"Placeholder Image"}
                    width={500}
                    height={500}
                />

                <AboutComponent />

            </div>
        </section>
    );
}