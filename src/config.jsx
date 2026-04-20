import React from 'react';
import { FaPhone, FaMapPin, FaCheckCircle } from "react-icons/fa";
import { 
    HiMail, 
    HiBriefcase, 
    HiUser, 
    HiShoppingCart, 
    HiDocumentText, 
    HiRefresh, 
    HiChartBar,
    HiSparkles,
    HiLightningBolt,
    HiDeviceMobile,
    HiSearch,
    HiChat,
    HiCurrencyDollar,
    HiSupport
} from "react-icons/hi";

export const config = {
    developer: {
        name: "Haries",
    },
    social: {
    },
    NAV_ITEMS: [
        { href: '#home', label: 'Home' },
        { href: '#services', label: 'Services' },
        { href: '#why-choose-me', label: 'Why Choose Me' },
        { href: '#demo-projects', label: 'Featured Projects' },
        { href: '#contact', label: 'Contact' }
    ],
    services: [
        {
            title: "Business Websites",
            description: "Professional, fast, and optimized websites that build trust and convert visitors into clients.",
            icon: <HiBriefcase className="w-8 h-8 text-blue-600" />
        },
        {
            title: "Portfolio Websites",
            description: "Stand out with a modern, premium online portfolio that highlights your best work and expertise.",
            icon: <HiUser className="w-8 h-8 text-blue-600" />
        },
        {
            title: "E-commerce Stores",
            description: "Secure, scalable, and beautifully designed online stores tailored to drive sales and growth.",
            icon: <HiShoppingCart className="w-8 h-8 text-blue-600" />
        },
        {
            title: "Landing Pages",
            description: "High-converting landing pages specifically crafted for your marketing campaigns and targeted leads.",
            icon: <HiDocumentText className="w-8 h-8 text-blue-600" />
        },
        {
            title: "Website Redesign",
            description: "Upgrade your outdated website with a modern aesthetic, better performance, and improved UX.",
            icon: <HiRefresh className="w-8 h-8 text-blue-600" />
        },
        {
            title: "SEO Optimization",
            description: "Drive organic traffic by improving your search rankings through proven on-page SEO strategies.",
            icon: <HiChartBar className="w-8 h-8 text-blue-600" />
        }
    ],
    whyChooseMe: [
        { title: "Premium Modern Design", icon: <HiSparkles className="w-6 h-6 text-blue-600" /> },
        { title: "Fast Delivery", icon: <HiLightningBolt className="w-6 h-6 text-blue-600" /> },
        { title: "Mobile Responsive", icon: <HiDeviceMobile className="w-6 h-6 text-blue-600" /> },
        { title: "SEO Optimized", icon: <HiSearch className="w-6 h-6 text-blue-600" /> },
        { title: "Clear Communication", icon: <HiChat className="w-6 h-6 text-blue-600" /> },
        { title: "Affordable Solutions", icon: <HiCurrencyDollar className="w-6 h-6 text-blue-600" /> },
        { title: "Support After Delivery", icon: <HiSupport className="w-6 h-6 text-blue-600" /> }
    ],
    demoProjects: [
        {
            title: "Nandyal Cafe",
            description: "An authentic vintage Irani Cafe website showcasing traditional flavors, menu exploration, and rich historic aesthetics.",
            image: "/projects/nandyal-cafe.png",
            demoLink: "https://nandyal-cafe.vercel.app/"
        },
        {
            title: "FitGenie",
            description: "A comprehensive gym fitness platform helping users with guided workouts, exercise technique demonstrations, calorie tracking, automated fitness planning, and an integrated AI fitness coach.",
            image: "/projects/fitgenie.png",
            demoLink: "https://fitgenie-x.vercel.app/"
        },
        {
            title: "Portfolio Website",
            description: "A premium, fully responsive personal portfolio designed to showcase projects, skills, and professional experience with high-end animations.",
            image: "/projects/portfolio.png",
            demoLink: "https://haries-portfolio.vercel.app/"
        },
        {
            title: "HabitTracker",
            description: "A premium dashboard designed for personal tracking. Built for speed, flawless user experience, and modern aesthetics.",
            image: "/projects/habittracker.png",
            demoLink: "https://habitflowx.vercel.app"
        }
    ],
    contactInfo: [
        {
            icon: <HiMail className="w-5 h-5 text-blue-600" />,
            label: "Email",
            value: "shaikharieshussain09@gmail.com",
            link: "mailto:shaikharieshussain09@gmail.com"
        },
        {
            icon: <FaPhone className="w-5 h-5 text-blue-600" />,
            label: "Mobile",
            value: "9391175096",
            link: "tel:9391175096"
        },
         {
            icon: <FaMapPin className="w-5 h-5 text-blue-600" />,
            label: "Location",
            value: "India",
            link: null
        }
    ]
};