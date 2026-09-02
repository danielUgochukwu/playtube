import { Sidebar, SidebarContent } from "@/components/ui/sidebar"
import { MainSection } from "@/app/(home)/_components/MainSection";

export const HomeSidebar = () => {
  return <Sidebar className="pt-16 z-40 border-none" collapsible="icon">
    <SidebarContent bg-background>
      <MainSection />  
    </SidebarContent>
  </Sidebar>
};
