import { useEffect, useRef, useState } from "react";
import { Images } from "../assets/images";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaArrowDownLong } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "./ui/Button";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const heroHeightRef = useRef<number>(window.innerHeight);

    useEffect(() => {
        const hero = document.getElementById("hero");

        // ResizeObserver watches the hero element directly
        // fires on mount AND whenever its size changes (resize, reflow, etc.)
        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                heroHeightRef.current = entry.contentRect.height;
                // Re-evaluate scrolled state immediately after height update
                setScrolled(window.scrollY > heroHeightRef.current - 80);
            }
        });

        if (hero) {
            resizeObserver.observe(hero);
        } else {
            // Fallback if hero element not found
            heroHeightRef.current = window.innerHeight;
        }

        const handleScroll = () => {
            setScrolled(window.scrollY > heroHeightRef.current - 80);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        // Initial check
        handleScroll();

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-sm border-b border-gray-100" : "bg-transparent"
                }`}
        >
            <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 h-[68px] md:h-[80px] flex items-center justify-between">

                {/* LOGO */}
                <a href="/" className="flex-shrink-0">
                    <img
                        src={scrolled ? Images.Logo2 : Images.Logo}
                        className="h-[36px] w-auto sm:h-[44px] md:h-[56px] lg:h-[70px]"
                    />
                </a>

                {/* NAV — hidden on mobile */}
                <nav
                    className={`hidden lg:flex items-center gap-6 lg:gap-8 text-sm lg:text-base ${scrolled ? "text-secondary" : "text-primary"
                        }`}
                >
                    {["Home", "About", "Services", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="flex items-center gap-1 transition-colors hover:opacity-70"
                        >
                            {item} <IoIosArrowDown className="mt-0.5" />
                        </a>
                    ))}
                    {scrolled && (
                        <Button variant="danger" size="sm">
                            Get In Touch
                        </Button>
                    )}
                </nav>

                {/* RIGHT ICONS */}
                <div
                    className={`hidden md:flex gap-2 items-center ${scrolled ? "text-secondary" : "text-primary"
                        }`}
                >
                    <button className="p-3 lg:p-4 border-l border-r border-primary bg-gray-300/20">
                        <IoIosSearch size={20} />
                    </button>
                    <div className="flex gap-2 items-center px-2">
                        <AiOutlineGlobal size={20} />
                        <FaArrowDownLong size={16} />
                    </div>
                </div>

                {/* HAMBURGER */}
                <button
                    className={`lg:hidden p-2 ${scrolled ? "text-secondary" : "text-primary"
                        }`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
                </button>
            </div>

            {/* BOTTOM BORDER */}
            <div className="border-b w-full border-primary" />

            {/* MOBILE DROPDOWN MENU */}
            {menuOpen && (
                <div
                    className={`lg:hidden flex flex-col px-6 py-4 gap-4 text-sm ${scrolled ? "bg-white text-secondary" : "bg-black/60 text-primary"
                        }`}
                >
                    {["Home", "About", "Services", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="flex items-center gap-1 py-2 border-b border-gray-200/30"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item} <IoIosArrowDown className="mt-0.5" />
                        </a>
                    ))}
                    <div className="flex flex-col gap-3 pt-2">
                        <div className="flex items-center gap-4">
                            <button><IoIosSearch size={20} /></button>
                            <AiOutlineGlobal size={20} />
                        </div>
                        <Button variant="danger" size="sm">Get In Touch</Button>
                    </div>
                </div>
            )}
        </header>
    );
}