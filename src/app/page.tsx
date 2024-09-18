import ToolbarComponent from "@/app/components/toolbar/ToolbarComponent";
import HeaderContainer from "@/app/components/header/HeaderContainer";
import AboutContainer from "@/app/components/about/AboutContainer";
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
              text-white
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
                  <HeaderContainer />
                  <AboutContainer />
                  <ProjectsComponent />
              </div>
          </div>
      </main>
  );
}
