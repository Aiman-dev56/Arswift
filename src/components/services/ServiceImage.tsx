import { Images } from "../../assets/images";

interface Props {
    progress: number;
}

const fade = (progress: number, from: number, dur: number) =>
    Math.min(1, Math.max(0, (progress - from) / dur));

export const ServicesImages = ({ progress }: Props) => {
    const phase1In = fade(progress, 0.08, 0.10);
    const imagesOpacity = Math.max(0, 1 - fade(progress, 0.35, 0.08));
    const combinedOpacity = imagesOpacity * phase1In;

    return (
        <>
            {/* Left images */}
            <div
                className="absolute left-0 lg:left-4 lg:top-[60%] md:top-[30%] top-[50%] -translate-y-1/2 flex flex-col gap-8 z-0"
                style={{ opacity: combinedOpacity }}
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
                className="absolute right-0 lg:right-0 lg:top-[60%] md:top-[30%] top-[50%] -translate-y-1/2 flex flex-col gap-8 z-0"
                style={{ opacity: combinedOpacity }}
            >
                <div className="w-28 h-36 sm:w-36 sm:h-44 lg:w-48 lg:h-56 rotate-[-15deg] bg-muted overflow-hidden">
                    <img src={Images.services2} alt="Coding" className="w-full h-full object-cover" />
                </div>
                <div className="w-28 h-36 sm:w-36 sm:h-44 lg:w-48 lg:h-40 rotate-[-7.05deg] bg-muted overflow-hidden">
                    <img src={Images.services4} alt="Workspace" className="w-full h-full object-cover" />
                </div>
            </div>
        </>
    );
};