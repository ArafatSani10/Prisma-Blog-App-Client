import { ChartArea, LayoutDashboard, } from "lucide-react"
import { Route } from "@/types"

export const adminRoutes: Route[] = [
    {
        title: "Overview",
        item: [
            { title: "Dashboard", url: "/admin-dashboard", icon: LayoutDashboard },
            { title: "Analytics", url: "/analytics", icon: ChartArea },
        ],
    },
]