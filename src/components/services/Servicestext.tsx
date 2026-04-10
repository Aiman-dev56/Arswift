import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Typography } from "../ui/Typography";
import WordSwitcher from "../ui/WordSwitcher";

gsap.registerPlugin(ScrollTrigger);

interface Props {
    scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}

export const ServicesText = ({ scrollContainerRef }: Props) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const subtext1Ref = useRef<HTMLParagraphElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);
    const serviceItemsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        if (!scrollContainerRef?.current) return;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            // ── LARGE SCREENS ──
            mm.add("(min-width: 1024px)", () => {

                // Subtext fades in early, holds, then fades out
                gsap.fromTo(subtext1Ref.current,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1, y: 0,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: scrollContainerRef.current,
                            scroller: window,
                            start: "10% bottom",
                            end: "25% bottom",
                            scrub: 1,
                        },
                    }
                );
                gsap.to(subtext1Ref.current, {
                    opacity: 0, y: -20,
                    ease: "power2.in",
                    scrollTrigger: {
                        trigger: scrollContainerRef.current,
                        scroller: window,
                        start: "28% bottom",
                        end: "38% bottom",
                        scrub: 3,
                    },
                });

                // Left col fades in
                gsap.fromTo(leftColRef.current,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1, y: 0,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: scrollContainerRef.current,
                            scroller: window,
                            start: "60% bottom",
                            end: "72% bottom",
                            scrub: 1,
                        },
                    }
                );

                // Button fades in
                gsap.fromTo(buttonRef.current,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1, y: 0,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: scrollContainerRef.current,
                            scroller: window,
                            start: "64% bottom",
                            end: "74% bottom",
                            scrub: 1,
                        },
                    }
                );

                // Service items stagger in
                serviceItemsRef.current.forEach((item, i) => {
                    gsap.fromTo(item,
                        { opacity: 0, y: 60 },
                        {
                            opacity: 1, y: 0,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: scrollContainerRef.current,
                                scroller: window,
                                start: `${70 + i * 10}% bottom`,
                                end: `${98 + i * 10}% bottom`,
                                scrub: 1,
                            },
                        }
                    );
                });
            });

            // ── MD 768px–1023px ──
            mm.add("(min-width: 768px) and (max-width: 1023px)", () => {

                gsap.fromTo(subtext1Ref.current,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1, y: 0,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: scrollContainerRef.current,
                            scroller: window,
                            start: "8% bottom",
                            end: "28% bottom",
                            scrub: 1,
                        },
                    }
                );
                gsap.to(subtext1Ref.current, {
                    opacity: 0, y: -20,
                    scrollTrigger: {
                        trigger: scrollContainerRef.current,
                        scroller: window,
                        start: "42% bottom",
                        end: "58% bottom",
                        scrub: 1,
                    },
                });

                gsap.fromTo(leftColRef.current,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1, y: 0,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: scrollContainerRef.current,
                            scroller: window,
                            start: "58% bottom",
                            end: "68% bottom",
                            scrub: 1,
                        },
                    }
                );

                gsap.fromTo(buttonRef.current,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1, y: 0,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: scrollContainerRef.current,
                            scroller: window,
                            start: "58% bottom",
                            end: "68% bottom",
                            scrub: 1,
                        },
                    }
                );

                serviceItemsRef.current.forEach((item, i) => {
                    gsap.fromTo(item,
                        { opacity: 0, y: 50 },
                        {
                            opacity: 1, y: 0,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: scrollContainerRef.current,
                                scroller: window,
                                start: `${60 + i * 10}% bottom`,
                                end: `${85 + i * 10}% bottom`,
                                scrub: 1,
                            },
                        }
                    );
                });
            });

            // ── MOBILE < 768px ──
            mm.add("(max-width: 767px)", () => {

                gsap.fromTo(subtext1Ref.current,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1, y: 0,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: scrollContainerRef.current,
                            scroller: window,
                            start: "8% bottom",
                            end: "18% bottom",
                            scrub: 1,
                        },
                    }
                );
                gsap.to(subtext1Ref.current, {
                    opacity: 0, y: -20,
                    scrollTrigger: {
                        trigger: scrollContainerRef.current,
                        scroller: window,
                        start: "28% bottom",
                        end: "38% bottom",
                        scrub: 1,
                    },
                });

                gsap.fromTo(leftColRef.current,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1, y: 0,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: scrollContainerRef.current,
                            scroller: window,
                            start: "60% bottom",
                            end: "72% bottom",
                            scrub: 1,
                        },
                    }
                );

                gsap.fromTo(buttonRef.current,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1, y: 0,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: scrollContainerRef.current,
                            scroller: window,
                            start: "60% bottom",
                            end: "70% bottom",
                            scrub: 1,
                        },
                    }
                );

                serviceItemsRef.current.forEach((item, i) => {
                    gsap.fromTo(item,
                        { opacity: 0, y: 40 },
                        {
                            opacity: 1, y: 0,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: scrollContainerRef.current,
                                scroller: window,
                                start: `${68 + i * 10}% bottom`,
                                end: `${78 + i * 10}% bottom`,
                                scrub: 1,
                            },
                        }
                    );
                });
            });
        });

        return () => ctx.revert();
    }, [scrollContainerRef]);

    const services = [
        {
            title: "UI/UX Design",
            description:
                "Human-centric design that prioritizes user flow and aesthetic precision to make your software as beautiful as it is functional.",
        },
        {
            title: "Web Development",
            description:
                "We build high-performance, responsive websites using the latest frameworks to ensure your digital presence is fast, secure, and scalable.",
        },
        {
            title: "App Development",
            description:
                "From iOS to Android, we engineer native and cross-platform mobile experiences that provide seamless functionality and elite performance.",
        },
    ];

    return (
        <div ref={wrapperRef} className="absolute inset-0 w-full h-full">

            <p
                ref={subtext1Ref}
                className="
                    absolute left-1/2 z-10
                    text-center
                    text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
                    font-medium text-gray-700
                    max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
                    px-4 opacity-0 lg:top-[64%] top-[58%]
                "
                style={{
                    transform: "translateX(-50%) translateY(-50%)",
                }}
            >
                Driving innovation and improving lives
            </p>

            <div className="absolute inset-0 w-full h-full flex flex-col lg:flex-row  ">

                {/* LEFT COL */}
                <div
                    ref={leftColRef}
                    className="
                        flex flex-col opacity-0 flex-shrink-0
                        items-center text-center
                        lg:items-start lg:text-left
                        w-full lg:w-full xl:w-[50%] 2xl:w-[50%]
                        pt-[36%] sm:pt-[58%] md:pt-[25%]
                        lg:pt-[14%] 2xl:pt-[26%] lg:justify-center
                        px-6 sm:px-8
                        lg:pl-[5%] lg:pr-8
                        2xl:pl-[8%]
                    "
                >
                    <Typography
                        variant="h4"
                        className="
                            gradient-text leading-relaxed font-medium
                            text-center lg:text-left
                            max-w-[240px] sm:max-w-[280px] lg:max-w-[300px] 2xl:max-w-[500px]
                        "
                    >
                        Redefining <WordSwitcher /> across global
                    </Typography>

                    <button
                        ref={buttonRef}
                        className="
                            gradient-text opacity-0
                            mt-2 sm:mt-4 lg:mt-5
                            py-2 px-0
                            text-sm sm:text-base lg:text-2xl 2xl:text-4xl
                        "
                    >
                        Get In Touch
                    </button>
                </div>

                {/* RIGHT COL */}
                <div
                    ref={rightColRef}
                    className="
                        flex flex-1 w-full
                        justify-center lg:justify-start
                        items-center lg:items-center
                        pt-2 sm:pt-4 md:pt-0 lg:pt-0 2xl:pt-20
                        px-4 sm:px-6 lg:px-4 2xl:px:8
                    "
                >
                    <div
                        className="
                            flex flex-col
                            gap-5 gap-8 sm:gap-8 md:gap-10 lg:gap-4 xl:gap-2 2xl:gap-10
                            w-full
                            max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full
                            items-center text-center
                            lg:items-start lg:text-left
                        "
                    >
                        {services.map((service, i) => (
                            <div
                                key={service.title}
                                ref={(el) => { if (el) serviceItemsRef.current[i] = el; }}
                                className="flex flex-col gap-1 sm:gap-2 opacity-0 w-full"
                            >
                                <h4
                                    className="
                                        text-gray-800 font-semibold
                                        text-base sm:text-lg md:text-2xl lg:text-xl xl:text-3xl
                                        text-center lg:text-left
                                    "
                                >
                                    {service.title}
                                </h4>
                                <p
                                    className="
                                        text-gray-600 leading-relaxed
                                        text-xs sm:text-sm md:text-lg lg:text-base xl:text-lg 2xl:text-xl
                                        text-center lg:text-left
                                        max-w-[280px] sm:max-w-sm md:max-w-lg lg:max-w-md xl:max-w-lg
                                        mx-auto lg:mx-0
                                    "
                                >
                                    {service.description}
                                </p>
                                <button
                                    className="
                                        text-[#E36903] uppercase font-medium tracking-wide
                                        text-xs sm:text-sm md:text-lg lg:text-base xl:text-lg 2xl:text-xl
                                        mt-1
                                        text-center lg:text-left
                                        hover:opacity-70 transition-opacity
                                        w-fit mx-auto lg:mx-0
                                    "
                                >
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};