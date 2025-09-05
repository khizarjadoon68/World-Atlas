import footerContact from "../../API/FooterAPI.json";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";



const iconComponents = {
    FaLocationDot,
    FaPhone,
    FaEnvelope,
};

const Footer = () => {
    return (
        <div className="bg-neutral-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-around items-center py-8 gap-8">
                    {footerContact.map((curData) => {
                        const { icon, title, details } = curData;

                        const Icon = iconComponents[icon];

                        return (
                            <div className="flex items-center gap-4" key={title}>
                                <div className="text-3xl text-blue-400">
                                    {Icon ? <Icon /> : <FaLocationDot />}
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-bold">{title}</p>
                                    <p className="text-sm text-neutral-300">{details}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="flex justify-center items-center h-20 border-t border-neutral-700">
                    <p>Copyright © 2025 Khizar Ali. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
