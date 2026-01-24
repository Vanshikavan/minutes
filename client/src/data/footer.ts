import type { IFooter } from "../types";

export const footerData: IFooter[] = [
    {
        title: "Quick Links",
        links: [
            { name: "Home", href: "#" },
            { name: "Create", href: "#support" },
            { name: "Gallery", href: "#pricing" },
            { name: "Pricing", href: "#affiliate" },
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", href: "#company" },
            { name: "Linkedin", href: "#blogs" },
            { name: "Instagram", href: "#community" },
            { name: "Github", href: "#careers" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", href: "#privacy" },
            { name: "Terms of Service", href: "#terms" },
            {name: "Commercial Use Policy", href:"#policy"}
        ]
    }
];