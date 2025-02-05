import ProjectContent from "@/components/projects/ProjectContent";
import HeaderPage from "@/components/ui/HeaderPage";
import PrimaryButton from "@/components/ui/PrimaryButton";


export default function Projects() {
  return (
    <main className="w-screen h-screen px-8 bg-gray-50 overflow-hidden">
      <HeaderPage title="Tasks Board" id="projects--header-page">
        <PrimaryButton>
          Show Backlog
        </PrimaryButton>
      </HeaderPage>
      <ProjectContent />
    </main>
  );
}