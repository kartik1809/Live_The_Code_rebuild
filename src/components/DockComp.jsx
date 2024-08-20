'use client'
import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconBrandLinkedin,
    IconBrandInstagram,
    IconBrandYoutube,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
    const links = [
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/company/codechefadgitm/mycompany/",
        },
        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://x.com/CAdgitm",
        },
        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.instagram.com/geeksforgeeks_adgips/",
        },
        {
            title: "Youtube",
            icon: (
                <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.youtube.com/@CodeChefADGITMChapter",
        },
        
    ];
    return (
        <div className="flex h-[5rem]">
            <FloatingDock
                mobileClassName="translate-y-20" 
                items={links}
            />
        </div>
    );
}
