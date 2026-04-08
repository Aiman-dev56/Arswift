import { Typography } from "../ui/Typography";
import WordSwitcher from "../ui/WordSwitcher";

interface Props {
    progress: number;
    isLarge: boolean;
}

const fade = (progress: number, from: number, dur: number) =>
    Math.min(1, Math.max(0, (progress - from) / dur));
const lerp = (start: number, end: number, t: number) =>
    start + (end - start) * Math.min(1, Math.max(0, t));

export const ServicesText = ({ progress, isLarge }: Props) => {
    const phase3 = fade(progress, 0.35, 0.10);

    // Subtext 1
    const subtext1Opacity = fade(progress, 0.20, 0.10);
    const subtext1Translate = lerp(40, 0, subtext1Opacity);
    const subtext1FadeOut = Math.max(0, 1 - fade(progress, 0.35, 0.08));

    // Subtext 2
    const subtext2Opacity = fade(progress, 0.50, 0.10);
    const subtext2Translate = lerp(60, 0, subtext2Opacity);

    // Button
    const buttonOpacity = fade(progress, 0.65, 0.2);
    const buttonTranslate = lerp(30, 0, buttonOpacity);

    // Right services list
    const rightOpacity = Math.min(1, Math.max(0, (progress - 0.68) / 0.18));  // ← starts at 68% scroll, takes 18% to complete
    const rightTranslate = lerp(80, 0, rightOpacity);

    return (
        <>
            {/* Subtext 1 — "Driving innovation..." */}
            <p
                className="gradient-text absolute left-1/2 -translate-x-1/2 mt-10 text-center items-center max-w-lg text-lg sm:text-xl lg:text-2xl font-medium z-10"
                style={{
                    top: isLarge ? "60%" : "24%",
                    opacity: subtext1Opacity * subtext1FadeOut,
                    transform: `translateY(-50%) translateY(${subtext1Translate}px)`,
                }}
            >
                Driving innovation and improving lives
            </p>

            {/* Phase 4–6: two-column content */}
            {phase3 > 0.5 && (
                <div className={`
        flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-16
        ${isLarge ? "" : "items-center justify-center w-full"}
    `}>

                    {/* Left — tagline + button */}
                    <div className={`
            flex flex-col
            ${isLarge
                            ? "w-full px-8 max-w-sm lg:mx-0 lg:ml-18 md:ml-14 lg:pt-82 sm:pt-24 lg:pt-40"
                            : "items-center w-full px-6 pt-[22vh]"  // ← sits just below heading on mobile
                        }
        `}>
                        <Typography
                            variant="h4"
                            className="gradient-text w-full max-w-sm sm:max-w-md text-start items-start justify-start  leading-relaxed font-medium"
                            style={{
                                opacity: subtext2Opacity,
                                transform: `translateY(${subtext2Translate}px)`,
                                textAlign: isLarge ? "left" : "center",
                            }}
                        >
                            Redefining <WordSwitcher /> across global
                        </Typography>

                        <div
                            style={{
                                opacity: buttonOpacity,
                                transform: `translateY(${buttonTranslate}px)`,
                            }}
                        >
                            <button className="gradient-text mt-2 py-2 px-2 text-base sm:text-lg lg:text-xl">
                                Get In Touch
                            </button>
                        </div>
                    </div>

                    {/* Right — services list */}
                    <div
                        className={`
                flex w-full
                ${isLarge
                                ? "pt-2 sm:pt-16 md:pt-20 lg:pt-24"
                                : "justify-center pt-2"   // ← centered on mobile, less top spacing
                            }
            `}
                        style={{
                            opacity: rightOpacity,
                            transform: `translateY(${rightTranslate}px)`,
                        }}
                    >
                        <div className={`
                flex flex-col gap-2 sm:gap-8 lg:gap-4 px-4 sm:px-6 lg:px-4
                ${isLarge ? "" : "items-center text-center max-w-lg"}
            `}>

                            <div className="flex flex-col gap-2">
                                <Typography variant="h4" color="secondary">UI/UX Design</Typography>
                                <Typography variant="p" color="secondary" className="text-[14px]">
                                    Human-centric design that prioritizes user flow and aesthetic precision to make your software as beautiful as it is functional.
                                </Typography>
                                <button className={`text-[#E36903] uppercase text-base sm:text-lg lg:text-xl ${isLarge ? "text-left" : "text-center"}`}>
                                    Learn More
                                </button>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Typography variant="h4" color="secondary">Web Development</Typography>
                                <Typography variant="p" color="secondary" className="text-[14px]">
                                    We build high-performance, responsive websites using the latest frameworks to ensure your digital presence is fast, secure, and scalable.
                                </Typography>
                                <button className={`text-[#E36903] uppercase text-base sm:text-lg lg:text-xl ${isLarge ? "text-left" : "text-center"}`}>
                                    Learn More
                                </button>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Typography variant="h4" color="secondary">App Development</Typography>
                                <Typography variant="p" color="secondary" className="text-[14px]">
                                    From iOS to Android, we engineer native and cross-platform mobile experiences that provide seamless functionality and elite performance.
                                </Typography>
                                <button className={`text-[#E36903] uppercase text-base sm:text-lg lg:text-xl ${isLarge ? "text-left" : "text-center"}`}>
                                    Learn More
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            )}
        </>
    );
};