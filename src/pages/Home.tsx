import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { ApproachSection } from "@/sections/Approach/ApproachSection";
import { ChallengesSection } from "@/sections/Challenges/ChallengesSection";
import { DigitalExperienceSection } from "@/sections/DigitalExperience/DigitalExperienceSection";
import { EcosystemSection } from "@/sections/EcosystemSection/EcosystemSection";
import { FocusSection } from "@/sections/Focus/FocusSection";
import { HeroSection } from "@/sections/Hero/HeroSection";
import { LearningSolutionsSection } from "@/sections/LearingSolutions/LearingSolutionSection";
import { OwnPaceSection } from "@/sections/OwnPace/OwnPaceSection";
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

                {/* 5. Challenges Section */}
                <ChallengesSection />

                {/* 6. Studytainment Approach Section */}
                <ApproachSection />

                {/* 7. Learning Ecosystem / Product Solutions */}
                <LearningSolutionsSection />

                {/* 8. Own Pace Academy Timeline Section */}
                <OwnPaceSection />

                {/* 9. Digital Experience / App Preview Section */}
                <DigitalExperienceSection />

                {/* 10. Our Focus. Their Future. Section */}
                <FocusSection />
            </main>
        </div>
    )
}