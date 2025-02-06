'use client';

import { useRouter } from "next/router";
import ProjectContent from "@/components/projects/ProjectContent";
import HeaderPage from "@/components/ui/HeaderPage";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function Page() {
  // const router = useRouter();
  // console.log('Router', router);
  
  const projectId = '1';
  
  return (
    <main className="w-screen h-screen px-8 bg-gray-50 overflow-hidden">
      <HeaderPage title="Tasks Board" id="projects--header-page">
        <PrimaryButton>
          Show Backlog
        </PrimaryButton>
      </HeaderPage>
      <ProjectContent projectId={projectId} />
    </main>
  );
}