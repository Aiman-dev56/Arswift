import { useEffect, useRef } from "react";
import { Typography } from "../ui/Typography";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
    scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}

export const ServicesHeading = ({ scrollContainerRef }: Props) => {
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        // ← safe guard, both must exist before running
        if (!headingRef.current || !scrollContainerRef?.current) return;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(max-width: 639px)", () => {
                gsap.set(headingRef.current, {
                    left: "50%", top: "50%",
                    xPercent: -50, yPercent: -50,
                    scale: 0.6, opacity: 0,
                    transformOrigin: "center center",
                });
                gsap.to(headingRef.current, {
                    opacity: 1, scale: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: scrollContainerRef.current,
                        start: "8% top", end: "18% top",
                        scrub: 1,
                    },
                });
                gsap.to(headingRef.current, {
                    top: "12%", yPercent: 0, scale: 0.75,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: scrollContainerRef.current,
                        start: "35% top", end: "45% top",
                        scrub: 1.5,
                    },
                });
            });

            mm.add("(min-width: 640px) and (max-width: 767px)", () => {
                gsap.set(headingRef.current, {
                    left: "50%", top: "50%",
                    xPercent: -50, yPercent: -50,
                    scale: 0.7, opacity: 0,
                    transformOrigin: "center center",
                });
                gsap.to(headingRef.current, {
                    opacity: 1, scale: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: scrollContainerRef.current,
                        start: "8% top", end: "18% top",
                        scrub: 1,
                    },
                });
                gsap.to(headingRef.current, {
                    top: "10%", yPercent: 0, scale: 0.8,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: scrollContainerRef.current,
                        start: "35% top", end: "45% top",
                        scrub: 1.5,
                    },
                });
            });

            mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
                gsap.set(headingRef.current, {
                    left: "50%", top: "50%",
                    xPercent: -50, yPercent: -50,
                    scale: 0.8, opacity: 0,
                    transformOrigin: "center center",
                });
                gsap.to(headingRef.current, {
                    opacity: 1, scale: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: scrollContainerRef.current,
                        start: "8% top", end: "18% top",
                        scrub: 1,
                    },
                });
                gsap.to(headingRef.current, {
                    top: "10%", yPercent: 0, scale: 0.85,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: scrollContainerRef.current,
                        start: "35% top", end: "45% top",
                        scrub: 1.5,
                    },
                });
            });

            mm.add("(min-width: 1024px) and (max-width: 1279px)", () => {
                gsap.set(headingRef.current, {
                    left: "50%", top: "50%",
                    xPercent: -50, yPercent: -50,
                    scale: 1, opacity: 0,
                    transformOrigin: "left center",
                });
                gsap.to(headingRef.current, {
                    opacity: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: scrollContainerRef.current,
                        start: "8% top", end: "18% top",
                        scrub: 1,
                    },
                });
                gsap.to(headingRef.current, {
                    left: "4%", xPercent: 0, yPercent: -50, scale: 0.65,
                    transformOrigin: "left center",
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: scrollContainerRef.current,
                        start: "35% top", end: "45% top",
                        scrub: 1.5,
                    },
                });
            });

            mm.add("(min-width: 1280px) and (max-width: 1535px)", () => {
                gsap.set(headingRef.current, {
                    left: "50%", top: "50%",
                    xPercent: -50, yPercent: -50,
                    scale: 1, opacity: 0,
                    transformOrigin: "left center",
                });
                gsap.to(headingRef.current, {
                    opacity: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: scrollContainerRef.current,
                        start: "8% top", end: "18% top",
                        scrub: 1,
                    },
                });
                gsap.to(headingRef.current, {
                    left: "5%", xPercent: 0, yPercent: -50, scale: 0.65,
                    transformOrigin: "left center",
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: scrollContainerRef.current,
                        start: "35% top", end: "45% top",
                        scrub: 1.5,
                    },
                });
            });

            mm.add("(min-width: 1536px)", () => {
                gsap.set(headingRef.current, {
                    left: "50%", top: "50%",
                    xPercent: -50, yPercent: -50,
                    scale: 1, opacity: 0,
                    transformOrigin: "left center",
                });
                gsap.to(headingRef.current, {
                    opacity: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: scrollContainerRef.current,
                        start: "8% top", end: "18% top",
                        scrub: 1,
                    },
                });
                gsap.to(headingRef.current, {
                    left: "6%", xPercent: 0, yPercent: -50, scale: 0.65,
                    transformOrigin: "left center",
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: scrollContainerRef.current,
                        start: "35% top", end: "45% top",
                        scrub: 1.5,
                    },
                });
            });

        });

        return () => ctx.revert();
    }, [scrollContainerRef]);

    return (
        <Typography
            ref={headingRef}
            variant="h1"
            className="gradient-text absolute z-10 whitespace-nowrap"
            style={{ opacity: 0 }}
        >
            Our Services
        </Typography>
    );
};