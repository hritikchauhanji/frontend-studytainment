import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { EcosystemSection } from "@/sections/EcosystemSection/EcosystemSection";
import { HeroSection } from "@/sections/Hero/HeroSection";
import type React from "react";


export const Home: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-purple-500/20 selection:text-purple-600 dark:selection:text-purple-400">
            
            {/* 1. Announcement Bar */}
            <AnnouncementBar />
            
            {/* 2. Responsive Sticky Navbar */}
            <Navbar />

            {/* Main Content Area */}
            <main className="flex-grow">

                {/* 3. Hero Section */}
                <HeroSection />

                {/* 4. Ecosystem Section / What is Studytainment? */}
                <EcosystemSection />

            </main>
        </div>
    )
}