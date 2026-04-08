import { Images } from "../assets/images";
import { Typography } from "./ui/Typography";

const logos = [
    Images.Logo3,
    Images.Logo4,
    Images.Logo5,
    Images.Logo6,
    Images.Logo7,
];

export default function Logos() {
    return (
        <div className="bg-[#EFEFEF] w-full lg:py-8 md:py-2 overflow-hidden">

            {/* Heading */}
            <div className="flex justify-center items-center px-4 sm:px-8 pt-6 md:pt-4">
                <Typography
                    variant="h4"
                    color="secondary"
                    className="font-bold text-center max-w-[90%] sm:max-w-[600px] md:max-w-[700px] "
                >
                    We rethink business growth for you through our collective experience
                    with strategic partner ecosystem.
                </Typography>
            </div>

            {/* Scrolling Logos */}
            <div className="w-full flex items-center justify-center py-16">
                <div
                    className="overflow-hidden border-transparent border-border  backdrop-blur-sm px-2 py-4"
                    style={{
                        borderRadius: "50%",
                        maxWidth: "1000px",
                        width: "100%",
                    }}
                >
                    <div className="flex animate-[scroll_20s_linear_infinite] w-max gap-10 items-center">
                        {[...logos, ...logos].map((logo, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 flex items-center justify-center "
                            >
                                <span className="text-muted-foreground font-semibold text-sm whitespace-nowrap tracking-wide uppercase">
                                    <img src={logo} alt="logo" className="w-26" />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
            </div>

        </div>
    );
}