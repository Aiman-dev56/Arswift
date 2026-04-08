import { Typography } from "../ui/Typography";

interface Props {
    progress: number;
    isLarge: boolean;
}

const fade = (progress: number, from: number, dur: number) =>
    Math.min(1, Math.max(0, (progress - from) / dur));
const lerp = (start: number, end: number, t: number) =>
    start + (end - start) * Math.min(1, Math.max(0, t));

export const ServicesHeading = ({ progress, isLarge }: Props) => {
    const phase1In = fade(progress, 0.08, 0.10);
    const phase3 = fade(progress, 0.35, 0.10);

    // Large screen: moves left and shrinks
    const headingLeft = lerp(50, 12, phase3);
    const headingScale = lerp(1, 0.65, phase3);
    const headingTranslateX = lerp(-50, 0, phase3);

    // Small screen: stays centered, zooms out
    const headingScaleMobile = lerp(1.6, 1, phase3);

    return (
        <Typography
            variant="h1"
            className="gradient-text absolute z-10 top-[20%] lg:top-[50%] "
            style={{
                opacity: phase1In,
                ...(isLarge
                    ? {
                        left: `${headingLeft}%`,
                        transform: `translateX(${headingTranslateX}%) translateY(-50%) scale(${headingScale})`,
                        transformOrigin: "left center",
                    }
                    : {
                        left: "50%",
                        transform: `translateX(-50%) translateY(-50%) scale(${headingScaleMobile})`,
                        transformOrigin: "center center",
                    }
                ),
            }}
        >
            Our Services
        </Typography>
    );
};