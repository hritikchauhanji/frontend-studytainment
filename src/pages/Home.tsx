import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ApproachSection } from "@/sections/Approach/ApproachSection";
import { ChallengesSection } from "@/sections/Challenges/ChallengesSection";
import { CommunitySection } from "@/sections/Community/CommunitySection";
import { CTASection } from "@/sections/CTA/CTASection";
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

            {/* Responsive Sticky Navbar */}
            <Navbar />

            {/* Main Content Area */}
            <main className="flex-grow">

                {/* Hero Section */}
                <HeroSection />

                {/* Ecosystem Section / What is Studytainment? */}
                <EcosystemSection />

                {/* Challenges Section */}
                <ChallengesSection />

                {/* Studytainment Approach Section */}
                <ApproachSection />

                {/* Learning Ecosystem / Product Solutions */}
                <LearningSolutionsSection />

                {/* Own Pace Academy Timeline Section */}
                <OwnPaceSection />

                {/* Digital Experience / App Preview Section */}
                <DigitalExperienceSection />

                {/* Our Focus. Their Future. Section */}
                <FocusSection />

                {/* Community Section */}
                <CommunitySection />

                {/* Closing CTA Section */}
                <CTASection />
            </main>

            {/* Complete Responsive Footer */}
            <Footer />
        </div>
    )
}