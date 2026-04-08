import { useEffect, useRef, useState } from "react";
import { Images } from "../assets/images";
import Button from "./ui/Button";
import { Typography } from "./ui/Typography";

export default function JoinUs() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
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

    // 0.0 → 0.5 — image slides from bottom (100vh) to center (0vh), fast
    const entryProgress = Math.min(1, progress / 0.5);
    const entryTranslateY = (1 - entryProgress) * 100;

    // 0.5 → 1.0 — image slides from center (0vh) upward (-100vh), fast
    const exitProgress = Math.max(0, (progress - 0.5) / 0.5);
    const exitTranslateY = -exitProgress * 100;

    // Combined: enters from bottom, immediately starts going up
    const translateY = entryTranslateY + exitTranslateY;

    // Fade out in the last portion (0.7 → 1.0)
    const imageOpacity = 1 - Math.max(0, (progress - 0.7) / 0.3);

    // Background fades in as image exits (0.7 → 1.0)
    const bgOpacity = Math.max(0, (progress - 0.7) / 0.3);

    return (
        <div ref={sectionRef} style={{ height: "200vh", marginTop: "-100vh" }}>

            <div className="sticky top-0 h-screen  overflow-hidden">

                {/* NEXT SECTION — sits behind at z-0 */}
                <div
                    className="absolute inset-0 z-0 bg-[#EFEFEF]  flex flex-col items-center text-center px-2 justify-center gap-6 lg:py-10 md:py-4"
                    style={{ opacity: bgOpacity }}
                >
                    <Typography variant="h2" color="secondary">
                        How We can Help You
                    </Typography>
                    <Typography variant="subtitle" color="secondary">
                        Are you ready to push boundaries and explore new frontiers of innovation?
                    </Typography>
                    <Button variant="secondary" size="lg">
                        LETS WORK TOGETHER
                    </Button>
                </div>

                {/* IMAGE — shoots in from bottom, travels upward and disappears */}
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        opacity: imageOpacity,
                        transform: `translateY(${translateY}vh)`,
                    }}
                >
                    <img
                        src={Images.Secgif}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <Typography variant="h1" color="primary">
                            Your next starts right here
                        </Typography>
                        <Button variant="outline" size="lg">
                            Join Us
                        </Button>
                    </div>
                </div>

            </div>

        </div>
    );
}