import {
    HeroSection ,
    QuickQuoteSection,
    FeaturesIntroSection,
    FeaturesGridSection,
    FeatureShowcase,
    ModuleShowcase,
    ArticlesSection,
    FaqSection,
} from "@/components";
import AnimatedSection from "@/components/AnimatedSection";

const Features = () => (
    <>
        <AnimatedSection>
            <HeroSection />
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
            <QuickQuoteSection />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
            <FeaturesIntroSection />
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
            <FeaturesGridSection />
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
            <FeatureShowcase />
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
            <ModuleShowcase />
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
            <ArticlesSection />
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
            <FaqSection />
        </AnimatedSection>

    </>
);

export default Features;
