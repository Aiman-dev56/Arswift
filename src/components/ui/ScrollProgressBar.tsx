import { useState, useEffect } from "react";

export default function ScrollBarProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed lg:top-[80px] md:top-[80px] sm:top-[70px] top-[70px] bg-bg left-0 right-0 z-40 h-4 rounded-full">
            <div className="h-full transition-[width] rounded-r-full duration-150 ease-out"
                style={{
                    width: `${scrollProgress}%`,
                    backgroundColor: "#032C73"
                }}
            >

            </div>

        </div>
    )


}