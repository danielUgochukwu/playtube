"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth, useClerk } from "@clerk/nextjs";

import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroupLabel } from "@/components/ui/sidebar";
import { personalItems, sidebarItems } from "@/app/(home)/_constants";
import { Separator } from "@/components/ui/separator";


export const MainSection = () => {
    const pathname = usePathname();
    const { isSignedIn: isAuthenticated } = useAuth();
    const { openSignIn } = useClerk();

    return (
      <>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map(({ title, url, icon: Icon, auth }) => (
                <SidebarMenuItem key={title}>
                  <SidebarMenuButton
                    tooltip={title}
                    isActive={pathname === url}
                    render={<Link href={url} />}
                    onClick={(event) => {
                      if (!isAuthenticated && auth)  {
                        event.preventDefault();
                        openSignIn();
                      }
                    }}
                  >
                    <span className="flex items-center gap-4">
                      <Icon className="size-6" />
                      <span className="text-sm">{title}</span>
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* PERSONAL SECTION */}
        {isAuthenticated && (
          <>
            <Separator />

            <SidebarGroup>
              <SidebarGroupLabel>You</SidebarGroupLabel>

              <SidebarGroupContent>
                <SidebarMenu>
                  {personalItems.map(({ title, url, icon: Icon, auth }) => (
                    <SidebarMenuItem key={title}>
                      <SidebarMenuButton
                        tooltip={title}
                        isActive={pathname === url}
                        render={<Link href={url} />}
                        onClick={(event) => {
                          if (!isAuthenticated && auth) {
                            event.preventDefault();
                            openSignIn();
                          }
                        }}
                      >
                        <span className="flex items-center gap-4">
                          <Icon className="size-6"/>
                          <span className="text-sm">{title}</span>
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </>
        )}
      </>
    );
};
