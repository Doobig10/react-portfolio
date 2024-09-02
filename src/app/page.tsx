import ToolbarComponent from "@/app/components/toolbar/ToolbarComponent";
import HeaderComponent from "@/app/components/header/HeaderComponent";
import AboutComponent from "@/app/components/about/AboutComponent";


export default function Home() {
  return (
      <main className={"bg-[#1c1c1c]"}>
          <div className={"flex min-h-screen flex-col bg-[#1c1c1c] container mx-auto px-12 py-4"}>
              <ToolbarComponent />
              <div className={"container mx-auto px-12 py-4 mt-24"}>
                  <HeaderComponent />
                  <AboutComponent />
              </div>
          </div>
      </main>
  );
}
