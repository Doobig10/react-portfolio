import ToolbarComponent from "@/app/components/toolbar/ToolbarComponent";
import HeaderComponent from "@/app/components/header/HeaderComponent";
import AboutContainerComponent from "@/app/components/about/AboutContainerComponent";
import ProjectsComponent from "@/app/components/projects/ProjectsComponent";


export default function Home() {
  return (
      <main className={"bg-eerie"}>
          <div
              className={`
              flex flex-col
              container
              min-h-screen 
              mx-auto 
              px-12 py-4
              bg-eerie
              `}
          >
              <ToolbarComponent />
              <div
                  className={`
                  container 
                  mx-auto 
                  px-4 py-4 sm:px-12
                  mt-24
                  `}
              >
                  <HeaderComponent />
                  <AboutContainerComponent />
                  <ProjectsComponent />
              </div>
          </div>
      </main>
  );
}
