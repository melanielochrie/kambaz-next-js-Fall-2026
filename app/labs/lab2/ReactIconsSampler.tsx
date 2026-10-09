import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock, FaHome, FaHeart, FaStar } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { BsCalendarEvent } from "react-icons/bs";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdOutlineSchool } from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi2";



export default function ReactIconsSampler() {
    return (
        <div id="wd-react-icons-sampler" className="mb-4 font-sans">
            <h2 className="text-lg font-semibold">React Icons Sampler</h2>
            <div className="flex gap-3 text-3xl">
                <VscAccount />
                <AiOutlineDashboard />
                <FaBookBible />
                <FaCalendar />
                <FaEnvelopeOpenText />
                <FaRegClock />
                <FaHome />
                <FaHeart />
                <FaStar />
                <BsCalendarEvent className="text-blue-500 text-3xl" />
                <HiOutlineAcademicCap className="text-purple-500 text-3xl" />
                <MdOutlineSchool className="text-4xl text-blue-600" />
                <HiOutlineBookOpen className="text-4xl text-blue-600" />
            </div>
        </div>
    );
}