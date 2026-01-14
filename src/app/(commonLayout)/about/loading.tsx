import React from 'react'
import { Loader2 } from "lucide-react"

export default function AboutLoading() {
    return (
        <div className="flex items-center justify-center p-8 w-full">
            <div className="flex items-center gap-3 px-5 py-2.5 bg-muted/50 rounded-2xl border border-primary/10 shadow-sm">
                <Loader2 className="size-5 animate-spin text-primary" />
                <span className="text-sm font-medium text-muted-foreground animate-pulse">
                    Loading content...
                </span>
            </div>
        </div>
    )
}