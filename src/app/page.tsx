import ToolbarComponent from "@/app/components/toolbar/ToolbarComponent";
import HeaderComponent from "@/app/components/header/HeaderComponent";
import AboutComponent from "@/app/components/about/AboutComponent";
import ProjectsComponent from "@/app/components/projects/ProjectsComponent";


export default function Home() {
  return (
      <main className={"bg-[#1c1c1c]"}>
          <div className={"flex min-h-screen flex-col bg-eerie container mx-auto px-12 py-4"}>
              <ToolbarComponent />
              <div className={`
              container 
              mx-auto 
              px-4 py-4 sm:px-12
              mt-24
              `}>
                  <HeaderComponent />
                  <AboutComponent />
                  <ProjectsComponent />
              </div>
          </div>
      </main>
  );
}
