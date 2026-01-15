"use client"

import * as React from "react"
import Link from "next/link" // সরাসরি লিঙ্কের জন্য
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  PenSquare,
  BarChart3,
} from "lucide-react"

import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
} from "@/components/ui/sidebar"
import { adminRoutes } from "@/routes/adminRoutes"
import { userRoutes } from "@/routes/userRoutes"

const data = {
  
  teams: [
    { name: "Acme Inc", logo: GalleryVerticalEnd, plan: "Enterprise" },
    { name: "Acme Corp.", logo: AudioWaveform, plan: "Startup" },
    { name: "Evil Corp.", logo: Command, plan: "Free" },
  ],
  navMain: [
    {
      title: "Admin Dashboard",
      url: "/admin-dashboard",
      icon: PenSquare,
    },
    {
      title: "User Dashboard",
      url: "/dashboard",
      icon: BarChart3,
    },
  ],
}

export function AppSidebar({
   user, 
    ...props
   }:
    { user:{role:string} &  React.ComponentProps<typeof Sidebar>}) {


      let routes = [];
      switch (user.role) {
        case "admin":
          routes=adminRoutes
          
          break;
        case "user":
          routes=userRoutes
          
          break;
      
        default:
          routes =[];
          break;
      }
  return (

    
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {routes.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild tooltip={item.title}>
                  <Link href={item.url}>
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      
      <SidebarRail />
    </Sidebar>
  )
}