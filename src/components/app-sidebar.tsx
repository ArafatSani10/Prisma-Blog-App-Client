"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { GalleryVerticalEnd, AudioWaveform, Command } from "lucide-react"

import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { adminRoutes } from "@/routes/adminRoutes"
import { userRoutes } from "@/routes/userRoutes"
import { Route } from "@/types"

const data = {
  teams: [
    { name: "Acme Inc", logo: GalleryVerticalEnd, plan: "Enterprise" },
    { name: "Acme Corp.", logo: AudioWaveform, plan: "Startup" },
    { name: "Evil Corp.", logo: Command, plan: "Free" },
  ],
}

export function AppSidebar({
  user,
  ...props
}: { user: { role: string } } & React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  let routes: Route[] = []
  switch (user.role) {
    case "admin":
      routes = adminRoutes
      break
    case "user":
      routes = userRoutes
      break
    default:
      routes = []
      break
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>

      <SidebarContent>
        {routes.map((routeGroup) => (
          <SidebarGroup key={routeGroup.title}>
            <SidebarGroupLabel>{routeGroup.title}</SidebarGroupLabel>
            <SidebarMenu>
              {routeGroup.item.map((subItem) => {
                const isActive = pathname === subItem.url
                const Icon = subItem.icon // আইকন কম্পোনেন্টটি ভেরিয়েবলে নেওয়া

                return (
                  <SidebarMenuItem key={subItem.title}>
                    <SidebarMenuButton
                      asChild
                      tooltip={subItem.title}
                      isActive={isActive}
                    >
                      <Link href={subItem.url} className="flex items-center gap-3">
                        {/* আইকন থাকলে রেন্ডার করবে, না থাকলে ডট দেখাবে */}
                        {Icon ? <Icon className="size-4" /> : <div className="size-1 bg-current rounded-full" />}
                        <span>{subItem.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}