"use client"

import Link from "next/link";

import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroupLabel } from "@/components/ui/sidebar";
import { personalItems, sidebarItems } from "@/app/(home)/_constants";
import { Separator } from "@/components/ui/separator";


export const MainSection = () => {
    const isAuthenticated = true; // TODO: Change to look at auth state

    return (
      <>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map(({ title, url, icon: Icon, auth }) => (
                <SidebarMenuItem key={title}>
                  <SidebarMenuButton
                    tooltip={title}
                    isActive={false} // TODO: Change to look at current pathname
                    onClick={() => {}} // TODO: Do something on click
                  >
                    <Link href={url} className="flex items-center gap-4">
                      <Icon className="size-6" />
                      <span className="text-sm">{title}</span>
                    </Link>
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
                        isActive={false} // TODO: Change to look at current pathname
                        onClick={() => {}} // TODO: Do something on click
                      >
                        <Link href={url} className="flex items-center gap-4">
                          <Icon className="size-6"/>
                          <span className="text-sm">{title}</span>
                        </Link>
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
