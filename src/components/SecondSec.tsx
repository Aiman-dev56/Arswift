import { Images } from "../assets/images";
import { Typography } from "./ui/Typography";

export default function SecondSec() {

    const stats = [
        { number: "48+", text: "Years of continual excellence" },
        { number: "7700+", text: "Change makers driving revolution" },
        { number: "16+", text: "Countries with our presence and clientele" },
        { number: "300+", text: "Active clients across the globe" },
    ];

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-20 px-4 sm:px-8 md:px-12 lg:px-20 lg:py-12 md:py-8"
            id="about">

            {/* LEFT — text content */}
            <div className="flex flex-col justify-center gap-4 w-full lg:w-1/2 text-center lg:text-left">
                <Typography
                    variant="h2"
                    color="secondary"
                    className="max-w-full lg:max-w-[360px] mx-auto lg:mx-0"
                >
                    Translating technology into a positive impact
                </Typography>
                <Typography
                    variant="p"
                    color="secondary"
                    className="max-w-full lg:max-w-[500px] mx-auto lg:mx-0"
                >
                    Our approach allows us to deliver exceptional experiences that drive
                    growth and success for all stakeholders. Let's rise to new heights
                    with the power of digital transformation.
                </Typography>
                <button className="flex items-center justify-center lg:justify-start uppercase text-base sm:text-lg md:text-xl text-[#032C73] px-2 py-4">
                    Get In Touch
                </button>
            </div>

            {/* RIGHT — stats over vector image */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[560px]">

                    {/* Background Vector */}
                    <img
                        src={Images.Vector}
                        alt="background"
                        className="w-full h-auto object-contain"
                    />

                    {/* Stats Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-y-4 gap-x-6 sm:gap-y-6 sm:gap-x-10 md:gap-y-8 md:gap-x-16 p-4 sm:p-8 md:p-10">
                            {stats.map((item, index) => (
                                <div key={index}>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black">
                                        {item.number}
                                    </h2>
                                    <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base max-w-[120px] sm:max-w-[160px] md:max-w-[200px] leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}