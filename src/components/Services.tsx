import { useEffect, useRef, useState } from "react";
import { Images } from "../assets/images";
import { Typography } from "./ui/Typography";
import WordSwitcher from "./ui/WordSwitcher";
import SecondSec from "./SecondSec";

const ScrollHeroSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionHeight = sectionRef.current.offsetHeight;
            const viewportHeight = window.innerHeight;
            const raw = -rect.top / (sectionHeight - viewportHeight);
            setProgress(Math.max(0, Math.min(1, raw)));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const lerp = (start: number, end: number, t: number) =>
        start + (end - start) * Math.min(1, Math.max(0, t));
    const fade = (from: number, dur: number) =>
        Math.min(1, Math.max(0, (progress - from) / dur));

    // Phase 1
    const phase1In = fade(0.08, 0.10);

    // Phase 2
    const subtext1Opacity = fade(0.20, 0.10);
    const subtext1Translate = lerp(40, 0, subtext1Opacity);

    // Phase 3
    const phase3 = fade(0.35, 0.10);
    const imagesOpacity = Math.max(0, 1 - fade(0.35, 0.08));
    const subtext1FadeOut = Math.max(0, 1 - fade(0.35, 0.08));

    const headingLeft = lerp(50, 12, phase3);
    const headingScale = lerp(1, 0.65, phase3);
    const headingTranslateX = lerp(-50, 0, phase3);

    // Phase 4
    const subtext2Opacity = fade(0.50, 0.10);
    const subtext2Translate = lerp(60, 0, subtext2Opacity);

    // Phase 5
    const buttonOpacity = fade(0.65, 0.2);
    const buttonTranslate = lerp(30, 0, buttonOpacity);

    // Phase 6
    const rightOpacity = Math.min(1, Math.max(0, (buttonOpacity - 0.6) / .04));
    const rightTranslate = lerp(50, 0, rightOpacity);

    // Phase 7: services fade OUT
    const servicesFadeOut = Math.max(0, 1 - fade(0.82, 0.08));

    // Phase 8: next section fades IN
    const nextSectionOpacity = fade(0.86, 0.10);
    const nextSectionTranslate = lerp(40, 0, nextSectionOpacity);

    return (
        // ✅ sectionRef goes HERE — this is the tall scrollable container
        <div
            ref={sectionRef} className="lg:h-[600vh] md:h-[200vh] h-[600vh]"
            style={{ backgroundColor: "#CED4DA" }}
        >
            {/* ✅ sticky goes HERE — child of the tall container */}
            <div className="sticky top-0 h-screen overflow-hidden">

                {/* ── SERVICES LAYER ── */}
                <div
                    className="absolute inset-0 flex items-center"
                    style={{ opacity: servicesFadeOut }}
                >
                    <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 relative h-full">

                        {/* Left images */}
                        <div
                            className="absolute left-0 lg:left-4 lg:top-1/2 md:top-[30%] top-[40%] -translate-y-1/2 flex flex-col gap-8 z-0"
                            style={{ opacity: imagesOpacity * phase1In }}
                        >
                            <div className="w-28 h-36 sm:w-36 sm:h-44 lg:w-40 lg:h-48 rotate-[9deg] bg-muted overflow-hidden">
                                <img src={Images.services1} alt="Technology" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-28 h-36 sm:w-36 sm:h-44 lg:w-48 lg:h-56 rotate-[8deg] bg-muted overflow-hidden">
                                <img src={Images.services3} alt="Circuit" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Right images */}
                        <div
                            className="absolute right-0 lg:right-0 lg:top-1/2 md:top-[30%] top-[40%] -translate-y-1/2 flex flex-col gap-8 z-0"
                            style={{ opacity: imagesOpacity * phase1In }}
                        >
                            <div className="w-28 h-36 sm:w-36 sm:h-44 lg:w-48 lg:h-56 rotate-[-15deg] bg-muted overflow-hidden">
                                <img src={Images.services2} alt="Coding" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-28 h-36 sm:w-36 sm:h-44 lg:w-48 lg:h-40 rotate-[-7.05deg] bg-muted overflow-hidden">
                                <img src={Images.services4} alt="Workspace" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Heading */}
                        <Typography
                            variant="h1"
                            className="gradient-text absolute z-10 lg:top-[50%] md:top-[20%] top-[40%]"
                            style={{
                                opacity: phase1In,
                                left: `${headingLeft}%`,
                                transform: `translateX(${headingTranslateX}%) translateY(-50%) scale(${headingScale})`,
                                transformOrigin: "left center",
                            }}
                        >
                            Our Services
                        </Typography>

                        {/* Subtext 1 */}
                        <p
                            className="gradient-text lg:top-[60%] md:top-[20%] top-[40%] absolute left-1/2 -translate-x-1/2 mt-10 text-center max-w-lg text-lg sm:text-xl lg:text-2xl font-medium z-10"
                            style={{
                                opacity: subtext1Opacity * subtext1FadeOut,
                                transform: `translateY(${subtext1Translate}px)`,

                            }}
                        >
                            Driving innovation and improving lives
                        </p>

                        {/* Phase 4-6 content */}
                        {phase3 > 0.5 && (
                            <div className="flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-16">

                                {/* Left */}
                                <div className="flex flex-col w-full px-6 max-w-md mx-auto lg:mx-0 lg:ml-18 pt-92 md:pt-70 md:ml-14 lg:pt-82  sm:pt-24 lg:pt-40">

                                    <Typography
                                        variant="h4"
                                        className="gradient-text w-full max-w-sm sm:max-w-md leading-relaxed font-medium "
                                        style={{
                                            opacity: subtext2Opacity,
                                            transform: `translateY(${subtext2Translate}px)`,
                                        }}
                                    >
                                        Redefining <WordSwitcher /> <br /> across global
                                    </Typography>

                                    <div
                                        style={{
                                            opacity: buttonOpacity,
                                            transform: `translateY(${buttonTranslate}px)`,
                                        }}
                                    >
                                        <button className="gradient-text mt-4 py-3 px-2 text-base sm:text-lg lg:text-xl">
                                            Get In Touch
                                        </button>
                                    </div>
                                </div>

                                {/* Right */}
                                <div
                                    className="flex w-full pt-16 sm:pt-16 md:pt-20 lg:pt-24"
                                    style={{
                                        opacity: rightOpacity,
                                        transform: `translateY(${rightTranslate}px)`,
                                    }}
                                >
                                    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8">

                                        <div className="flex flex-col gap-2">
                                            <Typography variant="h4" color="secondary">
                                                UI/UX Design
                                            </Typography>
                                            <Typography variant="p" color="secondary">
                                                Human-centric design that prioritizes user flow and aesthetic precision to make your software as beautiful as it is functional.
                                            </Typography>
                                            <button className="text-[#E36903] uppercase text-base sm:text-lg lg:text-xl text-left">
                                                Learn More
                                            </button>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <Typography variant="h4" color="secondary">
                                                Web Development
                                            </Typography>
                                            <Typography variant="p" color="secondary">
                                                We build high-performance, responsive websites using the latest frameworks to ensure your digital presence is fast, secure, and scalable.
                                            </Typography>
                                            <button className="text-[#E36903] uppercase text-base sm:text-lg lg:text-xl text-left">
                                                Learn More
                                            </button>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <Typography variant="h4" color="secondary">
                                                App Development
                                            </Typography>
                                            <Typography variant="p" color="secondary">
                                                From iOS to Android, we engineer native and cross-platform mobile experiences that provide seamless functionality and elite performance.
                                            </Typography>
                                            <button className="text-[#E36903] uppercase text-base sm:text-lg lg:text-xl text-left">
                                                Learn More
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        )}
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
        </div >
    );
};

export default ScrollHeroSection;