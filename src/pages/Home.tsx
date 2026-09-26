import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import type React from "react";


export const Home: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-purple-500/20 selection:text-purple-600 dark:selection:text-purple-400">
            {/* 1. Announcement Bar */}
            <AnnouncementBar />
            {/* 2. Responsive Sticky Navbar */}
            <Navbar />
        </div>
    )
}