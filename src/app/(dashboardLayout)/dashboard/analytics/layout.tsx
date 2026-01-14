import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="flex gap-2 mb-4">
                <Button asChild>
                    <Link href="/dashboard/analytics/weekly">
                        Weekly
                    </Link>
                </Button>

                <Button asChild>
                    <Link href="/dashboard/analytics/monthly">
                        Monthly
                    </Link>
                </Button>
            </div>

            {children}
        </div>
    )
}