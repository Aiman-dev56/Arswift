import { Images } from "../assets/images";
import { Typography } from "./ui/Typography";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        if (!email) {
            toast.error("Please Enter Your Email");
            return;
        }
        if (!email.includes("@")) {
            toast.error("Email must contain @");
            return;
        }
        if (!email.includes(".")) {
            toast.error("Email must contain .");
            return;
        }

        toast.success("Thank you for subscribing!");
        setEmail("");
    }



    return (
        <footer className="bg-[#CED4DA] h-auto relative  overflow-visible"
            id="contact"
        >

            <style>{`
        @keyframes pulse-fade {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .pulse-a { animation: pulse-fade 6s infinite; }
        .pulse-b { animation: pulse-fade 6s infinite 2s; }
      `}</style>

            {/* 🔥 BACKGROUND IMAGES*/}
            <div className="absolute inset-0 z-0 pointer-events-none">

                {/* LEFT IMAGE */}
                <div className="pulse-a absolute left-0 top-0 flex items-start justify-start">
                    <img
                        src={Images.Vector3}
                        className="h-60 -mt-30"
                    />
                </div>

                {/* RIGHT IMAGE */}
                <div className="pulse-b absolute right-0 bottom-130 flex items-end justify-end">
                    <img
                        src={Images.Vector2}
                        className="w-100 lg:mt-60"
                    />
                </div>

            </div>

            {/* ✅ CONTENT */}
            <div className="relative z-10 py-20">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 px-18 gap-10 ">

                    <div className="lg:w-120 w-full space-y-4">
                        <Typography variant="h3" color="secondary">Services</Typography>
                        <ul className="group relative">
                            <li className="text-[18px] font-[400] font-heading mb-2">Digital</li>

                            {/* Nested links */}
                            <Typography variant="li" color="secondary" className="list-disc px-6">
                                <li>Digital Consulting & Strategy</li>
                                <li>Digital Commerce</li>
                                <li>Business Applications</li>
                            </Typography>
                        </ul>
                        <ul className="group relative">
                            <li className="text-[18px] font-[400] font-heading mb-2">Data & Analytics</li>

                            {/* Nested links */}
                            <Typography variant="li" color="secondary" className="list-disc px-6">
                                <li>Data Modernaization</li>
                                <li>Advanced Analytics</li>
                                <li>Generative AI</li>
                                <li>Data Management</li>
                            </Typography>
                        </ul>

                        <ul className="group relative mt-16">
                            <li className="text-[18px] font-[400] font-heading mb-2">Cloud:</li>

                            {/* Nested links */}
                            <Typography variant="li" color="secondary" className="list-disc px-6">
                                <li>Cloud Operations & Migrations</li>
                                <li>Cloud App Development</li>
                                <li>Managed Services</li>

                            </Typography>
                        </ul>

                        <ul className="group relative">
                            <li className="text-[18px] font-[400] font-heading mb-2">Specialized Services:</li>

                            {/* Nested links */}
                            <Typography variant="li" color="secondary" className="list-disc px-6">
                                <li>Digital InfraStructure</li>
                                <li>Cyber Security</li>
                                <li>Emerging Technologies</li>
                                <li>Business Process Services</li>
                            </Typography>
                        </ul>
                    </div>



                    <div className=" space-y-4">
                        <Typography variant="h3" color="secondary">Industries</Typography>
                        <ul className="group relative">
                            <Typography variant="li" color="secondary">
                                <li>Communications</li>
                                <li>Banking & Financial Services</li>
                                <li>Public Sector</li>
                                <li>Health</li>
                                <li>Retail</li>

                            </Typography>
                        </ul>
                    </div>


                    <div className=" space-y-4">
                        <Typography variant="h3" color="secondary">Insights</Typography>
                        <ul className="group relative">
                            <Typography variant="li" color="secondary">
                                <li>Case Studies</li>
                                <li>Newsroom</li>
                                <li>Whitepapers / E-books</li>
                                <li>Blogs</li>
                            </Typography>
                        </ul>
                    </div>
                    <div className=" space-y-4">
                        <Typography variant="h3" color="secondary">Quick Links</Typography>
                        <ul className="group relative">
                            <Typography variant="li" color="secondary">
                                <li>Who We Are</li>
                                <li>Careers</li>
                                <li>Our Leadership</li>
                                <li>Investor Relations</li>
                                <li>Financial Reports</li>
                            </Typography>
                        </ul>



                    </div>

                </div>
            </div>
            <div className="w-full flex justify-center lg:justify-end px-20 lg:-mt-80 py-20">
                <div className="flex flex-col gap-4 w-full max-w-md text-left">

                    <Typography variant="h3" color="secondary">
                        Subscribe
                    </Typography>

                    <Typography variant="p" color="secondary">
                        Stay updated on how the future of technology is shaping
                    </Typography>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            required
                            className="w-full h-10 border border-gray-300 bg-[#EDEDED] rounded-md px-3"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button
                            onClick={handleSubscribe}
                            className="h-10 px-4 font-heading text-secondary bg-[#EDEDED] rounded-md hover:opacity-80 transition">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-auto bg-[#D9D9D9] flex flex-col md:flex-row items-center justify-between px-6 md:px-18 py-4 gap-2 border border-gray-600 w-full">

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Typography variant="li" color="secondary">Privacy Policy</Typography>
                    <Typography variant="li" color="secondary">Terms and conditions</Typography>
                    <Typography variant="li" color="secondary">Sitemap</Typography>
                    <Typography variant="li" color="secondary">Cookie Policy</Typography>
                </div>

                <Typography variant="li" color="secondary">
                    © {new Date().getFullYear()} All Rights Reserved
                </Typography>

            </div>

        </footer>
    );
}