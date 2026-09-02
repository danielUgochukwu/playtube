import Link from "next/link";
import Image from "next/image";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { SearchInput } from "@/app/(home)/_components/SearchInput";
import { AuthButton } from "@/components/shared/AuthButton";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-4 pr-5 z-50">
      <div className="flex items-center gap-4 w-full">
        {/* Menu and Logo */}
        <div className="flex items-center shrink-0 gap-4">
          <SidebarTrigger />
                  <Link href={`/`} className="p-4 flex items-center">
                      <Image src={`/logo.svg`} alt="logo" width={30} height={30} />
                      <p className="text-xl font-semibold tracking-tight">PlayTube</p>
                  </Link>
              </div>
              
              {/* Search bar */}
              <div className="flex flex-1 justify-center max-w-180 mx-auto">
                  <SearchInput /> 
        </div>
        
        <div className="flex shrink-0 items-center gap-4">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
