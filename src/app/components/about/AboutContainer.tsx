"use client";

import Image from "next/image";
import ContentComponent from "@/app/components/about/ContentComponent";

export default function AboutContainer() {
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
                    className={`container hidden lg:block rounded-3xl`}
                    src={"/images/selfie.jpg"}
                    alt={"Placeholder Image"}
                    width={500}
                    height={500}
                />

                <ContentComponent />

            </div>
        </section>
    );
}