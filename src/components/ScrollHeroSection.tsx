import { useEffect, useRef, useState } from "react";
import SecondSec from "./SecondSec";
import { ServicesHeading } from "./services/ServiceHeading";
import { ServicesImages } from "./services/ServiceImage";
import { ServicesText } from "./services/Servicestext";

const ScrollHeroSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);
    const [isLarge, setIsLarge] = useState(false);

    useEffect(() => {
        const check = () => setIsLarge(window.innerWidth >= 1024);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionHeight = sectionRef.current.offsetHeight;
            const viewportHeight = window.innerHeight;
            if (rect.top > viewportHeight) { setProgress(0); return; }
            const raw = -rect.top / (sectionHeight - viewportHeight);
            setProgress(Math.max(0, Math.min(1, raw)));
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Services layer holds until 95%, then fades out
    const servicesFadeOut = Math.max(0, 1 - Math.min(1, Math.max(0, (progress - 0.95) / 0.03)));

    // Next section only appears after services fully gone (98%+)
    const nextSectionOpacity = Math.min(1, Math.max(0, (progress - 0.98) / 0.02));
    const nextSectionTranslate = 60 + (0 - 60) * Math.min(1, Math.max(0, (progress - 0.98) / 0.02));

    return (
        <div
            ref={sectionRef}
            className="lg:h-[900vh] md:h-[200vh] h-[700vh] 2xl:h-[1200vh] -mt-[100vh]"
            style={{ backgroundColor: "#CED4DA" }}
            id="services"
        >
            <div className="sticky top-0 h-screen overflow-hidden">

                {/* ── SERVICES LAYER ── */}
                <div
                    className="absolute inset-0 flex items-center"
                    style={{ opacity: servicesFadeOut }}
                >
                    <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 relative h-full">
                        <ServicesImages progress={progress} />
                        <ServicesHeading scrollContainerRef={sectionRef} />
                        <ServicesText scrollContainerRef={sectionRef} />
                    </div>
                </div>

                {/* ── NEXT SECTION LAYER ── */}
                <div
                    className="absolute bg-[#EFEFEF] inset-0 flex items-center justify-center"
                    style={{
                        opacity: nextSectionOpacity,
                        transform: `translateY(${nextSectionTranslate}px)`,
                        pointerEvents: nextSectionOpacity > 0.5 ? "auto" : "none",
                    }}
                >
                    <SecondSec />
                </div>

            </div>
        </div>
    );
};

export default ScrollHeroSection;