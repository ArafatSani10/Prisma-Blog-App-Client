import { ChartArea, LayoutDashboard, Rss, } from "lucide-react"
import { Route } from "@/types"

export const userRoutes: Route[] = [
    {
        title: "Overview",
        item: [
            { title: "Create Blog", url: "/create-blog", icon: Rss },
            { title: "Analytics", url: "/analytics", icon: ChartArea },
        ],
    },
]