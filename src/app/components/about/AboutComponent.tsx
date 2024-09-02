import Image from "next/image";

export default function AboutComponent() {
    return (
        <section className={"text-white"}>
            <div className={"md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 sm:p"}>
                <Image
                    src={"/images/vercel.svg"}
                    alt={"Placeholder Image"}
                    width={500}
                    height={500}
                />
                <div>
                    <h2>
                        About Me
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis ornare porttitor. Sed nec quam dignissim, maximus nunc ac, pulvinar nisi. In vitae ultricies lorem, in dignissim mi. Nam sodales felis ante, non malesuada purus condimentum sed. Quisque nisl tellus, fringilla et eleifend et, porta quis arcu. Nunc porttitor mi quis est vulputate porta. Vestibulum tincidunt, neque ac faucibus cursus, lacus est ornare eros, vel feugiat risus ante sit amet tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec gravida pretium velit, nec dictum augue bibendum vitae. Nam et faucibus eros, eget efficitur neque. Fusce feugiat dolor ac tellus commodo, et tincidunt lorem blandit. Nulla sem neque, dignissim et massa a, aliquet ullamcorper diam. Donec pretium nibh at dictum fringilla. Quisque facilisis vestibulum lacus, a varius lacus porttitor gravida. Aliquam ultrices molestie lacinia. Donec sagittis purus mauris, in aliquet quam ultricies in.
                    </p>
                </div>
            </div>
        </section>
    );
}