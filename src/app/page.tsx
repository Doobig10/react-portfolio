import ToolbarComponent from "@/app/components/ToolbarComponent";
import HeaderComponent from "@/app/components/HeaderComponent";


export default function Home() {
  return (
      <main className={"flex min-h-screen flex-col bg-[#1c1c1c] container mx-auto px-12 py-4"}>
          <ToolbarComponent />
          <div className={"container mx-auto px-12 py-4"}>
              <HeaderComponent />
          </div>
      </main>
  );
}
