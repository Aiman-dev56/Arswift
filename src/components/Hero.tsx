import { useState, useEffect, useCallback } from "react";
import { Images } from "../assets/images";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./ui/Button";
import { Typography } from "./ui/Typography";


const Slides = [
    {
        id: 1,
        image: Images.HeroGif,
        title: "We reimagine tomorrow",
        description: "Driving growth and molding the future through transformative change",
        button: "Get In Touch"

    },
    {
        id: 2,
        image: Images.HeroGif2,
        title: "Innovation at the edge of reality",
        description: "Engineering high-velocity digital solutions that redefine possibilities.",
        button: "Learn More"
    }
];

const AUTOPLAY_INTERVAL = 5000;


export default function Hero() {


    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    const next = useCallback(() => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % Slides.length);
    }, []);

    const prev = useCallback(() => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + Slides.length) % Slides.length);
    }, []);

    const imageVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? "100%" : "-100%",
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (dir: number) => ({
            x: dir > 0 ? "-100%" : "100%",
            opacity: 0
        }),
    };

    const slide = Slides[current];

    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, AUTOPLAY_INTERVAL);

        return () => clearInterval(interval);
    }, [next]);

    return (
        <section id="hero" className="relative lg:min-h-screen  min-h-[70vh] md:min-h-[60vh] flex items-center overflow-hidden">

            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={current}
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                    className=" absolute inset-0 w-full h-full">
                    <img
                        src={slide.image}
                        className="w-full h-full object-cover absolute inset-0 z-0"
                        height={1117}
                        width={1920}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/60 to-[#414040]/60  z-10" />
                </motion.div>

            </AnimatePresence>

            <div className="relative z-20 pt-24 lg:max-w-8xl lg:ml-30 md:ml-24 ml-18 w-full">
                <div >
                    <AnimatePresence mode="wait" >
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Typography variant="h1" color="primary" className="lg:max-w-8xl lg:w-180 md:w-140  w-60">{slide.title}</Typography>
                            <Typography variant="h4" className="lg:w-full md:w-160 w-70" >{slide.description}</Typography>
                            <Button variant="primary" size="md" className="mt-4">{slide.button} </Button>

                        </motion.div>

                    </AnimatePresence>

                </div>
            </div>

            {/* Prev / Next buttons */}
            <button
                onClick={prev}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-[51px] h-[101px] flex items-center justify-center text-primary  transition-colors"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-[51px] h-[101px]" />
            </button>
            <button
                onClick={next}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-[51px] h-[101px] flex items-center justify-center text-primary  transition-colors"
                aria-label="Next slide"
            >
                <ChevronRight className="w-[51px] h-[101px]" />
            </button>



        </section >
    )
}