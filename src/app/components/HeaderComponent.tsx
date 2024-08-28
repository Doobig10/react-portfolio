
export default function HeaderComponent() {
    return (
        <section>
            <div className={"grid grid-cols-1 lg:grid-cols-12"}>
                <div className={"col-span-7 place-self-center text-center sm:text-left"}>
                    <h1 className={"text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold"}>
                        Hello, I\'m Aidan
                    </h1>
                    <p className={"text-[#86959e] text-lg lg:text-xl mb-6"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <div>
                        <button className={"px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black"}>My Projects</button>
                        <button className={"px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3"}>Download CV</button>
                    </div>
                </div>
                <div className={"col-span-5 place-self-center mt-4 lg:mt-0"}>
                    <div className={"rounded-sm bg-blue-800"}>
                    </div>
                </div>
            </div>
        </section>
    );
}